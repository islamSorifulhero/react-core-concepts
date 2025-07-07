import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <p>I am a React Person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  return(
  <div style= {{border: '2px solid red', backgroundColor: 'cyan', color: 'black', padding: '30px', margin: '10px'}}>
    <h1>Name: Sakib khan, All hasan</h1>
    <h3>Hero of the year</h3>
  </div>
  )
}
export default App;
