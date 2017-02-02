var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio:  React.PropTypes.object.isRequired,
    },
    render: function(){
        return(
            <div>
                <p> User Profile </p>
                <p> username: {this.props.username} </p>
                <p> bio: {this.props.bio.name} </p>

            </div>
        )
    }
});

module.exports = UserProfile;