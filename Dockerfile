# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copia apenas dependências primeiro (melhor cache)
COPY package.json package-lock.json* ./

RUN npm ci

# Copia o restante do projeto
COPY . .

# Build de produção
RUN npm run build

# ---------- Stage 2: Runtime ----------
FROM nginx:alpine

# Remove config padrão
RUN rm -rf /usr/share/nginx/html/*

# Copia build gerado
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opcional) Copiar config customizada
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
