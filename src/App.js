import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: 'md soriful islam',
    job: 'web developer'
  }
  var person2 = {
    name: 'Eva Rahman',
    job: 'singer'
  }
  var beautifulKorbo = {
    color: 'red',
    backgroundColor: 'cyan',
    padding: 20,
    margin: 20
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>My Website</h1>
        <h1 style={{backgroundColor: 'red', color: 'cyan'}}>My heading: {person.name + ' ' + person.job}</h1>
        <h3 style={beautifulKorbo}>{person2.name + ' ' + person2.job}</h3>
        <p>my first react paragraph</p>
      </header>
    </div>
  );
}

export default App;
