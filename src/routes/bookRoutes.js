
const express = require('express');

const router = express.Router();

const books = [
  {
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "subtitle": "A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "published": "2014-12-14T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 472
  },
  {
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "subtitle": "A JavaScript and jQuery Developer's Guide",
    "author": "Addy Osmani",
    "published": "2012-07-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 254,
  },
  {
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "subtitle": "An In-Depth Guide for Programmers",
    "author": "Axel Rauschmayer",
    "published": "2014-02-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 460,

  },
  {
    "isbn": "9781491950296",
    "title": "Programming JavaScript Applications",
    "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
    "author": "Eric Elliott",
    "published": "2014-07-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 254,

  },
  {
    "isbn": "9781593277574",
    "title": "Understanding ECMAScript 6",
    "subtitle": "The Definitive Guide for JavaScript Developers",
    "author": "Nicholas C. Zakas",
    "published": "2016-09-03T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 352,

  },
  {
    "isbn": "9781491904244",
    "title": "You Don't Know JS",
    "subtitle": "ES6 & Beyond",
    "author": "Kyle Simpson",
    "published": "2015-12-27T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 278,

  },
  {
    "isbn": "9781449325862",
    "title": "Git Pocket Guide",
    "subtitle": "A Working Introduction",
    "author": "Richard E. Silverman",
    "published": "2013-08-02T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 234,

  }
];

router.route('/books')
  .get((req, res) => {
    res.render('books',
      {
        title: 'My Library',
        nav: [
          { link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }
        ],
        books
      });
  });

router.route('/id')
  .get((req, res) => {
    res.send('hello single book');
  });

module.exports = router;
