import { Estudiante } from "../models/estudiante"

interface EstudianteProp{
    estudiante:Estudiante
}
export const Mostrar1Estudiante = ({estudiante}:EstudianteProp) => {
  return (
    <>
        <table>
            <thead>
                <th>Nombre</th>
                <th>foto</th>
            </thead>
            <tbody>
                <td>
                    <tr>{estudiante.nombre}</tr>
                    <tr>{estudiante.foto}</tr>
                </td>
            </tbody>
        </table>
    </>
  )
}
