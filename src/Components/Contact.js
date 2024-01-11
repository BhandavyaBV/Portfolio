// service_aqhydno - serviceID
// template_78j0czt - template id

import emailjs, { send } from 'emailjs-com'
import { useState, useRef } from 'react'

function Contact(){
    const [subject,setSubject] = useState(null)
    const [message,setMessage] = useState(null);
    const messageRef = useRef(null);
    const subjectRef = useRef(null);

    function sendMessage(){
        var subjectElem = subjectRef.current;
        var messageElem = messageRef.current;

        var subjectValue = subjectElem.value;
        var messageValue = messageElem.value;

        console.log(subjectValue)
        console.log(messageValue);

        if(subjectValue && messageValue){
            emailjs.send('service_aqhydno',"template_78j0czt",{subject:subjectValue,message:messageValue},"72vTjcvzu_pdmTSl4").then(res=>{
                if(res.status==200){
                    alert("Email sent successfully")
                }
                else{
                    alert("Unable to send the email")
                }
                messageElem.value = null;
                subjectElem.value = null;
    
            })
        }
        else{
            alert("Missing required fields")
        }
        
    }

    return(
        <div className='container' >
            <div className='w-50' style={{margin:"50px auto"}}>
                <h1 className='font-200 my-4'>Let's Connect . . .</h1>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Subject*</label>
                    <input ref={subjectRef} type="email" className="form-control bg-transparent border-white white" id="exampleFormControlInput1" placeholder="Subject" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message*</label>
                    <textarea ref={messageRef} className="form-control bg-transparent border-white white" id="exampleFormControlTextarea1" placeholder='Your message' rows="4" required></textarea>
                </div>
                <button type="button" class="btn btn-outline-light" onClick={sendMessage}>Send message</button>
                <button type="button" class="btn btn-outline-success ms-3"><a href="https://www.linkedin.com/in/bhandavyabv/" target='_blank'></a>Go to LinkedIn</button>
            </div>
           
        </div>
    )
}

export default Contact