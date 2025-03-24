FROM node:18
RUN mkdir -p /app
COPY . /app
# 设置工作目录
WORKDIR /app

RUN yarn
RUN yarn run build
RUN npm install pm2 -g 
ENTRYPOINT ["pm2-runtime", "/app/start.sh"]