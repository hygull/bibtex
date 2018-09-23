/*
	Created at: 23 Sep 2018, Sun
*/

const bibtex = require("../index");

const bib = new bibtex()

const bibTeXTemplateForArticle = bib.getBibTeXTemplateFor('manual', 1)

console.log(bibTeXTemplateForArticle)