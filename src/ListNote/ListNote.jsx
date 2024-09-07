import { NavLink } from 'react-router-dom'
import './listnote.css'

// import React from 'react'

const ListNote = ({ data, setholder }) => {

    const { id, title } = data

    const handledelete = async (e) => {
        e.preventDefault()
        fetch(`http://127.0.0.1:8000/deletenote/${id}/delete/`,
            {
                method: 'DELETE',
                'headers': {
                    'content-type': 'application/json',
                },
            }
        )
    }

    return (
        <div className='rows'>
            {title}
            <section>
                <NavLink to={`/Editnote/${id}`}><button id='positive'>edit</button></NavLink>
                <button id='negative' onClick={handledelete}>del</button>
            </section>
        </div>
    )
}

export default ListNote