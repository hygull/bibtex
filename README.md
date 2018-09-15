# bibtex
Get details about BibTeX (.bib) syntax, available ENTRY types and many more using Node APIs.  

Please have a look at the below examples.

## Example 1 - Get all entry types

```javascript
const bibtex = require("@hygull/bibtex")

// Instantiating BibTex (class)
const bib = new bibtex()  

// A list containing all possible entry types for a .bib file
const entryTypes = bib.getEntryTypes() 

console.log(entryTypes)
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
const bibtex = require("@hygull/bibtex")

// Instantiating BibTex (class)
const bib = new bibtex()  

// A list containing all possible entry types for a .bib file
// with fields (required + optional)
const entryTypeFields = bib.getEntryTypeFields() 

// Printing (entry type: book)
var articleEntryFields = entryTypeFields["article"]
console.log(articleEntryFields)
/*
{ requiredFields: [ 'author', 'title', 'journal', 'year' ],
  optionalFields: [ 'volume', 'number', 'pages', 'month', 'note', 'key' ] }
*/

// Pretty printing (entry type: book)
var bookEntryFields = entryTypeFields['book']
console.log(JSON.stringify(bookEntryFields, null, 4))
/*
  {
      "requiredFields": [
          "author(or)editor",
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
const bibtex = require("@hygull/bibtex")

const bib = new bibtex()

const proceedingsEntryFields = bib.getSpecificEntryTypeFields("proceedings")

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

**Note:** Do not foget to check this page if you're working with Latex, BibTeX etc.