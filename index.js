import React, { Component } from 'react';
import articleData from '../Data/articleData.json'
import '../App.css'

class Home extends Component{
  render(){
    return(
      <div class = 'articleObj'>
        <h1>Articles</h1>
        {articleData.map((articleDetail, index)=>{
          return (
            <div class = 'articleStuff'>
            <img src={articleDetail.image.url} alt={articleDetail.image.alt}></img>
            <div class='text'>
              <h2> {articleDetail.title} </h2>
              <p> {articleDetail.publishedDate} </p>
              <p> {articleDetail.blurb} </p>
              <a href={`/Article/${articleDetail.id}`}>Read More</a>
            </div>
          </div>
        )
        })}
      </div>
    )
  }
}
export default Home;
