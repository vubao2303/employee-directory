import React from 'react';
import Table from './Table';

function SearchForm(props) {
  return (
    <div className ="container">
    <div className='SearchBar'>
      <input
        
        className='form-control'
        type='text'
        placeholder='Type in a name to search'
        aria-label='Search'
        value={props.value}
        onChange= {props.onChange}
        
      ></input>
      <buton type="button" onClick={props.onClick}>Search</buton>
      {/* <Table value={props.users}/> */}
    </div>
    </div>
  );
}

export default SearchForm;


