import React from "react";
import Swal from "sweetalert2";
export default class LogingUsuario extends React.Component{
    constructor(){
        super();
        this.state={
            usuario:"",
            contraseña:"",
            error:false,
        };
        this.hanleChangeUsuario = this.hanleChangeUsuario.bind(this);
        this.hanleChangeContraseña= this.hanleChangeContraseña.bind(this);
        this.hanleSubmit=this.hanleSubmit.bind(this)

    }
    hanleChangeUsuario(e){
        if(e.target.value.length <=12){
            this.setState({usuario: e.target.value})
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del nombre debe ser menor o igual a 12"
            })
        }
    };
    hanleChangeContraseña(e){
        if(e.target.value.length <=12){
            this.setState({contraseña: e.target.value})
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del contraseña  debe ser menor o igual a 12"
            })
        }
    };
    hanleSubmit(e){
        e.preventDefault();
        if(this.state.contraseña.length>0 && this.state.usuario.length>0){
            Swal.fire({
                icon:"success",
                title:"Enviado",
                text:"Formulario enviado correctamente"
            })
            this.setState({error:false})
        }else{
            Swal.fire({
                icon:"error",
                title:"ERROR",
                text:"Formulario vacio"
            })
            this.setState({error:true})
        }
    }
    render(){
        return(
            <>
                <form onSubmit={this.hanleSubmit}>
                <label >usuario</label><br/>
                <input
                    type="text"
                    value={this.state.usuario}
                    onChange={this.hanleChangeUsuario}
                /><br/>
        
                <label>contraseña</label><br/>
                <input
                    type="text"
                    value={this.state.contraseña}
                    onChange={this.hanleChangeContraseña}
                />
                <br/>
                {this.state.error && <span style={{color: "red"}}>Campos vacios</span>}<br/>
                <button type="submit" >Enviar</button>
                </form>
          </>
        )
    }
}