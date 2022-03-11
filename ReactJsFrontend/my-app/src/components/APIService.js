


export default class APIService {
    static UpdateArticle(article_id, body){

        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
        'method':'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Token 8930eb519e6b86d7c3f3b336c0b711f2b3b70e52'
    
        },
        body:JSON.stringify(body)
        
    }).then(resp=>resp.json())
}

static InsertArticle(body){
  console.log(body)
  return fetch('http://127.0.0.1:8000/api/articles/', {
    'method':'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Token 8930eb519e6b86d7c3f3b336c0b711f2b3b70e52'

    },
    body:JSON.stringify(body)
    
}).then(resp=>resp.json())

}
static DeleteArticle(article_id){
  return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
    'method':'DELETE',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Token 8930eb519e6b86d7c3f3b336c0b711f2b3b70e52'

    },
   
    
})

}

}