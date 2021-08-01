import '../style/style.css'
import '../style/top.css'
import '../style/framework.css'
import { useState, useEffect } from 'react'
import {detailsHomePage} from '../../api/apiUsers'
import pic23 from '../img/pic10.png'
import {API} from '../../utils/config'

const Notice = () =>{
    const[values, setAboutus] = useState([{}]);

    useEffect(()=> {
        detailsHomePage("60f3c0b79151b21308dc0aa8")
        .then(response => setAboutus(response.data))
        .catch (err => {})     
    },[])
    
    return(        
        <div class="wrapper row3" style={{ backgroundColor: "#F4F4F4"}}>
        <a href="/details/60f3c0b79151b21308dc0aa8"><button className="btn btn-info" style={{float: 'right', margin:"3vw"}}>See all</button></a>
        <main class="hoc container clear">   
         
                <figure> 
          <figcaption className="center1" style={{paddingTop:"2vw"}}>
            <p className="nospace font-xs"><b >City Dental College Alumni Association</b></p>
            <p className="heading underline font-x2">Important Notice</p>
          </figcaption>
          </figure>
          <div class="flex-container">
          {[values && values.map(value =>
            <div class="flex-item">
            
            <figure><a className="imgover" href="#"><img src={`${API}/detail/photo/${value._id}`} alt=""/></a><hr/>
                <figcaption><strong style={{fontSize: "2vw",color:"#5c5c5c"}}>{value.name}</strong> <br/><em>{value.description}</em></figcaption>
             </figure>
            
            </div>
             )]}
          </div>
        
        </main></div>

     
    )
}

export default Notice;