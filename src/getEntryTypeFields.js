/*
	Created: 14 Sep 2018, Fri
*/

module.exports = function getEntryTypeFields() {
	return {
		"article": {
			"requiredFields": ["author", "title", "journal", "year"],
			"optionalFields": ["volume", "number", "pages", "month", "note", "key"]
		},
		"book": {
			"requiredFields": ["author(or)editor", "title", "publisher", "year"],
			"optionalFields": ["volume", "series", "address", "edition", "month", "note", "key"]
		},
		"booklet": {
			"requiredFields": ["title"],
			"optionalFields": ["author", "howpublished", "address", "month", "year", "note", "key"]
		},
		"conference": {
			"requiredFields": ["author", "title", "booktitle", "year"],
			"optionalFields": ["editor", "pages", "organization", "publisher", "address", "month", "note", "key"]
		},
		"inbook": {
			"requiredFields": ["author(or)editor", "title", "chapter(or:and)pages", "publisher", "year"],
			"optionalFields": ["volume", "series", "address", "edition", "month", "note", "key"]
		},
		"incollection": {
			"requiredFields": ["author", "title", "booktitle", "year"],
			"optionalFields": ["editor", "pages", "organization", "publisher", "address", "month", "note", "key"]
		},
		"inproceedings": {
			"requiredFields": ["author", "title", "booktitle", "year"],
			"optionalFields": ["editor", "pages", "organization", "publisher", "address", "month", "note", "key"]
		},
		"manual": {
			"requiredFields": ["title"],
			"optionalFields": ["author", "organization", "address", "edition", "month", "year", "note", "key"]
		},
		"mastersthesis": {
			"requiredFields": ["author", "title", "school", "year"],
			"optionalFields": ["address", "month", "note", "key"]
		},
		"misc": {
			"requiredFields": [],
			"optionalFields": ["author", "title", "howpublished", "month", "year", "note", "key"]
		},
		"phdthesis": {
			"requiredFields": ["author", "title", "school", "year"],
			"optionalFields": ["address", "month", "note", "key"]
		},
		"proceedings": {
			"requiredFields": ["title", "year"],
			"optionalFields": ["editor", "publisher", "organization", "address", "month", "note", "key"]
		},
		"techreport": {
			"requiredFields": ["author", "title", "institution", "year"],
			"optionalFields": ["type", "number", "address", "month", "note", "key"]
		},
		"unpublished": {
			"requiredFields": ["author", "title", "note"],
			"optionalFields": ["month", "year", "key"]
		}
	};
}