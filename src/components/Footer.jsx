import React, { useState } from 'react'
import '../static/Footer.css'
const apiUrl = 'https://instaclone-backend-rndh.onrender.com/portifolio'
import axios from "axios";

function Footer() {
    const [formData, setformData] = useState({ name: '', email: '', message: '' })
    const [errorMsg, seterrorMsg] = useState('')
    const [successMsg, setsuccessMsg] = useState('')
    function handleChange(e) {
        const { name, value } = e.target;
        setformData(prev => (
            { ...prev, [name]: value }
        ))
        seterrorMsg('')
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (formData.email == '') {
            seterrorMsg('Please Enter your email');
            return;
        }
        await axios.post(apiUrl, formData)

            .catch(err => console.log(err))
            .finally(() => {
                setsuccessMsg('I got your message. Thank you for reaching me.')
            })

        setformData({ name: '', email: '', message: '' })
        setTimeout(() => {
            seterrorMsg('');
            setsuccessMsg('');
        }, 5000)

    }
    return (
        <>
            <footer className='footer flex flex-column items-center'>
                <div id='contact' className="form-contact flex flex-row space-between">
                    <div className="connect flex flex-column items-center">

                        <h2 className='text-center'>Connect with me...</h2>
                        <div className="contact flex items-center">
                            {/* <a href="" target='_blank'><img src="https://img.icons8.com/fluency/512/facebook-new.png" alt="facebook" /></a> */ }
                            <a href="https://www.linkedin.com/in/rohit-yellapu/" target='_blank'><img src="https://img.icons8.com/color/512/linkedin-2.png" alt="linkedin" /></a>
                            <a href="https://twitter.com/rohit_yellapu" target='_blank'><img src="https://img.icons8.com/color/512/twitter.png" alt="twitter" /></a>
                            <a href="https://github.com/rohityellapu" target='_blank'><img src="https://img.icons8.com/glyph-neue/512/github.png" alt="github" /></a>
                        </div>
                    </div>
                    <div className="form">
                        <h2 className='text-center'>Get in touch! </h2>
                        <form action="" className='flex flex-column' onSubmit={ handleSubmit }>
                            <div className="name">

                                <label htmlFor="name">Name: </label>
                                <input autoComplete='off' required className='input' type="text" name="name" id="name" onChange={ handleChange } value={ formData.name } placeholder='Name' />
                            </div>
                            <div className="email">

                                <label htmlFor="email">Email: </label>
                                <input autoComplete='off' required className='input' type="email" name="email" id="email" onChange={ handleChange } value={ formData.email } placeholder='Email' />
                            </div>
                            <div className="message">

                                <label htmlFor="message">Message: </label>
                                <textarea className='input' name="message" id="message" cols="30" rows="4" onChange={ handleChange } value={ formData.message } placeholder='Message'></textarea>
                            </div>
                            <div className="submit flex items-center flex-column">
                                { errorMsg !== '' && <p style={ { color: 'red' } }>{ errorMsg }</p> }
                                { successMsg !== '' && <p style={ { color: 'green' } }>{ successMsg }</p> }
                                <input type="submit" value="Submit" />

                            </div>
                        </form>
                    </div>
                </div>

            </footer>
           
            <img width='100%' src={ require('../images/snowend.png') } alt="" />

        </>
    )
}

export default Footer