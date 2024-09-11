import { estudiantes } from "../data/estudiantes";
import { useState } from "react";
import { Mostrar1Estudiante } from "./Mostrar1Estudiante";

export const MostrarEstudiantes = () => {
    const [estudiantesEIA, setestudiantesEIA] = useState(estudiantes);
  return (
    <>
        <h1>Lista Pretendientes Sofia</h1>
        {
            estudiantesEIA.map((estudiante)=>{
                return(
                    <>
                        <Mostrar1Estudiante 
                        estudiante={estudiante}
                        key={estudiante.id}></Mostrar1Estudiante>
                    </>
                )
            })
        }
        <button>Agregar estudiante</button>
    </>
  )
}
