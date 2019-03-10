import React, { Component } from 'react';


class Wipro extends Component{

    constructor(){

        super();
        console.log("in wipro");
    }

    render(){
        console.log("in wipro render");
        
        return (
                <div id="pageHEading">
                    <h1> Wipro </h1>

                    <h2>Projects :</h2>
                    <ol>
                        <li>
                            <h3>Campaign Management System, Aircel, India</h3>
                            <h4>Sr. Developer</h4>
                            <h4>Jul 2009 - Feb 2010</h4>
                            <h4>Technlogies Used: Eclipes, Spring Batch Framework, Quartz Scheduler, MySql, JSP, Servlet, SVN</h4>
                        </li>

                        <li>
                            <h3>Enterprise Payment System, Aircel, India</h3>
                            <h4>Developer</h4>
                            <h4>Nov 2008 - Jul 2009</h4>
                            <h4>WebLogic 10.3, Eclipes, JSF 1.2, Hibernate3.0,JMS, Ejb 3.0, WebServices, TOAD, KENAN</h4>
                        </li>

                        <li>
                            <h3>Masteri Linedata Services, France/India Developer</h3>
                            <h4>Sr. Developer</h4>
                            <h4>Jan 2008 - Nov 2008</h4>
                            <h4>Technlogies Used: Oracle Database 10g, TOAD, SQL, MAGIC tool</h4>
                        </li>

                        <li>
                            <h3>Video Merchandising System, HP UK</h3>
                            <h4>Developer</h4>
                            <h4>May 2007 - Jan 2008</h4>
                            <h4>Technlogies Used: ATG Framework 2006.3, Weblogic 8.1, Oracle 10g, Eclipse 3.2, Tortoise SVN 1.4, Edit Plus, Toad 6.0</h4>
                        </li>

                        <li>
                            <h3>Billing Management, Wipro Technology, India</h3>
                            <h4>Developer</h4>
                            <h4>Oct 2006 - May 2007</h4>
                            <h4>Technlogies Used: DB2, Web sphere Server, XML SPY Tool, Java, MQ Adapter</h4>
                        </li>

                    </ol>
                </div>
        );

    }
}

export default Wipro;