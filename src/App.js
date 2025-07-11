import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <p>I am a React Person</p>
        <Person name="Rubel" nayika="Mousumi"></Person>
        <Person name="jashim" nayika="shabana"></Person>
      </header>
    </div>
  );
}
function Person(props){
  return(
  <div style= {{border:'1px solid gold', margin:'10px', padding:'20px'}}>
    <h1>Nayok: {props.name}</h1>
    <h3>Heroin of: {props.nayika}</h3>
  </div>
  )
}
export default App;



