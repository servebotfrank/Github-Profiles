import './App.css';

function App() {
  const title = "Welcome to the blog";
  const likes = 50;
  const person = {name : 'yoshi', age: 30};
  const link = "http://www.reddit.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes }</p>
        <h1>{person.age}</h1>
        <a href ={link}> Reddit</a>
      </div>
    </div>
  );
}

export default App;
