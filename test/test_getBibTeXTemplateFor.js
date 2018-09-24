/*
	Created at: 23 Sep 2018, Sun
*/

const bibtex = require("../index");

const bib = new bibtex();

const bibTeXTemplateForArticle = bib.getBibTeXTemplateFor('manual', 1);

console.log(bibTeXTemplateForArticle);
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
