import { useState } from "react";
import Header from "./component/Header";
import PetAdoptionForm from "./component/PetAdoptionForm";
import AdopterData from "./component/AdopterData";
import "./myApp.css";

const App = () => {
  const [isdata, setIsdata] = useState(true);
  const [arr, setArr] = useState([]);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
      }}
    >
      <Header message={"Pet Adoption Form"} />
      {isdata ? (
        <PetAdoptionForm arr={arr} setArr={setArr} setIsdata={setIsdata} />
      ) : (
        <AdopterData arr={arr} setIsdata={setIsdata} />
      )}
    </div>
  );
};
export default App;
