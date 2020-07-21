import React, {useState, useEffect} from 'react';
export default function Clicker() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You click ${count} times`
    });
    return (
        <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    )
}

// the use effect hooks runs after ever render
// it also runs on the first render unless its controlled
