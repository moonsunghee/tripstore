import React from "react";
import SiteHeader from "../components/SiteHeader";
import SiteBanner from "../components/SiteBanner";
import SiteFooter from "../components/SiteFooter";
const Sub1=()=>{
  return(
    <>
      <SiteHeader/>
      <h1>서브1페이지 입니다.</h1>
      <SiteBanner/>
      <SiteFooter/>
    </>
  );
}
export default Sub1;