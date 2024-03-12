import React, { useState } from 'react';
import styled  from 'styled-components';

const Button=styled.button`
    baground: #333;
    border-radius:5px;
    border: 3px solid #ddd;
    color: #fefefe;
    margin:0.5em;
    padding: 10px 20px;
    font-size: 40px;
`

const Container=styled.div`
    width: 600px;
    height:400px;
    margin: 35px auto;
    padding: 30px 50px;
    border: 5px solid #ddd;
`

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase= () => {
        setCount(count+1)
    }
    const decrease= () => {
        setCount(count-1)
    }
    return (
        <Container>
            <h1>{count}</h1>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
        </Container>
    );
};

export default Counter;