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
    
      // componentDidMount()
      // {
      //   fetch('https://api.github.com/users/servebotfrank')
      //       .then(response => response.json())
      //       .then(json => {
      //         this.setState({
      //           isLoaded: true,
      //           items: json,
      //         })
      //       })
      // }
    
      
      render()
      {
        var {items} = this.state;
    
        return (
          <div className="Home">
            <label>Enter the username you want to search:
              <form onSubmit = {this.handleSubmit}>
                <input
                className = "form-control"
                type = "text"
                name ="username"
                value = {this.state.username}
                onChange = {this.searchedUsername}
                />
              </form>
            </label>
            <div class = "panel panel-default">
                <div className = "panel-heading"><h1>{items.login}</h1></div>
            <img src={items.avatar_url} className="thumbnail" />
            <p1>{items.followers}</p1>
            </div>
          </div>
        );
      }
    }

    export default Home;