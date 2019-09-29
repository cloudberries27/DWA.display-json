import React, {useEffect, useState} from 'react';
import articleData from '../Data/articleData.json';

function TextBlock({type, data}) {
  if(type === 'p'){
    return <p>{data}</p>
  }else if(type === 'h2'){
    return <h2>{data}</h2>
  }else {
    return <p>{data}</p>
  }
}

function Article(props){
    const [article, setArticle] = useState({});
    const routeId = props.match.params.id;

    useEffect(() => {
      for(let i = 0; i < articleData.length; i++)
        if(articleData[i].id === routeId){
          setArticle(articleData[i])
        } else{
          console.log('nope');
        }
    },[]);

    return(
      <div className = "article">
        <div className="header" style={{ backgroundImage: `url('${article.image && article.image.url}')` }}>
          <div className="header_text">
            <h1>{article.title}</h1>
            <p>{article.publishedDate}</p>
            <p>{article.blurb}</p>
          </div>
        </div>
        <div className="articleText">
          {article.articleText && article.articleText.map((text, i)=>(
            <TextBlock key={i} type={text.type} data={text.data}></TextBlock>
          ))}
        </div>
      </div>
    )
  }

export default Article;
