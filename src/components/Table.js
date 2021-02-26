// import React from "react";

// function Table ({users}){
//   return (
//     <div>
//       <div className="container">
//         {users}
//       </div>
//       </div>
//   )
// }
// export default Table;

import React from "react";
import TableHead from "./TableHead.js"

function Table(props) {
  return (
    <div>

      <table className="table">
        
      <TableHead sortName={props.sortName}/>
        {/* {props.children} */}
        
        <tbody>

          {props.children}
        </tbody>
      </table>

    </div>
  )
}
export default Table;
