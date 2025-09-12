
import { useState } from "react";
import Contact from "./Contact";

const EMPTY = { name: "", email: "", phone: "", address: "", company: "" };

const ContactListManager = () => {
 
  const [contacts, setContacts] = useState([]);

  const [newContact, setNewContact] = useState(EMPTY);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prev) => ({ ...prev, [name]: value }));
  };


  const addContact = () => {
    if (!newContact.name.trim() || !newContact.email.trim()) return;
    setContacts((prev) => [...prev, newContact]);
    setNewContact(EMPTY); 
  };

 
  const deleteContact = (index) => {
    setContacts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="contact-list">
      <h1>Contact List Manager</h1>

      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter name..."
          value={newContact.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email..."
          value={newContact.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter phone..."
          value={newContact.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter address..."
          value={newContact.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Enter company..."
          value={newContact.company}
          onChange={handleInputChange}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>

      <ol>
        {contacts.map((c, index) => (
          <Contact
            key={index}
            contact={c}
            onDelete={() => deleteContact(index)}
          />
        ))}
      </ol>
    </div>
  );
};

export default ContactListManager;
