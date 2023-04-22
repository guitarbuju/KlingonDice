
import {React,useEffect} from 'react';
import './App.css';
import  {Cabecera}  from './componentes/Cabecera.jsx';
import Players from './componentes/Players';
import './estilos.css'
import theme from './sounds/theme.wav'

function App() {
  const tema= new Audio(theme);
      
        //window.onclick=()=>{tema.play()}
    useEffect(() => {
      window.onload=()=>{tema.play()}
    }, [])
    onclick=()=>{tema.pause()}
  return (
    <div className="App">
      
      
      <Cabecera />
      <Players />
      
      
     
          
    </div>
  );
}

export default App;
