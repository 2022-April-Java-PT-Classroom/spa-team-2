import React, { useState} from 'react';
import style from './style.module.scss';

const CommentScreen = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name,message)
        const data = { name,message}
        if (name && message) {
            setList((ls) => [...ls, data])
            setName("")
            setMessage("")
        }
    }
    return (
        <div className={style.comment}>
            <h1>Review Section</h1>
            <form onSubmit={handleSubmit}>
                
                <p>
                    <textarea name="name" placeholder='Your name here' value={name} required onChange={(e) => setName(e.target.value)}>   
                    </textarea>
                </p>
                    <textarea name="message" placeholder='Your message here' value={message} required onChange={(e) => setMessage(e.target.value)}  cols={50} rows={10}>
                    </textarea>
                
                    <button>Submit</button>
                    
            </form>    
            {
                list.map((a) => <div className={style.result}>
                    <table border={0} className={style.table}>
                        <tr>
                            <th>Name|</th>
                            <th>                 </th>
                            <th>         |Message</th>
                        </tr>
                        <tr>
                            <td>{a.name}</td>
                            <td>                  </td>
                            <td>           {a.message}</td>
                        </tr>
                       <br></br>
                    </table>
                    </div>)
         }   
           
        </div>
    );
}

export default CommentScreen;





