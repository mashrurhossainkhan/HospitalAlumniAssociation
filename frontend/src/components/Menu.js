import {Link, withRouter} from 'react-router-dom';
import './style/top.css'
import {signout, isAuthenticated, userInfo} from '../utils/auth'

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
              <li><a href="/details/60f3c1239151b21308dc0ab0">Journey of CDCAA</a></li>
              <li><a href="/details/60f3c1389151b21308dc0ab2">Excutive Committee</a></li>
              <li><a href="/details/60f3c13f9151b21308dc0ab4">Sub Committee</a></li>
              <li><a href="/details/60f3c14a9151b21308dc0ab6">Past Leaders</a></li>
              
            </ul>
          </li>
          <li><a class="drop" href="#">Activities</a>
            <ul>
              <li><a href="/details/60f3c0c99151b21308dc0aaa">Soical Responsibilites</a></li>
            
         
            </ul>
          </li>
        {isAuthenticated() && (<>
          <li>
          <Link style={isActive(history, `/${userInfo().role}/dashboard`)} to={`/${userInfo().role}/dashboard`}>Dashboard</Link>
          </li>
          </>)}
          <li><a href="/details/60f3c0369151b21308dc0aa3">NEWS</a></li>
          <li><a href="/details/60f3c0b79151b21308dc0aa8">NOTICE</a></li>
          <li><a href="/details/60f3c1559151b21308dc0ab8">GALLERY</a></li>
          <li><a href="/details/60f3c3b49151b21308dc0ac4">CONTACT US</a></li>

         
        </ul>
        
      </nav>
    </header>
    </div>
  
   

      </div>

      
)
}

export default withRouter(Menu);