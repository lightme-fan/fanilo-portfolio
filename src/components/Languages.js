import React from 'react'
import languageData from '../../data/languageData'


function Languages() {
    return (
        <section className='languages'>
            <h2 className='languages--heading'>Front end</h2>
            <ul className='languages--list'>
                {languageData.map(item => 
                    <li className='languages--list_item' key={item.id}>
                        <label className='languages--list_label' for="file">{item.title}</label>
                        <progress className='languages--listprogress' id="file" max="100" value="70"> {item.studyProgress} </progress>
                    </li>    
                )}
            </ul>
        </section>
    )
}

export default Languages
