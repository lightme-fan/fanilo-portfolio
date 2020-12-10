import React from 'react'
import Profile from './Profile'
import Languages from './Languages'
import Hobbies from './Hobbies'
import Blog from './Blog'
import Experiences from './Experiences'
import Projects from './Projects'

function App() {
    {/* Profile, languages, hobbies, Blog, experience, Projects, */}
    return (
        <article>
            <Profile/>
            <div className='menu--list'>
                <Languages/>
                <Hobbies/>
                <Blog/>
                {/* <Experiences/> */}
            </div>
            <Projects/>
        </article>
    )
}

export default App
