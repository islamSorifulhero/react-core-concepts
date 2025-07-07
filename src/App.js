import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <p>I am a React Person</p>
        <Person name="Rubel" nayika="Mousumi"></Person>
        <Person name="jashim" nayika="shabana"></Person>
        <Person name="Bappa" nayika="cheka"></Person>
        <Person name="Elias k" nayika="Bobita"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const PersonStyle = {
    border:'2px solid red',
    margin:'10px'
  }
  console.log(props);
  return(
  <div style= {{border:'1px solid gold', margin:'10px', padding:'20px'}}>
    <h1>Nayok: {props.name}</h1>
    <h3>Heroin of: {props.nayika}</h3>
  </div>
  )
}
export default App;
