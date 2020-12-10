import React from 'react'

function ProjectTemplate({screenshot, type, title, description, url, github}) {
    return (
        <section>
            <img className='screenshot' src={screenshot} alt='Project' />
            <div>{type}</div>
            <h3>{title}</h3>
            <p>
                {description}
            </p>

            <div>
                <button className='project-demo'><a href={url}>Demo</a></button>
                <button><a href={github}>Code</a></button>
            </div>
        </section>
    )
}

export default ProjectTemplate
