import React from 'react'
import fanilo from '../../images/fanilo.png'

function Profile() {
    return (
        <section className='profile'>
            <img className='profile--photo' src={fanilo} alt='Profile photo'/>
            <div className='profile--desc'>
                <header className='profile--heading'>
                    <h2 className='profile--heading_text'>Tokiniaina Fanilo<br/> <small>Front-end developer</small></h2>
                    <div className='profile--heading_contact'>
                        <span className='profile--heading_email'>fanilo.and@onja.org</span><br/>
                        <span className='profile--heading_phone-number'>+261 34 88 901 98</span>
                    </div>
                </header>
                <div className='profile--text'>
                    <p className='profile--text_first'>
                        Self-motivated developer, who is willing to learn and create outstanding UI applications. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Profile
