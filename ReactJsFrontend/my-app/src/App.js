import logo from './logo.svg';
import './App.css';

import {useState,useEffect} from 'react'
import ArticleList from './components/ArticleList';
import Form from './components/Form';
function App() {

  const [articles, setArticles] = useState([])
  const [editArticles, setEditArticles] = useState(null)

useEffect(()=>{
  fetch('http://127.0.0.1:8000/api/articles/',{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Token 8930eb519e6b86d7c3f3b336c0b711f2b3b70e52'

    }
  })
  .then(resp=>resp.json())
  .then(resp=>setArticles(resp))
  .catch(error=>console.log(error))

},[articles])

const editBtn =(article)=>{
  setEditArticles(article)

}
const updatedInformation=(article)=>{
  const new_article=articles.map(myarticle=>{
    if(myarticle.id === article.id)
    {
      return article;
    }
    else{
      return myarticle;
    }
  })
  setArticles(new_article)


}
const articleForm=()=>{
  setEditArticles({title:'', description:''})
}
const insertInformation=(article)=>{
  const new_articles=[...articles, article]
  setArticles(new_articles)
}
const deleteBtn =(article)=>{
  const new_articles=articles.filter(myarticle=>{
    if (myarticle.id === article.id)
    {
      return false;
    }
  
    else{
      return true;
    }
  })
  setArticles(new_articles)

}

  return (
    <div className="App">
    <div className='row'>
      <div className='col'>
      <h1>Django ReactJs Course</h1>
      </div>
      <div className='col'>
              <button onClick={articleForm} className='btn btn-primary'>Add Article</button>
      </div>
   
      </div>


      <ArticleList articles={articles} deleteBtn={deleteBtn} editBtn={editBtn}/>
     
      { editArticles ?  <Form article={editArticles} insertInformation={insertInformation} updatedInformation={updatedInformation}/>: null }


    </div>
  );
}

export default App;
