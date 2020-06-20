import React from "react";
import DisputesList from "./container/DisputesList";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { Content, Dispute } from "./App.Style";

const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Content>
        <Dispute id="dispute">
          <DisputesList />
        </Dispute>
      </Content>
    </>
  );
};

export default App;
