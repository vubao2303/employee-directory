import React from 'react';

function TableHead() {
  // const columnHeadings = [`Image`, `Name`, `Phone`, `Email`, `D.O.B.`];

  return (
    <div>
     
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
     
    </div>
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