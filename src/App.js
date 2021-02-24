// // import React, { useEffect, useState } from "react";
// import React from "react";
// import Header from "./components/Header.js"
// import Search from "./components/SearchForm.js"
// import TableHead from "./components/TableHead.js"
// // import API from "./utils/API.js";
// // import Table from "./components/Table.js"



// function App() {
//   // set hooks 

// const [users, setUsers] = useState([]);
// const [search, setSearch] = useState("")
// const [sort, setSort] = useState("")

//   // //Use Effect
//   // useEffect(() => {
//   //   loadUsers();
//   // }, [])

//   // //Functions
//   // const loadUsers = () => {
//   //   API.getEmployees().then((users) => {
//   //     setUsers(users)
//   //     console.log(users)
//   //   })
//   //     .catch(err => console.log(err));
//   // }

//   return (
//       <div>
//         <Header />
//         <Search />
//         <TableHead />
//         {/* <Table users={users}/> */}
//       </div>
//     );
// }
// export default App;


//  
// do the bareminimum of showing up on the pagge 
// 

import React from "react";
import Header from "./components/Header.js"
import Search from "./components/SearchForm.js"
import TableHead from "./components/TableHead.js"
import Tablebb from "./components/Table.js"

function App() {
 
  return (
      <div>
        <Header />
        <Search />
        <TableHead />
        <Tablebb/>

        {/* <Table users={users}/> */}
      </div>
    );
}
export default App;


// B, clean this up!! this looks bad! 
// import React, { useEffect, useState } from "react";
// import Header from "./components/Header.js"
// import Search from "./components/SearchForm.js"
// import TableHead from "./components/TableHead.js"
// import API from "./utils/API.js";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={Search} />
//           <Route exact path="/signup" component={Signup} />
//           <Route exact path="/search" component={Search} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


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
