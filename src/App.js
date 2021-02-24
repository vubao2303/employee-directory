// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// import "./App.css";

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


import React from "react";
import Header from "./components/Header.js"
import Search from "./components/SearchForm.js"
import TableHead from "./components/TableHead.js"


function App() {
  return (
    <div>
      <Header />
      <Search />
      <TableHead />
    </div>
  );
}

export default App;

