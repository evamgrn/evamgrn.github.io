#!/bin/zsh
# Compila la web y la publica en GitHub Pages (rama gh-pages de evamgrn/evamgrn.github.io)
set -e
cd "$(dirname "$0")"
npx astro build
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="Eva Melagrani" -c user.email="eva@teamvaxor.es" commit -q -m "Publicar web $(date '+%d/%m/%Y %H:%M')

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push -q -f https://github.com/evamgrn/evamgrn.github.io.git gh-pages
rm -rf .git
echo "Publicada. GitHub tarda 1-2 minutos en mostrar los cambios."
