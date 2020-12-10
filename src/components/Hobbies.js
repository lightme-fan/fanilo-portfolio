import React from 'react'
import hobbyData from '../../data/hobbyData' 

function Hobbies() {
    const mapHobby = hobbyData.map(hobby => 
        <li key={hobby.id}>
            <img src={hobby.photo} alt='Guitar'/>
            <h3>{hobby.title}</h3>
            <p>{hobby.desc}</p>
        </li>   
    )

    return (
        <section className='hobbies'>
            <h2>Hobbies</h2>
            <ul className = 'list-hobbies'>
                {mapHobby}
                {/* <li>
                    <img src='' alt='Fishing'/>
                    <h3>Fishing</h3>
                    <p>Quisque feugiat malesuada molestie.</p>
                </li>
                <li>
                    <img src='' alt='FootBall'/>
                    <h3>FootBall</h3>
                    <p>Quisque feugiat malesuada molestie.</p>
                </li> */}
            </ul>
        </section>
    )
}

export default Hobbies
