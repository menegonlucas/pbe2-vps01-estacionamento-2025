# 🌟 Contextualização  

O **ESTACIONAMENTO ACME** tem atuado em nossa cidade com **excelente atendimento e segurança**. Como nosso cliente, ele necessita de um **sistema Web** para registro dos estacionamentos diários.  

O **Product Owner (P.O.)**, após uma visita ao cliente, elaborou o **DER** e o **Diagrama de Classes (UML DC)** a seguir e definiu os **requisitos funcionais**.  

📌 **Diagrama DER e UML DC:**  
![DER e DC](./docs/der-dc.png)

---

# 🎯 Desafio  

Desenvolver as funcionalidades conforme os requisitos estabelecidos.  

## 🔹 Requisitos Funcionais  

### 🚗 **[RF001] CRUD de Veículos**  
✅ O sistema deve permitir o cadastro, leitura, atualização e exclusão de veículos.  
- **[RF001.1]** Os campos **cor** e **ano** não são obrigatórios e podem ser **nulos**.  
- **[RF001.2]** A rota **readOne** do **veículo** deve exibir os dados de um veículo específico e suas respectivas **estadias**.  

### 🏁 **[RF002] CRUD de Estadias**  
✅ O sistema deve permitir o cadastro, leitura, atualização e exclusão de estadias.  
- **[RF002.1]** O sistema deve associar a estadia a um **veículo**.  
- **[RF002.2]** Ao cadastrar uma nova estadia (**create**), a **data e hora de entrada** deve ser gerada pelo Banco de Dados:  
  ```sql
  DEFAULT(NOW())
  ```
- **[RF002.3]** No momento da criação (**create**), o campo **saída** pode ser **nulo ("?")**, pois será preenchido na rota **update** quando o veículo sair do estacionamento.  
- **[RF002.4]** No momento da criação (**create**), o campo **valorTotal** deve ser **nulo ("?")**, pois será calculado na rota **update** quando o veículo sair do estacionamento.  
- **[RF002.5]** Se, ao realizar um **update**, o campo **saída** for preenchido, o sistema deve calcular o **valorTotal** com a seguinte fórmula:  

  ```text
  valorTotal = valorHora * (saída - entrada)
  ```

---

# 🛠 Testes pelo Insomnia  

### 🚙 **[CT001] Cadastro de Veículos**  
✔ **Deve ser cadastrado pelo menos 5 veículos.**  
- **[CT001.1]** Pelo menos **dois veículos** devem ter **ano** e **cor** cadastrados.  

### 🔄 **[CT002] Manipulação de Veículos**  
✔ **Cadastrar, alterar e excluir um veículo.**  

### 🅿 **[CT003] Cadastro de Estadias**  
✔ **Cadastrar uma estadia para cada veículo.**  
- **[CT003.1]** Pelo menos **dois veículos** devem ter **duas ou mais estadias** cadastradas.  

### 🔧 **[CT004] Manipulação de Estadias**  
✔ **Cadastrar, alterar e excluir uma estadia.**  

### 💰 **[CT005] Cálculo do Valor Total**  
✔ **Alterar pelo menos duas estadias preenchendo a saída e verificando se calcula o valorTotal corretamente.**  

---
## Tecnologias
As seguintes tecnologias foram utilizadas no desenvolvimento deste projeto:

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para criação de APIs REST.
- **Prisma ORM**: ORM para interação com o banco de dados.
- **MySQL**: Banco de dados relacional utilizado no projeto.
- **Insomnia**: Ferramenta para testar as rotas da API.
- **Cors**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

---

## Como eu fiz para que funcionasse?
  - Em resumo, usei códigos anteriores do Back-End fazendo as alterações principais, bem como utilizei códigos e instruções anteriores para o uso do Prisma e o funcionamento do projeto.
  - Por favor, não desconsiderar meu esforço e minha conquista pq deu certo. obrigado!
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2. Instalar as Dependências
Certifique-se de que o Node.js e o npm estão instalados no sistema.

3. Configurar o Banco de Dados
Crie um banco de dados MySQL.
Configure o arquivo .env com a URL de conexão ao banco de dados.

4. Configurar o Prisma
Gere o cliente Prisma:
Aplique as migrações para criar as tabelas no banco de dados.

5. Executar o Servidor
Para iniciar o servidor em modo de desenvolvimento.

6. Testar as Rotas
Utilize o Insomnia.

