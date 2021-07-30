import '../style/style.css'
import '../style/top.css'
import '../style/framework.css'
import pic23 from '../img/pic23.jpg'
import pic26 from '../img/pic26.png'
import pic24 from '../img/pic24.jpeg'
import pic25 from '../img/pic25.jpeg'
import { useState, useEffect } from 'react'
import {detailsHomePage} from '../../api/apiUsers'
import Card from './Card'

const Tribute = () =>{
    const[values, setAboutus] = useState([{}]);
    useEffect(()=> {
        detailsHomePage("60f3f3799151b21308dc0b11")
            .then(response => setAboutus(response.data))
            .catch (err => {})           
    })
    
    return(     
        <div className="bgded overlay" style={{ backgroundImage: `url(${pic23})`}}>   
        <figure className="hoc container clear imgroup"> 
          <figcaption className="sectiontitle">
            <p className="nospace font-xs"><b>Always on our minds,forever in our hearts</b></p>
            <p className="heading underline font-x2">Tribute</p>
          </figcaption>
          </figure>
          <div className="hoc container clear"> 
          <ul className="nospace group team">
            <li className="one_quarter first">
              <figure><a className="imgover" href="#"><img src={pic26} alt=""/></a>
                <figcaption><strong>Dr. Nila</strong> <em>CD-02</em></figcaption>
             </figure>
            </li>
            <li className="one_quarter">
              <figure>
                  <a className="imgover" href="#">
                  <img src={pic24} alt="" />
                  </a>
                <figcaption><strong>Dr. Debashis Dey Rijon</strong> <em>CD-03</em></figcaption>
              </figure>
            </li>
            <li className="one_quarter">
              <figure><a className="imgover" href="#"><img src={pic25} alt=""/></a>
                <figcaption><strong>ডা: নওশাদ ইবনে রফিক</strong> <em>CD-01</em></figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Tribute;