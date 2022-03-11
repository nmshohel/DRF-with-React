import React, { useEffect, useState } from 'react';
import APIService from './APIService';


const Form = (props) => {
    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')

    useEffect(()=>{
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle=()=>{
        APIService.UpdateArticle(props.article.id, {title, description})
        .then(resp=>props.updatedInformation(resp))
    }
    const InsertArticle=()=>{
        APIService.InsertArticle({title, description})
        .then(resp=>props.insertedInformation(resp))
    }
    return (
        <div>
            {props.article ? (
                <div className='mb-3'>
                    <label htmlFor='title' className='form-label'>Title</label>
                    <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className='form-control' id="title" placeholder='Please Enter the title'/>
                    <label htmlFor='description' className='form-label'>Description</label>
                    <textarea className='form-control' value={description} onChange={e=>setDescription(e.target.value)} id='description' rows="5">

                    </textarea>
                    <br/>
                    {
                        props.article.id ? <button onClick={updateArticle} className='btn btn-primary'>Update Article</button>
                        : <button onClick={InsertArticle}  className='btn btn-primary'>Insert Article</button>
                    }
                </div>
            ): null}
        </div>
    );
};

export default Form;