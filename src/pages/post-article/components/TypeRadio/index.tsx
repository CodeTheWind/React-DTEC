import React from 'react';
import './style.less';

interface TypeRadioPropsType {
  id: string;
  defaultChecked?: boolean;
  name: string;
  value: string;
  getTypeValue: Function;
}

class TypeRadio extends React.Component<TypeRadioPropsType> {

  onChange = () => {
    this.props.getTypeValue(this.props.id, this.props.value);
  }

  render() {
    return (
      <span className="radio">
        <input
          id={this.props.id}
          type="radio"
          defaultChecked={this.props.defaultChecked || false}
          name={this.props.name}
          onChange={this.onChange}
        />
        <label htmlFor={this.props.id} className="label">
          {this.props.value}
        </label>
      </span>
    )
  }
}

export default TypeRadio;