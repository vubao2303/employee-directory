import React, { useEffect, useState } from "react";
import API from "../utils/API";


function Main() {

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
  handleInputChange = event => {
    setUser({ search: event.target.value });
  };


  return (
    <UserContext.Provider value={{ user, users, userIndex, capitalizeFirstLetter, handleBtnClick }}>
      <div>
        <h1 className="text-center">Welcome to LinkedUp</h1>
        <h3 className="text-center">Click on the arrows to browse users</h3>
        <Row>
          <CardContainer />
        </Row>
      </div>
    </UserContext.Provider>
  );
}

