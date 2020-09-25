import React, { Component } from 'react';


class Sapient extends Component{

    constructor(){

        super();
        console.log("in Sapient");
    }

    render(){
        console.log("in Sapient render");
        
        return (
                <div>
                    <h1> Sapient </h1>
                </div>
        );

    }
}

export default Sapient;