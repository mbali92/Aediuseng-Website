import React, { useState } from 'react'
import { Pageprops } from '../datatypes/Datatypes'

const Footer:React.FC<Pageprops>= ({propContent,propUpdate})=> {
    const [changeContent, setchangeContent] = useState("");
   
    const passContent = (id:number, contentType:string)=>{
        if(changeContent){
            propUpdate(id, changeContent,contentType)
        }
    }
   
  return (
    <section className="widget-section padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-sm-6 sm-padding">
                <div className="widget-content">
                    <a href="#" id="footer-logo">AEDiUS</a>
                </div>
            </div>
            <div className="col-lg-2 col-sm-6 sm-padding">
                <div className="widget-content">
                    <h4>Industries</h4>
                    <ul className="widget-links">
                        <li><a href="about.html">Mining</a></li>
                        <li><a href="services.html">Manufacturing</a></li>
                        <li><a href="practice.html">Energy</a></li>
                        <li><a href="#testimonial-section">Coonstruction</a></li>
                    </ul>
               </div>
            </div>
            <div className="col-lg-3 col-sm-6 sm-padding">
                <div className="widget-content">
                    <h4>Headquaters</h4>
                     {propContent.map((text,key)=>
                       <div key={key}>
                            <p>{text.subsection_content}</p>
                            <span onBlur={()=>passContent(text.subsection_id,"text")} onInput={e=>setchangeContent(e.target.innerText)} className='text-edits' contentEditable></span>
                       </div>
                    )}
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 sm-padding">
                <div className="widget-content">
                    <h4>Get project qoute</h4>
                    <button type="submit" className="submit-btn">Request a qoute</button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer