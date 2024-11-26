import React from 'react'
import { library } from '../data/librarydata';
import { Link } from 'react-router-dom';
export default function Categories() {
  var categories =[];
  library.map((b)=>{
    if(!categories.includes(b.category)){
      categories.push(b.category)
    }
  })
  var categoriesUI = categories.map((c)=>{
    
    var l="/showbooks/"+c;
    return <div>
      <Link to={l}>{c}</Link>
    </div>
  })
  return (
    <div>
     {categoriesUI}
    </div>
  )
}
