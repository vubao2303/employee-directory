import React from 'react';

function TableHead(props) {
  return (
   
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick= {props.sortName}>Name ▼</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
  
  );
}
export default TableHead;
