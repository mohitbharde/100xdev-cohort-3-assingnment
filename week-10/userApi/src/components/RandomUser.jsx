import { useEffect, useState } from "react";
import "./RandomUser.css";
import axios from "axios";

const RandomUser = () => {
  const [loding, setLoding] = useState(true);
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        setLoding(true);
        const response = await axios.get(
          `https://randomuser.me/api?page=${page}&results=5`
        );
        setUser((prev) => [...prev, ...response.data.results]);
        setLoding(false);
      };
      fetchUser();
    } catch (e) {
      console.log(e);
    }
  }, [page]);

  return (
    <div className="random-user-container">
      <h1>Random User</h1>
      <div className="users-list">
        {user.map((user, index) => (
          <div key={index} className="user-card">
            <img className="user-image" src={user.picture.thumbnail}></img>
            <h2>{user.name.first + " " + user.name.last}</h2>
          </div>
        ))}
      </div>
      {loding ? (
        <div className="loading-text">Loading</div>
      ) : (
        <button
          className="load-more-button"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default RandomUser;
