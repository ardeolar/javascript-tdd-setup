'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');


describe("Note creation works properly", function() {

  it("assigns author based on the parameter supplied in the constructor", function() {
    var firstnote = new Note(1,"Ridwan", "this is first content"), noteapp = new NotesApplication();
    assert(firstnote.author == "Ridwan")
  });
});

describe("NotesApplication manipulating notes", function() {

  it("returns empty for a new note application", function () {
    var noteapp = new NotesApplication();
    assert(noteapp.listNotes() === "empty")
  });

  it("returns number of notes created", function() {
    var firstnote = new Note(1, "Ridwan", "this is first content"), noteapp = new NotesApplication();
    noteapp.create(firstnote);
    assert(noteapp.listNotes() === 1);
  })

  it("is able to get note by id", function() {
    var firstnote = new Note(1, "Ridwan", "this is first content"), noteapp = new NotesApplication(), secondnote = new Note(2, "Ridwan", "this is second note"), thirdnote = new Note(3, "Adeola", "this is third note");
    noteapp.create(firstnote);
    noteapp.create(secondnote);
    assert(noteapp.get(2) === true);
  })

  it("returns index of note with specific text", function(){
    var firstnote = new Note(1, "Ridwan", "this is first content"), noteapp = new NotesApplication();
    noteapp.create(firstnote)
    assert(noteapp.search("is") === 1);
  })

  it("checks that parameter/arguments are not empty", function() {
    var firstnote = new Note(1, "Ridwan", "this is first content");
    assert((firstnote.content !== "") && (firstnote.author !== "" ));
  })

  it("returns no match found if note does not exist", function() {
    var firstnote = new Note(1, "Ridwan", "this is first content"), noteapp = new NotesApplication();
    noteapp.create(firstnote);
    assert(noteapp.delete(7) == "no match found");
  })

  it("checks if a note was actually edited", function() {
    var firstnote = new Note(1, "Ridwan", "this is first content"), noteapp = new NotesApplication();
    noteapp.create(firstnote);
    assert(noteapp.edit(1, "this is the first changed content") === "this is the first changed content");
  })

  it("assigns text to note based on the parameter supplied in the constructor", function() {
    firstnote = new Note(1, "Ridwan", "this is first content");
    assert(firstnote.content == "this is first content");
  })

});

