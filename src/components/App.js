import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";

import { ThemeContext } from "../context/Theme";
import { UserProvider } from "../context/user";

function App() {
 

  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      

      <UserProvider>
        <Header  />
        <Profile  />
      </UserProvider>

    </main>
  );
}

export default App;