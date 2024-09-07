import React, { useEffect, useState } from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'
import '../NewNote/newnote.css'
import { useNavigate, NavLink, useParams } from 'react-router-dom'

const Editnote = () => {
    const { id } = useParams();  //note: the word ('id' deconstructed in use parameter ) must be the same with the URL params, /product/ :id.

    const [holder, setholder] = useState([])

    useEffect(() => {
        getnote()
    }, [])
    const getnote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/singlenote/${id}/`)
        let data = await response.json()
        setholder(data)
    }

    const { title, textarea } = holder

    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const redef = Object.fromEntries(form)
        fetch(`http://127.0.0.1:8000/singlenote/${id}/update/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(redef)
        })
        navigate('/')
    }

    return (
        <div className="app">
            <NavLink to='/'><BsArrowBarLeft /></NavLink>
            <form method="post" onSubmit={handlesubmit}>
                <input type="text" name="title" defaultValue={title} id="title" placeholder="title" />
                <textarea name="textarea" defaultValue={textarea} id="textarea" placeholder="Enter todo message"></textarea>
                <div><button type="submit" className="btn">Submit</button></div>
            </form>
        </div>
    )
}

export default Editnote