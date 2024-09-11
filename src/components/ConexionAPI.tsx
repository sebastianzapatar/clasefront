import { useEffect, useState } from "react"
import { Chacter } from "../data/character.model";
import { Character } from "./Character";
export const ConexionAPI = () => {
  const [characters, setcharacters] = useState<Chacter[]>([])
  const cargar=async()=>{
    const response=await fetch(
        'https://thronesapi.com/api/v2/Characters'
    );
    const result=await response.json();
    const datos=result;
    setcharacters(datos);
  }
  useEffect(()=>{
    cargar();
  }
  ,[])
  return (
    <div>
        {
            characters.map((character)=>{
                return(
                    <Character 
                    character={character}
                    key={character.id}></Character>
                )
            })
        }
    </div>
  )
}
