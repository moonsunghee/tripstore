import React, {Component} from "react";
import Header from "../Header";
import '../../styles/index.ct1.scss'
//클래스형 컴포넌트 (제이쿼리를 사용하기 위함)
//함수형 컴포넌트와 클래스형 컴포넌트의 차이
//클래스형 컴포넌트는 컴포넌트의 생명주기를 제어할수 있습니다.
//생명주기란? 탄생, 활동, 죽음까지의 순환을 의미합니다.

class Content1 extends Component{
  componentDidMount(){
    console.log('콘텐츠1이 마운트 되었습니다.');
  }
  render(){
    return(
      <div className={"content ct1"}>
        <Header h3="콘텐츠1" p="제목에 대한 부연 설명"/>
        <section>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </section>
      </div>
    );
  }
}
export default Content1;