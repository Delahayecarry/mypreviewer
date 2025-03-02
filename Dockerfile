# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源代码，但忽略 .env 文件
COPY . .
RUN rm -f .env

# 使用 ARG 在构建时传入环境变量
ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

# 添加调试信息
RUN echo "Listing root directory:"
RUN ls -la /app
RUN echo "Listing public directory:"
RUN ls -la /app/public
RUN echo "Checking if image files exist:"
RUN ls -la /app/public/YOLOv8s.png || echo "YOLOv8s.png not found"
RUN ls -la /app/public/MyBlog.png || echo "MyBlog.png not found"

# 构建应用
RUN echo "Starting build..." && npm run build || (echo "Build failed" && npm run build --verbose)

# 生产阶段
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 生产环境中使用运行时环境变量
ENV RESEND_API_KEY=""

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "server.js"] 