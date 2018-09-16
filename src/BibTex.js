// https://nwalsh.com/tex/texhelp/bibtx-7.html
// http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php
//
// Created: 14 Sep 2018, Fri

const getEntryTypes = require('./getEntryTypes')
const getEntryTypeFields = require('./getEntryTypeFields')
const getEntryTypeDescription = require("./getEntryTypeDescription")
// const fs = require('fs')

class BibTeX {
	// Definition of BibTeX's constructor
	constructor() {
		// this.entryTypes = fs.readFileSync('../json/entryTypes.json', 'utf-8')
		// this.entryTypeFields = fs.readFileSync('../json/entryTypeFields.json', 'utf-8')
		this.entryTypes = getEntryTypes();
		this.entryTypeFields = getEntryTypeFields();
		this.entryTypeDescription = getEntryTypeDescription();
	}

	// Getting all the entry types available in BibTeX
	getEntryTypes() {
		return this.entryTypes;
	}

	// Getting all the entry type fields (required + optional)
	getEntryTypeFields() {
		return this.entryTypeFields;
	}

	// Getting specific entry type fields based on their name
	getSpecificEntryTypeFields(entryTypeName) {
		// Converting entry type to lower case 
		entryTypeName = entryTypeName.toLowerCase()

		// If entry type is available in the list
		if(this.entryTypes.indexOf(entryTypeName) > -1) {
			return this.getEntryTypeFields()[entryTypeName];
		} else { // return null if it does not exist
			return null;
		}
	}

	// Getting Entry types description
	getEntryTypeDescription() {
		return this.entryTypeDescription
	}
}

module.exports = BibTeX