#!/usr/bin/env bash

if [[ `git status --porcelain` ]];
then
  echo "Commit your changes before publishing"
  exit 1
fi

source ./.env.sh

npm install
npm run webpack:prod
npm run builder:publish
