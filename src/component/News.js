import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loading";
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";

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
      page: 1,
      totalresult: 0  
      };

    }

    
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=1cfbe18de4d94760b8a2ddd33b2d89f6&page=${this.props.page}&pagesize=${this.props.pagesize}`;
      // alert(url);
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedata = await data.json()
      this.setState({
        articles: parsedata.articles,
        loading: false,
        totalresult: parsedata.totalresult
      })  
}

 fatchmoredata = async () => {
  this.setState({ page: this.state.page + 1})
    // alert(this.state.page);
      // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=1cfbe18de4d94760b8a2ddd33b2d89f6&page=2&pagesize=${this.props.pagesize}`;
         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=1cfbe18de4d94760b8a2ddd33b2d89f6&page=${this.state.page}&pagesize=${this.props.pagesize}`;
      // alert(url);
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedata = await data.json()
      this.setState({
        articles: this.state.articles.concat(parsedata.articles),
        totalresult: parsedata.totalresult ,
        loading: false ,
       })

};


  render() {
    return (
      <div className="container">
             
                <h1 className="text-center my-4">Patel's Akhbar</h1>
          {/* {this.state.loading  &&   <Loading/>} */}

         <InfiniteScroll
         dataLength={this.state.articles.length}
         next={this.fatchmoredata}
         hasMore={this.state.articles.length !== this.state.totalresult}
         loader={<Loading/>}
         >

             <div className="container">
           <div className="row">
          {this.state.articles.map((elme) => {
             return  <div className="col-md-3" key={elme.url}>
                  
                <Newsitem 
                 title1={elme.title ? elme.title.slice(0,35) : ""}
                 discription1={elme.description ?  elme.description.slice(0,55) : ""} 
                 url={elme.url}
                 imgurl={elme.urlToImage}/>               
              
              </div>
          }
          )}
          </div>
          </div>
          </InfiniteScroll>
       </div>
     
     
    );
  }
}
