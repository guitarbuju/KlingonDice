import React ,{useState,useEffect}from 'react';
import "../estilos.css";
import torpedo from "../sounds/torpedo.wav";
import click from "../sounds/click.wav";
import Ay from "../sounds/ouch.mp3";


const Mesa = ({heroe,enemigo,name,name2}) => {
    
    const [dado1, setdado1] = useState(0)
    const [dado2, setdado2] = useState(0)
    const [monto, setmonto] = useState(0)
    const [saldo, setsaldo] = useState(0)
    const [saldo2, setsaldo2] = useState(0)
    const [player, setplayer] = useState(1)
    const [outcome, setoutcome] = useState(null)
    
   
    
    let winner=''

    const clicker= new Audio(click)
    const fire= new Audio(torpedo)
    const ouch=new Audio(Ay)
    
    
    const cambiarInput=(x)=>{
        setmonto(parseInt(x));
        
    }
        
    const balance=()=>{
        clicker.play()

        let suma=0;
       let suma2=0;
        
       if(player===1){
       suma=parseInt(monto)+ parseInt(saldo);
        setsaldo(suma)};
        setsaldo2(saldo);
       if(player===2) {
        suma2=parseInt(monto)+ parseInt(saldo2);
         setsaldo2(suma2)};
      
        if(saldo===0 && player===2){setsaldo(monto)}
        if(saldo2===0 && player===1){setsaldo2(monto)}
       
    }

    
   const Play =()=>{
    if(saldo===0 ||saldo2===0){
        ouch.play()
        alert('Hay que hacer la apuesta')
    
    }else{
    fire.play()
     
    const tempDado1=Math.floor(Math.random() * 6) + 1
    const tempDado2=Math.floor(Math.random() * 6) + 1
    setdado1( tempDado1)
    setdado2(tempDado2)
    
   }
        }
    
   const sumarDados = () => {
    const tempSumatoria = dado1 + dado2;
    setoutcome(tempSumatoria);
  };     
  const noWinner=()=>{
  if( outcome===4 || outcome===5||  outcome===6||  outcome===8||  outcome===9
        ||  outcome===10){
    winner='no hay ganador'; console.log(outcome,'nada',winner)}
    

  }
  useEffect(() => {
    noWinner();
    sumarDados();
    jugadas();
  }, [dado1,dado2,outcome]);
  
  const jugadas=()=>{
        if(player===1 && outcome===2 || player===1 && outcome===3|| player===1 && outcome===12){
            winner=name2;
             setplayer(2); 
             setsaldo2(saldo+saldo2);
             setsaldo(0)
             console.log(outcome,player,winner);}
        else if(player===1 && outcome===7 || player===1 && outcome===11 ){
            winner = name
             setplayer(1); 
             setsaldo(saldo+saldo2);
             setsaldo2(0)
             console.log(outcome,player,winner);}
        else if(player===2 && outcome===2 || player===2 && outcome===3|| player===2 && outcome===12){
            winner=name;
            setplayer(1);
            setsaldo(saldo+saldo2);
            setsaldo2(0); console.log(outcome,player,winner); }
        else if(player===2 && outcome===7 || player===2 && outcome===11 ){
             winner=name2
            setplayer(2); 
            setsaldo2(saldo+saldo2);
            setsaldo(0); console.log(outcome,player,winner);}
                
    } 
                 
    
    
    
  return (
    <div >
        <div id='mesa-cont'>
            <div id='mesa'>
                <div id='objetos'>
                    
                    <div className='card'>
                         <h1 style={{fontFamily:'tng',marginTop:5,color:player===1?'yellow':'white'}}>{name} </h1>
                        <img src={heroe} className='dados-cont' /> 
                    </div>
                          
                        <p  className='dados-cont dados' >{dado1}</p>
                        <div id='response'>
                         <h1 id='response-out'>{outcome
                         } </h1>  
                    </div>
                        <p  className='dados-cont dados' >{dado2}</p>
                    <div  className='card'>
                        <h1 style={{fontFamily:'tng',marginTop:7,marginBottom:30,color:player===2?'yellow':'white'}}>{name2}</h1>
                        <img src={enemigo}  className='dados-cont'  />
                    </div>
                </div>
                <div id='consola'>
                    <input id='monto' type="text" placeholder='Ingresar Monto' value={monto}
                     onChange={(e)=>{cambiarInput(e.target.value)}} autoFocus='autofocus'/>
                     <button id='bet' onClick={balance}>Bet</button>
                     <button id='trigger' onClick={()=>{Play()}} >Shoot!!</button>
                     <div id='saldo'>
                         <h2 className='saldo' style={{color:player===1 ?'yellow':'white'}} >{name} = {saldo}</h2>
                         <h2 className='saldo' style={{color:player===2 ?'yellow':'white'}}>{name2} = {saldo2}</h2>
                       
                    </div>
                </div>
                    
                       
                       
                
            </div>
           
            
            
            
          
      
       
        </div>
        

    </div>

  )}

export default Mesa