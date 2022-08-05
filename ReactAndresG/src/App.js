import React from "react";
import Contador from "./components/contador";
import VegetaFlexion from "./components/vegetaFlex";
import RenderCards from "./components/componentsOfNetflix/renderCards";
import LogingUsuario from "./components/logingUsuario/loging";
import Historial from "./components/historial/historial";
import IntroAxios from "./components/entrenadores/introAxios";
import PosEntrenador from "./components/entrenadores/posEntrenador";



export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            pagina:<></>,
            historial:[]
        };
        this.agregarHistorial =this.agregarHistorial.bind(this)
    }

    agregarHistorial=(unaPelicula)=>{
        let nuevaPelicuala=this.state.historial;
        nuevaPelicuala.push(unaPelicula);
        this.setState({historial:nuevaPelicuala})
    }

    onClickCambiarPagina(pagina){
        this.setState({pagina:pagina})
    }


    render(){
        return(
            <>
                <button onClick={()=>this.onClickCambiarPagina(<Contador/>)}>contador</button>
                <button onClick={()=>this.onClickCambiarPagina(<VegetaFlexion/>)}>flexion</button>
                <button onClick={()=>this.onClickCambiarPagina(<RenderCards agregarHistorial={this.agregarHistorial}/>)}>Netflix</button>
                <button onClick={()=>this.onClickCambiarPagina(<LogingUsuario/>)}>Loging</button>
                <button onClick={()=>this.onClickCambiarPagina(<Historial historialPeliculas={this.state.historial}/>)}>Historial</button>
                <button onClick={()=>this.onClickCambiarPagina(<IntroAxios/>)}>Intro axios</button>
                <button onClick={()=>this.onClickCambiarPagina(<PosEntrenador/>)}>post con axios</button>
                <div>
                <p></p>
                <p></p>
                <p></p>
                {this.state.pagina}
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                </div>
                <button onClick={()=>this.onClickCambiarPagina(<></>)}>Eliminar conponente</button>
            </>

        )
        
    }
}