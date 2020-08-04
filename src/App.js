import React, { useState, useEffect } from 'react'
import CharacterGrid from 'components/characters/CharacterGrid'
import 'App.css'
import axios from 'axios'
import Header from 'components/userInterface/Header'
import Search from 'components/userInterface/Search'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

   useEffect(() => {
     const fetchItems = async () => {
       setIsLoading(true)
       const result = await axios(
         `https://www.breakingbadapi.com/api/characters?name=${query}`
       )

       console.log(result.data)

       setItems(result.data)
       setIsLoading(false)
     }

     fetchItems()
 }, [query])


   return (
     <div className='container'>
       <Header />
       <Search getQuery={(inputField) => setQuery(inputField)}/>
       <CharacterGrid isLoading={isLoading} items={items} />
     </div>
   )
 }

 export default App
