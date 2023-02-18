import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import loading from './loading';
export default class Newsitem extends Component {
  render() {
      let {imgurl,title1,url,discription1} = this.props;
    return (

      
      <div style={{height: "25rem"}}>


        <div className="card" >
  <img src={imgurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title1}...</h5>
    <p className="card-text">{discription1}...</p>
    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark"> Go </a>
  </div>
</div>
      </div>
    )
  }
}
