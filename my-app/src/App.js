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
      search: "",
    }
  }

  searchedUsername = event => {
    this.setState({username: event.target.value});
  }

  componentDidMount()
  {
    fetch('https://api.github.com/users/servebotfrank')
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
    var {isLoaded, items} = this.state;

    // if(!isLoaded)
    // {
    //   return <div>Loading...</div>
    // }
    // else{
    //   return <div>{items.}</div>
    // }
    return (
      <div className="App">
        {/* <ul>
          {items.map(item => (
            <li key ={item.id}>
              {item.login}
            </li>
          ))};
        </ul> */}
        <h1>{items.login}</h1>
        <img src={items.avatar_url} alt="new" />
        <form>
          <label htmlFor="username">username</label>
          <input
          type = "text"
          name ="username"
          value = {this.state.username}
          onChange = {this.searchedUsername}
          />
        </form>
      </div>
    );
  }
}

export default App;
