import React, { useState } from 'react'
import { Pageprops } from '../datatypes/Datatypes';

const About:React.FC<Pageprops> =({propContent, propUpdate})=> {
    const [changeContent, setchangeContent] = useState();
   
    const passContent =(id:number, contentType:string)=>{
        if(changeContent){
            propUpdate(id, changeContent, contentType)
        }
    }

  return (
    <>
    <div className="about-page-section">
       <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                   <div className="about-info-text">
                        <span className="about-subtitle">Our company information</span>
                        <h2>Why Aedius?</h2>
                        <span className='text-edits'  id='about-title'>About title</span>
                        <p></p>
                        <span className='text-edits'  id='about-para-one'>First paragraph</span>
                        <p></p>
                        <span className='text-edits'  id='about-para-two'>Second paragraph</span>
                   </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-card" id="first-about-card">
                                <span className=" lni lni-briefcase about-icon"></span>
                                <h6>Mission</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat blanditiis nesciunt aliquam.</p>
                                <span className='text-edits' id='about-mission-text'>Mission text</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-card" id="second-about-card">
                                <span className=""></span>
                                <h6>Vission</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat blanditiis nesciunt aliquam.</p>
                                <span className='text-edits' id='about-vission-text'>Vission text</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-card" id="last-about-card">
                                <span className=""></span>
                                <h6>Motto</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat blanditiis nesciunt aliquam.</p>
                                <span className='text-edits' id='about-motto-text'>Motto text</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-card" id="last-about-card">
                                <span className=""></span>
                                <h6>Our safety pledge</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat.</p>
                                <span className='text-edits' id='about-pledge-text'>Pledge text</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
    
    </>
  )
}

export default About