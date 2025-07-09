# NLW Agents

Este projeto foi desenvolvido durante um evento da **Rocketseat**, utilizando tecnologias modernas para construir uma API robusta e escalável.

## 🛠️ Tecnologias Utilizadas

### Core Technologies

- **Node.js** com TypeScript (experimental strip-types)
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** com extensão pgVector
- **Drizzle ORM** - Type-safe database toolkit

### Principais Bibliotecas

- **Zod** - Schema validation
- **fastify-type-provider-zod** - Integração Fastify + Zod
- **@fastify/cors** - CORS support
- **postgres** - PostgreSQL driver
- **Biome** - Linter e formatter

### DevTools

- **drizzle-kit** - Database migrations e studio
- **Docker Compose** - Containerização do banco
- **Husky** + **lint-staged** - Git hooks
- **pnpm** - Package manager

## 🏗️ Padrões de Projeto

- **Clean Architecture** - Separação de responsabilidades
- **Type Safety** - TypeScript em todo o projeto
- **Schema Validation** - Validação de dados com Zod
- **Database Migrations** - Controle de versão do banco
- **Environment Configuration** - Configuração centralizada

## 🚀 Setup e Configuração

### Pré-requisitos

- Node.js 20+
- pnpm
- Docker e Docker Compose

### Instalação

1. **Clone o repositório e instale as dependências:**

```bash
pnpm install
```

2. **Configure o ambiente:**
   Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:

   ```env
   DATABASE_URL=sua_url_de_conexao_postgresql
   ```

3. **Inicie o banco de dados:**

```bash
pnpm docker:up
```

4. **Execute as migrações:**

```bash
pnpm drizzle:migrate
```

5. **Popule o banco:**

```bash
pnpm drizzle:seed
```

### Scripts Disponíveis

- `pnpm dev` - Inicia o servidor em modo desenvolvimento com watch
- `pnpm start` - Inicia o servidor em modo produção
- `pnpm docker:up` - Inicia o banco PostgreSQL via Docker
- `pnpm docker:stop` - Para o banco Docker
- `pnpm drizzle:generate` - Gera migrações do banco
- `pnpm drizzle:migrate` - Executa migrações
- `pnpm drizzle:studio` - Abre o Drizzle Studio (GUI do banco)
- `pnpm drizzle:seed` - Executa seeds do banco

### Banco de Dados

O projeto utiliza PostgreSQL com a extensão **pgVector** para operações com vetores. O Docker Compose está pré-configurado para desenvolvimento local.

### Estrutura do Projeto

```text
src/
├── app.ts              # Configuração do Fastify
├── server.ts           # Entry point
├── config/env/         # Configurações de ambiente
├── db/                 # Database layer
│   ├── connection.ts   # Conexão com DB
│   ├── seed.ts         # Seeds
│   ├── migrations/     # Migrações SQL
│   └── schema/         # Schemas Drizzle
└── http/routes/        # Rotas da API
```

## 🔧 Desenvolvimento

O projeto está configurado com:

- **Hot reload** durante desenvolvimento
- **Type checking** automático
- **Linting** com Biome
- **Git hooks** para qualidade de código

Para acessar o Drizzle Studio e visualizar os dados:

```bash
pnpm drizzle:studio
```
