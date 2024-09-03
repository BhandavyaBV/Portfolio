import { Link } from "react-router-dom"
import Typewriter from 'typewriter-effect';
function Home(){
    const texts = [
        "I'm a .Net full stack developer",
        "Familiar with ASP .net Core , MVC, Web API and Javascript and Python ",
        "AWS Certified Colud Practitioner",
        "I'm into  web development using ReactJs, Vue.js and Angular",
      ];
    
    return(
        <div style={{margin:"200px auto",width:"600px", marginTop:"200px"}}>
            <Typewriter className="font-150"
                options={{
                strings: texts,
                autoStart: true,
                loop: true,
                deleteSpeed:30,
                delay:50,
                }}
            />
            <h1 className="">Get to know me better . . . </h1>
            
            <p  className=" font-150"><Link to="/about">Get started</Link></p>
        </div>
    )
}

// service_8r7atyn

export default Home