/*
	Created at: 28 Sep 2018, Fri
*/

const bibtex = require("../index");

const bib = new bibtex();

/* NOTE:
	+ Path should be related to the location from where we're running the command.

	+ As we supposed to execute this from the root of the package.

	+ That is why `.\\docs\\examples\\BibTeX_example02_misc.bib` is correct
	
	+ not `..\\docs\\examples\\BibTeX_example02_misc.bib`.
*/

// Bib file path (Absoulte/Relative)
// './docs/examples/BibTeX_example02_misc.bib'
// '.\\docs\\examples\\BibTeX_example02_misc.bib' also works fine in Windows

/* EXAMPLE 1*/
const bibObject = bib.getBibAsObject('./docs/examples/BibTeX_example02_misc.bib');
// const  = bib.getBibMetaData('.\\docs\\examples\\BibTeX_example02_misc.bib');
console.log(JSON.stringify(bibObject, null, 4));
console.log('\n');

/* EXAMPLE 2*/
const bibObject2 = bib.getBibAsObject('./docs/examples/BibTeX_example08_book_diff.bib');
console.log(JSON.stringify(bibObject2, null, 4));
console.log('\n');

/* EXAMPLE 3*/
const bibArr = bib.getBibAsObject('./docs/examples/BibTeX_multiple.bib');
console.log(JSON.stringify(bibArr, null, 4));
