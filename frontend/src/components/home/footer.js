import pic28 from '../img/pic28.png'
import pic19 from '../img/pic19.png'

const Footer=()=>{
    return(
       <div className="wrapper row3">
        <div className="wrapper coloured" style={{paddingTop: "3vw", color: "white"}}>
  <section id="ctdetails" className="hoc clear" > 
    
    <ul className="nospace clear">
      <li className="one_quarter first">
        <div className="block clear"><i className="fas fa-phone"></i><strong>Give us a call:</strong> +088 01633749109</div>
      </li>
      <li className="one_quarter">
        <div className="block clear"><a href="#"><i className="fas fa-envelope"></i></a> <strong>Send us a mail:</strong> cdcaa.page@gmail.com</div>
      </li>
      
      <li className="one_quarter">
        <div className="block clear"><a href="#"><i className="fas fa-map-marker-alt"></i></a> <strong>Come visit us:</strong>73/A,Airport Road,Nikunja-02 <br/>Khilkhet,Dhaka-1223</div>
      </li>
    </ul>
    
  </section>
</div>


<div className="bgded overlay row4" style={{backgroundImage:`url(${pic28})`}}>
  <footer id="footer" className="hoc clear"> 
    
   
    <div className="one_quarter">
      <h6 className="header">Conact With mail: CDCAA.PAGE@GMAIL.COM</h6>
    </div>
  
    <div className="one_quarter">
      <h6 className="heading">Social Media</h6>
      <ul className="nospace clear latestimg">
        <li><a className="imgover" href="https://www.facebook.com/CDC.Alumni/?ref=page_internal" target="_blank"><img src={pic19} alt=""/></a></li>
      </ul>
    </div>
    
  </footer>
 


<div>
<div className="wrapper row5">
  <div id="copyright" className="hoc clear"> 
    
    <p className="fl_left">Copyright &copy; 2021 - All Rights Reserved - <a href="#">City Dental College Alumni Association</a></p>
    
  </div>
</div>



<a id="backtotop" href="#top"><i className="fas fa-chevron-up"></i></a>
    
</div>
</div>
</div>
);
}
export default Footer;