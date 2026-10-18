# 🏥 MedConnect - Frontend

Interface web do ecossistema **MedConnect**, voltada para gestão e visualização de serviços de saúde, busca de clínicas, avaliações e agendamentos.

---

## 🚀 Tecnologias Utilizadas

- **[React](https://react.dev/)**
- **[React Router DOM](https://reactrouter.com/)** (Roteamento de páginas)
- **[CSS Modules](https://github.com/css-modules/css-modules)** (Estilização modularizada)
- **[Axios](https://axios-http.com/)** (Consumo da API REST)
- **[Node.js](https://nodejs.org/)** & **npm**

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (v18 ou superior)
- **[Git](https://git-scm.com/)**
- Gerenciador de pacotes **npm** (incluso com Node) ou **yarn**

---

## ⚙️ Instalação e Configuração

### 1. Clonar o repositório

```bash
git clone https://github.com/medconnectprojetointegrativo/medconnect-frontend.git
cd medconnect-frontend
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (ou duplique o `.env.example`, se houver):

```bash
cp .env.example .env
```

Defina a URL base da API do backend no arquivo `.env`:

```env
# Exemplo para ambiente local (ajuste a porta conforme o backend)
VITE_API_BASE_URL=http://localhost:3000
# ou caso o projeto utilize Create React App:
# REACT_APP_API_BASE_URL=http://localhost:3000
```

### 3. Instalar dependências

```bash
npm install
```

---

## 🖥️ Executando a Aplicação

### Ambiente de Desenvolvimento

Para iniciar o servidor local de desenvolvimento com hot-reload:

```bash
npm run dev
# ou npm start (se o projeto usar Create React App)
```

A aplicação estará acessível por padrão em `http://localhost:5173` (Vite) ou `http://localhost:3000` (CRA).

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` / `npm start` | Inicia o servidor local de desenvolvimento |
| `npm run build` | Gera a build de produção otimizada na pasta `dist/` ou `build/` |
| `npm run preview` | Executa localmente o bundle final gerado para validação pré-deploy |
| `npm run lint` | Executa a verificação estática de código |

---

## 📁 Estrutura do Projeto

```text
src/
├── assets/          # Imagens, ícones e fontes estáticas
├── components/      # Componentes reutilizáveis (SearchBar, LocationDisplayer, etc.)
├── mocks/           # Dados mockados para testes e desenvolvimento offline
├── routes/          # Definição e configuração de rotas (routesPaths.js)
├── services/        # Integração e chamadas à API backend (Axios)
├── templates/       # Estruturas padrão de páginas (MainPageTemplate, etc.)
├── views/ / pages/  # Telas e views da aplicação (SearchLocationsPage, etc.)
├── App.jsx          # Componente raiz da aplicação
└── main.jsx         # Ponto de entrada do React (ReactDOM.render)
```

---

## 🤝 Fluxo de Contribuição (Git Flow)

Este repositório possui a branch `main` protegida. Todos os envios devem ser feitos via **Pull Request**:

1. Crie uma branch a partir da `main`:
   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```
2. Realize as alterações e commite de forma descritiva:
   ```bash
   git commit -m "feat: adiciona componente de avaliações de clínicas"
   ```
3. Envie sua branch para o repositório remoto:
   ```bash
   git push -u origin feature/nome-da-sua-feature
   ```
4. Abra um **Pull Request (PR)** no GitHub apontando para a branch `main` e aguarde a revisão.