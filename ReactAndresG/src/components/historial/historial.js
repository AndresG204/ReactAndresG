import React from "react";

export default class Historial extends React.Component{
    constructor(){
        super();
    }
    leerHistorial(){
        return this.props.historialPeliculas.map((peliculas)=>{
            return(
                <ul>
                    <li key={peliculas}>{peliculas}</li>
                </ul>
            )
        })
    }

    render(){
        return(
            <>
                <ul>{this.leerHistorial()}</ul>
            </>
        )
    }
}