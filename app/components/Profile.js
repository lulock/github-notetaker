var React = require('react');
var Router = require('react-router');

var Repos = require('./Github/repos');
var UserProfile = require('./Github/UserProfile');

var Notes = require('./Notes/notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
    mixin:[ReactFireMixin],
    getInitialState: function(){
        return {
            notes: [1,2,3],// creates a new array,
            bio: {
                name: 'Leila'
            }, //creates a new empty object,
            repos:['a','b','c']
        }
    },
    ComponentDidMount: function(){
        this.ref = Firebase('https://github-notetaker-b271a.firebaseio.com/');
        var childRef = this.ref.child(this.props.param.username);
        this.bindAsArray(childRef, 'notes');
    }, // callback function. Where you make all your AJAX requests etc.
    ComponentWillUnmount: function(){
        this.unbind('notes');        
    },
    render: function(){
        return(
        <div className="row">
            <div className="col-md-4">
                <UserProfile username={this.props.params.username} bio={this.state.bio}/>
            </div>
            <div className="col-md-4">
                <Repos username={this.props.params.username} repos={this.state.repos}/>
            </div>
            <div className="col-md-4">
                <Notes username={this.props.params.username} notes={this.state.notes}/>
            </div>
        </div>
        )
    }
});

module.exports = Profile;