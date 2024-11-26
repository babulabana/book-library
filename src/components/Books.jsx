import React from 'react'
import { library } from '../data/librarydata'
import Counter from './Counter'

export default function Books() {

    const librarynew = library.map((b)=>{
        return <div className='border-2 flex flex-col text-start '>
            <img src={b.imageLink[0]} alt=""   className="mx-auto h-40 w-32" />
            {/* <h1>author : {b.author}</h1>
            <h1>country : {b.country}</h1>
            <h1>language : {b.language}</h1>
            <h1>pages : {b.pages}</h1> */}
            <h1>title : {b.title}</h1>
            <h1>year : {b.year}</h1>
            <Counter></Counter>
        </div>
    }) 
  return (
    <div className='grid grid-cols-6 gap-10 '>
      {librarynew}
    </div>
  )
}
