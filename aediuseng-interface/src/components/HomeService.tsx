import React, { useEffect, useState } from 'react'
import { Pageprops } from '../datatypes/Datatypes'

 
// <i className="svr-big-icon flaticon-040-oil-platform"></i>
// <i className="svr-big-icon glyph-icon flaticon-015-worker"></i>
// <i className="svr-big-icon flaticon-032-gears"></i>

const HomeService:React.FC<Pageprops>=({propContent, propUpdate})=>{
    const [changeContent, setchangeContent] = useState("");
   
    const passContent = (id:number, contentType:string)=>{
        if(changeContent){
            propUpdate(id, changeContent,contentType)
        }
    }

    return(
        <>
            <div className="service-section" id="service-section">
                <div className="container">
                    <p className="body-subtitle">About Services we offer</p>
                    <h2 id="service-title">Our Experties</h2>
                    <div className="page_row"> 
                        {
                            propContent.map((svrContent,key)=>
                                <div key={key} className="col-lg-4 col-sm-6">
                                    <div className="service-card d-flex flex-column justify-content-center align-items-center">
                                        <div className="service-text-one">
                                            <i className=""></i>
                                            <h6>{svrContent.subsection_name}</h6>
                                            <span onBlur={()=>passContent(svrContent.subsection_id,"title")} onInput={e=>setchangeContent(e.target.innerText)} contentEditable className='text-edits'></span>
                                            <p>{svrContent.subsection_content}</p>
                                            <span onBlur={()=>passContent(svrContent.subsection_id,"text")} onInput={e=>setchangeContent(e.target.innerText)} contentEditable className='text-edits'></span>
                                            <h5 className="service-btn read-more-svr">Read More </h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeService;

