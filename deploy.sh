git checkout . 
git pull --rebase
yarn
yarn build
rm -rf build
mv dist build
