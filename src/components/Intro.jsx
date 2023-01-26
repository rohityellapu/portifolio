

import Positions from './Positions';
function Intro() {

    return (
        <>
            <main className='flex justify-center lg:mx-24 mt-8'>
                <div className="bg-[#1b2025dd] m-4 rounded-2xl lg:p-24 p-4 pb-12 flex lg:flex-row lg:w-full flex-col items-center justify-between">
                    <section className="text flex flex-col justify-around lg:h-full">
                        <p className='my-2 '>Hi, I'm </p>
                        <h1 className='lg:text-8xl text-4xl font-extrabold saturate-200'>Rohit Yellapu</h1>
                        <p className='my-2'>I'm a..</p>
                        <Positions />
                        <p className='my-2 '>I develop and design real-world web and mobile applications.</p>

                    </section>

                    <section className="image">
                        <img src="https://media.tenor.com/7Hh1I-SmB3cAAAAi/playmobil-christmas.gif" className='h-64 w-64 left-10 hidden lg:block absolute top-0' alt="santa" />
                        <img className='lg:h-96 lg:w-96 h-56 lg:rounded-full lg:border-8 shadow-sky-500 shadow-xl  border-4 border-[#F2AA4CFF] w-56 rounded-3xl' src={ require('../images/rohit.png') } />
                    </section>
                </div>
            </main>
        </>
    )
}


export default Intro