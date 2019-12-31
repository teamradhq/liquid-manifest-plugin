#!/usr/bin/env bash
# This script will check code, build asset and create a new tag

# Display error message and exit with error
function throw {
  printf "\n>>>ERROR<<<\n"
  printf "$1\n"
  exit 1
}


TAG="$1"
MESSAGE="$2"

if [ -z "$TAG" ]
then
  throw "Please provde a version number for this release\n\n"
fi

if [ -z "$MESSAGE" ]
then
  throw "Please provide a message for this release\n\n"
fi

echo "Preparing $TAG release"

yarn jest || {
  throw "Please fix failed tests before proceeding\n\n"
}

yarn lint || {
  throw "Please fix linter errors before proceeding\n\n"
}

echo "All tests passed!!!"
echo "Building distribution asset"

yarn build || {
  throw "Something went wrong with asset build\n\n"
}

git add build
