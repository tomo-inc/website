git checkout . 
git clean -df
git pull --rebase
yarn
yarn build
rm -rf build
mv dist build
