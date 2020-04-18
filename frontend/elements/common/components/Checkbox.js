import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { name, handleChange, selectedOptions, options } = props;

  return(
    <div className="form-group">
      <label htmlFor={name} className="form-label">{name}</label>
      <div className="checkbox">
        {
          options.map(option => (
            <label htmlFor={name} key={option} className="checkbox-inline">
              <input
                id={name}
                name={name}
                onChange={handleChange}
                value={option}
                checked={selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
            </label>
          ))
        }
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
};

export default Checkbox;


// handleSkillsCheckBox(e) {
//
//   const newSelection = e.target.value;
//   let newSelectionArray;
//
//   if(this.state.newUser.skills.indexOf(newSelection) > -1) {
//     newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
//   } else {
//     newSelectionArray = [...this.state.newUser.skills, newSelection];
//   }
//
//   this.setState( prevState => ({ newUser:
//         {...prevState.newUser, skills: newSelectionArray }
//     })
//   )
// }