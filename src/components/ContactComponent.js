import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import emailjs from 'emailjs-com';


function Contact() {
   
   const [values, setValues] = useState({
       name: '',
       email: '',
       message: '',
   })

   const [submitted, setSubmitted ] = useState(false);

   const [ valid, setValid ] = useState(false);

   const templateParams = {
    from_name: values.name + "(" + values.email + ")",
    to_name: 'Adia',
    message: values.message
}

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }))
    }

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }))
    }

    const handleMessageInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            message: event.target.value 
        }))
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.name && values.email && values.message) {
            setValid(true);
            console.log(valid);
        }
        setSubmitted(true);
        emailjs.send('default_service', 'template_jdxxi5d', templateParams, '_M00OloFEL2HoQnVA')
        .then(
            function(response) {
                alert('Your message successfully sent!');
                console.log(response.status, response.text);
            }, (err) => {
                console.log('Failed...', err);
            }
        );    
    } 
        
      


    return (
        <div className='container'>
            <h2>Get In Touch</h2>
            <div>
                <Form onSubmit={handleSubmit}>
                    {/* {submitted && <div className='success-message'>Thanks for your message!</div>} */}
                    <FormGroup>
                        <Label for='name'>
                            Name
                        </Label>
                        <Input
                            id='name'
                            name='name'
                            placeholder='Dr. Who'
                            type='text'
                            value={values.name}
                            onChange={handleNameInputChange}
                        />
                        {submitted && !values.name && <span className='span-error' id='name-error'>Please enter your name.</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email
                        </Label>
                        <Input
                            id='email'
                            name='email'
                            placeholder='thedoctor@tardis.com'
                            type='email'
                            value={values.email}
                            onChange={handleEmailInputChange}
                        />
                        {submitted && !values.email && <span className='span-error' id='email-error'>Please enter your email.</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for='textarea'>
                            Message
                        </Label>
                        <Input
                            id='message'
                            name='message'
                            placeholder='Talk to me.'
                            type='textarea'
                            value={values.message}
                            onChange={handleMessageInputChange}
                        />
                        {submitted && !values.message &&<span className='span-error' id='message-error'>Please enter your message.</span>}
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                    
                </Form>
            </div>

        </div>
    );
}

export default Contact;