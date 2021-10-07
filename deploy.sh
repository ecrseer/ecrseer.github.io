#!/usr/bin/env sh
 
git add . 
git commit -m 'dply'
git push origin main
yarn build
mv dist ../dist
git checkout gh-pages

cp -r ../dist/* .


git add . 
git commit -m 'dply'
git push origin gh-pages
git checkout main