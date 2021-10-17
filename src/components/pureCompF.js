import React,{ useState } from 'react';

const PureCompF = () => {
    const [name, setName] = useState('Jordan');
    console.log('render');
    return(
        <>
            <h3>Hi, I am a pure component.</h3>
            <h2>{name}</h2>
            <button onClick={() =>
                setName('Roxanne')
            }>Click to Change
            </button>
        </>
    );
}

export default PureCompF;