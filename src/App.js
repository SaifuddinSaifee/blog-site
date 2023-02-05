import './App.css';

function App() {
  const title = "This is a blog site";  // No booleans or object type data types
  const likes = 58;
  const link = "https://beta.reactjs.org/";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{likes} Likes</p>

        <p>{1000}</p>
        <p>{"Hello There"}</p>
        <h2>{ ["by Saifuddin", " Kuresh", " Saifee"] }</h2>
        <p>{Math.random() * 10}</p>

        <a href={link}>New ReactJS Docs</a>
        
      </div>
    </div>
  );
}

export default App;
