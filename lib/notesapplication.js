// NotesApplication class

module.exports = function() {
	this.notes = [];
	this.create = function(note_content) {
		this.notes.push(note_content);
		return note_content.note_id;
	}

	this.listNotes = function() {
		var list = "";
		for (var i = 0; i < this.notes.length; i++) {
			if(i < 0){
				list = "No note created yet";
				return "empty";
			}
			else {
				list = list + "Note ID: " + i + "\n";
				list = list + this.notes[i].text + "\n";
				list = list + "By Author " +  this.notes[i].author + "\n\n";
			}
			return i;
		}
	}

	this.get = function(note_id) {
        var length = this.notes.length, index = 0; list = ""; 
        current_note;
		while(index < length) {
            current_note = this.notes[index];
            if (current_note.note_id == note_id) {
                list_notes += "\nNote ID: " + current_note.note_id;
                list_notes += "\n"+ current_note.content;
                list_notes += "\nBy Author " + current_note.author;
                return true;
            }    
            index++;
        }
        if(list_notes === "") {
            list_notes = "No note found with ID:" + note_id;
            return false;
        }
	}

	this.search = function(search_text) {
		for (var i = 0; i < this.notes.length; i++) {
			if( this.notes[i].content.indexOf(search_text) > -1) {
				return this.notes[i].content + "\n";	
			}
			else{
				return"No match found";
			}
		}
	}

	this.delete = function(note_id) {
		for (var i = 0; i < this.notes.length; i++) {
			if(i == note_id) {
				this.notes.splice(note_id, 1);
			}
			else {
				return "no match found"
			}
	}

	this.edit = function(note_id, new_content) {
		for (var i = 0; i < this.notes.length; i++) {
			if( this.notes[i] == this.notes[note_id]) {
				this.notes[note_id].setNote(new_content);
			}
			else {
				return "nothing to edit"
			}
		}
	}
}
}