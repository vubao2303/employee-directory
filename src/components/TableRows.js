import React from "react";

function TableRows({ index,image, name, phone, email, dob }) {
  return (
  
       <tr>
            {/* <th scope="row">{index}</th> */}
            <td>
              <img src={image}/>
            </td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
          </tr>

  )
}
export default TableRows;
