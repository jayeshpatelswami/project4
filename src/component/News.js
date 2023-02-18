import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loading";
import PropTypes from "prop-types"

export default class News extends Component {
  
  static defultprops = {
    contry: "in",
    pagesize: 5,
    category: "general"
  }

  static propTypes ={
      contry: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
  

  constructor() {
    super();
    this.state = {
      articles:[] ,
      loading: false,
      page: 1
      
      };

    }

    
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=1cfbe18de4d94760b8a2ddd33b2d89f6&page-1&pagesize=${this.props.pagesize}`;
      // alert(url);
      let data = await fetch(url);
      let parsedata = await data.json()
      // console.log(this.props.category);
  //  console.log(parsedata);
  this.setState({articles: parsedata.articles})
}
  

  render() {
    return (
      <div className="container">
             
                <h1 className="text-center my-4">Patel's Akhbar</h1>
          {this.state.loading  &&   <Loading/>}
           <div className="row">
          {this.state.articles.map((elme) => {
            return ( 
              <div className="col-md-3" key={elme.url}>
                  <div key="x">
                <Newsitem 
                 title1={elme.title ? elme.title.slice(0,35) : ""}
                 discription1={elme.description ?  elme.description.slice(0,55) : ""} 
                 url={elme.url}
                 
                 imgurl={elme.urlToImage}/>               
                 </div>
              </div>

            );
          })}
          </div>
       </div>
     
     
    );
  }
}
