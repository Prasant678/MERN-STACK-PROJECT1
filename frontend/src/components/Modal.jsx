import React from 'react'
import { X } from "lucide-react"

function Modal({ onclose }) {
    return (
        <>
            <div className='Popup'>
                <div>
                    <button className='x-btn' onClick={onclose}><X /></button>
                    <div className='Check'>
                        <h1>CHECK EVENT AVAILABILITY</h1>
                        <p>check Availability for Events</p>
                        <form>
                            <input type="text" placeholder='Enter a Event' />
                            <input type="date" />
                        </form>
                        <button type='submit' className='Modal-btn'>CHECK AVAILABILITY</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
