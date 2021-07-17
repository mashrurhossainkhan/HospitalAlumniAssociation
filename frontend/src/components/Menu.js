import {Link, withRouter} from 'react-router-dom';
import './style/top.css'
import {signout, isAuthenticated} from '../utils/auth'

const isActive = (history, path) => {
  if(history.location.pathname === path){
    return {color: '#ff9900'}
  }else{
    return {color: 'white'}
  }
}

const Menu = ({history}) => {
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
                    <Link style={isActive(history, '/')} to="/">Home</Link>
              </li>
              {!isAuthenticated() && (<>
              <li><i class="fas fa-edit"></i>
                <Link style={isActive(history, '/login')} to="/login">Login</Link>
              </li>
              </> )}
              {isAuthenticated() && (<>
              <li><i class="fas fa-edit"></i>
                <Link  style = {{cursor: 'pointer', color: 'grey'}} onClick={() => {
                  signout(() => {
                    history.push('/login')
                  });
                }}> Log Out</Link>
              </li>
              </> )}

             
            </ul>
          </div>
        </div>
       
        <div class="wrapper row1"  >
    <header id="header" class="hoc clear" >
      <div id="logo" class="fl_left" > 
       
        <h1><a href="/">CDCAA</a></h1>
    
      </div>
      <nav id="mainav" class="fl_right"> 
       
        <ul class="clear">
          <li class="active"><a href="/"><b>Home</b></a></li>
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
  
   

      </div>

      
)
}

export default withRouter(Menu);