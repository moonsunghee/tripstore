import React, {Component} from "react";
import Header from "../Header";
import recommend from '../../datas/index/recommend.json'
class Recommend extends Component{
  render(){
    return(
      <div className="content recommend">
        <Header/>
        <section>
          {recommend.map((data, i)=>{
            return(
              <article className={data.class}>
                <h5>{i+1}Day</h5>
                <h4>{data.title}</h4>
                <ul>{data.list.map((item)=>{
                  return(
                    <li>{item.listItem}</li>
                  );
                })}</ul>
              </article>
            );
          })}
        </section>
      </div>
    );
  }
}
export default Recommend;