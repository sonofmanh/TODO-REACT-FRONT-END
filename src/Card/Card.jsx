import { CgAdd } from 'react-icons/cg'
import './card.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ListNote from '../ListNote/ListNote'

const Card = () => {
    const [holder, setholder] = useState([])

    useEffect(() => {
        getnote()
    }, [])
    const getnote = async () => {
        let response = await fetch('http://127.0.0.1:8000')
        let data = await response.json()
        setholder([...data])
    }
    return (
        <div className='card'>
            <div>
                <h5>Note</h5>
                <NavLink to='newnote'><span><CgAdd /></span></NavLink>

            </div>
            <div className='context'>
                {holder.map((data) => <ListNote data={data} setholder={setholder} key={data.id}  />)}
            </div>
            
        </div>
    )
}

export default Card
