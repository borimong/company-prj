import Button from "./Button"; 
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function Hello () {

  useEffect(()=> {
    console.log("hi : )");
    return () =>
      console.log("bye :(");
  }, []);


  useEffect(function() {
    console.log("hi : )");
    return function () {
      console.log("bye :(");
    };
  }, []);

 

}

function App() {

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing (prev => !prev);
  return <div>
    {
      showing ? <Hello/> : null 
    }
    <button onClick = {onClick} >{showing ? "Hide" : "Show"}</button>
  </div>

  /*const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);


  
   
  useEffect(() => {console.log("i run only once");}, []);

  useEffect(() => {console.log("i run when keyword changes.");}, [keyword]);

  useEffect(() => {console.log("i run when counter changed");}, [counter]);

  useEffect(() => {console.log("i run when counter or keyword changed");}, [counter, keyword]);

  return (
    <div>
      <input value = {keyword} onChange = {onChange} type="text" placeholder = "Search here"/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick = {onClick}>Click me!</button>
      

      
    </div> 
    );
    */
}

export default App;
