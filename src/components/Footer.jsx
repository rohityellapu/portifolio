import React, { useState } from 'react'
const apiUrl = 'https://instaclone-backend-rndh.onrender.com/portifolio'
import axios from "axios";

function Footer() {
    const [formData, setformData] = useState({ name: '', email: '', message: '' })
    const [errorMsg, seterrorMsg] = useState('')
    const [successMsg, setsuccessMsg] = useState('')
    const [isLoading, setisLoading] = useState(false)
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
        else if (formData.name == "") {
            seterrorMsg('Please Enter your name');
            return;
        }
        setisLoading(true);
        await axios.post(apiUrl, formData)

            .catch(err => console.log(err))
            .finally(() => {
                setisLoading(false);
                setsuccessMsg('Thank you for reaching me.')

            })

        setformData({ name: '', email: '', message: '' })
        setTimeout(() => {
            seterrorMsg('');
            setsuccessMsg('');
        }, 5000)

    }
    return (
        <>
            <footer id='contacts' className='footer flex flex-column items-center'>
                <div className="form-contact flex lg:flex-row flex-col justify-between lg:justify-around lg:mt-20 gap-y-4 lg:px-10 w-full">
                    <div className="connect flex flex-column items-center">

                        <h2 className='text-center text-3xl lg:text-5xl m-4 my-10 font-bold'>Connect with me...</h2>
                        <div className="contact flex items-center justify-center">
                            {/* <a href="" target='_blank'><img src="https://img.icons8.com/fluency/512/facebook-new.png" alt="facebook" /></a> */ }
                            <a href="https://www.linkedin.com/in/rohit-yellapu/" target='_blank'><img className='h-10 lg:h-12 m-2 hover:scale-110 hover:saturate-200 duration-300' src="https://img.icons8.com/color/512/linkedin-2.png" alt="linkedin" /></a>
                            <a href="https://twitter.com/rohit_yellapu" target='_blank'><img className='h-10 lg:h-12 m-2 hover:scale-110 hover:saturate-200 duration-300' src="https://img.icons8.com/color/512/twitter.png" alt="twitter" /></a>
                            <a href="https://github.com/rohityellapu" target='_blank'><img className='h-10 lg:h-12 m-2 hover:scale-110 hover:saturate-200 duration-300' src="https://img.icons8.com/glyph-neue/512/github.png" alt="github" /></a>
                        </div>
                    </div>
                    <div className="form">
                        <h2 className='text-center text-3xl lg:text-5xl m-4 my-10 font-bold'>Get in touch! </h2>
                        <form action="" className='flex flex-col lg:text-xl' onSubmit={ handleSubmit }>
                            <div className="name flex flex-col p-2">

                                <label htmlFor="name">Name: </label>
                                <input autoComplete='off' className='input p-2 border-gray-400 rounded-lg m-2 lg:w-96 border-2 focus:outline-green-400 bg-transparent' type="text" name="name" id="name" onChange={ handleChange } value={ formData.name } placeholder='Name' />
                            </div>
                            <div className="email flex flex-col p-2">

                                <label htmlFor="email">Email: </label>
                                <input autoComplete='off' className='input p-2 border-gray-400 lg:w-96 rounded-lg m-2 border-2 focus:outline-green-400 bg-transparent' type="email" name="email" id="email" onChange={ handleChange } value={ formData.email } placeholder='Email' />
                            </div>
                            <div className="message flex flex-col p-2">

                                <label htmlFor="message">Note: </label>
                                <textarea className='input p-2 border-gray-400 rounded-lg m-2 lg:w-96  border-2 focus:outline-green-400 bg-transparent' name="message" id="message" cols="30" rows="4" onChange={ handleChange } value={ formData.message } placeholder='Message'></textarea>
                            </div>
                            <div className="submit flex flex-col gap-y-4 gap-4 justify-center items-center">
                                { errorMsg !== '' && <p className='text-sm text-red-500'>{ errorMsg }</p> }
                                { successMsg !== '' && <p className='text-sm text-green-500'>{ successMsg }</p> }
                                { isLoading && <img src={ require('../images/loading.gif') } className="h-16 w-16" /> }
                                <input disabled={ isLoading } className=' rounded-lg bg-lime-400 text-white p-2 px-4 hover:animate-none hover:saturate-200 disabled:animate-none hover:cursor-pointer border-lime-500 m-auto disabled:saturate-0 disabled:cursor-not-allowed' type="submit" value="Connect" />

                            </div>
                        </form>
                    </div>
                </div>

            </footer>

            <img id='contact' width='100%' src={ require('../images/snowend.png') } alt="" />

        </>
    )
}

export default Footer