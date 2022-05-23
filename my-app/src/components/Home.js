import {Component} from 'react';
import { render } from 'react-dom';

class Home extends Component {
    constructor(props)
    {
      super(props);
      this.state = 
      {
        items: [],
        isLoaded: false,
        username: ''
      }
    }
    searchedUsername = event => {
        event.preventDefault()
        this.setState({username: event.target.value})
      }
    
      handleSubmit = event => {
        event.preventDefault()
        this.setState({username: event.target.value})
        fetch('https://api.github.com/users/' + this.state.username)
          .then(response => response.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
          })
      }

    
      
      render()
      {
        var {items} = this.state;
    
        return (
          <div className="Home text-center">
              <form onSubmit = {this.handleSubmit}>
                <input
                className = "form-control text-center"
                placeholder= "Enter the username you want to search:"
                type = "text"
                name ="username"
                value = {this.state.username}
                onChange = {this.searchedUsername}
                />
              </form>
            <div class = "panel panel-default">
                <div className = "panel-heading"><h1>{items.login}</h1></div>
                <img src={items.avatar_url} className="thumbnail" style= {{width: '25%'}}/>
                <div className = "panel-body">
                    <div className = "col-md-8">
                        <div className="row">
                            <div className = "col-md-12">
                                <span className = "label label-default">{items.followers} Followers</span>
                                <span className = "label label-primary">{items.following} Following</span>
                                <span className = "label label-success">{items.public_repos} Public Repos</span>
                                <span className = "label label-info">{items.public_gists} Public Gists</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      }
    }

    export default Home;