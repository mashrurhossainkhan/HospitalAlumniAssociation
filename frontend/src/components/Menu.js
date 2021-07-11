import {Link} from 'react-router-dom';
import './style/top.css'
import pic21 from './img/pic21.jpg'
import pic2 from './img/pic2.jpg'
import pic3 from './img/pic3.jpg'
import pic4 from './img/pic4.jpg'

const Menu = () => {
    return(
        <div class="wrapper row0" > 
        <div id="topbar" class="hoc clear">
          <div class="fl_left"> 
           
            <ul class="nospace">
              <li><i class="fas fa-phone rgtspace-5"></i> +088 01633749109</li>
              <li><i class="far fa-envelope rgtspace-5"></i> cdcaa.page@gmail.com</li>
            </ul>
          
          </div>
          <div class="fl_right" > 
          
            <ul class="nospace">
              <li><i class="fas fa-sign-in-alt"></i>
                    <Link>Home</Link>
              </li>
              <li><i class="fas fa-edit"></i>
                <Link>Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="bgded" style={{ backgroundImage: `url(${pic21})`, opacity: 0.6 }}> 
        <div class="wrapper row1"  >
    <header id="header" class="hoc clear" >
      <div id="logo" class="fl_left" > 
       
        <h1><a href="index.html">CDCAA</a></h1>
    
      </div>
      <nav id="mainav" class="fl_right"> 
       
        <ul class="clear">
          <li class="active"><a href="index.html"><b>Home</b></a></li>
          <li><a class="drop" href="#">ORGANIZATION</a>
            <ul>
              <li><a href="pages/gallery.html">Journey of CDCAA</a></li>
              <li><a href="pages/full-width.html">Excutive Committee</a></li>
              <li><a href="pages/sidebar-left.html">Sub Committee</a></li>
              <li><a href="pages/sidebar-right.html">Past Leaders</a></li>
              
            </ul>
          </li>
          <li><a class="drop" href="#">Activities</a>
            <ul>
              <li><a href="#">Soical Responsibilites</a></li>
            
         
            </ul>
          </li>
          <li><a href="C:\Users\Asus\Desktop\City Dental\CDCAA\form.html">MY PROFILE</a></li>
          <li><a href="#">NEWS</a></li>
          <li><a href="#">NOTICE</a></li>
          <li><a href="C:\Users\Asus\Desktop\City Dental\CDCAA\pages\gallery.html">GALLERY</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
        
      </nav>
    </header>
    </div>
  
    <div id="pageintro" class="hoc clear"> 
      
      <article>
        <h3 class="heading">City Dental Alumni Association</h3>
        <p><b>City Dental College Alumni Association <br/>
                        Est. 2017 <br/>
            Non-profit Volunteer Organization <br/>
           Founded by the Former Students of City Dental College and Hospital</b></p>
        <footer><a class="btn" href="C:\Users\Asus\Desktop\City Dental\CDCAA\form.html">REGISTRATION</a></footer>
      </article>
      
    </div>

    <section id="introblocks">
      <ul class="nospace group btmspace-80">
        <li class="one_third first">
          <figure><a class="imgover" href="#"><img src={pic2} alt="" /></a>
            <figcaption>
              <h6 class="heading">Free Medical and Dental Camp</h6>
              <div>
                <p>We are going to make free dental cheack up camp with our doctors from CDC alumni association.</p>
              </div>
            </figcaption>
          </figure>
        </li>
        <li class="one_third">
          <figure><a class="imgover" href="#"><img src={pic3} alt="" /></a>
            <figcaption>
              <h6 class="heading">Cricket Tournament </h6>
              <div>
                <p>The members of City Dental Alumni Association organised a friendly cricket match and gave the prizes among the winer.</p>
              </div>
            </figcaption>
          </figure>
        </li>
        <li class="one_third">
          <figure><a class="imgover" href="#"><img src={pic4} alt="" /></a>
            <figcaption>
              <h6 class="heading">ইফতার ২০২১ </h6>
              <div>
                <p>ছিন্ন মূল ও পথ শিশূদের ইফতার বিতরণ, কলেজের ৩য় ও চতুর্থ শ্রেণীর কর্মচারীদের ঈদ সামগ্রী উপহার প্রদান ।</p>
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
 
  </div>
      </div>

      
)
}

export default Menu;