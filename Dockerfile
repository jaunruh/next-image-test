FROM node:19-buster
WORKDIR /app
COPY /app ./app
COPY /content ./content
COPY /pages ./pages
COPY /public ./public
COPY /next.config.js ./next.config.js
COPY /package.json ./package.json
COPY /postcss.config.js ./postcss.config.js
COPY /tailwind.config.js ./tailwind.config.js
COPY /tsconfig.json ./tsconfig.json

RUN apt update && apt install cpio -y

RUN npm install
RUN npm run build

RUN find ./content -type f ! -name '*.yaml' -delete

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]


