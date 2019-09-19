import React from 'react';

// function ArticleCard(props){
//   console.log('props',props);
//   return(//requires only one wrapping class
//     <div>
//       <p> Word </p>
//     </div>
//   )
// }

function TestingReact({
  article = {}
}){
  return(
    <div>
      <h2> {article.title} </h2>
    </div>
  );
}
const SampleData = [
  {
    title: '',
    text: ''
  },
  {
    title: '',
    text: ''
  },
  {
    title: '',
    text: ''
  }
]
export default function TestingContainer(props){
  let city = 'NYC';
  let county = 'Kings';
  let me = 'James';

  return{
    <div>
      {sampleData.map((article, i ) => (
        <TestingReact key ={i} articleData={article}/>
      ))}
    </div>
  }
}

//export default ArticleCard;
