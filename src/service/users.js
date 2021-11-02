import React, { useState, useEffect } from 'react';
import { User } from '../model/user.model'

export function UserComponent(props) {
    
    const [user, setUser] = useState("")

    return(
        <div>
            <h1>Hey {props.name}</h1>
        </div>
    )

}