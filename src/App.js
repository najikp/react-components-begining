import './App.css'
import Header from './components/header';
function App() {
 const name="Naji kp"
  return (
    <div className="hello">
      <Header name={name} />
      <h1 style={{color:'red',fontWeight:"lighter"}}>Welcome to React</h1>
      <p>Hello {name} welcome to the React Family</p>
      <Hello />
    </div>
  );
}

export default App;
function Hello(){
  return(<p>This text is from the function</p>);
}