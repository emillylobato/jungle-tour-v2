# Jungle Tour v2
(Projeto web-02)

**Objetivo:** evoluir o protótipo visual (v1) para uma aplicação funcional, utilizando: **React (frontend)**, **Node.js + Express (backend)** e **MySQL (banco de dados)**.  

Foco em dois perfis de uso: **cliente** (explorar, comentar, avaliar) e **fornecedor** (cadastrar estabelecimento e combos).

---

## Stack
- Frontend: React (Vite), React Router
- Backend: Node.js, Express, Sequelize
- Banco de Dados: MySQL
- Controle de versão: Git + GitHub

## Estrutura (monorepo)

---

## Pré-requisitos
- **Node.js 18+**
- **MySQL** (com um schema criado, ex.: `jungle_tour`)
- Configurar variáveis de ambiente no backend (`apps/backend/.env`),
---

## como rodar
Na raiz do projeto:

```bash
# instalar dependências do front e back
npm --prefix apps/frontend install
npm --prefix apps/backend install

# rodar front + back juntos
npm run dev

Frontend: http://localhost:5173
Backend (health): http://localhost:3001/health
