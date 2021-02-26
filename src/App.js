// import HAVE to be capitalize 
import React, { useEffect, useState } from "react";
import Header from "./components/Header.js"
import Search from "./components/SearchForm.js"
import TableRows from "./components/TableRows.js"
import API from "./utils/API.js";
import Table from "./components/Table.js"
// import TableHead from "./components/TableHead.js"

function App() {
  // set hooks 
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("")
  // const [seacrhResult, setSearchResult]= useState("")
  // const [seacrhResult, setSearchResult]= useState([])
  // const [sort, setSort] = useState("")


  //Use Effect
  useEffect(() => {
    loadUsers();
  }, [])
  
  //Function loadUsers 
  const loadUsers = () => {
    API.getEmployees().then((users) => {
      setUsers(users.sort())
      // console.log(users)
    })
      .catch(err => console.log(err));
  }


  const handleSearch = e => {
    // e.preventDefault();

    const { value } = e.target;
    console.log(value);
    setSearch(value);

  }
// by taking it outside of handle search 
// we allow it to render over and over again 
  let newUserArray = users.filter(user => {
    
      // console.log(user.firstname)
      return user.firstname.toLowerCase().indexOf(search.toLowerCase()) !== -1 || user.lastname.toLowerCase().indexOf(search.toLowerCase()) !== -1
    
  })



  //   const sortName = () => {

  //   const newSortUser = []
  //   users.sort(function (a, b) {
  //     var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
  //     if (nameA < nameB) //sort string ascending
  //       return -1
  //     if (nameA > nameB)
  //       return 1
  //     return 0 //default return value (no sorting)
  //   })
  //   setUsers(users)
  // }
// const sortName= ()

//  let newSort= [...users]
//  setUsers(newsort)
  
//  newSort.sort((a,b)=>{
//   // let nameA = a.firstname.toLowerCase()
//   // let nameB = b.firstname.toLowerCase()
//    if (a<b){

//    }
//  })

 const sortName = () => {
    let newSortUser = [];
    let switchUser =[]
    newSortUser= [...users]
    newSortUser.sort(function (a, b) {
      let nameA = a.firstname.toLowerCase(), nameB = b.firstname.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1
    })
    setUsers(newSortUser)
  }

  const sortPhone = () => {
    let newSortUser = [];
    let switchUser =[]
    newSortUser= [...users]
    newSortUser.sort(function (a, b) {
      let nameA = a.phone, nameB = b.phone
      if (nameA < nameB) //sort string ascending
        return -1
    })
    setUsers(newSortUser)

  }

  // const sortName = () => {
  //   let newSortUser = [];
  //   let switchUser =[]
  //   newSortUser= [...users]
  //   console.log (switchUser)
  //   newSortUser.sort(function (a, b) {
  //     let nameA = a.firstname.toLowerCase(), nameB = b.firstname.toLowerCase()
  //     if (nameA < nameB) //sort string ascending
  //       return -1
  //   })
  //   setUsers(newSortUser)

  // }
// B trying

  // const sortName = () => {
  //   let newSortUser = [];
  //   let switchUser =[]
  //   newSortUser= [...users]
  //   switchUser=[...users]
  //   newSortUser.sort(function (a, b) {
  //     let nameA = a.firstname.toLowerCase(), nameB = b.firstname.toLowerCase()
  //     if (nameA < nameB) //sort string ascending
  //       return -1
  //     if(nam)
  //     return -1
  //   })
  //   console.log(users) //non sort 
  //   console.log(newSortUser)

  //   if (newSortUser === switchUser)
  //   {console.log("apple")
  //     setUsers(newSortUser)}
  //   else {
  //     console.log("banana")
  //     newSortUser.reverse();
  //     setUsers(newSortUser)
  //   }
  // }
  // if (newSortUser) {
  //   setUsers(newSortUser.reverse())
  // }




  // const sortName =(data=[...users]) =>{
  //   let newsort = data.sort((a,b)=> {
  //     a.firstname.localeCompare(b.firstname)
  //   })
  //   setUsers(newsort)
    
  // }

  // else if (user.firstname.toLowerCase().indexOf(value.toLowerCase()) ){
  //   setUsers(searchUsers)
  // }
  // // Threeway 
  // const handleSearch = e => {
  //   e.preventDefault();

  //   const { value } = e.target;

  //   console.log(value);


  //   setSearch(value);


  //   let searchUsers = users.filter(user => {

  //     return user.firstname.includes(search);

  //   });
  //   setUsers(searchUsers);
  // }






  return (
    <div>
      <Header />
      <Search
        className="form-group mt-5" type="text" onChange={handleSearch} value={search} users={users} />

      {/* ()=> call the function  */}
      <Table sortName={ ()=> sortName () } sortPhone={ ()=> sortPhone () }>

        {newUserArray.map((user, index) => {
          return (
            // <SearchResult >
            <TableRows
              index={index}
              image={user.image}
              name={user.firstname + " " + user.lastname}
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


 // Function SORT 
//  const sortName = users.sort()

  // const sortName = ()=> {
  //   users.sort();
  //   users.reverse();


  // // }
  // const sortName = () => {

  //   const newSortUser = []
  //   users.sort(function (a, b) {
  //     var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
  //     if (nameA < nameB) //sort string ascending
  //       return -1
  //     if (nameA > nameB)
  //       return 1
  //     return 0 //default return value (no sorting)
  //   })
  //   setUsers(users)
  // }
    // //   // when sort button is clicked, the ordoer of the aaray is backward 

    // }

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

// 
// 
// 
// 
// 
// B TRYING, THIS WORKS 
// import HAVE to be capitalize 
// import React, { useEffect, useState } from "react";
// import Header from "./components/Header.js"
// import Search from "./components/SearchForm.js"
// import TableRows from "./components/TableRows.js"
// import API from "./utils/API.js";
// import Table from "./components/Table.js"
// import TableHead from "./components/TableHead.js"

// function App() {
//   // set hooks 
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("")
//   const [seacrhResult, setSearchResult]= useState("")
//   // const [sort, setSort] = useState("")

//   //Use Effect
//   useEffect(() => {
//     loadUsers();
//   }, [])

//   //Function loadUsers 
//   const loadUsers = () => {
//     API.getEmployees().then((users) => {
//       setUsers(users)
//       console.log(users)
//     })
//       .catch(err => console.log(err));
//   }

//   const handleChange= e =>{
//     setSearch(e.target.value);
//   }

//   useEffect (() => {
//     const result = users.filter(user => 
//       user.includes(search)
//       );
//       setSearchResult(result);
//     },[search]);


//   //   API.SearchTerm ()
//   //   .then(res => setSearch({name: {users}}))
//   //   handleSearch()
//   // }, [search])

//   function handleSearch(e) {
//     console.log(e.target.value)

//     // handle fitlter a new array with that matching input 
//     // const searchUser = event => {
//     setSearch(e.target.value);
//     // };
//   }

//   // useEffect(() => {
//   //   if (!search) {
//   //     return;
//   //   }

//   //   API.searchTerm(search)
//   //     .then(res => {
//   //       if (res.data.length === 0) {
//   //         throw new Error("No results found.");
//   //       }
//   //       if (res.data.status === "error") {
//   //         throw new Error(res.data.message);
//   //       }
//   //       setUsers();
//   //     })

//   // }, [search]);

//   // const handleInputChange = event => {
//   //   setSearch(event.target.value);
//   // };




//   // useEffect(() => {
//   //   if (search === "") {
//   //     setSearch(users)
//   //     return;
//   //   }
//   //   let userSearch = [];
//   //   for (let i = 0; i < Employees.length; i++) {
//   //     if (Employees[i].name.toLowerCase().includes(search.toLowerCase())) {
//   //       usersSearch.push(users[i]);
//   //     };
//   //   };
//   //   setEmployees(employeeSearch);
//   // }, [search]);


//     return (
//       <div>
//         <Header />
//         <Search className="form-group mt-5" type= "text" onChange={handleChange} value={search}
//         />
//           {/* {searchResult.map((user, index) => {
//             return (
//               <TableRows
//                 index={index}
//                 image={user.image}
//                 name={user.firstname + " " + user.lastname}
//                 // sortName={sortName}
//                 phone={user.phone}
//                 email={user.email}
//                 dob={user.dob}
//                 key={index} />
//             )

//           })} */}

//         {/* ()=> call the function  */}
//         <Table>
//           <TableHead />
//           {users.map((user, index) => {
//             return (
//               <TableRows
//                 index={index}
//                 image={user.image}
//                 name={user.firstname + " " + user.lastname}
//                 // sortName={sortName}
//                 phone={user.phone}
//                 email={user.email}
//                 dob={user.dob}
//                 key={index} />
//             )

//           })}
//         </Table>

//       </div>
//     );
//   }


// export default App;


//  // Function SORT 

  // const sortName = ()=> {
  //   users.sort();
  //   users.reverse();

  // // }
  // const sortName = () => {

  //   const newSortUser = []
  //   users.sort(function (a, b) {
  //     var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
  //     if (nameA < nameB) //sort string ascending
  //       return -1
  //     if (nameA > nameB)
  //       return 1
  //     return 0 //default return value (no sorting)
  //   })
  //   setUsers(users)
  // }
    // //   // when sort button is clicked, the ordoer of the aaray is backward 

    // }

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

