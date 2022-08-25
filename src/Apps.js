import logo from './logo.svg';
import './App.css';

function App() {
  const welcomeWorld = 'Welcome to MyWord Diary'
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          {welcomeWorld}
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h3>
          <a href='./list.html'>Let's Explore the World!</a>
        </h3>
      </header>
      
    </div>
  );
}

export default App;
