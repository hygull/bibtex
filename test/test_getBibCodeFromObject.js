/*
	Programmed on: 10 Oct 2018, Wed
*/

const bibtex = require("../index");

const bib = new bibtex();

// EXAMPLE 1
// Bib entry
const object = 	{
			entryType: 'article', 
			key: 'articleKey', 
			data: {
				'author': 'Raghvendra Thakur',
				'title': 'The final decision of an old monkey',
				'year': 2007,
				'journal': 'Annals of Mathematical Logic'
			}
		};

const bibCode = bib.getBibCodeFromObject(object);
console.log(bibCode);

// EXAMPLE 2
// Array of bib entries
const arr = [
	    {
	        "entryType": "Book",
	        "key": "michael",
	        "data": {
	            "author": "Michael Jackson",
	            "title": "My Kingdom For A Lollypop",
	            "publisher": "Neverland \\& Everland Publishing",
	            "year": 2004
	        }
	    },
	    {
	        "entryType": "Book",
	        "key": "elvis",
	        "data": {
	            "author": "Elvis Presley",
	            "title": "Turn Me One More Time",
	            "publisher": "Jail House Books",
	            "year": 1963
	        }
	    },
	    {
	        "entryType": "Book",
	        "key": "britney",
	        "data": {
	            "author": "Britn ey Spears",
	            "title": "Let's Go Oversea To Canada",
	            "publisher": "Blonde, Blondt \\& Blondey",
	            "year": 2007
	        }
	    },
	    {
	        "entryType": "Book",
	        "key": "marilyn",
	        "data": {
	            "editor": "Marilyn Manson",
	            "title": "I Love My Little Pony",
	            "publisher": "Pinc \\& Cuddley Press",
	            "year": 2005
	        }
	    },
	    {
	        "entryType": "Book",
	        "key": "elvis",
	        "data": {
	            "author": "Elvis Presley",
	            "title": "Turn Me One More Time",
	            "publisher": "Jail House Books",
	            "year": 1963
	        }
	    }
	];

const bibCode2 = bib.getBibCodeFromObject(arr);
console.log(bibCode2)