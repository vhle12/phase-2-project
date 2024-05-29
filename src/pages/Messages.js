import React, { useEffect, useState } from 'react';
import {
  FormContainer,
  MessagesContainer,
  Form,
  Input,
  TextArea,
  Button,
  IndividualMessageContainer,
  Message
} from '../styles/MessagesStyles';

const Messages = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/messages')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setMessages([...messages, data]);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => console.error('Error posting message:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/messages/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setMessages(messages.filter(message => message.id !== id));
      })
      .catch(error => console.error('Error deleting message:', error));
  };

  return (
    <>
      <FormContainer>
        <h2>Message</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextArea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit">Send Message</Button>
        </Form>
      </FormContainer>
      <MessagesContainer>
        {messages.map(msg => (
          <IndividualMessageContainer key={msg.id}>
            <Message>
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <Button onClick={() => handleDelete(msg.id)}>Delete</Button>
            </Message>
          </IndividualMessageContainer>
        ))}
      </MessagesContainer>
    </>
  );
};

export default Messages;