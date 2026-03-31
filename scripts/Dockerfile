# ── 构建阶段 ──────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=8196"

# 安装 pnpm 并设置国内镜像
RUN npm install -g pnpm && \
  pnpm config set registry https://registry.npmmirror.com

# 先复制依赖文件，充分利用 Docker 层缓存
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 再复制源码并构建
COPY . .
RUN pnpm run build:prod


# ── 运行阶段 ──────────────────────────────────────────────
FROM nginx:1.27-alpine

# 复制构建产物
COPY --from=builder /app/dist /home/www/dist

# 复制 nginx 配置
COPY scripts/nginx.conf /etc/nginx/nginx.conf

# 复制 SSL 证书
COPY scripts/certs/ /etc/nginx/certs/

# 暴露端口
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
