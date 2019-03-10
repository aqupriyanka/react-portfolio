import React, { Component } from 'react';

const languages = ["Java", "J2EE", "HTML" ];
const frameworks = ["WCS", "Struts 1.2", "JSF 1.2", "Hibernate 3.0", "Spring(Core, JDBC)", "EJB 3.0", "JMS" ];
const webTech = [ "JSP", "Servlets", "Web Services", "JavaScript", "Junit", "JSON", "XML", "CSS" ];
const database = ["MongoDB","Oracle 11g-9i -8i", "MySQL", "Postgres", "SQL Server"];
const servers = ["Apache Tomcat 5.5.16", "Jboss 4.2", "WeblogicWeb logic 10.3", "RAD", "WebsphereWeb sphere 6.1"];
const verControl = ["CVS", "VSS", "SVN", "Clearcase", "Accurev"];
const devTools = ["Eclipse" , "Pl/Sql Developer", "Toad", "UML", "Livesite", "IBM WCS, JIRA", "Maven", "Jenkins"];
// let showLanguages = false;

class Skills extends Component{

constructor(props){
    super(props);
    this.state= {
        showLanguages:false,
        showFrameworks:false,
        showWebTech: false,
        showDatabase: false,
        showServers: false,
        showVerControl: false,
        showDevTools: false
    }
    this.showF = this.showF.bind(this);    

}


// shouldComponentUpdate(nextProps, nextState){
//     console.log("inside shoul update",nextState.showLanguages != this.state.showLanguages);
//     console.log(nextState);
//     return nextState.showLanguages != this.state.showLanguages;
// }
componentWillMount(){
    // this.showF = this.showF.bind(this);    
    
}

showF = (id,param) => (e) =>{
    e.preventDefault();
    console.log("target value ==", e);
    console.log("param value ==", param);
    
    this.setState({
        [id]: !(param)
    });
}

render(){
        return (
                <div id="skillsHeading" class="container">
                    <h1> <u>Skills </u></h1>
                    <div class="content">
                    <h3 className="skillHeader">Languages 
                    { this.state.showLanguages ? 
                        <span onClick={this.showF("showLanguages",this.state.showLanguages)}><img src="img/upload.png" width="16px" height="16px" /></span>
                         : <span onClick={this.showF("showLanguages",this.state.showLanguages)}><img src="img/download.png" width="16px" height="16px" /></span>
                    }
                    </h3>
                    
                    {
                        (this.state.showLanguages &&
                        <div>
                        <hr />
                            <ul>
                                {languages.map((language) => (
                                    <li key={language}>{language}</li>
                                ))}
                            </ul>
                            </div>)
                    }
                    <br />
                        

                    <h3 className="skillHeader">Frameworks
                    { this.state.showFrameworks ? 
                        <span onClick={this.showF("showFrameworks",this.state.showFrameworks)}><img src="img/upload.png" width="16px" height="16px" /></span>
                         : <span onClick={this.showF("showFrameworks",this.state.showFrameworks)}><img src="img/download.png" width="16px" height="16px" /></span>
                    }
                    </h3>
                    
                    {
                        (this.state.showFrameworks &&
                        <div>
                        <hr />
                            <ul>
                                {frameworks.map((framework) => (
                                    <li key={framework}>{framework}</li>
                                ))}
                            </ul>
                            </div>)
                    }
                    <br />
                    
                    <h3 className="skillHeader">Web Tech
                    { this.state.showWebTech ? 
                        <span onClick={this.showF("showWebTech",this.state.showWebTech)}><img src="img/upload.png" width="16px" height="16px" /></span>
                         : <span onClick={this.showF("showWebTech",this.state.showWebTech)}><img src="img/download.png" width="16px" height="16px" /></span>
                    }
                    </h3>
                    
                    {
                        (this.state.showWebTech &&
                        <div>
                        <hr />
                            <ul>
                                {webTech.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                            </div>)
                    }
                    <br />
                    
                    <h3 className="skillHeader">Database
                    { this.state.showDatabase ? 
                        <span onClick={this.showF("showDatabase",this.state.showDatabase)}><img src="img/upload.png" width="16px" height="16px" /></span>
                         : <span onClick={this.showF("showDatabase",this.state.showDatabase)}><img src="img/download.png" width="16px" height="16px" /></span>
                    }
                    </h3>
                    
                    {
                        (this.state.showDatabase &&
                        <div>
                        <hr />
                            <ul>
                                {database.map((db) => (
                                    <li key={db}>{db}</li>
                                ))}
                            </ul>
                            </div>)
                    }
                    <br />
                    
                    <h3 className="skillHeader">Web/App Servers
                    { this.state.showServers ? 
                        <span onClick={this.showF("showServers",this.state.showServers)}><img src="img/upload.png" width="16px" height="16px" /></span>
                         : <span onClick={this.showF("showServers",this.state.showServers)}><img src="img/download.png" width="16px" height="16px" /></span>
                    }
                    </h3>
                    
                    {
                        (this.state.showServers &&
                        <div>
                        <hr />
                            <ul>
                                {servers.map((server) => (
                                    <li key={server}>{server}</li>
                                ))}
                            </ul>
                            </div>)
                    }
                    <br />
                    
                    <h3 className="skillHeader">Version Control
                    { this.state.showVerControl ? 
                        <span onClick={this.showF("showVerControl",this.state.showVerControl)}><img src="img/upload.png" width="16px" height="16px" /></span>
                         : <span onClick={this.showF("showVerControl",this.state.showVerControl)}><img src="img/download.png" width="16px" height="16px" /></span>
                    }
                    </h3>
                    
                    {
                        (this.state.showVerControl &&
                        <div>
                        <hr />
                            <ul>
                                {verControl.map((verC) => (
                                    <li key={verC}>{verC}</li>
                                ))}
                            </ul>
                            </div>)
                    }
                    <br />
                    
                    <h3 className="skillHeader">Dev Tools
                    { this.state.showDevTools ? 
                        <span onClick={this.showF("showDevTools",this.state.showDevTools)}><img src="img/upload.png" width="16px" height="16px" /></span>
                         : <span onClick={this.showF("showDevTools",this.state.showDevTools)}><img src="img/download.png" width="16px" height="16px" /></span>
                    }
                    </h3>
                    
                    {
                        (this.state.showDevTools &&
                        <div>
                        <hr />
                            <ul>
                                {devTools.map((devTool) => (
                                    <li key={devTool}>{devTool}</li>
                                ))}
                            </ul>
                            </div>)
                    }
                    <br />
                    
                    </div>                                                                           

                </div>
        );

    }
}

export default Skills;