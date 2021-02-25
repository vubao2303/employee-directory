import React from 'react';

function SearchForm(props) {
  return (
    <div className='SearchBar'>
      <input
        className='form-control'
        type='text'
        placeholder='Type in a name to search'
        aria-label='Search'
        onChange= {props.onChange}
        value={props.search}
      ></input>
    </div>
  );
}

export default SearchForm;