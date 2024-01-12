// import MY_IMAGE from '../assets/images/1665199765902.jpg'
// import MY_IMAGE from '../assets/images/WhatsApp Image 2024-01-11 at 10.10.33 PM.jpeg'
import MY_IMAGE from "../assets/images/WhatsApp Image 2024-01-11 at 10.10.33 PM.jpeg"

function About(){
    return(
        <div style={{width:"80%", height:"max-content", margin:"0 auto", marginTop:"50px"}}>
            <div className="row">
                <div className="col-5 mt-2">
                    <img src={MY_IMAGE}  height="450"  alt=''/>
                </div>
                <div className="col-7 ps-0">
                    <p className='font-120 text-white mb-0 fw-bold'>Master's in Applied Computer Science, Dalhousie University(May 2023 - Sept 2024)</p>
                    <p style={{textAlign:"justify"}}>As a graduate student, I am actively engaged in acquiring expertise in cutting-edge technologies, while also focusing on mastering development best practices. This dual emphasis equips me with the skills needed to contribute innovatively in the rapidly evolving field of technology. </p>
                    
                    <p className='font-120 text-white mb-0 fw-bold'>Experience</p>
                    <p className='mb-0'>Associate Software Developer, <span style={{fontSize:"80%"}}><i>Aug 2019 - Mar 2023</i></span></p>
                    <p className=''>Maersk GSC, Bangalore</p>
                    <p style={{textAlign:"justify"}}>
                    With a 4-year tenure in full-stack development, I spearheaded projects from conception to deployment, ensuring seamless integration of front-end and back-end technologies. Demonstrated expertise in creating scalable solutions and fostering cross-functional collaboration for successful project outcomes.
                    </p>

                    <p className='font-120 fw-bold mb-0'>Certifications</p>
                    <p className='mb-0'>Certified AWS Cloud Practitioner [Jan 2024] – Amazon Corp</p>
                    <p className='mb-0'>Angular Basic to Intermediate - PluralSight</p>
                    <p className='mb-0'>Javascript Basic and Intermediate - Hacker Rank</p>
                </div>
                
            </div>
          
            <p className='font-200 mt-5 '>Skills</p>
            <div className='row mb-3'>
                <div className='col-6'>
                    <div className='card' style={{backgroundColor:"#e3e3e3"}}>
                        <div className='card-body'>
                            <p className='font-120 fw-bold'>Languages </p>
                           
                            <img src="https://www.vectorlogo.zone/logos/java/java-horizontal.svg" className='pe-2'/>
                            <img src="https://www.vectorlogo.zone/logos/python/python-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" className='pe-2'/>
                            <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg" className='pe-3'/>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='card' style={{backgroundColor:"#e3e3e3"}}>
                        <div className='card-body'>
                            <p className='font-120 fw-bold'>Frameworks</p>

                            <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" className='pe-3'/>
                        </div>
                    </div>
                </div>
                <div className='col-6 mt-3 '>
                    <div className='card' style={{backgroundColor:"#e3e3e3"}}>
                        <div className='card-body'>
                            <p className='font-120 fw-bold'>Database and Cloud Providers</p>

                            <img src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg" className='pe-3'/>
                            
                            <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg" className='pe-3'/>
                        </div>
                    </div>
                </div>
                <div className='col-6 mt-3 '>
                    <div className='card' style={{backgroundColor:"#e3e3e3"}}>
                        <div className='card-body'>
                            <p className='font-120 fw-bold'>Tools</p>

                            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/docker/docker-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg" className='pe-3'/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About