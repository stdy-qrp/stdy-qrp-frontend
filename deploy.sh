#!/bin/sh
npm run build
rm -rf ../stdy-qrp-backend/build
cp -r build ../stdy-qrp-backend/
