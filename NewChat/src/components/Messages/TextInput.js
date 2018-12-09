// eslint-disable-next-line
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class TextInput extends React.Component {

  state = {
      value: ''
  }

  onChange = e => this.setState({ value: e.target.value })

  onPressEnter = () => {

      this.props.sendMessage({
          value: this.state.value,
		  // eslint-disable-next-line
          color: this.props.color || '#1E9EE0',
		  // eslint-disable-next-line
          timeStamp: new Date,
          userId: this.props.userId || 'anonymous',
      })

      this.setState({ value: '' })
  }

  render() {
	// eslint-disable-next-line
    const { props, state } = this

    return (
        <div className="text-input">
            <TextArea {...{
                autosize: true,
                placeholder: 'Начинайте писать сообщение...',
                value: this.state.value,
                onChange: this.onChange,
                onPressEnter: this.onPressEnter,
            }}/>
        </div>
    );
  }
}

export default TextInput;
