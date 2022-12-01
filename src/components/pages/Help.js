import React,{useState} from 'react'
import {BsFillChatSquareFill} from 'react-icons/bs'
import '../css/help.css'

function Help() {

    const [help, setHelp] = useState(true);
    const HellpClicked = () => {

    }

    return (
        <div>
           {
                help ?
                    (<div className='help_cont' onClick={HellpClicked}>
                        <div className='help_main_cont'>
                            <BsFillChatSquareFill className='help_icon' />
                            <p>Chat with us</p>
                        </div>
                    </div>)
                    :
                    (  <div className='help_pop_cont'>
                        
                    </div>)
            }

          
        </div>
    )
}

export default Help