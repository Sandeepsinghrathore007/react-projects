import React, { useState } from "react";
import contacts from "./data";

const ContactList = () => {
  const [contact, setcontact] = useState(contacts); //contact array

  const [input, setinput] = useState(""); //input state

  const search = contact.filter((data) =>
    data.name.toLowerCase().includes(input.toLowerCase())
  ); // filter contact array if contain any of input's charactor

  return (
    <div>
      <h1>My Contacts</h1>
      <input
        type="text"
        placeholder="search contact"
        value={input}
        onChange={(e) => setinput(e.target.value)} //setting input value
      />
      <div className="container">
        {search.map(
          (
            data //mapping contacts
          ) => (
            <div className="contact" key={data.id}>
              <img src={data.avatar} alt="" /> <h2>{data.name}</h2>
              <div>
                <h2>Address:{data.address}</h2>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ContactList;
