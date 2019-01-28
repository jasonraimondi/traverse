#!/usr/bin/env bash

set -e

if [[ `git status --porcelain` ]];
then
  echo "Commit your changes before publishing"
  exit 1
fi

if [ ! -f ./.env.sh ]; then
    echo ".env.sh not found"
    exit 1
fi

rm -rf coverage/ dist/ dist-build/

source ./.env.sh

npm install
npm run clean
npm run test
npm run webpack:prod
npm run electron:publish
