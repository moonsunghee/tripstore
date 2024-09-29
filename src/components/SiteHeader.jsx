import React from "react";
import {Link} from "react-router-dom";
const SiteHeader  = ()=>{
  return(
    <div className="hdrWrap">
      <header>
        <h1 className="logo"><Link to={"/"}>LOGOHERE</Link></h1>
        <ul className="nav">
          <li><Link to={"/sub1"}>SubPage1</Link></li>
          <li><Link to={"/sub2"}>SubPage2</Link></li>
          <li><Link to={"/sub3"}>SubPage3</Link></li>
          <li><Link to={"/sub4"}>SubPage4</Link></li>
        </ul>
      </header>
    </div>
  );
}
export default SiteHeader;