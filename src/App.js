// import './App.css';
// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>I am a React Person</h1>
//         <p>I love React developer</p>
//         <Person name="soriful" age="22" job="software developer"></Person>
//       </header>
//     </div>
//   );
// }
// function Person(pulls){
//   return(
//   <div style={{backgroundColor: 'red', color: 'black', padding: '40px'}}>
//     <h1>user name: {pulls.name}</h1>
//     <h2>year: {pulls.age}</h2>
//     <h3>JobPlace: {pulls.job}</h3>
//   </div>
//   )
// }
// export default App;

// ParentComponent.jsx (React Example)


function ChildComponent() {
  return(
  <div>
    <header className='header-component'>
      <h1>Hi I am single</h1>
      <h3>ready to mingle</h3>
      <p>I am a zarnalis</p>
      <Korim name= 'salam' age= '33' />
    </header>
  </div>
  );
}
function Korim(props){
  return(
  <div>
    <h1>user name: {props.name}</h1>
    <h1>user age: {props.name}</h1>
  </div>
  )
}
export default ChildComponent;