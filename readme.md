

# pagedjs

# parser markdown
http://showdownjs.com/

# commandes

npm install

## dev
npm run watch-ts
npm run watch-node

## prod
npm run build-ts
npm run start

# url
localhost:3000

# structure
## prod
dist --
    public --
        css --
            book.css
        js --
            paged.js
        images
    index.html
    *.js

sources --
    cover.md
    introduction.md
    chapitres --
        *.md

src --
    *.ts