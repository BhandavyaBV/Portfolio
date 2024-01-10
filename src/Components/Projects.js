import axios from 'axios'
import { useState } from 'react'

function Projects(){
    const [projects,setProjects] = useState([])

    axios.get("https://api.github.com/users/BhandavyaBV/repos").then(res=>{
        setProjects(res.data)
    }).catch(err=>{
        setProjects(null);
    })

    return(
        <div className='container mb-5'>
        <div className='row align-items-stretch'>
            {projects.map(item=>{
                return(  
                    // 1f1940
                    <div className='col-4 mt-5 align-self-stretch'>
                        <div className='card' style={{backgroundColor:"#1f1940"}}>
                            <div className='card-body'>
                                <p className='text-white font-120'>{item.name}</p>
                                <p className='text-white' style={{height:"100px",overflowY:"auto"}}>{item.description}</p>
                                <p className='text-white'>Language : {item.language}</p>
                                <button className='btn btn-outline-light'><a href={item.html_url} style={{textDecoration:"none !important"}}>Go to Github</a></button>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
        </div>
        </div>
    )
}

export default Projects