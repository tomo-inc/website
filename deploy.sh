git checkout . 
git clean -df
rm -rf node_modules
git checkout v3
git pull --rebase
yarn
yarn build
rm -rf build
mv dist build
