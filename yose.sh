#!/bin/sh

clear
tree . -I node_modules --noreport
echo
echo "GIT STATUS:"
git status -s
echo
echo "TESTS:"
jasmine-node .

