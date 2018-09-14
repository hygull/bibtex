// https://nwalsh.com/tex/texhelp/bibtx-7.html
// http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php
//
// Created: 14 Sep 2018, Fri

const getEntryTypes = require('./getEntryTypes')
const getEntryTypeFields = require('./getEntryTypeFields')
// const fs = require('fs')

class BibTeX {
	// Definition of BibTeX's constructor
	constructor() {
		// this.entryTypes = fs.readFileSync('../json/entryTypes.json', 'utf-8')
		// this.entryTypeFields = fs.readFileSync('../json/entryTypeFields.json', 'utf-8')
		this.entryTypes = getEntryTypes();
		this.entryTypeFields = getEntryTypeFields();
	}

	getEntryTypes() {
		// Getting all the entry types available in BibTeX
		return this.entryTypes;
	}

	getEntryTypeFields() {
		// Getting all the entry type fields (required + optional)
		return this.entryTypeFields;
	}

}

module.exports = BibTeX