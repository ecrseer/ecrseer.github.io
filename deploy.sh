#!/usr/bin/env sh
 
git add . 
git commit -m 'dply'
git checkout gh-pages
rm -rf *
git merge main
# build
npm run build

mv dist .dist
rm -rf *
mv .dist/* .


# navigate into the build output directory
cd dist



git add .
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
 git push  origin main
 