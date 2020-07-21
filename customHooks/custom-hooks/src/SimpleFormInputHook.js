import React from 'react';
import useInputState from './hooks/useFormState';

export default function SimpleFormInputHook() {
    const [email, updateEmail, resetEmail] = useInputState('');
    const [password, updatePassword, resetPassword] = useInputState('');
    return (
        <div>
            <h5>Email: {email}</h5>
            <h5>Password: {password}</h5>
            <input type='text' value={email} onChange={updateEmail}/>
            <input type="password" value={password} onChange={updatePassword}/>
            <button onClick={resetEmail}>Reset email</button>
            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}
