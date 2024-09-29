import React from "react";
import SiteBanner from "../components/SiteBanner";
import Header from "../components/Header";
import PurposeTrip from "../components/index/PurposeTrip";
import Recommend from "../components/index/Recommend";
import "../styles/all.css"
//function Index(){}
//const Index=function(){}
const Index=()=>{
  return(
    <>
      
      <div className="mnWrap">
        <main><i class="fa-solid fa-house"></i></main>
      </div>
      <PurposeTrip/>
      <Recommend/>
      <div className="content ct3">
        <Header 
          h3="What travel do you want?" 
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae orci at eros eleifend ultricies ut quis turpis."
        />
        <section></section>
      </div>
      <SiteBanner/>
      
    </>
  );
}
export default Index;