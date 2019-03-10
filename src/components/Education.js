import React, { Component } from 'react';


class Education extends Component{

    render(){
        return (
                <div id="pageHeading" class="container">
                    <h1><u> Education</u> </h1>

                    <div class="eduClass content">

                        <span class="eduSpan">
                            <img src="img/bootcamp.png" width="200px" height="200" />
                            <h3>Coding Bootcamp</h3>
                            <br /><br />
                            <h4>Javascript Full Stack Web Development</h4>
                            <br />
                            <h4>UCSD Ext, San Diego CA</h4>
                            <br /> <br />                           
                            <h4><b>(Apr 2017 - Oct 2017)</b></h4>
                        </span>

                        <span class="eduSpan">
                            <img src="img/engineering.jpg" width="200px" height="200" />
                            <h3>B.E. In IT</h3>
                            <br /><br />
                            <h4>IP University, India</h4>
                            <br /> <br />                           
                            <h4><b>(Aug 2002 - Jun 2006)</b></h4>
                        </span>

                        <span class="eduSpan">
                            <img src="img/postGraduate.jpg" width="200px" height="200" />
                             <h3>PGDBM in IT</h3>
                            <br /><br />
                            <h4>Symbiosis Center for Distance Learning, India</h4>
                            <br /> <br />                           
                            <h4><b>(Jul 2008 - Jul 2010)</b></h4>
                            
                        </span>

                        <span class="eduSpan">
                            <img src="img/certificate.jpg" width="200px" height="200" />
                            <h3>Certifications</h3>
                            <br /><br />
                            <h4>Sun Certified Java Programmer</h4>
                        </span>
                    </div>
                                        
                </div>
        );

    }
}

export default Education;