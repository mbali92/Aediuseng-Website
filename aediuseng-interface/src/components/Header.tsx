import React, { FormEvent, useEffect, useState } from 'react'
import { useTimeout } from 'react-use';
import { Pageprops } from '../datatypes/Datatypes';
import heroImageOne from "../assets/hero-image2.jpg";
import heroImageTwo from "../assets/hero-image1.jpg";

const Header:React.FC <Pageprops> = ({propContent, propUpdate})=> {
    const images = [heroImageOne,heroImageTwo];
    const [imageIndex, setimageIndex] = useState(0);
    const [changeContent, setchangeContent] = useState();
   
    const passContent =(id:number, contentType:string)=>{
        if(changeContent){
            propUpdate(id, changeContent, contentType)
        }
    }

    const imageSlider = ()=>{
        let indexImageCopy = imageIndex;
        indexImageCopy++;
        if(indexImageCopy > images.length - 1){
            setimageIndex(0)
        }else{
            setimageIndex(indexImageCopy)
        }
    }
    
   
    useEffect(() => {
        setTimeout(() => {
            imageSlider();
        }, 5000);

        return () => {}
    }, [imageIndex]);

  return (
    <header id="home-header">
        <img src={images[imageIndex]} alt="" />
        <div className="container">
            <div className="hero-text">
                <h1>{propContent[0]?.subsection_content}</h1>
                <span onBlur={()=>passContent(propContent[0]?.subsection_id,'text')} onInput={e=>setchangeContent(e.target.innerText)} className='text-edits header-edit' contentEditable id='home-header-title'></span>
                <p>{propContent[1]?.subsection_content} 
                </p>
                <span onBlur={()=>passContent(propContent[1]?.subsection_id,'text')} onInput={e=>setchangeContent(e.target.innerText)}  className='text-edits header-edit' contentEditable id='home-header-text'></span>
                <a className="hero-btn" href="about.html">Find Out More</a>
            </div> 
        </div>
    </header>
  )
}

export default Header