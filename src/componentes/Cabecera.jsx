import React from 'react'
import enterprise from '../img/enterprise.png'
import theme from '../sounds/theme.wav'

export const Cabecera = ({eltema}) => {
  return (
    <div className="App-body cabecera">
      
        <img id='enterprise'  style={{width:200,zIndex:2,position:'absolute',marginTop:-60}} src={enterprise} />
        <h1 className='title' >Bienvenido a <span style={{fontFamily:'tng', color:'	#FFD700',
        textShadow:' 1.5px 1.5px 1.5px black,3px 3px 3px white ,4px 4px 8px black',fontSize:100}}>
          STAR TREK</span> "KLINGON Dice"</h1>  
        <h2 className='title'>Click para escoger uno de la tripulación </h2>
        
    </div>
  )
}
