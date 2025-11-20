/* eslint-disable react/prop-types */
const Login = ({ user, setUser, setLogin }) => {
  return (
    <form className="login-form">
      <label htmlFor="user">Username:</label>
      <input
        type="text"
        value={user.user} // Adjusted to reflect the right property
        name="user"
        onChange={(e) => setUser((prev) => ({ ...prev, user: e.target.value }))}
      />
      <button type="button" onClick={() => setLogin((prev) => !prev)}>
        login
      </button>
    </form>
  );
};
export default Login;
