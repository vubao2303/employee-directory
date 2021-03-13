import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {

  // dont do this 
  SearchTerm: function () {
    return axios.get(
      "https://randomuser.me/api/?inc=picture,name,email,phone,dob"
    )
  },
  getEmployees: function (users) {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=15").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            firstname: user.name.first,
            lastname: user.name.last,
            phone: user.phone,
            email: user.email,
            image: user.picture.thumbnail,
            dob: user.dob.date
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  }

};
