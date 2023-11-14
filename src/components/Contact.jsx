  import React, { useRef, useState } from 'react';
  import emailjs from '@emailjs/browser';
 
  import styled from 'styled-components';
  import Map from './Map';


  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
  `;

  const Title = styled.h3`
    font-weight: 700;
  `;

  const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
  `;

  const Input = styled.input`
    padding: 20px;
    background-color: #e9e7e7;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
  `;  

  const TextArea = styled.textarea`
    padding: 20px;
    background-color: #e9e7e7;
    border: none;
    border-radius: 5px;
  `;  

  const Button = styled.button`
    background-color: #eb697f;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;
  `;  

  const Right = styled.div`
    flex: 1;
  `;


  const Contact = () => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = e => {
      e.preventDefault();

      emailjs.sendForm('service_a1ssw5p', 'template_e5q52jx', ref.current, '5sVkf46Of9xu9xphm')
          .then((result) => {
              console.log(result.text);
              setSuccess(true);
          }, (error) => {
              console.log(error.text);
              setSuccess(false);
      });
    }


    return (
      <Section>
        <Container>
          <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Contact Me</Title>
              <Input placeholder='Name' name="name" required />
              <Input placeholder='Email' name="email" required />
              <Input placeholder='Type Your Message' name="message" rows={10} />
              <Button type="submit"> Send </Button>
              {success && "Your message has been successfully sent!! "}
            </Form>
          </Left>
          <Right>
              <Map /> 
          </Right>
        </Container>
      </Section>
    )
  }

  export default Contact;