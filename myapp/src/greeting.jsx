import React from "react";


const Greeting = ({name}) => {
    const greetingMSG = name ? `Hello ${name}` : 'Hello WORLD';
    return (
        <h1>{greetingMSG}</h1>
    )
}

export default Greeting;