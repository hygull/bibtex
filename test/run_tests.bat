@echo off 
set list=test_getEntryTypeFieldsDescription.js test_getEntryTypes.js test_getBibTeXTemplateFor.js test_getFields.js test_getEntryTypeDescription.js test_getFormFor.js test_getEntryTypeFields.js test_getSpecificEntryTypeFields.js

(for %%a in (%list%) do ( 
   node test\\%%a 
   echo ------------------------------------------------------------------------------
))
