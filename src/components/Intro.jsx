
import Avatar from '@mui/material/Avatar';
import Positions from './Positions';
function Intro() {

    return (
        <>
            <main className='flex items-center'>
                <div className="intro flex flex-row items-center space-between">
                    <section className="text">
                        <p>Hi, I'm </p>
                        <h1 style={ { fontSize: '5rem', margin:0 } }>Rohit Yellapu</h1>
                        <p>I'm a..</p>
                        <Positions/>
                        <p>I develop and design real-world web and mobile applications.</p>
                    </section>

                    <section className="image">
                        <img src="https://media.tenor.com/7Hh1I-SmB3cAAAAi/playmobil-christmas.gif" style={ santaStyle } alt="santa" />
                        <Avatar alt="Rohit Yellapu" sx={ { width: 396, height: 396 } } style={ { border:'0.5rem solid #F2AA4CFF', boxShadow:'10px 10px 15px aqua'}} src={ require('../images/rohit.jpg') } />
                    </section>
                </div>
            </main>
        </>
    )
}

const santaStyle = {
    position: 'absolute',
    top: '2rem',
    left: '6rem',
    border: 'none',
    height: '15rem'
}

export default Intro