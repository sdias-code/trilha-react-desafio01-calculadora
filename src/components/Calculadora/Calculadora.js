import React, { useState } from 'react';
import Button from '../Button'
import Input from '../Input/index.js';
import { Container, Content, Row } from './../../styles.js';

const Calculadora = () => {
  const [input, setInput] = useState('');

  const handleClick = (label) => {
      if (label === '=') {
          try {
              setInput(eval(input).toString());
            } catch {
        setInput('Error');
      }
    } else if (label === 'C') {
      setInput('');
    } else {
      setInput(input + label);
    }
  }; 

  return (
    <Container>
      <Content>
        <Input value={input}/>
        <Row>
          <Button label="x" onClick={() => handleClick('*')}/>
          <Button label="/" onClick={() => handleClick('/')} />
          <Button label="C" onClick={() => handleClick('C')}/>
          <Button label="." onClick={() => handleClick('.')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleClick('7')}/>
          <Button label="8" onClick={() => handleClick('8')}/>
          <Button label="9" onClick={() => handleClick('9')}/>
          <Button label="-" onClick={() => handleClick('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleClick('4')}/>
          <Button label="5" onClick={() => handleClick('5')}/>
          <Button label="6" onClick={() => handleClick('6')}/>
          <Button label="+" onClick={() => handleClick('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleClick('1')}/>
          <Button label="2" onClick={() => handleClick('2')}/>
          <Button label="3" onClick={() => handleClick('3')}/>
          <Button label="=" onClick={() => handleClick('=')}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleClick('0')}/>
        </Row>
      </Content>
    </Container>
  );
};

export default Calculadora;