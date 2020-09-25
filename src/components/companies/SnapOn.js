import React, { Component } from 'react';


class SnapOn extends Component{

    constructor(){

        super();
        console.log("in SnapOn");
    }

    render(){
        console.log("in SnapOn render");
        
        return (
                <div>
                    <h1> SnapOn </h1>
                </div>
        );

    }
}

export default SnapOn;