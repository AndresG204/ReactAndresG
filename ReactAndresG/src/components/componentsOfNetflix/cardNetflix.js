import React from "react";
import styles from "./styles/styles.module.css"
export default class Card extends React.Component{
    render(){
        return(
            <div className={styles.card}  >
              <h3> {this.props.titulo} </h3>
              <h4> {this.props.genero}</h4>
          </div>
        )
    }
}