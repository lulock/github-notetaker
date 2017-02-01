var React = require('react');

var Notes = React.createClass({
    render: function(){
        console.log('Notes: ', this.props.notes);
        return(
        <div>
            <h3>Notes for {this.props.username}</h3>
        </div>
        )
    }
});

module.exports = Notes;