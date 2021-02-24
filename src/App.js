
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



// ok B, stop the sheneigans let's do this again 
import React, { useEffect, useState } from "react";
import Header from "./components/Header.js"
import Search from "./components/SearchForm.js"
import TableHead from "./components/TableHead.js"
import API from "./utils/API.js";

function App() {
  
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [userIndex, setUserIndex] = useState(0);
  
    // When the component mounts, a call will be made to get random users.
    useEffect(() => {
      loadUsers();
    }, []);
    function loadUsers() {
      API.getLanguagesList()
        .then(languages => {
          API.getUsersByLanguage(languages[0]).then((users) => {
            setUsers(users);
            setUser(users[0]);
          });
        })
        .catch(err => console.log(err));
    }
      
    function capitalizeFirstLetter(string = "") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export default App;
