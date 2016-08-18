'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');


describe("Note creation works properly", function() {

   it("assigns author based on the parameter supplied in the constructor", function() {
       note = new Note("Hello world", "Ridwan")
       assert(note.author == "Ridwan")
   })
   it("assigns text to note based on the parameter supplied in the constructor", function() {
       note = new Note("Hello world", "Ridwan")
       assert(note.content == "Hello world")
   })
   it("asserts that empty parameters are not passed in", function () {
       note = new Note("Hello World", "Ridwan")
       assert( (note.content != "") || (note.author != ""))
   })
   it("asserts that an empty parameter isn't passed into the setNote method", function() {
       note = new Note("Hello World", "Ridwan")
       note.setNote("new changes")
       assert( note.content == "new changes")
       
   })
})

