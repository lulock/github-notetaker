var React = require('react');

var Router = require('react-router');

var SearchGithub = React.createClass({
    mixins:[Router.History],
    getRef: function(ref){
        this.usernameRef = ref;
    },
    handleSubmit: function(){
        var username = this.usernameRef.value;
        this.usernameRef.value ='';
        this.history.pushState(null, "/profile/" + username)
    },
    render: function(){
        return(
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit}/>
                <div className="form-group col-sm-7">
                    <input type="text" className="form-control" ref={this.getRef} />
                </div>
                <div className="form-group col-sm-5">
                    <button className="btn btn-block btn-primary" type="submit" onClick={this.handleSubmit}> Search Github </button>
                </div>
            </div>
        )
    }
});

module.exports = SearchGithub;