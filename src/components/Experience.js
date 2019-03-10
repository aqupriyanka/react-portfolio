import React, { Component } from 'react';


class Experience extends Component{

    constructor(props){
        super(props);

        this.showCompanies = this.showCompanies.bind(this);
        this.handleCompanyClick = this.handleCompanyClick.bind(this);
        this.resetState = this.resetState.bind(this);
        this.state={
            displayCompanyDetails:false,
            companyElement:null
        }
    }

    handleDetails(e){
        e.preventDefault();
        let companyName = e.target.id;
        return "";
    }

    handleCompanyClick = (child) => () =>{
        // e.preventDefault();
        console.log("inside handle click", child);
        this.setState({displayCompanyDetails:true, companyElement:child});
        return <div>{child}</div>;
    }

    resetState(e){
        e.preventDefault();
        this.setState({displayCompanyDetails:false, companyElement:null});
    }


    showCompanies(){

        console.log("inside show companies");
        const children = this.props.children;

        if(!this.state.displayCompanyDetails){
        return React.Children.map(children, (child, i) => {
            return (

                <li key={child.props.name} className="companyIcon" onClick={this.handleCompanyClick(child)}>
                    <img src={child.props.img} width="200px" height="200px" />
                    <br/>{child.props.year}
                </li>
                )
        });
        } else{
            return (

                <div>
                    <a href="#" onClick={this.resetState}>Back</a>
                    {this.state.companyElement}
                </div>
                
                );
        }

        // return this.props.children;
    }

    render(){
        return (
                <div id="pageHeading">
                    <h1><u> Experience </u></h1>

                    <div className="companies">

                        {/*<span id="company1" onClick={handleDetails}>Snap On</span>
                        <span id="company2" onClick={handleDetails}>Sapient</span>
                        <span id="company3"onClick={handleDetails}>Fidelity</span>
                        <span id="company4" onClick={handleDetails}>TCS</span>
                        <span id="company5" onClick={handleDetails}>Wipro</span>*/}
                        <ul className="companyIcons">
                            {this.showCompanies()}
                        </ul>
        {/*React.Children.map( this.props.children, (child, i) => (child))*/}
                    
                    </div>


                </div>
        );

    }
}

export default Experience;