import React, {useState} from "react";
import style from './style.module.scss';

const Email = () => {
    

        
  const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [isSent, setIsSent] = useState(false)
    const thankYouMessage = <p>Thank you for your input!</p>
const form = <form>...</form>

  const submit = (e) => {
    e.preventDefault()
    fetch(`https://hooks.zapier.com/hooks/catch/12962491/bgzubx3/`, {
      method: "POST",
      body: JSON.stringify({ email, comment }),
    }).then(() => setIsSent(true))
      
    }
    
    
    return (
        
        <div className={style.emailus}>
            <h1>Fill out the form</h1>
            <form>
                <input placeholder="Your Email" 
                    type="email" required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            <br />
                <textarea placeholder="Your message here" rows="10" cols="50" required
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            <br />
      
                <button type="submit">Send it!</button>
            </form>
            
      </div>      
  

    );

    
}

export default Email;