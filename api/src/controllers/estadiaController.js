const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async create(req, res) {
        const { placa, valorHora } = req.body;

        try {
            const estadia = await prisma.estadia.create({
                data: { automovelPlaca: placa, valorHora },
            });
            return res.status(201).json(estadia);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async readAll(req, res) {
        try {
            const estadias = await prisma.estadia.findMany();
            return res.status(200).json(estadias);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async readOne(req, res) {
        const { id } = req.params;

        try {
            const estadia = await prisma.estadia.findUnique({
                where: { id: parseInt(id) },
                include: { automovel: true },
            });

            if (!estadia) {
                return res.status(404).json({ error: 'Estadia não encontrada' });
            }

            return res.status(200).json(estadia);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { saida } = req.body;

        try {
            const estadia = await prisma.estadia.findUnique({ where: { id: parseInt(id) } });

            if (!estadia) {
                return res.status(404).json({ error: 'Estadia não encontrada' });
            }

            const entrada = new Date(estadia.entrada);
            const saidaDate = new Date(saida);
            const horas = Math.abs(saidaDate - entrada) / 36e5; // Diferença em horas
            const valorTotal = horas * estadia.valorHora;

            const updatedEstadia = await prisma.estadia.update({
                where: { id: parseInt(id) },
                data: { saida: saidaDate, valorTotal },
            });

            return res.status(200).json(updatedEstadia);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delete(req, res) {
        const { id } = req.params;

        try {
            await prisma.estadia.delete({ where: { id: parseInt(id) } });
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
};