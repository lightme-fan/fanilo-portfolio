import React from 'react'

function ProjectTemplate({imageUrl, build_with, title, description, demoLink, githubLink}) {
    return (
        <section>
            <img className='screenshot' src={imageUrl} alt='Project' />
            <div>{build_with}</div>
            <h3>{title}</h3>
            <p>
                {description}
            </p>

            <div>
                <button className='project-demo'><a href={demoLink}>Demo</a></button>
                <button><a href={githubLink}>Code</a></button>
            </div>
        </section>
    )
}

export default ProjectTemplate
