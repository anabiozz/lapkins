import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    constructor(props) {
        super(props);
        // this.props.onLoad(this.props.name);
    }

    render() {
        const { name, title, type, error, value, onChange, placeholder } = this.props;

        return (
            <div className="input-element">
                <label htmlFor={name} className="input-label">{title}</label>
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value || ''}
                    onChange={e => onChange(name, e)}
                    placeholder={placeholder}
                />
                <small className="error">{error}</small>
            </div>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
};

export default Input;
