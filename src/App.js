//  Bare minumum
// do the bareminimum of showing up on the pagge 


// import React from "react";
// import Header from "./components/Header.js"
// import Search from "./components/SearchForm.js"

// import Tablebb from "./components/Table.js"

// function App() {

//   return (
//       <div>
//         <Header />
//         <Search />

//         <Tablebb />

//         {/* <Table users={users}/> */}
//       </div>
//     );
// }
// export default App;



// Do the Hard thing where you create hooks 
// and make function 



import React, { useEffect, useState } from "react";
import Header from "./components/Header.js"
import Search from "./components/SearchForm.js"
import TableRows from "./components/TableRows.js"
import API from "./utils/API.js";
import Table from "./components/Table.js"
import TableHead from "./components/TableHead.js"



function App() {
  // set hooks 

  const [users, setUsers] = useState([]);
  // const [search, setSearch] = useState("")
  // const [sort, setSort] = useState("")

  //Use Effect
  useEffect(() => {
    loadUsers();
  }, [])

  //Function loadUsers 
  const loadUsers = () => {
    API.getEmployees().then((users) => {
      setUsers(users)
      console.log(users)
    })
      .catch(err => console.log(err));
  }
  // fucntion search 
  function handleSubmit(e) {
    e.preventDefault();
  }


  function handleSearch(e) {
    console.log(e.target.value)
    // handle fitlter a new array with that matching input 
    // const searchUser = event => {
    //   // setSearch(event.target.value);
    // };
  }
  // Function SORT 
  // const sortName =()=> {

  //   users.sort(function(a, b){
  //     var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  //     if (nameA < nameB) //sort string ascending
  //         return -1 
  //     if (nameA > nameB)
  //         return 1
  //     return 0 //default return value (no sorting)
  //   })
  // //   // const newSortUser =[]
  // //   // when sort button is clicked, the ordoer of the aaray is backward 

  // // }

  return (
    <div>
      <Header />
      <Search className="form-group mt-5" onKeyUp={(e) =>handleSearch(e)} />
      {/* ()=> call the function  */}


      <Table>
        <TableHead />
        {users.map((user, index) => {
          return (
            <TableRows
              index={index}
              image={user.image}
              name={user.firstname + " " + user.lastname}
              // sortName= {sortName}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={index} />
          )

        })}
      </Table>




    </div>
  );
}
export default App;


//  
// do the bareminimum of showing up on the pagge 
// 







// import React, { useEffect, useState } from "react";
// import Header from "./components/Header.js"
// import Search from "./components/SearchForm.js"
// import TableHead from "./components/TableHead.js"
// import API from "./utils/API.js";



// function App() {

//     const [users, setUsers] = useState([]);
//     const [user, setUser] = useState({});
//     const [userIndex, setUserIndex] = useState(0);

//     // When the component mounts, a call will be made to get random users.
//     useEffect(() => {
//       loadUsers();
//     }, []);

//     function loadUsers() {
//       API.getLanguagesList()
//         .then(languages => {
//           API.getUsersByLanguage(languages[0]).then((users) => {
//             setUsers(users);
//             setUser(users[0]);
//           });
//         })
//         .catch(err => console.log(err));
//     }

//     function capitalizeFirstLetter(string = "") {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//     }



//     // function handleBtnClick(event) {
//     //   // Get the title of the clicked button
//     //   const btnName = event.target.getAttribute("data-value");
//     //   if (btnName === "next") {
//     //     const newUserIndex = userIndex + 1;
//     //     nextUser(newUserIndex);
//     //   } else {
//     //     const newUserIndex = userIndex - 1;
//     //     previousUser(newUserIndex);
//     //   }
//     // }


//     // return (
//     //   <div>
//     //     <Header />
//     //     <Search />
//     //     <TableHead />
//     //   </div>
//     // );
//     return (
//       <div>
//         <h1 className="text-center">Welcome to LinkedUp</h1>
//         <h3 className="text-center">Click on the arrows to browse users</h3>
//         <
//           <CardContainer
//             title={capitalizeFirstLetter(user.firstname) +
//                 " " + capitalizeFirstLetter(user.lastname)}
//             image={user.image}
//             language={user.language}
//             email={user.email}
//             handleBtnClick={handleBtnClick}
//           />
//         </Row>
//       </div>
//     );

//   }
// export default App;



// // ok B, stop the sheneigans let's do this again 
// import React, { useEffect, useState } from "react";
// import Header from "./components/Header.js"
// import Search from "./components/SearchForm.js"
// import TableHead from "./components/TableHead.js"
// import API from "./utils/API.js";

// function App() {

//   const [users, setUsers] = useState([]);
//   // const [user, setUser] = useState({});
//   // const [userIndex, setUserIndex] = useState(0);

//   // When the component mounts, a call will be made to get random users.
//   useEffect(() => {
//     loadUsers();
//   }, []);



//   function loadUsers() {
//     API.getEmployess()
//       .then(users => {
//         setUsers(users);
//       })
//       .catch(err => console.log(err));
//   }

//   // function capitalizeFirstLetter(string = "") {
//   //   return string.charAt(0).toUpperCase() + string.slice(1);
//   // }


//   return
//   (<div>
//       <Header />
//       <Search />
//       <TableHead user={users} />
//     </div>
//   );
// }

// export default App;


// sortName = () => {
//   let sortEmp = [];
//   if (this.state.alphabetical) {
//       sortEmp = this.props.empList.sort((a, b) => {
//           var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
//           if (nameA < nameB)
//               return -1
//           if (nameA > nameB)
//               return 1
//           return 0
//       })
//   } else {
//       sortEmp = this.props.empList.sort((a, b) => {
//           var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
//           if (nameA > nameB)
//               return -1
//           if (nameA < nameB)
//               return 1
//           return 0
//       })
//   }
//   this.setState({
//       alphabetical: !this.state.alphabetical,
//       sortedEmployees: sortEmp

//   })
// }

  // Change sort order upon click.
  // const sortName = event => {
  //   event.preventDefault();
  //   const sortAsc = users.name.sort();
  //   const sortDesc = sortAsc.reverse();
  //   setSort((sort === "" || sortDesc) ? sortAsc : sortDesc);
  // }
