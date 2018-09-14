// https://nwalsh.com/tex/texhelp/bibtx-7.html
// http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php

module.exports = function getAllEntryTypes() {
	const entryTypes = [
		"article",
		"book",
		"booklet",
		"conference",
		"inbook",
		"incollection",
		"inproceedings",
		"manual",
		"mastersthesis",
		"misc",
		"phdthesis",
		"proceedings",
		"techreport",
		"unpublished"
	]

	return entryTypes
}