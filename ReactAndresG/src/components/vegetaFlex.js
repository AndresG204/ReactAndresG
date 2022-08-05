import React from "react";
import styles from "../styles/styles.module.css"
export default class VegetaFlexion extends React.Component{
    constructor(){
        super();
        this.state={
            flexion :true,
            contador:0,
        };
    }

    onClickFlexion(){
        this.setState({flexion: !this.state.flexion});

        if(this.state.flexion){
            this.setState({contador:this.state.contador+1});
        }
    }

    render(){
        return(
            <>
                <h3>VegetaComponent</h3>
                {this.state.flexion?(<img className={styles.img} src="https://t2.uc.ltmcdn.com/es/posts/0/9/5/que_musculos_se_trabajan_con_las_flexiones_de_pecho_50590_1_600.jpg"></img>):(<img className={styles.img} src="https://images.ecestaticos.com/ceWCtDSWSxyo9OFLTEwOC_-aXe4=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F572%2F679%2F17e%2F57267917e552e4d4474852040d7f390b.jpg"></img>)}
                <button onClick={()=>this.onClickFlexion()}>hacer flexion</button>
                <h2>{this.state.contador}</h2>
            </>
        )
    }

}
