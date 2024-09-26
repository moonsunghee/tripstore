import React from "react";
import SiteHeader from "../components/SiteHeader";
import SiteBanner from "../components/SiteBanner";
import SiteFooter from "../components/SiteFooter";
import Header from "../components/Header";
import Content1 from "../components/index/Content1";
//function Index(){}
//const Index=function(){}
const Index=()=>{
  return(
    <>
      <SiteHeader/>
      <div className="mnWrap">
        <main></main>
      </div>
      <Content1/>
      <div className="content ct2">
        <Header 
          h3="What travel do you want?" 
          h6="h6이 있습니다." 
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae orci at eros eleifend ultricies ut quis turpis."
        />
        <section></section>
      </div>
      <div className="content ct3">
        <Header 
          h3="What travel do you want?" 
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae orci at eros eleifend ultricies ut quis turpis."
        />
        <section></section>
      </div>
      <SiteBanner/>
      <SiteFooter/>
    </>
  );
}
export default Index;