import React from "react";
import Contenedor from "./contenedor";

const lista =[
    ["Mean Girls", "Comedy", "https://www.youtube.com/embed/EMzEmGfTuM4"],
    ["Die Hard", "Action", "https://www.youtube.com/embed/jaJuwKCmJbY"],
    ["Hot Fuzz", "Comedy", "https://www.youtube.com/embed/ayTnvVpj9t4"],
    ["Kill Bill", "Action", "https://www.youtube.com/embed/Upwg6JMtyCg"],
    ["John Wick", "Action", "https://www.youtube.com/embed/C0BMx-qxsP4"],
    ["Shrek", "Fantasy", "https://www.youtube.com/embed/CwXOrWvPBPk"],
    ["Ted", "Comedy", "https://www.youtube.com/embed/9fbo_pQvU7M"],
    ["The Godfather", "Crime", "https://www.youtube.com/embed/UaVTIH8mujA"],
    ["Avengers", "Action", "https://www.youtube.com/embed/eOrNdBpGMv8"],
    ["Amelie", "Drama", "https://www.youtube.com/embed/HUECWi5pX7o"],
    ["The Dark Knight", "Action", "https://www.youtube.com/embed/EXeTwQWrcwY"],
    ["Angry Men", "Drama", "https://www.youtube.com/embed/_13J_9B5jEk"],
    ["Flashback", "Mystery", "https://www.youtube.com/embed/sQp1uytMuMA"],
    ["Luca", "Fantasy", "https://www.youtube.com/embed/EJk_Z-OasXc"],
    ["Cruella", "Comedy", "https://www.youtube.com/embed/_nvO-yhc61w"],
    ["Pulp Fiction", "Crime", "https://www.youtube.com/embed/s7EdQ4FqbhY"],
    ["The Good, the Bad and the Ugly", "Western", "https://www.youtube.com/embed/Q-mXj9RtKjg"],
    ["Fight Club", "Drama", "https://www.youtube.com/embed/qtRKdVHc-cE"],
    ["Forrest Gump", "Drama", "https://www.youtube.com/embed/bLvqoHBptjg"],
    ["Inception", "Crime", "https://www.youtube.com/embed/YoHD9XEInc0"],
    ["Goodfellas", "Crime", "https://www.youtube.com/embed/qo5jJpHtI1Y"],
    ["Life Is Beautiful", "Drama", "https://www.youtube.com/embed/pAYEQP8gx3w"],
    ["Spirited Away", "Fantasy", "https://www.youtube.com/embed/ByXuk9QqQkk"],
    ["Interstellar", "Adventure", "https://www.youtube.com/embed/zSWdZVtXT7E"],
    ["The Pianist", "Drama", "https://www.youtube.com/embed/BFwGqLa_oAo"]
  ];
const generos=[];
lista.map((peliculas) =>{
    if(!generos.includes(peliculas[1])){
        generos.push(peliculas[1])
    }
});
export default class RenderCards extends React.Component{
    render(){
        return(
            <div>
            {generos.map((generos,index)=>{
                return <Contenedor genero={generos} peliculas={lista} agregarHistorial={this.props.agregarHistorial} hi key={generos+index}/>
            })}
          </div>
        )
    }
}