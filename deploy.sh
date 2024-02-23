#!/usr/bin/env bash
set -e
yarn build
cd docs/.vuepress/dist

# git config --global user.email "jinyubrave@163.com"
# git config --global user.name "jinyubrave@163.com"
git init
git add -A
git commit -m 'deploy'
# git push -f https://${ACCESS_TOKEN}@github.com/xia0hj/xia0hj.github.io.git master:gh-pages
 git remote add origin https://github.com/jinxiongxiong/blog.git 


cd -
 
#  git remote add origin https://github.com/jinxiongxiong/blog.git 
#  git push --set-upstream origin main

# git push -f https://github.com/jinxiongxiong/blog.git 
 
