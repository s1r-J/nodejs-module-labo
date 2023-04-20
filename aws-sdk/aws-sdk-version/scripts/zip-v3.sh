#!/bin/bash
pwd
if [ -e ./aws-sdk-version-v3.zip ]; then
    rm ./aws-sdk-version-v3.zip
fi
if [ -e ./index.js ]; then
    rm ./index.js
fi

cp ./index-v3.js ./index.js
zip -r ./aws-sdk-version-v3.zip ./node_modules index.js package.json package-lock.json -x "./node_modules/aws-sdk/*"

rm ./index.js
