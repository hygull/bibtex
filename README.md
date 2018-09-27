<h1 id="top">bibtex</h1>

Get details about BibTeX (.bib) syntax, available ENTRY types and many more using Node APIs.  

> You can also visit [https://hygull.github.io/bibtex/](https://hygull.github.io/bibtex/) to see the beautiful documentation for the same.

### Installation

> You can check [https://docs.npmjs.com/getting-started/using-a-package.json](https://docs.npmjs.com/getting-started/using-a-package.json) for more commands.

| Installation type | Command |
| --- | --- |
| Local | `npm i @hygull/bibtex` |
| Global | `npm i @hygull/bibtex -g` |

### Examples

[Example 1 - Get all entry types](#example1)

[Example 2 - Get all entry type with fields (required + optional)](#example2)

[Example 3 - Get Specific entry type with fields (pass the name of entry type) ](#example3)

[Example 4 - Get little description about entry types ](#example4)

[Example 5 - Get entry types, fields, description](#example5)

[Example 6 - Getting HTML Code (form) for a specific entry type](#example6)

[Example 7 - Get fields (standard fields)](#example7)

[Example 8 - Get BibTeX template code for a specific entry type in 3 different formats](#example8)

> Now, please have a look at the below examples.

<h3 id="example1">Example 1 - Get all entry types</h3>

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
&raquo; [Back to top](#top)



<h3 id="example2">Example 2 - Get all entry type with fields (required + optional)</h3>

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
&raquo; [Back to top](#top)



<h3 id="example3">Example 3 - Get Specific entry type with fields (pass the name of entry type)</h3>

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
	        "note"
	    ]
	}
*/
```
&raquo; [Back to top](#top)



<h3 id="example4">Example 4 - Get little description about entry types</h3>

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
&raquo; [Back to top](#top)



<h3 id="example5">Example 5 - Get entry types, fields, description</h3>

> Based on the scrapped data (using Python 3) from [http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php#article](http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php#article).

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
        "requiredFields": [
            "author",
            "title",
            "journal",
            "year"
        ],
        "optionalFields": [
            "volume",
            "number",
            "pages",
            "month",
            "note"
        ]
    },
    "book": {
        "description": "A book with an explicit publisher",
        "requiredFields": [
            "author or editor",
            "title",
            "publisher",
            "year"
        ],
        "optionalFields": [
            "volume or number",
            "series",
            "address",
            "edition",
            "month",
            "note"
        ]
    },
    "booklet": {
        "description": "A work that is printed and bound, but without a named publisher or sponsoring institution",
        "requiredFields": [
            "title"
        ],
        "optionalFields": [
            "author",
            "howpublished",
            "address",
            "month",
            "year",
            "note"
        ]
    },
    "inbook": {
        "description": "A part of a book, e.g., a chpater, section, or whatever and/or a range of pages",
        "requiredFields": [
            "author or editor",
            "title",
            "chapter and/or pages",
            "publisher",
            "year"
        ],
        "optionalFields": [
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
        "requiredFields": [
            "author",
            "title",
            "booktitle",
            "publisher",
            "year"
        ],
        "optionalFields": [
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
        "requiredFields": [
            "author",
            "title",
            "booktitle",
            "year"
        ],
        "optionalFields": [
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
        "requiredFields": [
            "title"
        ],
        "optionalFields": [
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
        "requiredFields": [
            "author",
            "title",
            "school",
            "year"
        ],
        "optionalFields": [
            "type",
            "address",
            "month",
            "note"
        ]
    },
    "misc": {
        "description": "Use this type when nothing else fits. A warning will be issued if all optional fields are empty (i.e., the entire entry is empty or has only ignored fields)",
        "requiredFields": [
            "none"
        ],
        "optionalFields": [
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
        "requiredFields": [
            "author",
            "title",
            "school",
            "year"
        ],
        "optionalFields": [
            "type",
            "address",
            "month",
            "note"
        ]
    },
    "proceedings": {
        "description": "Conference proceedings",
        "requiredFields": [
            "title",
            "year"
        ],
        "optionalFields": [
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
        "description": "A report published by a school or other institution, usually numbered within a series",
        "requiredFields": [
            "author",
            "title",
            "institution",
            "year"
        ],
        "optionalFields": [
            "type",
            "number",
            "address",
            "month",
            "note"
        ]
    },
    "unpublished": {
        "description": "A document having an author and title, but not formally published",
        "requiredFields": [
            "author",
            "title",
            "note"
        ],
        "optionalFields": [
            "month",
            "year"
        ]
    }
}
*/
```
&raquo; [Back to top](#top)



<h3 id="example6">Example 6 - Getting HTML Code (form) for a specific entry type</h3>

> Bootstrap 3 form element (Inspired from [https://www.w3schools.com/bootstrap/bootstrap_forms.asp](https://www.w3schools.com/bootstrap/bootstrap_forms.asp)).
>
> Curretly, all input fields are of type `'text'` (even if it is a number like `year` etc.). User can add javascript code for validation of form fields or use his/her own approach for validations & design(using custom stylesheets) etc.
>

```javascript
const bibtex = require("@hygull/bibtex");

const bib = new bibtex();

const formCode = bib.getFormFor('article');

// Pretty printing 
console.log(formCode);

/*
<form action='#' method='GET' name='article'>
        <div class='form-group'>
                <label for='author'>author:</label>
                <input type='text' class='form-control' id='author' placeholder='Enter author' name='author' required='true'>
        </div>
        <div class='form-group'>
                <label for='title'>title:</label>
                <input type='text' class='form-control' id='title' placeholder='Enter title' name='title' required='true'>
        </div>
        <div class='form-group'>
                <label for='journal'>journal:</label>
                <input type='text' class='form-control' id='journal' placeholder='Enter journal' name='journal' required='true'>
        </div>
        <div class='form-group'>
                <label for='year'>year:</label>
                <input type='text' class='form-control' id='year' placeholder='Enter year' name='year' required='true'>
        </div>

        <div class='form-group'>
                <label for='volume'>volume:</label>
                <input type='text' class='form-control' id='volume' placeholder='Enter volume' name='volume' required='false'>
        </div>
        <div class='form-group'>
                <label for='number'>number:</label>
                <input type='text' class='form-control' id='number' placeholder='Enter number' name='number' required='false'>
        </div>
        <div class='form-group'>
                <label for='pages'>pages:</label>
                <input type='text' class='form-control' id='pages' placeholder='Enter pages' name='pages' required='false'>
        </div>
        <div class='form-group'>
                <label for='month'>month:</label>
                <input type='text' class='form-control' id='month' placeholder='Enter month' name='month' required='false'>
        </div>
        <div class='form-group'>
                <label for='note'>note:</label>
                <input type='text' class='form-control' id='note' placeholder='Enter note' name='note' required='false'>
        </div>
        <button type='submit' class='btn btn-success'>Submit</button>
</form>
*/
```
&raquo; [Back to top](#top)


<h3 id="example7">Example 7 - Get fields (standard fields)</h3>

> Based on the scrapped data from [http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php#annote](http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php#annote).

```javascript
const bibtex = require("@hygull/bibtex");

const bib = new bibtex()

const fields = bib.getFields('article')

// Pretty printing 
console.log(JSON.stringify(fields, null, 4))

/*
{
    "address": {
        "description": "Usually the address of the publisher or other institution.",
        "note": "For major publishing houses, you may omit the information entirely or give simply the
city. For small publishers, on the other hand, you can help the reader by giving the complete address."
    },
    "annote": {
        "description": "An annotation.",
        "note": "Not used by the standard bibliography styles, but used by others that produce an annot
ated bibliography (e.g., annote). The field starts a new sentence and hence the first word should be ca
pitalized."
    },
    "author": {
        "description": "The name(s) of the author(s), in BibTeX name format.",
        "note": "This field should contain the complete author list for your entry. The names are separ
ated by the word and, even if there are more than two authors. Each name can be written in two equivale
nt forms: Donald E. Knuth or Knuth, Donald E. Eddie van Halen or van Halen, Eddie The second form shoul
d be used for authors with more than two names, to differentiate between middle names and last names."
    },
    "booktitle": {
        "description": "Title of a book, part of which is being cited.",
        "note": "For book entries use the title field"
    },
    "chapter": {
        "description": "A chapter (or section or whatever) number.",
        "note": "It's an integer denoting the page number."
    },
    "crossref": {
        "description": "The database key of the entry being cross-referenced",
        "note": "The database key of the entry being cross referenced."
    },
    "edition": {
        "description": "The edition of a book (e.g., \"Second\").",
        "note": "This should be an ordinal, and should have the first letter capitalized, as shown abov
e; the standard styles convert to lowercase when necessary."
    },
    "editor": {
        "description": "",
        "note": "If there is also an author field, then the editor field gives the editor of the book o
r collection in which the reference appears."
    },
    "howpublished": {
        "description": "How something strange has been published.",
        "note": "The first word should be capitalized."
    },
    "institution": {
        "description": "Institutuion sponsoring a technical report.",
        "note": "It is the name of institution"
    },
    "journal": {
        "description": "Journal name. Abbrevations are provided for many journals.",
        "note": "The name of a journal or magazine. The name of a journal can be abbreviated using a “s
tring”. To define such string, use the string editor."
    },
    "key": {
        "description": "Used for alphabetizing, cross-referencing, and creating a label when the author
 and editor information is missing.",
        "note": "This field should not be confused with the key that appears in the \\cite command and
at the beginning of the database entry."
    },
    "month": {
        "description": "The month in which the work was published or, for an unpublished work, in which
 it was written.",
        "note": "For reasons of consistency the standard three-letter abbreviations (jan, feb, mar, etc
.) should be used."
    },
    "note": {
        "description": "Any additional information that can help the reader.",
        "note": ""
    },
    "number": {
        "description": "The number of a journal, magazine, technical report, or work in a series.",
        "note": "An issue of a journal or magazine is usually identified by its volume and number; a te
chnical report normally has a number; and sometimes books in a named series carry numbers."
    },
    "organization": {
        "description": "The organization that sponsors a conference or that publishes a manual.",
        "note": "It is the name of organization that takes care of publishing the manual."
    },
    "pages": {
        "description": "One or more page numbers or range of numbers.",
        "note": "(e.g., 42-111 or 7,41, 73-97 or 43+, where the '+' indicates pages that do not form a
simple range)"
    },
    "publisher": {
        "description": "The publisher's name.",
        "note": "The name of the publisher."
    },
    "school": {
        "description": "The name of the school where the thesis was written.",
        "note": "The name of school."
    },
    "series": {
        "description": "The name of a series or set of books.",
        "note": "When citing an entire book, the title field gives its title and an optional series fie
ld gives the name of a series or multivolume set in which the book is published."
    },
    "title": {
        "description": "The work's title, typed as explained in",
        "note": " The title of the work. The capitalization may depend on the bibliography style and on
 the language used. For words that have to be capitalized (such as a proper noun), enclose the word (or
 its first letter) in braces."
    },
    "type": {
        "description": "The type of a technical report(e.g., \"Research Note\").",
        "note": "This name is used instead of the default \"Technical Report\". For the entry type phdt
hesis you could use the term \"Ph.D. dissertation\" by specifying: type = \"{Ph.D.} dissertation\". Sim
ilarly, for the inbook and incollection entry types you can get \"section 1.2\" instead of the default
\"chapter 1.2\" with chapter = \"1.2\" and type = \"Section\"."
    },
    "volume": {
        "description": "The volume of a journal or multivolume book.",
        "note": "The volume of a journal or multivolume book"
    },
    "year": {
        "description": "The year of publication or, for an unpublished work, the year it was written.",
        "note": "Generally, it should consist of four numerals, such as 1984, although the standard sty
les can handle any year whose last four nonpunctuation characters are numerals, such as \"about 1984\".
"
    }
}
*/
```
&raquo; [Back to top](#top)


<h3 id="example8">Example 8 -  Get BibTeX template code for a specific entry type in 3 different formats</h3>

> `getBibTeXTemplateFor()` takes 2 parameters where only first is required.
>
> Second parameter denotes the type of output to be obtained which is an
> integer (default value: `1`).
>
> So `getBibTeXTemplateFor("book")` is similar to `getBibTeXTemplateFor("book", 1)`.
>
> Currently, there're only 3 formats available so format can take value of `1`/`2`/`3`.

```javascript
const bibtex = require("@hygull/bibtex");

const bib = new bibtex()

const bibTeXTemplateForManual = bib.getBibTeXTemplateFor('manual'); 

console.log(bibTeXTemplateForManual);

/*
    @manual{manualKey,
            article = {""},
            book = {""},
            booklet = {""},
            conference = {""},
            inbook = {""},
            incollection = {""},
            inproceedings = {""},
            manual = {""}
    }
*/
```


```javascript
const bibTeXTemplateForManual2 = bib.getBibTeXTemplateFor('manual', 2); 

console.log(bibTeXTemplateForManual2);

/*
    @manual{manualKey,
            article = "",
            book = "",
            booklet = "",
            conference = "",
            inbook = "",
            incollection = "",
            inproceedings = "",
            manual = ""
    }
*/
```

```javascript
const bibTeXTemplateForManual3 = bib.getBibTeXTemplateFor('manual', 3); 

console.log(bibTeXTemplateForManual3);
/*
    @manual{manualKey,
            article = {},
            book = {},
            booklet = {},
            conference = {},
            inbook = {},
            incollection = {},
            inproceedings = {},
            manual = {}
    }
*/
```

&raquo; [Back to top](#top)

**Note:** Do not foget to check this page if you're working with Latex, BibTeX etc.

### Reference links

+ [Must read - http://www.bibtex.org/Format/](http://www.bibtex.org/Format/)

+ [http://ctan.imsc.res.in/biblio/bibtex/base/xampl.bib](http://ctan.imsc.res.in/biblio/bibtex/base/xampl.bib)

+ [BibTeX format(MIT) - http://web.mit.edu/rsi/www/pdfs/bibtex-format.pdf](http://web.mit.edu/rsi/www/pdfs/bibtex-format.pdf)

+ [Open source bibliography reference manager - http://www.jabref.org/](http://www.jabref.org/)

+ [https://en.wikibooks.org/wiki/LaTeX/Bibliography_Management](https://en.wikibooks.org/wiki/LaTeX/Bibliography_Management)

+ [http://www.bibtex.org/Using/](http://www.bibtex.org/Using/)

+ [http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php#article](http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php#article)

+ [http://help.jabref.org/en/Bibtex](http://help.jabref.org/en/Bibtex)

+ [https://en.wikipedia.org/wiki/BibTeX](https://en.wikipedia.org/wiki/BibTeX)

+ [BibteX - standard templates, https://en.wikibooks.org/wiki/LaTeX/Bibliography_Management#Standard_templates](https://en.wikibooks.org/wiki/LaTeX/Bibliography_Management#Standard_templates)

+ [BibTeX examples (Imp.) - http://shelah.logic.at/eindex.html](http://shelah.logic.at/eindex.html)

+ [http://nokyotsu.com/latex/bibtex.html#manual (Imp.)](http://nokyotsu.com/latex/bibtex.html#manual)

+ [All supported Entry types & Entry fields - https://www.sharelatex.com/learn/latex/Bibliography_management_in_LaTeX](https://www.sharelatex.com/learn/latex/Bibliography_management_in_LaTeX)
