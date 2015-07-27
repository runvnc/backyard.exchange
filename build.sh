#!/bin/bash
babel --stage 1 --optional runtime -d lib src
cp -R src/web/* lib/web
# node lib/makeweb.js
