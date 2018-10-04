/*
	Coded on: 4 Oct 2018, Thu
*/

const bibtex = require("../index");

const bib = new bibtex();

// Example 1
console.log('============../docs/examples/BibTeX_multiple.bib=========');
const bibArr = bib.getBibAsObject2('../docs/examples/BibTeX_multiple.bib');
console.log(JSON.stringify(bibArr, null, 4));


// Example 2
console.log('============../docs/examples/BibTeX_example01_book.bib==========');
const bibObj = bib.getBibAsObject2('../docs/examples/BibTeX_example01_book.bib');
console.log(JSON.stringify(bibObj, null, 4));


// Example 3
console.log('============../docs/examples/BibTeX_example02_misc.bib==========');
const bibObj2 = bib.getBibAsObject2('../docs/examples/BibTeX_example02_misc.bib');
console.log(JSON.stringify(bibObj2, null, 4));
