import { useState } from 'react';
import styled from 'styled-components';
import { useFocusWithin } from '@react-aria/interactions';

const Success = styled.div`
  color: green;
`;

const Error = styled.div`
  color: red;
`;

const Container = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  right: 25%;
  bottom: 25%;
  background: rgba(255, 0, 0, 0.5);
`;

const Newsletter = ({ forwardedRef, setIsNewsletterOpen }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: process.env.STATIC_FORMS_ACCESS_KEY // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  let { focusWithinProps } = useFocusWithin({
    onBlurWithin: (e) => setIsNewsletterOpen(false)
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
    }
  };
  return (
    <Container ref={forwardedRef} {...focusWithinProps} tabIndex="0">
      {response.type === 'success' && (
        <Success>
          <p>{response.message}</p>
        </Success>
      )}
      {response.type === 'error' && (
        <Error>
          <p>{response.message}</p>
        </Error>
      )}
      {response.message === '' && (
        <div>
          <h2>Newsletter Form</h2>
          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            onSubmit={handleSubmit}
          >
            <div>
              <label>Your Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label>Your Email</label>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div style={{ display: 'none' }}>
              <label>Title</label>
              <div>
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <input type="hidden" name="subject" onChange={handleChange} />
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </Container>
  );
};

export default Newsletter;
