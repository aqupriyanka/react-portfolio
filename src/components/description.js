import React, { Component } from 'react';


class Description extends Component{

    render(){
        return (
                <div id="pageHeading">
                    {/* <h1><u> About Me </u></h1>*/}
                    <div id="description">
                        {/*<img src="img/priPic3.jpg" width="200px" height="200px" id="profilePic"/>*/}
                        <div id="nameDetails">
                            <h2 id="name"> I'm Priyanka Arora </h2>
                            <h3 id="des"><i>A Full Stack Developer</i></h3>
                        </div>
                        <div className="clear"></div>
                    </div>

                    <div id="techDescription">
                            <h4>Over 8 years of experience with SKILLS :</h4>

                            <ul>
                                <li>Front end technologies, (like HTML5, CSS3, javascript, jquery, node js, express, <b>REACT</b>, Handlebars JS, Bootstrap) </li>
                                <li>Middleware technologies (like Java, Spring, Hibernate, JSF, JSP, Servlets, EJB, Struts) </li>
                                <li>Back-end technologies (like Oracle Database, Firebase, Mongo DB, MySQL, SQL, Sequelize, Firebase) </li>
                            </ul>
                            <br/>
                            <p>Strong education professional with a Master's degree focused on Information Technology. </p>
                    </div>
                </div>
        );

    }
}

export default Description;