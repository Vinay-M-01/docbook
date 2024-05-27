import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import BookingConfirmation from "./views/bookingConfirmation";

// const Dummy = () => {
//   return <div>
//     <h1> http://localhost:3000/bookingconfirmed?embed=&layout=month_view&user=vinay-melavanki-5d2yti&type=dermatology&isSuccessBookingPage=true&email=kecoka6575%40cgbird.com&eventTypeSlug=dermatology&title=Dermatology+-+Dr.+Priya+Sharma+between+DocBook+and+Vinay+&description=&startTime=2024-05-28T06%3A30%3A00.000Z&endTime=2024-05-28T07%3A30%3A00.000Z&location=integrations%3Agoogle%3Ameet </h1>
//   </div>
// }

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={BookingConfirmation} exact path="/bookingconfirmed" />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
