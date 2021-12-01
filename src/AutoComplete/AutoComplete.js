/**
 * Create a simple auto complete component that can use the given `data`.
 *
 * We're using Storybook to design the component, mock data is found within the story.
 * The onChange handler is also defined within the story (check to see how it's setup)
 *
 * 1) List possible values as the user types in the field.
 * 2) Matched values (case-insensitive) should display in a drop-down below the input field.
 * 3) If a row item is clicked the value will be set as the current value of
 * the input field.
 *
 * Feel free to change the component/story as you like, the only requirement is to keep the
 * propTypes as a component interface.
 */

import React from 'react'
import PropTypes from 'prop-types'

import classes from './AutoComplete.css'

const AutoComplete = ({ value, onChange }) => (
  <div className={classes.container}>
    <input className={classes.field} value={value} onChange={onChange} />
  </div>
)

AutoComplete.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default AutoComplete
