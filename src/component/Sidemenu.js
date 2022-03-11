import React from 'react'
import { FaQrcode,FaChartBar,FaGem,FaChartPie,FaEnvelopeOpen ,FaRegEdit,FaDesktop,FaFlask,FaGlobeAsia,FaLaptop,FaRegCopy,FaChevronDown,FaAlignJustify} from "react-icons/fa";
import logo from './image/logo.jpg'
import  "./css/Sidemenu.css"

function Sidemenu() {
  
  const btn =() =>{

     document.getElementsByid("sidemenu").style.backgroundColor="#fff";

  }
  



  return (
    <div>
    
    <div className='sidemenu'  id="sidemenu">
    <div className='logo_conten'>

    <div className='logo'>
      
      <img src={logo} className="imglogo" style={{

     width:"100px",
     heigth:"100px",
     borderRadius:"50px"


      }}/>

    <div className='logoname'>Devid Wallian</div>
    <div className='detail'>
     <p>Art Directore</p>
     <span><FaChevronDown style={{

      color:"#fff",
      marginLeft:"5px"

     }}/></span>

</div>
    </div>




    </div>
    

<ul className='nav_list'>

<li>

<a href='ab'>
  
  <FaQrcode  className='icon'/>
  
  <span className='link_name'>Dashboards</span>

  </a>

  <span className='tooltip'>Dashboards</span>

</li>

{/* */}

<li>

<a href='ab'>
  
  < FaChartBar className='icon'/>
  
  <span className='link_name'>Layouts</span>

  </a>

  <span className='tooltip'>Dashboards</span>

</li>

{/* */}


<li>

<a href='ab'>
  
  < FaGem className='icon'/>
  
  <span className='link_name'>Graphs</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}

<li>

<a href='ab'>
  
  <FaEnvelopeOpen  className='icon'/>
  
  <span className='link_name'>Mailbox</span>

  </a>

  <span className='tooltip'>Dashboards</span>

</li>

{/* */}

<li>

<a href='ab'>
  
  <FaChartPie  className='icon'/>
  
  <span className='link_name'>Metrics</span>

  </a>

  <span className='tooltip'>Dashboards</span>

</li>

{/* */}

<li>

<a href='ab'>
  
  <FaRegCopy  className='icon'/>
  
  <span className='link_name'>Documents</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}






<li>

<a href='ab'>
  
  <FaFlask  className='icon'/>
  
  <span className='link_name'>Widgets</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}





<li>

<a href='ab'>
  
  <FaRegEdit  className='icon'/>
  
  <span className='link_name'>Form</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}


<li>

<a href='ab'>
  
  <FaDesktop className='icon'/>
  
  <span className='link_name'>App Views</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}

<li>

<a href='ab'>
  
  <FaGlobeAsia className='icon'/>
  
  <span className='link_name'>Internet</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}

<li>

<a href='ab'>
  
  <FaLaptop className='icon'/>
  
  <span className='link_name'>Lab Views</span>

  </a>


<span className='tooltip'>Dashboards</span>
</li>

{/* */}






</ul>





    </div>


<div className='home_content'>
  
  
  <div className='text'   onClick={btn}       >Home Content</div>
  
  


  </div>

  <FaAlignJustify />

    
    
    </div>
  )
}

export default Sidemenu