/*
	Created at: 18 Sep 2018, tue
*/

const bibtex = require("../index");

const bib = new bibtex();

const formCode = bib.getFormFor('article');

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