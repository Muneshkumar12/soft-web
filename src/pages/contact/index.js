import React from 'react'
import '../../styles/contact.css'
import { PageHeader } from '../../components';
const Contact = () => {
    return (
        <div className='contact-main' name="contact">
            <PageHeader heading="Fill out the form and we'll be in touch soon!" para="How we can help you?" />
            <div className='container'>
                <div className='row contact-form-row' >
                    <div className='col-12 col-md-6 contact-form'>
                        <form >
                            <input placeholder='FullName' type='text' />
                            <input placeholder='Email' type='email' />
                            <input placeholder='Mobile Number' type='number' />
                            <textarea placeholder='your message' />
                            <input type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
