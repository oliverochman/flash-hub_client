import React from "react";
import PresentFlashcard from "./components/PresentFlashcard";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";

const App = () => {
  return (
    <>
      <Navbar />
      <PresentFlashcard />
      <Logout />
    </>
  );
}
export default App;
