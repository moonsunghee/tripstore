import React from "react";
import Header from "../Header";
import "../../styles/sub1.main.scss";
const Main = ()=>{
  return(
    <div className="mnWrap">
      <main>
        <Header h3={
          <>
            Hello User
            <br/>
            여행을 추천해 드릴게요.
          </> 
        }/>
        <div className="genderAge">
          <div className="gender">
            <h4>성별을 알려주세요.</h4>
            <div className="form">
              <span>
                <input type="radio" name="gender" id="male"/>
                <label htmlFor="male">남성</label>
              </span>
              <span>
                <input type="radio" name="gender" id="female"/> <label htmlFor="female">여성</label>
              </span>
            </div>
          </div>
          <div className="age"></div>
        </div>
        <div className="selectBox">
          <select name="" id="">
            <option value="">선택해주세요.</option>
            <option value="">선택1</option>
            <option value="">선택2</option>
            <option value="">선택3</option>
          </select>
        </div>
      </main>
    </div>
  );
}
export default Main;