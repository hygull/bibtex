@echo off 
set list=test_getFields.js test_getFormFor.js test_getEntryTypes.js
(for %%a in (%list%) do ( 
   node test\\%%a 
   echo ------------------------------------------------------------------------------
))