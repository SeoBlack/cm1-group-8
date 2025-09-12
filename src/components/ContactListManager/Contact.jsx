const Contact = ({ contact, onDelete }) => (
  <li>
    <div>
      <strong>{contact.name}</strong> — {contact.email}
    </div>
    <div>
      {contact.phone} | {contact.address} | {contact.company}
    </div>
    <button onClick={onDelete}>Delete</button>
  </li>
);
export default Contact;