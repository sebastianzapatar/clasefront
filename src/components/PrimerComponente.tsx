import { useState } from "react";


export const PrimerComponente = () => {
  
  const [nombre,setNombre]=useState('Sofia Aristizabal ^o^');
  const [plato,setPlato]=useState('');
  const [comidas,setComida]=
  useState(['Pasta Alfredo','Pizza','Aguacate','Queso','Cebolla'])
  //let nombre='Sofia Aristizabal ^o^';
  
  const cambiar=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //nombre=e.target.value;
    setNombre(e.target.value)
  }
  const cambiarPlato=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //nombre=e.target.value;
    setPlato(e.target.value)
  }
  const agregarPlato=()=>{
    setComida([...comidas,plato])
    setPlato('')
  }
  return (
    <>
    
    <h1>Comidad que JP le roba a Susana</h1>
    
    <input type="text" 
    onChange={cambiarPlato}
    placeholder="Ingrese su comida"
     value={plato}/>
    <ul>
        {comidas.map((comida)=><li key={comida}>{comida}</li>)}
    </ul>
    <button onClick={agregarPlato}>Add comida</button>
    <br/>
    <input type="text" 
    onChange={cambiar}
    placeholder="Ingrese el nombre"></input>
    <div>{nombre}</div>
    </>
  )
}


