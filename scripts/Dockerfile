# ── 构建阶段 ──────────────────────────────────────────────
FROM 111.231.44.42:30002/library/node:v20 AS builder

WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=8196"

# 设置 pnpm 国内镜像（基础镜像已内置 pnpm）
RUN pnpm config set registry https://registry.npmmirror.com

# 先复制依赖文件，充分利用 Docker 层缓存
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --shamefully-hoist

# 再复制源码并构建
COPY . .
RUN pnpm run build:prod


# ── 运行阶段 ──────────────────────────────────────────────
FROM 111.231.44.42:30002/library/nginx:base

# 复制构建产物
COPY --from=builder /app/dist /home/www/dist

# 复制 nginx 配置
COPY scripts/nginx.conf /etc/nginx/nginx.conf

# 复制 SSL 证书
COPY scripts/certs/ /etc/nginx/certs/

# 暴露端口
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
