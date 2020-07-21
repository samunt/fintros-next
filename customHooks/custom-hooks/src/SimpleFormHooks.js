import React, {useState} from 'react';

export default function SimpleFormHooks() {
    const [email, setEmail] = useState("");
    return (
        <div>
            <h5>You entered: {email}</h5>
            <input
                type='text'
                value={email}
                onChange={setEmail}
            />
        </div>
    )
}
