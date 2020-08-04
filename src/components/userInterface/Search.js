import React, { useState } from 'react'

const Search = ({ getQuery }) => {

  const [text, setText] = useState('')

  const onInput = (inputField) => {
    setText(inputField)
    getQuery(inputField)
  }

  return (
    <section className="search">
      <form>
        <input
          type='text'
          className='form-control'
          placeholder="Search Breaking Bads"
          value={text}
          onChange={(e) => onInput(e.target.value)} />
      </form>
    </section>
  )
}

export default Search
