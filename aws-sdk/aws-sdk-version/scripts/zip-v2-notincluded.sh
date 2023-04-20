#!/bin/bash
pwd
if [ -e ./aws-sdk-version-v2-notincluded.zip ]; then
    rm ./aws-sdk-version-v2-notincluded.zip
fi
if [ -e ./index.js ]; then
    rm ./index.js
fi

cp ./index-v2.js ./index.js
zip -r ./aws-sdk-version-v2-notincluded.zip ./node_modules index.js package.json package-lock.json -x "./node_modules/aws-sdk/*"

rm ./index.js
