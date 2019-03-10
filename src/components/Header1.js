import React, { Component } from 'react';
import '../App.css';



const headerLinks= [
        {name: "LinkedIn", link:"https://www.linkedin.com/in/priyanka-arora-30bb1636/"},
        {name: "Github", link:"https://github.com/aqupriyanka"},
        {name: "Email", link:"mailto:priyanka.arora2018@gmail.com"},
        {name: "StackOverflow", link:"https://stackoverflow.com/users/7696901/priyanka"}
        ];

class Header1 extends Component{

    constructor(props){
        super(props);
        console.log(this.props.isDisplayLinks);
        // this.displayLinks = this.displayLinks.bind(this);
    }

    displayLinks(){
        console.log("inside display links method");
        return headerLinks.map((link) => (
            <li key={link.name}><a  href={link.link}>{link.name}</a></li>
        ));
       
    }

    render(){
        return (
            <div className="header-div">
                <div>
                    <ul className="portfolio-links">
                        {this.props.isDisplayLinks && this.displayLinks()}
                    </ul>
                 </div>

                <button className="dwnld-res-btn" >
                    <a href="resources/Priyanka_Arora-Resume.pdf" download="">
			 	    Download My Resume</a>
                </button>
            </div>
        );
    }
}

export default Header1;