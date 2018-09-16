/*
	Created: 14 Sep 2018, Fri
*/

module.exports = function getEntryTypes() {
	const data = {
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
        "description": "A work that is printed and bound, but without a named publisher or sponsoring institution",
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
        "description": "A part of a book, e.g., a chpater, section, or whatever and/or a range of pages",
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
        "description": "Use this type when nothing else fits. A warning will be issued if all optional fields are empty (i.e., the entire entry is empty or has only ignored fields)",
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
        "description": "A report published by a school or other institution, usually numbered within a series",
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
        "description": "A document having an author and title, but not formally published",
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
};

return data;
}