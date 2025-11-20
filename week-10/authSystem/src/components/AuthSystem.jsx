import { useState } from "react";
import AppBar from "./AppBar";
import Login from "./Login";
import Home from "./Home";

const AuthSystem = () => {
  const [user, setUser] = useState({ user: "" });
  const [login, setLogin] = useState(false);

  return (
    <div>
      <AppBar user={user} login={login} setLogin={setLogin} />
      {!login ? (
        <Login user={user} setUser={setUser} setLogin={setLogin} />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default AuthSystem;
