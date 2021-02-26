import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {

  // dont do this 
  SearchTerm: function (){
    return axios.get (
      "https://randomuser.me/api/?inc=picture,name,email,phone,dob"
    )
  },
  getEmployees: function(users) {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=15").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            firstname: user.name.first,
            lastname: user.name.last,
            phone:user.phone,
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

// activities 6
// searchTerms: function(query) {
//   return axios.get(
//     "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
//       query +
//       "&limit=1&format=json&origin=*"
//   );
// }

// 
// https://randomuser.me/documentation#format
// https://randomuser.me/api/?inc=gender,name,nat
// https://randomuser.me/api/?inc=picture,name,email,phone,dob";


// import axios from "axios";

// export default {
//   search: function() {
//     return axios.get("https://randomuser.me/api/?inc=picture,name,email,phone,dob");
//   }
// };