import '../style/style.css'
import '../style/top.css'
import '../style/framework.css'
import {API} from '../../utils/config'
import { useState, useEffect } from 'react'
import {detailsHomePage} from '../../api/apiUsers'

const Aboutus = () =>{
const[values, setAboutus] = useState([{}]);

  useEffect(()=> { 
        detailsHomePage("60f3f33e9151b21308dc0b0c")
            .then(response => setAboutus(response.data))
            .catch (err => {})
      
    },[])
  
    return(
        <div class="wrapper row3">
        <main class="hoc container clear"> 
         
          <article class="group">
            <div class="one_half first">
            <h6 class="heading underline font-x2">About Us</h6>
            {[values && values.map(value =>
            <p class="btmspace-30">{value.description}</p>   
            )]}
            </div>

            {[values && values.map(value =>
            <div class="one_half"><a class="imgover" href="#">
                <img class="borderedbox inspace-10" 
                     src={`${API}/detail/photo/${value._id}`} alt=""/>
                    </a>
            </div>
            )]}
          </article>
         
          <div class="clear"></div>
        </main>
      </div>
        
    )

}

export default Aboutus;