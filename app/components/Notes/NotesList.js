var React = require('React');

var NotesList = React.createClass ({
    
    render: function(){
        var notes = this.props.notes.map(function(note, index){
            return <li> {note} </li>
        })
        return(
            <ul className = 'list-group'>
            </ul>
        )
    }
});

module.exports = NotesList;