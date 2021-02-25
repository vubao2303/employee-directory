import React from 'react';

function SearchForm(props) {
  return (
    <div className ="container">
    <div className='SearchBar'>
      <input
        className='form-control'
        type='text'
        placeholder='Type in a name to search'
        aria-label='Search'
        onChange= {props.onChange}
        value={props.value}
      ></input>
    </div>
    </div>
  );
}

export default SearchForm;