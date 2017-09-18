import React from 'react'
import './ProgramPlatform.css'
import store from './store'

export default class ProgramPlatform extends React.Component {
        render(){
            return (
                <div className='programWindow1'>
                    <div className='programWindow2'>
                        <textarea className='textArea' rows='30' cols="36" ></textarea>
                    </div>
                        <div>
                            <button className='run-button' label='R/S'> R/S </button>
                        </div>        
                </div>    
            )
        }
}