import '../style/style.css'
import '../style/top.css'
import '../style/framework.css'
import pic23 from '../img/pic23.jpg'
import { useState, useEffect } from 'react'
import {detailsHomePage} from '../../api/apiUsers'
import './style/style.css'
import {API} from '../../utils/config'

const Tribute = () =>{
    const[values, setAboutus] = useState([{}]);
    useEffect(()=> {
        detailsHomePage("60f3c33f9151b21308dc0abc")
            .then(response => setAboutus(response.data))
            .catch (err => {})           
    },[])
    
    return(     
        <div className="bgded overlay" style={{ backgroundImage: `url(${pic23})`}}>
          <a href="/details/60f3c33f9151b21308dc0abc"><button className="btn btn-info" style={{float: 'right', margin:"3vw"}}>See all</button></a>   
        <figure> 
          <figcaption className="center1" style={{paddingTop:"2vw"}}>
            <p className="nospace font-xs"><b >Always on our minds,forever in our hearts</b></p>
            <p className="heading underline font-x2" style={{marginLeft: "6.3vw"}}>Tribute</p>
          </figcaption>
          </figure>
        
          <div className="hoc container clear"> 

          <div class="flex-container">
          {[values && values.map(value =>
            <div class="flex-item1">
            
            <figure><a className="imgover" href="#"><img src={`${API}/detail/photo/${value._id}`} alt=""/></a><hr/>
                <figcaption><strong>{value.name}</strong><br/> <em>{value.description}</em></figcaption>
             </figure>
            
            </div>
             )]}
          </div>
        </div>
        

      </div>
    )
}

export default Tribute;