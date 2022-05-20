import './App.css';
import {Component} from 'react';
import { render } from 'react-dom';

class App extends Component {

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
    // fetch('https://api.github.com/users/'+this.state.username,)
    //     .then(response => response.json())
    //     .then(json => {
    //       this.setState({
    //         isLoaded: true,
    //         items: json,
    //       })
    //     })
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
      <div className="App">
        <label>Enter the username you want to search:
          <form onSubmit = {this.handleSubmit}>
            <label htmlFor="username"></label>
            <input
            type = "text"
            name ="username"
            value = {this.state.username}
            onChange = {this.searchedUsername}
            />
          </form>
        </label>
        <h1>{items.login}</h1>
        <img src={items.avatar_url} alt="" />
        <p1>{this.state.username}</p1>
      </div>
    );
  }
}

export default App;
