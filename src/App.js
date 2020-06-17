import React from "react";
import MainPage from "./pages/MainPage";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import FilterContextProvider from "./context/FilterContext";
import FilterPage from "./pages/FilterPage";
import MemberPage from "./pages/MemberPage";
import Navigation from "./components/Navigation";
import MemberContextProvider from "./context/MemberContext";

const LINKS = [
  {
    to: "/cars",
    label: "FINN DIN ELBIL",
  },
  {
    to: "/member",
    label: "HVORFOR BLI MEDLEM?",
  },
];

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navigation links={LINKS} />
      <Container>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/cars">
            <FilterContextProvider>
              <FilterPage />
            </FilterContextProvider>
          </Route>
          <Route path="/member">
            <MemberContextProvider>
              <MemberPage />
            </MemberContextProvider>
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
