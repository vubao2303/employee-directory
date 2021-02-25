import React from 'react';

function TableHead() {
  // const columnHeadings = [`Image`, `Name`, `Phone`, `Email`, `D.O.B.`];

  return (
   
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name ▼</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
  
  );
}
export default TableHead;

// import React from 'react';

// function TableHeader(props) {
//   const columnHeadings = [`Image`, `Name`, `Phone`, `Email`, `D.O.B.`];

//   return (
//     <div>
//       <tr>
//         {columnHeadings.map((col) => (
//           <th scope='col' key={`header-${col}`}>
//             <button
//               className='btn font-weight-bold'
//               type='button'
//               onClick={() => props.sort}
//             >
//               {col}
//             </button>
//           </th>
//         ))}
//       </tr>
//     </div>
//   );
// }

// export default TableHeader;