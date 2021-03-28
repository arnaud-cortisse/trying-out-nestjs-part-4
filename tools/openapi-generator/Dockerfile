FROM timbru31/java-node:jdk-14
RUN npm install @openapitools/openapi-generator-cli -g
RUN mkdir /local
WORKDIR /local
COPY . .
CMD ["sh", "generate.sh"]