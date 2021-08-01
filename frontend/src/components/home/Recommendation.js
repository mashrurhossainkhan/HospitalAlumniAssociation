import '../style/style.css'
import '../style/top.css'
import '../style/framework.css'
import { useState, useEffect } from 'react'
import {detailsHomePage} from '../../api/apiUsers'
import pic10 from '../img/pic10.png'
import {API} from '../../utils/config'

const Recommendation = () =>{
    const[values, setAboutus] = useState([{}]);

    useEffect(()=> {
        detailsHomePage("60f3c3a29151b21308dc0ac2")
        .then(response => setAboutus(response.data))
        .catch (err => {})     
    },[])
    
    return(
        <div class="wrapper bgded overlay" style={{backgroundImage:`url(pic10)`}}>
  <section id="testimonials" class="hoc container clear"> 
    <div class="sectiontitle">
      
      <p class="heading underline font-x2">Recommendation</p>
    </div>
    {[values && values.map(value =>
    <article class="btmspace-80">
      <blockquote>{value.description}</blockquote>
      <figure class="clear"><img src={`${API}/detail/photo/${value._id}`} style={{width:"20vw"}} alt=""/>
        <figcaption>
          <h6 class="heading">{value.name}</h6>
          </figcaption>
      </figure>
    </article>
    )]}
    <footer class="center"><a class="btn" href="/details/60f3c3a29151b21308dc0ac2">More Recomandation</a></footer>

  </section>
        </div>
     
    )
}

export default Recommendation;