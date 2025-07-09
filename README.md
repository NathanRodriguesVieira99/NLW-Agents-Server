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
- **Biome** - Linter e formatter (configurado com Ultracite)
- **drizzle-seed** - Para popular o banco com dados iniciais

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

O projeto utiliza **PostgreSQL** com a extensão **pgVector** para operações com vetores. O Docker Compose está pré-configurado para desenvolvimento local.

#### Schema do Banco

O banco possui duas tabelas principais:

- **rooms**: Salas onde as perguntas são organizadas

  - `id`: UUID (chave primária)
  - `name`: Nome da sala
  - `description`: Descrição da sala (opcional)
  - `created_at`: Data de criação

- **questions**: Perguntas vinculadas às salas
  - `id`: UUID (chave primária)
  - `room_id`: UUID (chave estrangeira para rooms)
  - `question`: Texto da pergunta
  - `answer`: Resposta (opcional)
  - `created_at`: Data de criação

### Estrutura do Projeto

```text
src/
├── app.ts              # Configuração do Fastify
├── server.ts           # Entry point
├── config/env/         # Configurações de ambiente
│   └── env.ts          # Validação de variáveis de ambiente com Zod
├── db/                 # Database layer
│   ├── connection.ts   # Conexão com DB
│   ├── seed.ts         # Seeds
│   ├── migrations/     # Migrações SQL
│   └── schema/         # Schemas Drizzle
│       ├── index.ts    # Exportações centralizadas
│       ├── rooms.ts    # Schema da tabela rooms
│       └── questions.ts # Schema da tabela questions
└── http/routes/        # Rotas da API
    ├── rooms/          # Rotas relacionadas às salas
    │   ├── index.ts    # Registro das rotas
    │   ├── create-room.ts
    │   ├── get-rooms.ts
    │   └── get-room-questions.ts
    └── questions/      # Rotas relacionadas às perguntas
        ├── index.ts    # Registro das rotas
        └── create-questions.ts
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

## 🌐 API Endpoints

### Health Check

- `GET /health` - Verifica se o servidor está funcionando

### Rooms (Salas)

- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:roomId/questions` - Lista perguntas de uma sala específica

### Questions (Perguntas)

- `POST /rooms/:roomId/questions` - Cria uma nova pergunta em uma sala

## 📋 Validação de Dados

O projeto utiliza **Zod** para validação de dados em todos os endpoints da API. Isso garante:

- **Type Safety** - Validação automática de tipos
- **Runtime Validation** - Verificação em tempo de execução
- **Documentação Automática** - Schemas servem como documentação
- **Integração com Fastify** - Validação automática de request/response

## 🧪 Testando a API

### Usando o arquivo client.http

O projeto inclui um arquivo `client.http` com exemplos de requisições. Para usar:

1. Instale a extensão **REST Client** no VS Code
2. Abra o arquivo `client.http`
3. Clique em "Send Request" acima de cada requisição

### Exemplos de Uso

#### Criar uma sala

```http
POST http://localhost:3333/rooms
Content-Type: application/json

{
  "name": "Minha Sala",
  "description": "Descrição da sala"
}
```

#### Listar salas

```http
GET http://localhost:3333/rooms
```

#### Criar uma pergunta

```http
POST http://localhost:3333/rooms/{roomId}/questions
Content-Type: application/json

{
  "question": "Como crio um servidor em node?"
}
```
