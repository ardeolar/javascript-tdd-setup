// Note class

module.exports = function(note_id, author,content) {

    var error = "";
    if ( (typeof note_id) != "number" || (typeof author) != "string" || (typeof content) != "string" ) {
        error = "Error,  check your parameters.";
        return error;
    }
    else {
        this.note_id = note_id;
        this.author = author;
        this.content = content;
    }
    return author; 

}