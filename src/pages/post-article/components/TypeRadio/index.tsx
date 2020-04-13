import React from 'react';
import './style.less';

interface TypeRadioPropsType {
  ids: string;
  defaultChecked?: boolean;
  name: string;
  value: string;
  getTypeValue: (ids: string) => void;
}

class TypeRadio extends React.Component<TypeRadioPropsType> {

  onChange = () => {
    this.props.getTypeValue(this.props.ids);
  }

  render() {
    return (
      <span className="radio">
        <input
          id={this.props.ids}
          type="radio"
          defaultChecked={this.props.defaultChecked || false}
          name={this.props.name}
          onChange={this.onChange}
        />
        <label htmlFor={this.props.ids} className="label">
          {this.props.value}
        </label>
      </span>
    )
  }
}

export default TypeRadio;