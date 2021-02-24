import React from 'react';

function SearchForm() {
  return (
    <div className='SearchBar'>
      <input
        className='form-control'
        type='text'
        placeholder='Type in a name to search'
        aria-label='Search'
      ></input>
    </div>
  );
}

export default SearchForm;