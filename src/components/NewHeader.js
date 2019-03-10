import React, { Component } from 'react';
import '../App.css';
import SideNavigation from './SideNavigation';
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





class NewHeader extends Component{

    constructor(props){
        super(props);
        console.log(this.props.isDisplayLinks);
        this.state={
            page:"about"
        }
    }


    handleSiteNav = (newPage) =>{
        console.log("inside handle site nav", newPage);
        this.setState({page:newPage});
    }

    // displayLinks(){
    //     console.log("inside display links method");
    //     return headerLinks.map((link) => (
    //         <li key={link.name}><a  href={link.link}>{link.name}</a></li>
    //     ));
       
    // }

    render(){
        return (
            <div>
            <div className="new-header">
                <img src="img/me.jpg" className="profile-pic" />
                <SideNavigation siteNav={this.handleSiteNav.bind(this)}/>
                
            </div>
            {this.state.page === "about" && <Description />}
            {this.state.page === "skills" && <Skills />}
            {this.state.page === "edu" && <Education />}
            {this.state.page === "projects" && (
              <Experience>
                <SnapOn  name="SnapOn" year="(2013-2015)" img="img/SnapOnBusinessSolutions.gif"/>
                <Sapient  name="Sapient" year="(2012-2013)" img="img/sapientnitro_logo.jpg"/>
                <Fidelity  name="Fidelity" year="(2010-2012)" img="img/fidelity_logo.png"/>
                <Tcs  name="TCS" year="(2010-2010)" img="img/tcs_logo.jpg"/>
                <Wipro  name="Wipro" year="(2006-2010)" img="img/wipro_logo.jpg"/>
              </Experience>
          )}
          {this.state.page === "contact" && <Contact />}
            </div>
            
        );
    }
}

export default NewHeader;