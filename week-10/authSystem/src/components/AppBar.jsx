/* eslint-disable react/prop-types */

const AppBar = ({ user, login, setLogin }) => {
  return (
    <div
      className="app-bar"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>Auth System Demo</div>
      <div style={{ display: "flex", gap: "10px" }}>
        Welcome , {user.user}
        <button
          onClick={() => {
            setLogin((prev) => !prev);
            user.user = "";
          }}
        >
          {login ? "logout" : "login"}
        </button>
      </div>
    </div>
  );
};

export default AppBar;
