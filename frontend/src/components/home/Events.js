import '../style/style.css'
import '../style/top.css'
import '../style/framework.css'
import { useState, useEffect } from 'react'
import {detailsHomePage} from '../../api/apiUsers'
import pic10 from '../img/pic10.png'
var executed = false;

const Events = () =>{
    const[values, setAboutus] = useState([{}]);
    useEffect(()=> {
        detailsHomePage("60f3f3799151b21308dc0b11")
            .then(response => setAboutus(response.data))
            .catch (err => {})
            executed=true;        
    })    
 
    return(        
        <div>
        <hr class="btmspace-80"/>
        <section class="group">
          <div class="one_half first">
              <img class="inspace-15 borderedbox" src={pic10} alt=""/> <br/><br/><br/>
            <a href="/details/60f3f3799151b21308dc0b11"><button className="btn btn-info">All Upcoming Events</button></a>
            </div>
          <div class="one_half">
            <ul class="nospace group inspace-15">
              <li class="one_half first btmspace-50">
                <article>
                {[values && values.map(value =>
                <div>
                  <h6 class="heading"><a href="#">{value.name}</a></h6>
                  <p class="nospace"> <b> {value.createdAt} <br/>
                   <h6 style={{fontSize: '1.1vw'}}>  {value.description}</h6> </b>
                  </p>
                  </div>
                )]}
                </article>
              </li>
             
            </ul>
          </div>
        </section>
        </div>
    )
}

export default Events;