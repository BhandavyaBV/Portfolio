// import MY_IMAGE from '../assets/images/1665199765902.jpg'
// import MY_IMAGE from '../assets/images/WhatsApp Image 2024-01-11 at 10.10.33 PM.jpeg'
import MY_IMAGE from "../assets/images/WhatsApp Image 2024-01-11 at 10.10.33 PM.jpeg"

function About(){
    return(
        <div style={{width:"80%", height:"max-content", margin:"0 auto", marginTop:"20px"}}>
            <div className="row">
                {/* <div>
                    <p style={{textAlign:"justify"}}>
                        A dedicated software developer with 5+ years of experience in the IT industry, skilled in complete Software Development Life Cycle (SDLC). Proficient in NodeJS, Python, Java and ReactJS with expertise in leading development teams and writing high-performance Rest APIs. Experienced in both relational and non-relational database, Dockerized applications, and Agile Scrum practices.
                        </p>
                    </div> */}
                <div className="col-5 mt-2">
                    <img src={MY_IMAGE}  height="450"  alt=''/>
                </div>
                <div className="col-7 ps-0 mt-3">
                    <p style={{textAlign:"justify"}}>
                        A dedicated software developer with 5+ years of experience in the IT industry, skilled in complete Software Development Life Cycle (SDLC). Proficient in NodeJS, Python, Java and ReactJS with expertise in leading development teams and writing high-performance Rest APIs. Experienced in both relational and non-relational database, Dockerized applications, and Agile Scrum practices.
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <p className='font-120 text-white mb-0 fw-bold'>Experience</p>
                            <p className='mb-0'>Freelance Coder, <span style={{fontSize:"80%"}}><i>June 2024 - Present</i></span></p>
                            <p className=''>Outlier, Canada (Remote)</p>

                            <p className='mb-0'>Software Developer Intern, <span style={{fontSize:"80%"}}><i>May 2024 - Aug 2024</i></span></p>
                            <p className=''>Dash Hudson, Halifax, Canada</p>
                            
                            <p className='mb-0'>Associate Software Developer, <span style={{fontSize:"80%"}}><i>Aug 2019 - Mar 2023</i></span></p>
                            <p className=''>Maersk GSC, Bangalore, India</p>
                        </div>
                        
                        <div className="col-6">
                            <p className='font-120 text-white mb-0 fw-bold'>Education</p>
                            <p className='text-white mb-0'>Master's in Applied Computer Science, Dalhousie University - Sept 2024</p>
                        </div>
                    </div>
                    

                    <p className='font-120 fw-bold mb-0'>Certifications</p>
                    <a href="https://www.credly.com/badges/09efccfe-8482-46f9-bcf5-e97abb45f63d">Certified AWS Cloud Practitioner [Jan 2024] – Amazon Corp</a><br></br>
                    <a href="https://www.hackerrank.com/certificates/e1c883353809">Javascript Skill Certification (Basic) - Hackerrank</a>
                    <p className='mb-0'>React Tutorial - NetNinja</p>
                </div>
                
            </div>
          
            <p className='font-200 mt-5 '>Skills</p>
            <div className='row mb-3'>
                <div className='col-6'>
                    <div className='card' style={{backgroundColor:"#e3e3e3"}}>
                        <div className='card-body'>
                            <p className='font-120 fw-bold'>Languages </p>
                            <img src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" className='pe-2'/>
                            <img src="https://www.vectorlogo.zone/logos/python/python-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/java/java-ar21.svg" className='pe-3'/>
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
                          
                            <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" className='pe-3'/>
                            <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg" className='pe-3'/>
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