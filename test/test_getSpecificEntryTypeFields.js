/*
	Created at: 13 Sep 2018, Thu
*/

const bibtex = require("../index");

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