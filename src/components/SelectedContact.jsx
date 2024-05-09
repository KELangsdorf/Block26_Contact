import { useEffect } from "react";
import { useState } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const contact = await response.json();
        setContact(contact);
        return contact;
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
//
  const clearSelectedContact = () => setSelectedContactId(null);
  return (
    <>
    {contact ? (
      <div>
        <h2>{contact.name}</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>username: {contact.username}</p>
        <p>Street: {contact.address.street}</p>
        <p>Suite: {contact.address.suite}</p>
        <p>City: {contact.address.city}</p>
        <p>Zip: {contact.address.zipcode}</p>
        <p>Phone: {contact.phone}</p>
      </div>
    ) : (
      <></>
    )}
    <button onClick={clearSelectedContact}>Return to Contacts!</button>
  </>
)};
