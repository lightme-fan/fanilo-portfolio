import React from 'react'
import blog from '../../images/blog.png'

function Blog() {
    return (
        <section className='blog'>
            <a href='https://lightme-fan.github.io/blog/'>
                <h2>Blog</h2>
                <img src={blog} alt='Blog' />
                <p>
                    In this article I tell the story about myself. You also can see few blog posts which you can have a look.
                </p>
                <div></div>
            </a>
        </section>
    )
}

export default Blog
