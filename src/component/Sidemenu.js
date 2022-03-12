import React from 'react'
import { FaQrcode,FaChartBar,FaGem,FaChartPie,FaEnvelopeOpen ,FaRegEdit,
  FaDesktop,FaFlask,FaGlobeAsia,
  FaLaptop,FaRegCopy,FaChevronDown,
  FaAlignJustify,FaBell,FaShareSquare,
  FaEnvelope,FaSignOutAlt,FaHeart,
  FaFirstdraft,FaChromecast, FaCanadianMapleLeaf,
  FaCircle,FaLocationArrow,FaRedoAlt,FaRegEye,FaTrashAlt,FaInfo,FaArrowLeft,
  FaArrowRight,FaTimes

}from "react-icons/fa";
import logo from './image/logo.jpg'
import {Form,FormControl,Container,Row,Col  ,Button,Badge,} from "react-bootstrap"
import  "./css/Sidemenu.css"

function Sidemenu() {


  
  function handlebtn (){
   
    document.getElementById("sidemenu").style.width="240px"
    document.getElementById("logo_conten").style.display="block"
    document.getElementById("logoname").style.display="block"
    document.getElementById("link_name").style.display="block"
    document.getElementById("home_content").style.marginLeft="180px"
    document.getElementById("menuicon").style.display="none"
    document.getElementById("close").style.display="block"
    document.getElementById("close").style.marginRight="10px"
  }
  
  function handleclose() {

    document.getElementById("sidemenu").style.width="58px"
    document.getElementById("logo_conten").style.display="none"
    document.getElementById("logoname").style.display="none"
    document.getElementById("link_name").style.display="none"
    document.getElementById("home_content").style.marginLeft="1px"
    document.getElementById("menuicon").style.display="block"
    document.getElementById("close").style.display="none"

  }
  


  return (
    <div>
    
    <div className='sidemenu'  id="sidemenu">
    <div className='logo_conten' id="logo_conten">

    <div className='logo'>
      
      <img src={logo} className="imglogo" style={{

     width:"100px",
     heigth:"100px",
     borderRadius:"50px"


      }}/>

    <div className='logoname'  id="logoname">Devid Wallian</div>
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
  
  <span className='link_name'  id="link_name">Dashboards</span>

  </a>

  <span className='tooltip'>Dashboards</span>

</li>

{/* */}

<li>

<a href='ab'>
  
  < FaChartBar className='icon'/>
  
  <span className='link_name'   id="link_name" >Layouts</span>

  </a>

  <span className='tooltip'>Dashboards</span>

</li>

{/* */}


<li>

<a href='ab'>
  
  < FaGem className='icon'/>
  
  <span className='link_name'    id="link_name"  >Graphs</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}

<li>

<a href='ab'>
  
  <FaEnvelopeOpen  className='icon'/>
  
  <span className='link_name'   id="link_name"  >Mailbox</span>

  </a>

  <span className='tooltip'>Dashboards</span>

</li>

{/* */}

<li>

<a href='ab'>
  
  <FaChartPie  className='icon'/>
  
  <span className='link_name'   id="link_name">Metrics</span>

  </a>

  <span className='tooltip'>Dashboards</span>

</li>

{/* */}

<li>

<a href='ab'>
  
  <FaRegCopy  className='icon'/>
  
  <span className='link_name '   id="link_name"   >Documents</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}






<li>

<a href='ab'>
  
  <FaFlask  className='icon'/>
  
  <span className='link_name'   id="link_name">Widgets</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}





<li>

<a href='ab'>
  
  <FaRegEdit  className='icon'/>
  
  <span className='link_name'   id="link_name">Form</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}


<li>

<a href='ab'>
  
  <FaDesktop className='icon'/>
  
  <span className='link_name'    id="link_name" >App Views</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}

<li>

<a href='ab'>
  
  <FaGlobeAsia className='icon'/>
  
  <span className='link_name'     id="link_name" >Internet</span>

  </a>


  <span className='tooltip'>Dashboards</span>
</li>

{/* */}

<li>

<a href='ab'>
  
  <FaLaptop className='icon'/>
  
  <span className='link_name'  id="link_name" >Lab Views</span>

  </a>


<span className='tooltip'>Dashboards</span>
</li>

{/* */}






</ul>





    </div>


<div className='home_content'  id="home_content">

<div className="header">

  <Container>
    <Row>
      <Col>
 <div className='menubox' >
<FaAlignJustify   onClick={handlebtn} className="menuicon" id="menuicon" style={{

position:"absolute"


}}   />
<FaTimes   onClick={handleclose}  className="menuicon" id="close" style={{
 display:"none"

}} />
</div>
</Col>

<Col>
<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search for something"
          className="me-1"
          aria-label="Search" style={{

             marginTop:"13px",
            width:"650px"

          }}
        />
      
      </Form>
      </Col>

      </Row>
</Container>


      <div style={{
  width:"350px",
      
       display:"flex",
       marginLeft:"320px"
      }} >
<FaEnvelopeOpen style={{
marginTop:"20px",
marginLeft:"20px"

}}/>

<FaBell style={{

marginTop:"20px",
marginLeft:"20px"

}}/>

<FaShareSquare  style={{

marginTop:"20px",
marginLeft:"20px"

}}  />

<p   style={{

marginTop:"18px",
marginLeft:"20px"

}} >  Log Out</p>
</div>

</div>

<div className='row1'>

  <div className='folderbox' style={{
    width:"300px",
    height:"800px",
    

  }}>
  
  <Button variant="secondary" style={{

width:"300px",
marginTop:"30px",
marginLeft:"20px",
background:"#10ac84"

  }} size="sm">
      Compose Mail
    </Button>
  
   <h6   style={{

   marginLeft:"20px",
   marginTop:"20px"


   }}>FOLDERS</h6>
    
<div style={{

width:"300px",
height:"200px",

marginLeft:"15px"

}}>

<Container>
  <Row style={{

marginTop:"10px",
borderBottom:"1px solid #dfe6e9"
}}  >
    <Col>
    <FaEnvelopeOpen/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Inbox</span>
    </Col>
    <Col >
    <Badge bg="primary" pill>
      14
    </Badge>
    
    </Col>
  </Row>

  <Row  style={{
marginTop:"10px",
borderBottom:"1px solid #dfe6e9"
}} >
    <Col>
    <FaEnvelope/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Send Mail</span>
    </Col>
    <Col>
    <Badge bg="primary" pill>
      14
    </Badge>
    </Col>
  </Row>


  <Row  style={{

marginTop:"10px",
borderBottom:"1px solid #dfe6e9"
}} >
    <Col>
    <FaHeart/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Important</span>
    </Col>
    <Col></Col>
  </Row>

  <Row   style={{

marginTop:"10px",
borderBottom:"1px solid #dfe6e9"

}}  >
    <Col>
    <FaFirstdraft/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Drafts</span>
    </Col>
    <Col></Col>
  </Row>

  <Row style={{

  marginTop:"10px",
  borderBottom:"1px solid #dfe6e9"
  }}>
    <Col>
    <FaCanadianMapleLeaf/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Trash</span>
    </Col>
    <Col></Col>
  </Row>


</Container>
</div>


<h6  style={{

marginLeft:"20px"

}}>CATEGRATIES</h6>

<div style={{

width:"300px",
height:"200px",

marginLeft:"20px"


}}>

<Container>
  <Row style={{

marginTop:"10px",
borderBottom:"1px solid #dfe6e9"
}}  >
    <Col>
    <FaCircle  style={{
  color:"green"

    }}/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Work</span>
    </Col>
 
  </Row>

  <Row  style={{
marginTop:"10px",
borderBottom:"1px solid #dfe6e9"
}} >
    <Col>
    <FaCircle style={{

     color:"red"

    }}/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Documents</span>

    </Col>
   
  </Row>


  <Row  style={{

marginTop:"10px",
borderBottom:"1px solid #dfe6e9"
}} >
    <Col>
    <FaCircle style={{

     color:"blue"

    }}/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Social</span>
    </Col>
 
  </Row>

  <Row   style={{

marginTop:"10px",
borderBottom:"1px solid #dfe6e9"

}}  >
    <Col>
    <FaCircle style={{
   color:"skyblue"

    }}/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Advertisting</span>
    </Col>
    
  </Row>

  <Row style={{

  marginTop:"10px",
  borderBottom:"1px solid #dfe6e9"
  }}>
    <Col>
    <FaCircle style={{

   color:"orange"

    }}/>
    <span  style={{
    marginLeft:"10px",
    marginTop:"10px"

    }}>Clients</span>
    </Col>
    <Col></Col>
  </Row>


</Container>

</div>

<h6 style={{

marginLeft:"20px"


}}>LABELS</h6>

<div style={{
width:"300px",
height:"300px",

marginLeft:"20px"


}}>

<Container>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <div style={{

width:"80px",
height:"30px",
background:"#fff",
padding:"5px",
display:"flex"

}}>
<FaLocationArrow style={{
marginRight:"10px"

}}/>
<p style={{

fontSize:"12px"

}}>Family</p>
</div>

    
    </Col>
    <Col>
    
    <div style={{

width:"80px",
height:"30px",
background:"#fff",
padding:"5px",
marginLeft:"50px",
display:"flex"

}}>
<FaLocationArrow style={{
marginRight:"10px"

}}/>
<p style={{

fontSize:"12px"

}}>Work</p>
</div>
    
    
    </Col>



    <Col>
    
    <div style={{

width:"80px",
height:"30px",
background:"#fff",
padding:"5px",
marginLeft:"100px",
display:"flex"

}}>
<FaLocationArrow style={{
marginRight:"10px"

}}/>
<p style={{

fontSize:"12px"

}}>Home</p>
</div>
    
    
    </Col>

  </Row>
  <Row xs={2} md={4} lg={6}  style={{  marginTop:"10px"}}>
    <Col>
    <div style={{

width:"80px",
height:"30px",
background:"#fff",
padding:"5px",
display:"flex"

}}>
<FaLocationArrow style={{
marginRight:"10px"

}}/>
<p style={{

fontSize:"12px"

}}>Childerns</p>
</div>

    
    </Col>
    <Col>
    
    <div style={{

width:"80px",
height:"30px",
background:"#fff",
padding:"5px",
marginLeft:"50px",
display:"flex"

}}>
<FaLocationArrow style={{
marginRight:"10px"

}}/>
<p style={{

fontSize:"12px"

}}>Holidays</p>
</div>
    
    
    </Col>



    <Col>
    
    <div style={{

width:"80px",
height:"30px",
background:"#fff",
padding:"5px",
marginLeft:"100px",
display:"flex"

}}>
<FaLocationArrow style={{
marginRight:"10px"

}}/>
<p style={{

fontSize:"12px"

}}>Music</p>
</div>
    
    
    </Col>


  </Row>

  <Row xs={2} md={4} lg={6} style={{
 marginTop:"10px"

  }}>
    <Col>
    <div style={{

width:"100px",
height:"30px",
background:"#fff",
padding:"5px",
display:"flex"

}}>
<FaLocationArrow style={{
marginRight:"10px"

}}/>
<p style={{

fontSize:"12px"

}}>Photography</p>
</div>

    
    </Col>
    <Col>
    
    <div style={{

width:"80px",
height:"30px",
background:"#fff",
padding:"5px",
marginLeft:"60px",
display:"flex"

}}>
<FaLocationArrow style={{
marginRight:"10px"

}}/>
<p style={{

fontSize:"12px"

}}>Film</p>
</div>
    
    
    </Col>



 

  </Row>



</Container>


</div>


</div>
<div style={{
width:"900px",
maxHeight:"200vh",
background:"#fff",
marginTop:"20px",
marginLeft:"50px"

}}>
<Container>

<Row xs={1} md={2} style={{

marginTop:"50px"

}}>
    <Col>
    <h4>InBox(16)</h4>
    
    </Col>
    <Col>
    
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button  variant="primary" style={{

            background:"#10ac84"

        }}  >Search</Button>
      </Form>
    
    
    
    
    </Col>
 
  </Row>


  <Row  style={{

  marginTop:"30px"

  }}>
    <Col>
    <Button variant="outline-secondary" size="sm" ><FaRedoAlt  style={{

    marginRight:"5px"

    }}/>Refresh</Button>
    
<Button variant="outline-secondary"  size="sm"  style={{

marginLeft:"5px"

}} ><FaRegEye/></Button>
<Button variant="outline-secondary"  size="sm" style={{

marginLeft:"5px"

}} ><FaInfo/></Button>
<Button variant="outline-secondary"  size="sm" style={{

marginLeft:"5px"

}}  ><FaTrashAlt/></Button>

    </Col>
    <Col xs={6}></Col>
    <Col>
    
    
<Button variant="outline-secondary"  size="sm" style={{

marginLeft:"5px"

}}  ><FaArrowLeft/></Button>
    
    
    <Button variant="outline-secondary"  size="sm" style={{

marginLeft:"5px"

}}  ><FaArrowRight/></Button>

    </Col>
  </Row>



  <Row  style={{

marginTop:"30px",
background:"#dfe6e9",
padding:"10px"

  }}>
    <Col>
    
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Anand Smitt
  </label>
</div>
    
    </Col>
    <Col xs={6}>Lorem Ipsum is simply dummy text of the printing </Col>
    <Col>6:30PM</Col>
  </Row>


  <Row  style={{

marginTop:"10px",
background:"#dfe6e9",
padding:"10px"

  }}>
    <Col>
    
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Anand Smitt
  </label>
</div>
    
    </Col>
    <Col xs={6}>Lorem Ipsum is simply dummy text of the printing </Col>
    <Col>6:30PM</Col>
  </Row>


  <Row  style={{

marginTop:"10px",
background:"#dfe6e9",
padding:"10px"

  }}>
    <Col>
    
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Anand Smitt
  </label>
</div>
<Badge bg="danger">Success</Badge> 
    </Col>
    <Col xs={6}>Lorem Ipsum is simply dummy text of the printing </Col>
    <Col>6:30PM</Col>
  </Row>



  <Row  style={{

marginTop:"10px",
background:"#dfe6e9",
padding:"10px"

  }}>
    <Col>
    
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Anand Smitt
  </label>
</div>
    
    </Col>
    <Col xs={6}>Lorem Ipsum is simply dummy text of the printing </Col>
    <Col>6:30PM</Col>
  </Row>



  <Row  style={{

marginTop:"10px",
background:"#dfe6e9",
padding:"10px"

  }}>
    <Col>
    
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Anand Smitt
  </label>
</div>
    
    </Col>
    <Col xs={6}>Lorem Ipsum is simply dummy text of the printing </Col>
    <Col>6:30PM</Col>
  </Row>


  <Row  style={{

marginTop:"10px",
background:"#dfe6e9",
padding:"10px"

  }}>
    <Col>
    
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Anand Smitt
  </label>
</div>
    
    </Col>
    <Col xs={6}>Lorem Ipsum is simply dummy text of the printing </Col>
    <Col>6:30PM</Col>
  </Row>



  <Row  style={{

marginTop:"10px",
background:"#dfe6e9",
padding:"10px"

  }}>
    <Col>
    
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Anand Smitt
  </label>
</div>
    
    </Col>
    <Col xs={6}>Lorem Ipsum is simply dummy text of the printing </Col>
    <Col>6:30PM</Col>
  </Row>




  <Row  style={{

marginTop:"10px",
background:"#dfe6e9",
padding:"10px"

  }}>
    <Col>
    <Col>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Anand Smitt
  </label>
</div>
</Col>
<Col>
<Badge bg="success">Success</Badge> 
</Col>
    </Col>
    <Col xs={6}>Lorem Ipsum is simply dummy text of the printing </Col>
    <Col>6:30PM</Col>
  </Row>





  </Container>

</div>



    </div>
  
  


  </div>

 

    
    
    </div>
  )
}

export default Sidemenu