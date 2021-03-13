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

  // function sortName 
  const sortName = () => {
    let newSortUser = [];
    let switchUser = []
    newSortUser = [...users]
    newSortUser.sort(function (a, b) {
      let nameA = a.firstname.toLowerCase(), nameB = b.firstname.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1
    })
    setUsers(newSortUser)
  }

  // function sort by phone number 
  const sortPhone = () => {
    let newSortUser = [];
    let switchUser = []
    newSortUser = [...users]
    newSortUser.sort(function (a, b) {
      let nameA = a.phone, nameB = b.phone
      if (nameA < nameB) //sort string ascending
        return -1
    })
    setUsers(newSortUser)

  }

  return (
    <div>
      <Header />
      <Search
        className="form-group mt-5" type="text" onChange={handleSearch} value={search} users={users} />

      {/* ()=> call the function  */}
      <Table sortName={() => sortName()} sortPhone={() => sortPhone()}>

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