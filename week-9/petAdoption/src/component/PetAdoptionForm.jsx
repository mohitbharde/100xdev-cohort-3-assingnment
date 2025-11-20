/* eslint-disable react/prop-types */
import { useState } from "react";
import { validation } from "../util/validation";

const PetAdoptionForm = ({ arr, setArr, setIsdata }) => {
  const [form, setform] = useState({
    pet_name: "",
    pet_type: "",
    breed: "",
    your_name: "",
    email: "",
    phone: "",
  });

  const [err, seterr] = useState("");

  function changeContent(event) {
    const { name, value } = event.target;
    setform((prev) => ({ ...prev, [name]: value }));

    seterr(validation(name, value, {petName:"" ,}));
    //console.log(form);
  }

  function submit(event) {
    event.preventDefault();
    setArr(arr.concat([form]));
    //console.log(arr);
    setIsdata((prev) => !prev);
  }

  return (
    <form className="form">
      <label>pet name</label>
      <input
        type="text"
        id="pet_name"
        name="pet_name"
        placeholder="pet name"
        value={form.pet_name}
        onChange={changeContent}
      />
      <small> {err.petName} </small>

      <label>Pet Type</label>
      <input
        type="text"
        id="pet_type"
        name="pet_type"
        placeholder="pet type"
        value={form.pet_type}
        onChange={changeContent}
      />

      <label>breed</label>
      <input
        type="text"
        id="breed"
        name="breed"
        placeholder="breed"
        value={form.breed}
        onChange={changeContent}
      />
      <small> {err.breed} </small>

      <label>Your name</label>
      <input
        type="text"
        id="your_name"
        name="your_name"
        placeholder="your name"
        value={form.your_name}
        onChange={changeContent}
      />
      <small> {err.adopterName} </small>

      <label>email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="email"
        value={form.email}
        onChange={changeContent}
      />
      <small> {err.email} </small>

      <label>phone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="phone"
        value={form.phone}
        onChange={changeContent}
      />
      <small> {err.phone} </small>

      <button onClick={submit}>submit</button>
    </form>
  );
};

export default PetAdoptionForm;
