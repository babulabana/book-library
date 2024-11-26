import React from 'react'
import { useParams } from 'react-router'
import { library } from '../data/librarydata'

export default function Showbooks() {
    var params =useParams()
    var category = params.category
    var books_filtered =(library.filter((f)=>f.category==category)) 

    var booksUI = books_filtered.map((f)=>
    {
        return <div>
            <img src={f.imageLink} className='mx-auto' />
            <h1>{f.title}</h1>
        </div>

    })
  return (
    <div>
        <h1>{category}</h1>
        <div>
            {booksUI}
        </div>
      
    </div>
  )
}
