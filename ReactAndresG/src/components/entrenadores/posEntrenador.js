import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
export default class PosEntrenador extends  React.Component{
    constructor(){
        super();
        this.state={
            apellido:"",
            nombre:"",
            email:"",
            dni:"",
            fechaIngreso:"2022-04-20",
            calle:"",
            numero:"",
            localidad:"",
            provincia:"",
            error:false
        }
        this.hanleChangeApellido=this.hanleChangeApellido.bind(this);
        this.hanleChangeNombre=this.hanleChangeNombre.bind(this);
        this.hanleChangeEmail=this.hanleChangeEmail.bind(this);
        this.hanleChangeDni=this.hanleChangeDni.bind(this);
        this.hanleChangeCalle=this.hanleChangeCalle.bind(this);
        this.hanleChangeNumero=this.hanleChangeNumero.bind(this);
        this.hanleChangeLocalidad=this.hanleChangeLocalidad.bind(this);
        this.hanleChangeProvincia=this.hanleChangeProvincia.bind(this);
        this.hanleSubmit=this.hanleSubmit.bind(this)
    }

    hanleChangeApellido(e){
        if(e.target.value.length <=12){
            this.setState({apellido: e.target.value})
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del apellido debe ser menor o igual a 12"
            })
        }
    };
    hanleChangeNombre(e){
        if(e.target.value.length <=12){
            this.setState({nombre: e.target.value})
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del nombre debe ser menor o igual a 12"
            })
        }
    };
    hanleChangeEmail(e){
        if(e.target.value.length <=30){
            this.setState({email: e.target.value})
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del email debe ser menor o igual a 30"
            })
        }
    };
    hanleChangeDni(e){
        if(e.target.value.length <=20){
            this.setState({dni: e.target.value })
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del dni debe ser menor o igual a 20"
            })
        }
    };
    hanleChangeCalle(e){
        if(e.target.value.length <=12){
            this.setState({calle: e.target.value})
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud de la calle debe ser menor o igual a 12"
            })
        }
    };
    hanleChangeNumero(e){
        if(e.target.value.length <=12){
            this.setState({numero: e.target.value })
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del numero debe ser menor o igual a 12"
            })
        }
    };
    hanleChangeLocalidad(e){
        if(e.target.value.length <=20){
            this.setState({localidad: e.target.value})
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del localidad debe ser menor o igual a 12"
            })
        }
    };
    hanleChangeProvincia(e){
        if(e.target.value.length <=12){
            this.setState({provincia: e.target.value})
        }else{
            Swal.fire({
                icon:"error",
                title:"Error de longitud",
                text:"la longitud del provincia debe ser menor o igual a 12"
            })
        }
    };
    hanleSubmit(e){
        e.preventDefault();
        if(this.state.apellido.length>0 && this.state.nombre.length>0 && this.state.email.length>0 && this.state.dni.length>0 
            && this.state.calle.length>0&& this.state.numero.length>0 && this.state.localidad.length>0 && this.state.provincia.length>0){
                
                axios.post('http://localhost:8080/pacientes',{
                    apellido: this.state.apellido,
                    nombre: this.state.nombre,
                    email: this.state.email,
                    dni: parseInt( this.state.dni),
                    fechaIngreso: this.state.fechaIngreso,
                    domicilio: {
                        calle: this.state.calle,
                        numero: parseInt(this.state.numero) ,
                        localidad: this.state.localidad,
                        provincia: this.state.provincia
                    }
            })
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

/*    componentDidMount(){
        axios.post('http://localhost:8080/pacientes',{
                apellido: "daniel",
                nombre: "molina",
                email: "matematico@gmail.com",
                dni: 95689,
                fechaIngreso: "2022-03-01",
                domicilio: {
                    calle: "Calle 26",
                    numero: 888,
                    localidad: "caobos",
                    provincia: "cucuta"
                }
        })
    }*/
    render(){
        return(
            <>
                <form onSubmit={this.hanleSubmit}>
                    <label >apellido</label><br/>
                    <input
                        type="text"
                        value={this.state.apellido}
                        onChange={this.hanleChangeApellido}
                    /><br/>

                    <label>nombre</label><br/>
                    <input
                        type="text"
                        value={this.state.nombre}
                        onChange={this.hanleChangeNombre}
                    />
                    <br/>
                    <label>email</label><br/>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.hanleChangeEmail}
                    />
                    <br/>
                    <label>dni</label><br/>
                    <input
                        type="text"
                        value={this.state.dni}
                        onChange={this.hanleChangeDni}
                    />
                    <br/>
                    <label>calle</label><br/>
                    <input
                        type="text"
                        value={this.state.calle}
                        onChange={this.hanleChangeCalle}
                    />
                    <br/>
                    <label>numero</label><br/>
                    <input
                        type="text"
                        value={this.state.numero}
                        onChange={this.hanleChangeNumero}
                    />
                    <br/>
                    <label>localidad</label><br/>
                    <input
                        type="text"
                        value={this.state.localidad}
                        onChange={this.hanleChangeLocalidad}
                    />
                    <br/>
                    <label>provincia</label><br/>
                    <input
                        type="text"
                        value={this.state.provincia}
                        onChange={this.hanleChangeProvincia}
                    />
                    <br/>
                {this.state.error && <span style={{color: "red"}}>Campos vacios</span>}<br/>
                <button type="submit" >Enviar</button>
                </form>
      </>
        )
    }
}