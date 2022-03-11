import React from 'react';
import APIService from './APIService';

const ArticleList = (props) => {
    const editBtn=(article)=>{
        props.editBtn(article)

    }
    const deleteBtn =(article)=>{
        APIService.DeleteArticle(article.id)
        .then(()=>props.deleteBtn(article))
    }

    
    return (
            <div>
                    {
                        props.articles && props.articles.map(article=>{
                        return (
                            <div key={article.id}>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                                <div className='row'>
                                    <div className='col-md-1'>
                                        <button className='btn btn-secondary' onClick={()=>editBtn(article)}>Update</button>

                                    </div>
                                    <div className='col-md-1'>
                                        <button onClick={()=>deleteBtn(article)} className='btn btn-primary'>Delete</button>

                                    </div>

                                </div>
                                <hr className='hrclass'/>
                            </div>
                        )
                        })
                    }
            </div>
    );
};

export default ArticleList;