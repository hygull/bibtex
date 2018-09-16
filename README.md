# bibtex
Get details about BibTeX (.bib) syntax, available ENTRY types and many more using Node APIs.  

> You can also visit [https://hygull.github.io/bibtex/](https://hygull.github.io/bibtex/) to see the beautiful documentation for the same.

### Installation

> You can check [https://docs.npmjs.com/getting-started/using-a-package.json](https://docs.npmjs.com/getting-started/using-a-package.json) for more commands.

| Installation type | Command |
| --- | --- |
| Local | npm i @hygull/bibtex |
| Global | npm i @hygull/bibtex -g|

Now, please have a look at the below examples.

### Example 1 - Get all entry types

```javascript
const bibtex = require("@hygull/bibtex");

// Instantiating BibTex (class)
const bib = new bibtex(); 

// A list containing all possible entry types for a .bib file
const entryTypes = bib.getEntryTypes();

console.log(entryTypes);
/*
[ 'article',
  'book',
  'booklet',
  'conference',
  'inbook',
  'incollection',
  'inproceedings',
  'manual',
  'mastersthesis',
  'misc',
  'phdthesis',
  'proceedings',
  'techreport',
  'unpublished' ]
*/
```

### Example 2 - Get all entry type with fields (required + optional)

```javascript
const bibtex = require("@hygull/bibtex");

// Instantiating BibTex (class)
const bib = new bibtex(); 

// A list containing all possible entry types for a .bib file
// with fields (required + optional)
const entryTypeFields = bib.getEntryTypeFields();

// Printing (entry type: book)
var articleEntryFields = entryTypeFields["article"];
console.log(articleEntryFields);
/*
{ requiredFields: [ 'author', 'title', 'journal', 'year' ],
  optionalFields: [ 'volume', 'number', 'pages', 'month', 'note', 'key' ] }
*/

// Pretty printing (entry type: book)
var bookEntryFields = entryTypeFields['book'];
console.log(JSON.stringify(bookEntryFields, null, 4));
/*
  {
      "requiredFields": [
          "author or editor",
          "title",
          "publisher",
          "year"
      ],
      "optionalFields": [
          "volume",
          "series",
          "address",
          "edition",
          "month",
          "note",
          "key"
      ]
  }
*/
```

### Example 3 - Get Specific entry type with fields (pass the name of entry type) 

```javascript
const bibtex = require("@hygull/bibtex");

const bib = new bibtex();

const proceedingsEntryFields = bib.getSpecificEntryTypeFields("proceedings");

// Pretty printing (entry type: proceedings)
console.log(JSON.stringify(proceedingsEntryFields, null, 4));

/*
	{
	    "requiredFields": [
	        "title",
	        "year"
	    ],
	    "optionalFields": [
	        "editor",
	        "publisher",
	        "organization",
	        "address",
	        "month",
	        "note",
	        "key"
	    ]
	}
*/
```

### Example 4 - Get little description about entry types 

```javascript
const bibtex = require("@hygull/bibtex");

const bib = new bibtex();

const entryTypeDescription = bib.getEntryTypeDescription();

// Pretty printing 
console.log(JSON.stringify(entryTypeDescription, null, 4));

/*
{
	"article": "An article from a journal or magazine.",
	"book": "A book with an explicit publisher.",
	"booklet": "A work that is printed and bound, but without a named publisher 
	or sponsoring institution.",
	"inbook": "A part of a book, e.g., a chpater, section, or whatever and/or a range 
	of pages.",
	"incolllection": "A part of a book having its own title.",
	"inproceedings": "An article in a conference proceedings.",
	"manual": "Technical documentation.",
	"mastersthesis": "A master's thesis.",
	"misc": "Use this type when nothing else fits. A warning will be issued if all
	 optional fields are empty (i.e., the entire entry is empty or has only ignored fields).",
	"phdthesis": "A Ph.D. thesis.",
	"proceedings": "Conference proceedings.",
	"techreport": "A report published by a school or other institution, usually 
	numbered within a series.",
	"unpublished": "A document having an author and title, but not formally published."
}
*/
```

### Example 5 - Get entry types, fields, description

```javascript
const bibtex = require("@hygull/bibtex");

const bib = new bibtex();

const entryTypeFieldsDescription = bib.getEntryTypeFieldsDescription();

// Pretty printing
console.log(JSON.stringify(entryTypeFieldsDescription, null, 4));

/*
{
    "article": {
        "description": "An article from a journal or magazine",
        "required_fields": [
            "author",
            "title",
            "journal",
            "year"
        ],
        "optional_fields": [
            "volume",
            "number",
            "pages",
            "month",
            "note"
        ]
    },
    "book": {
        "description": "A book with an explicit publisher",
        "required_fields": [
            "author or editor",
            "title",
            "publisher",
            "year"
        ],
        "optional_fields": [
            "volume or number",
            "series",
            "address",
            "edition",
            "month",
            "note"
        ]
    },
    "booklet": {
        "description": "A work that is printed and bound, but without a named 
        publisher or sponsoring institution",
        "required_fields": [
            "title"
        ],
        "optional_fields": [
            "author",
            "howpublished",
            "address",
            "month",
            "year",
            "note"
        ]
    },
    "inbook": {
        "description": "A part of a book, e.g., a chpater, section, or 
        whatever and/or a range of pages",
        "required_fields": [
            "author or editor",
            "title",
            "chapter and/or pages",
            "publisher",
            "year"
        ],
        "optional_fields": [
            "volume or number",
            "series",
            "type",
            "address",
            "edition",
            "month",
            "note"
        ]
    },
    "incollection": {
        "description": "A part of a book having its own title",
        "required_fields": [
            "author",
            "title",
            "booktitle",
            "publisher",
            "year"
        ],
        "optional_fields": [
            "editor",
            "volume or number",
            "series",
            "type",
            "chapter",
            "pages",
            "address",
            "edition",
            "month",
            "note"
        ]
    },
    "inproceedings": {
        "description": "An article in a conference proceedings",
        "required_fields": [
            "author",
            "title",
            "booktitle",
            "year"
        ],
        "optional_fields": [
            "editor",
            "volume or number",
            "series",
            "pages",
            "address",
            "month",
            "organization",
            "publisher",
            "note"
        ]
    },
    "manual": {
        "description": "Technical documentation",
        "required_fields": [
            "title"
        ],
        "optional_fields": [
            "author",
            "organization",
            "address",
            "edition",
            "month",
            "year",
            "note"
        ]
    },
    "mastersthesis": {
        "description": "A master's thesis",
        "required_fields": [
            "author",
            "title",
            "school",
            "year"
        ],
        "optional_fields": [
            "type",
            "address",
            "month",
            "note"
        ]
    },
    "misc": {
        "description": "Use this type when nothing else fits. A warning will be 
        issued if all optional fields are empty (i.e., the entire entry is 
        empty or has only ignored fields)",
        "required_fields": [
            "none"
        ],
        "optional_fields": [
            "author",
            "title",
            "howpublished",
            "month",
            "year",
            "note"
        ]
    },
    "phdthesis": {
        "description": "A Ph.D. thesis",
        "required_fields": [
            "author",
            "title",
            "school",
            "year"
        ],
        "optional_fields": [
            "type",
            "address",
            "month",
            "note"
        ]
    },
    "proceedings": {
        "description": "Conference proceedings",
        "required_fields": [
            "title",
            "year"
        ],
        "optional_fields": [
            "editor",
            "volume or number",
            "series",
            "address",
            "publisher",
            "note",
            "month",
            "organization"
        ]
    },
    "techreport": {
        "description": "A report published by a school or other institution, 
        usually numbered within a series",
        "required_fields": [
            "author",
            "title",
            "institution",
            "year"
        ],
        "optional_fields": [
            "type",
            "number",
            "address",
            "month",
            "note"
        ]
    },
    "unpublished": {
        "description": "A document having an author and title, but not 
        formally published",
        "required_fields": [
            "author",
            "title",
            "note"
        ],
        "optional_fields": [
            "month",
            "year"
        ]
    }
}
*/
```

**Note:** Do not foget to check this page if you're working with Latex, BibTeX etc.

## Reference links

+ [https://en.wikibooks.org/wiki/LaTeX/Bibliography_Management](https://en.wikibooks.org/wiki/LaTeX/Bibliography_Management)

+ [http://www.bibtex.org/Using/](http://www.bibtex.org/Using/)


