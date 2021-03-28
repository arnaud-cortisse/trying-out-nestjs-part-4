#!/bin/bash
cd "$(dirname "$0")"

SOURCE_FOLDER="../tools/openapi-generator/.build"
DEST_FOLDER="../packages/react-app/src/api/generated"

rm -rf $DEST_FOLDER
mkdir -p $DEST_FOLDER
cp $SOURCE_FOLDER/**.ts $DEST_FOLDER