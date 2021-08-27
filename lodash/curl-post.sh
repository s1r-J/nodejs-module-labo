#!/bin/sh
curl -X POST -H "Content-Type: application/json" -d '{"array": [1,2,3]}' localhost:3000/array
