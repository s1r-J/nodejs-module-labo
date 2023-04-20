#!/bin/bash
pwd
if [ -e ./aws-sdk-version-v3-all.zip ]; then
    rm ./aws-sdk-version-v3-all.zip
fi
if [ -e ./index.js ]; then
    rm ./index.js
fi

cp ./index-v3.js ./index.js
zip -r ./aws-sdk-version-v3-all.zip ./node_modules index.js package.json package-lock.json

rm ./index.js
