#!/usr/bin/env bash

set -e

if [[ `git status --porcelain` ]];
then
  echo "Commit your changes before publishing"
  exit 1
fi

rm -rf coverage/ dist/ dist-build/

npm install
npm run clean
npm run test
npm run webpack:prod
npm run electron:publish
