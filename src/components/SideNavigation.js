import React, { Component } from 'react';
import '../App.css';
import Description from './description';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Wipro from './companies/Wipro';
import Tcs from './companies/Tcs';
import Fidelity from './companies/Fidelity';
import Sapient from './companies/Sapient';
import SnapOn from './companies/SnapOn';





// let navHandler = "about";

class SideNavigation extends Component{

    constructor(props){
        super(props);
        this.state = {
            navHandler : "about"
        }
        this.handleNav = this.handleNav.bind(this);
        // console.log("In side nav constructor page props === ", this.props.page);
        this.handleNavigation = this.handleNavigation.bind(this);


    }

    handleNav(e){
        e.preventDefault();
        console.log("inside handle nav",e.target.id);
        // navHandler = e.target.id;
        // this.setState(prevState => ({
        //     navHandler : e.target.id
        // }));
        // console.log("inside handle nav, page props == ", this.props.page);
        let navHandlerName = e.target.id;
        this.setState((prevState, props) => {
            return {navHandler: navHandlerName};
        });
    }

    handleNavigation(e){
        e.preventDefault();
        let page = e.target.id;
        console.log("before calling handle site nav page == ", page);
        console.log("before calling handle site nav page == ", this.props.siteNav(page));
        
        return this.props.siteNav(page);
    }
    
    render(){

        return (
           <div> 
            {/*<div id="mySidenav" className="sidenav">*/}
            <ul className="headerNav">
                <li><a  onClick={this.handleNavigation} id="about">About</a></li>
                <li><a  onClick={this.handleNavigation} id="skills">Skills</a></li>
                <li><a  onClick={this.handleNavigation} id="edu">Education</a></li>            
                <li><a  onClick={this.handleNavigation} id="projects">Projects</a></li>
                <li><a  onClick={this.handleNavigation} id="contact">Contact</a></li>
          </ul>
          {/*this.state.navHandler === "about" && <Description />*/}
          {/*this.state.navHandler === "skills" && <Skills />}
          {this.state.navHandler === "edu" && <Education />}
          {this.state.navHandler === "projects" && (
              <Experience>
                <SnapOn  name="SnapOn" year="(2013-2015)" img="img/SnapOnBusinessSolutions.gif"/>
                <Sapient  name="Sapient" year="(2012-2013)" img="img/sapientnitro_logo.jpg"/>
                <Fidelity  name="Fidelity" year="(2010-2012)" img="img/fidelity_logo.png"/>
                <Tcs  name="TCS" year="(2010-2010)" img="img/tcs_logo.jpg"/>
                <Wipro  name="Wipro" year="(2006-2010)" img="img/wipro_logo.jpg"/>
              </Experience>
          )}
          {this.state.navHandler === "contact" && <Contact />*/}
          
          
          </div>

        );
    }
} 

export default SideNavigation;