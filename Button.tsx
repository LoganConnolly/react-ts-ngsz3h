import * as React from 'react';
import './Button.css';
import { addStyles, StaticMathField } from 'react-mathquill'

addStyles();

interface Btn_Props {
  type: string;
  content: string;
  behave: () => void;
}

class Button extends React.Component<Btn_Props> {
  render() {
    const { type, content, behave } = this.props;
    return (
      <div onClick={behave}>
        <StaticMathField className={type}>
          {content}
        </StaticMathField>
      </div>
    );
  }
}

export function Btn_Contain(props: any) {
  return <div className="row">{props.children}</div>;
}

export default Button;
