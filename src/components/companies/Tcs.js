import React, { Component } from 'react';


class Tcs extends Component{

    constructor(){

        super();
        console.log("in tcs");
    }

    render(){
        console.log("in tcs render");
        
        return (
                <div className="companyDetails">
                    <h1> TCS </h1>

                    <h2>Deutsche Bank, India— Developer</h2>
                    <h3>Feb 2010 - Nov 2010</h3>

                    <h4><b>Responsibilities:</b></h4>
                    <ul>
                        <li>Worked on Stock Grid Screen (EMC module).</li>
                        <li>Worked with struts, javascripts, DTO and Rule manager, to fetch the data and display on the screen.</li>
                        <li>DTO’s used to display the selected the data.</li>
                        <li>Created ajax calls to send request and display data.</li>
                        <li>Entity beans are used to fetch data from database.</li>
                        <li>Message driven beans are used to get message from JMS queues.</li>
                        <li>Used Ant as a build tool for building the application</li>
                        <li>Accessed database using SQL Queries, PL/SQL scripts</li>
                        <li>Worked on Performance Optimization by optimizing SQL, PL/SQL queries</li>
                        <li>Worked on performance issues and UAT issues.</li>
                        <li>Worked on object serialization and saved in the database.</li>
                        <li>New rules applied to corporate actions were saved in database and retrieved from database using object serialization.</li>
                        <li>Multithreading was used to limit the access.</li>
                        <li>Webservices were used as consumer.</li>
                        <li>Worked on SI(System Integration), EMC(Entitled Management), RMC(Rule Manager) modules.</li>
                        <li>Fixed bugs for other team members in their work.</li>
                        <li>Helped other team members in their work. </li>
                    </ul>

                    <h4><b>Environment : </b></h4>
                    <h4>WebLogic 10.3, Eclipse, Struts 1.2, JMS, Ejb 2.0, Web Services, Ajax, JavaScript, SQL Developer, JDBC, VSS</h4>

                </div>
        );

    }
}

export default Tcs;