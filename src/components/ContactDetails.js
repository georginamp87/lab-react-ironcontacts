import React from 'react'

function ContactDetails(props) {
    return (
        <div>
            <div>
                <img width="100px" src={props.picture}/> 
                {props.name}
                {props.popularity}
                <button onClick={() => {props.onDelete(props.id)}}>Delete</button>
            </div>
        </div>
    )
}


export default ContactDetails