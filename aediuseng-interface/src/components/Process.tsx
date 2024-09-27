import React, { useState } from 'react'
import { Pageprops } from '../datatypes/Datatypes';


const Process:React.FC <Pageprops> = ({propContent, propUpdate})=>  {
    const [changeContent, setchangeContent] = useState("");
   
    const passContent = (id:number, contentType:string)=>{
        if(changeContent){
            propUpdate(id, changeContent,contentType)
        }
    }

  return (
    <div className="work-pro-section">
        <div className="container">
            <div className="page_row">
                {
                    propContent.map((text,key)=>
                        <div key={key} className="col-lg-3 col-sm-6 sm-padding">
                            <div className="work-pro-item">
                                <span className='number'>1</span>
                                <i className=""></i>
                                <div className="number-line"></div>
                                <h3>{text.subsection_name}</h3>
                                <span onBlur={()=>passContent(text.subsection_id,"title")} onInput={e=>setchangeContent(e.target.innerText)} contentEditable className='text-edits' id='process-title-one'></span>
                                <p>{text.subsection_content}</p>
                                <span onBlur={()=>passContent(text.subsection_id,"text")} onInput={e=>setchangeContent(e.target.innerText)} contentEditable className='text-edits' id='process-text-one'></span>
                            </div>
                       </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Process