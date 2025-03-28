const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async create(req, res) {
        const { placa, proprietario, tipo, modelo, marca, cor, ano, telefone } = req.body;

        try {
            const automovel = await prisma.automovel.create({
                data: { placa, proprietario, tipo, modelo, marca, cor, ano, telefone },
            });
            return res.status(201).json(automovel);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async readAll(req, res) {
        try {
            const automoveis = await prisma.automovel.findMany();
            return res.status(200).json(automoveis);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async readOne(req, res) {
        const { placa } = req.params;

        try {
            const automovel = await prisma.automovel.findUnique({
                where: { placa },
                include: { estadias: true },
            });

            if (!automovel) {
                return res.status(404).json({ error: 'Automóvel não encontrado' });
            }

            return res.status(200).json(automovel);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async update(req, res) {
        const { placa } = req.params;
        const { proprietario, tipo, modelo, marca, cor, ano, telefone } = req.body;

        try {
            const automovel = await prisma.automovel.update({
                where: { placa },
                data: { proprietario, tipo, modelo, marca, cor, ano, telefone },
            });

            return res.status(200).json(automovel);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delete(req, res) {
        const { placa } = req.params;

        try {
            await prisma.automovel.delete({ where: { placa } });
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
};