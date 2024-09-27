import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import HomeService from './HomeService'
import { Pagecontent } from '../datatypes/Datatypes';
import axios from 'axios';
import Footer from './Footer';
import Process from './Process';

  function Home() {
    const [homePage, setHomePage] = useState<Pagecontent[]> ([]);
    const [dataUpdated, setdataUpdated] = useState<number>(0);

    const updateContent = async(subsection_id:number, subsection_content:string, contentType:string):Promise<void>=>{
      try{
        const response = await axios.put(`http://localhost:5000/updateContent/${subsection_id}`, {subsection_content, contentType})
        if(response.status == 500){
          console.log(response.data)
        }else{
          setdataUpdated(Math.random())
        }
      }catch(error){
        console.error(error)
      }
    } 


  
    async function getHomePageData(){
      try{
          const response = await axios.get("http://localhost:5000/home")
          if(response.status == 200){
              const foundData:Pagecontent[] = await response.data
              setHomePage(foundData);
          }
      }catch(error){
          console.error(error)
      }
    } 

  useEffect(() => {
    getHomePageData()
    return () => {
    }
  }, [dataUpdated]);

  
  const header = homePage?.filter(item=>{
      return item.section_name == "Header"
  })

  const service = homePage?.filter(item=>{
    return item.section_name == "Services"
  })

  const footer = homePage?.filter(item=>{
    return item.section_name == "Footer"
  })
  const process = homePage?.filter(item=>{
    return item.section_name == "Process"
  })

return (
    <>
    <Navbar/>
    <Header propContent={header} propUpdate={updateContent}/>
    <HomeService propContent={service} propUpdate={updateContent} />
    <Process propContent={process} propUpdate={updateContent}  />
    <Footer propContent={footer} propUpdate={updateContent}/>
    </>
  )
}

export default Home