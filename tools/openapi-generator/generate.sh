openapi-generator-cli generate \
    -i http://nestjs:3001/api-json \
    --generator-name typescript-axios \
    -o /local/out \
    --package-name backendApi \
    --additional-properties=useSingleRequestParameter=true