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
  const [article, setArticle] = useState({})
  const routeId = props.match.params.id;

  useEffect(() => {
    for(let i = 0; i < articleData.length; i++){
      if(articleData[i].id === routeId){
        setArticle(articleData[i])
      }
    }
  },[]);

  return(
    <div className="article">
      <h1>{articleData.title}</h1>
      <h2>{articleData.blurb}</h2>
      <div className="articleText">
        {article.articleText && article.articleText.map((text, i)=>(
          <TextBlock key={i} type={text.type} data={text.data}></TextBlock>
        ))}
      </div>
    </div>
  )
}

export default Article;
