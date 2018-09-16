/*
	Created at: 16 Sep 2018, Sun
*/

const bibtex = require("../index");

const bib = new bibtex()

const entryTypeDescription = bib.getEntryTypeDescription()

// Pretty printing 
console.log(JSON.stringify(entryTypeDescription, null, 4));

/*
{
    "article": "An article from a journal or magazine.",
    "book": "A book with an explicit publisher.",
    "booklet": "A work that is printed and bound, but without ...",
    "inbook": "A part of a book, e.g., a chpater, section, or ...",
    "incolllection": "A part of a book having its own title.",
    "inproceedings": "An article in a conference proceedings.",
    "manual": "Technical documentation.",
    "mastersthesis": "A master's thesis.",
    "misc": "Use this type when nothing else fits. A warning will ...",
    "phdthesis": "A Ph.D. thesis.",
    "proceedings": "Conference proceedings.",
    "techreport": "A report published by a school or other instit ...",
    "unpublished": "A document having an author and title, but no ..."
}
*/