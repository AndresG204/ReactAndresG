import React from "react";
import Card from "./cardNetflix";
export default class Contenedor extends React.Component{
    constructor(){
        super();
        this.state={
            peliculaSelecionada: [],
        };
    }

    componentDidUpdate(preProps,preState){
        if(preState.peliculaSelecionada!=this.state.peliculaSelecionada && this.state.peliculaSelecionada[0]!=null){
            this.props.agregarHistorial(this.state.peliculaSelecionada[0])

        }

    }
    handleOnClick(peli){
        if(this.state.peliculaSelecionada[0]==peli[0]){
            this.setState({peliculaSelecionada:[]})
        }
        else{
            this.setState({peliculaSelecionada:peli})
        }
    }
    mostrarTrailer(){
        if(this.state.peliculaSelecionada[0]!=null){
            return (
                <iframe 
                    width="560" 
                    height="315" 
                    src={this.state.peliculaSelecionada[2]} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            )

        }
    }

    filtrarCarta(){
        return this.props.peliculas.map((peliculas)=>{
            if (peliculas[1]== this.props.genero){
                return(
                    <li key={peliculas} onClick={()=>this.handleOnClick(peliculas)}>
                        <Card titulo={peliculas[0]} genero={peliculas[1]} key={peliculas}/>
                    </li>
                );
            }
        });
    };
    render(){
        return(
            <>
                <h1> {this.props.genero}</h1>
                <ul> {this.filtrarCarta()}</ul>

                {this.mostrarTrailer()}
            </>
        )
    }

}