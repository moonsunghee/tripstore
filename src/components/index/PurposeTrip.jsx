import React, {Component} from "react";
import Header from "../Header";
import '../../styles/index.ct1.scss';

class PurposeTrip extends Component{
  componentDidMount(){
    console.log('콘텐츠1이 마운트 되었습니다.');
  }
  render(){
    return(
      <div className={"content purposeOfTrip"}>
        <Header h3="Purpose Of Trip" p="제목에 대한 부연 설명"/>
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
export default PurposeTrip;