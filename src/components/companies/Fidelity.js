import React, { Component } from 'react';


class Fidelity extends Component{

    constructor(){

        super();
        console.log("in Fidelity");
    }

    render(){
        console.log("in Fidelity render");
        
        return (
                <div id="pageHEading">
                    <h1> Fidelity </h1>
                </div>
        );

    }
}

export default Fidelity;