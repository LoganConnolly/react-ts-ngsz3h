import * as React from 'react';
import { useState } from 'react';
import Button, { Btn_Contain } from './Button';
import { addStyles, EditableMathField } from 'react-mathquill';
import './style.css';

addStyles();

export default function App() {
  const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2');

  return (
    <div>
      <EditableMathField
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex());
        }}
      />
      <div id="num_pad">
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </div>
  );
}

