import { BsArrowBarLeft } from 'react-icons/bs'
import '../NewNote/newnote.css'
import { NavLink, useNavigate } from 'react-router-dom'

const NewNote = () => {
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        let URL = 'http://127.0.0.1:8000/add/'
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const process = Object.fromEntries(form)
        fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(process)
        })
        e.currentTarget.reset()
        navigate('/')
    }

    return (
        <div className="app">

            <NavLink to='/'><BsArrowBarLeft /></NavLink>

            <form method="post" onSubmit={handlesubmit}>
                <input type="text" name="title" id="title" placeholder="title" />
                <textarea name="textarea" id="textarea" placeholder="Enter todo message"></textarea>
                <div><button type="submit" className="btn">Submit</button></div>
            </form>
        </div>

    )
}

export default NewNote