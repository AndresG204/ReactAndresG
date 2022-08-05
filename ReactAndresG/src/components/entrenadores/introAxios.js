import React from "react";
import axios from "axios";

export default class IntroAxios extends React.Component{
    constructor(){
        super();
        this.state={
            listaEntrenadores:[]
        }
    }
    hanleOnClick(){
        axios('http://localhost:8080/pacientes')
        .then((response)=>this.setState({listaEntrenadores:response.data}))
    }
    leerApi(){
        return this.state.listaEntrenadores.map((persona)=>{
            console.log(persona);
            return(
                <ul key={persona.nombre}>
                    <li>nombre:  {persona.nombre}  -apellido:  {persona.apellido}  -dni:  {persona.dni} -gmail:{persona.email}
                    -domicilio( -calle:{persona.domicilio.calle} -numero:{persona.domicilio.numero}
                    -localidad: {persona.domicilio.localidad} - provincia:{persona.domicilio.provincia} )
                    </li>
                </ul>
            )
        })
    }
    

    render(){
        console.log(this.state.listaEntrenadores);
        return(
                <ul>
                    <li>{this.leerApi()}</li>
                    <button onClick={()=> this.hanleOnClick()}>consultar api</button>
                    
                </ul>
            )
        

    
        
    }


}