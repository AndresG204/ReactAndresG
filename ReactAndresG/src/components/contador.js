import React from "react";
import Swal from "sweetalert2"
export default class Contador extends React.Component{
    constructor(){
        super();
        this.state ={
            contador:0,
            contadorModificaciones:0
        };
    }
    componentDidMount(){
        Swal.fire({
            icon:"success",
            title:"he sido creado"
        })
    }

    componentDidUpdate(preProps,preState){
        if(preState.contador !== this.state.contador){
            this.setState({contadorModificaciones:this.state.contadorModificaciones + 1})
            Swal.fire("he sido modificado")
        }
    }
    componentWillUnmount(){
        Swal.fire({
            icon:"error",
            title:"me estas matando",
            text: "estas elimiando el componente "
        })
    }

    onClickIncrementar(){
        this.setState({contador:this.state.contador+1});
    };
    onClickDecrementar(){
        this.setState({contador:this.state.contador-1})
    }
    render(){
        return(
            <>
            <button onClick={()=> this.onClickIncrementar()}>Incrementar</button>
            <button onClick={()=> this.onClickDecrementar()}>Decrementar</button>
            <h1>{this.state.contador}</h1>
            <h2>{this.state.contadorModificaciones}</h2>
            </>
        )
    }
}