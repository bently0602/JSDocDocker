#!/bin/sh

docker system prune -f

docker build -t cipherzero/jsdocdocker .
