import React from "react";
import style from './style.module.scss';

const MySpace = () => {
    return (
        <div>
            <div className={style.space}>
                <h1>Top 10 Facts About Space!</h1>
                <p>Do you want to learn about space? Well you've come to the right place! Check out these 10 facts about space...</p>
                <h5>Watch this video from Deep Space High to find out more!</h5>
                    <iframe src="https://content.jwplatform.com/previews/3fPbUkKC"></iframe><br></br>
                <p>1. The first person on the moon was Neil Armstrong.<br></br>
                    2. The first person in space was Yuri Gagarin.<br></br>
                    3. For a rocket to get into orbit around Earth, it needs to travel 17,600 miles per hour!<br></br>
                    4. You could fit 1.3 million Earths into the Sun!<br></br>
                    5. Space is a very cold place at –270.45 Celsius!<br></br>
                    6. The Moon reflects light from the Sun.<br></br>
                    7. In our solar system there are 8 planets.<br></br>
                    <iframe src="https://cdn.jwplayer.com/previews/HrIKRUAU"></iframe><br></br>
                    8. The longest time an astronaut has spent in space is 437 days!<br></br>
                    9. It is completely silent in space.<br></br>
                    10. A star is a ball of very hot gases.<br></br>
                    
                </p>
            </div>
            <button className={style.buttonPlanet}><a href='https://youtu.be/sSEkQDq42lw'>Watch your fun space entertaiment here...</a> </button>
            
        </div>
    );
}
export default MySpace;