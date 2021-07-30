import Layout from '../Layout';
import pic2 from '../img/pic2.jpg'
import pic3 from '../img/pic3.jpg'
import pic4 from '../img/pic4.jpg'
import pic21 from '../img/pic21.jpg'
import {Link, withRouter} from 'react-router-dom';
import {isAuthenticated, signout} from './auth'
import Aboutus from './aboutus';
import Events from './Events';
import Tribute from './Tribute';

const Home = ({history}) => {
    return (
        <Layout title="Home page" className="container-fluid">
             <div id="pageintro" class="hoc clear" style={{backgroundImage: `url(${pic21})`,backgroundRepeat: 'no-repeat',backgroundSize: 'contain',
            overflow: 'hidden', opacity: 0.5}}> 
      
      <article>
        <h3 class="heading">City Dental Alumni Association</h3>
        <p><b>City Dental College Alumni Association <br/>
                        Est. 2017 <br/>
            Non-profit Volunteer Organization <br/>
           Founded by the Former Students of City Dental College and Hospital</b></p>


           {!isAuthenticated() && (<>
            <footer><a className="btn" href="/register">REGISTRATION</a></footer>
           </>)}

           {isAuthenticated() && (<>
             
                <Link className="btn" style = {{cursor: 'pointer', color: 'white'}} onClick={() => {
                  signout(() => {
                    history.push('/login')
                  });
                }}> Log Out</Link>
             
              </> )}
        
      </article>
      
    </div>
    <div class="wrapper row3">
  <main class="hoc container clear"> 
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
    <Aboutus/>
    <Events/>
    
    
    </main>
    <Tribute/>
    </div>
    </Layout>
    )
}
export default withRouter (Home);