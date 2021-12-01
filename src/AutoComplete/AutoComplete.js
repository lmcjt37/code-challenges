/**
 * Create simple common auto complete component that will gets `data` list with
 * possible values and as user types in the field the matched candidates
 * (case-insensitive) will be displayed in a drop-down below the field. If the
 * item of the candidate is clicked the value will be set as current value of
 * the field.
 *
 * Feel free to change the component as you like only requirement is to keep the
 * propTypes as an component interface.
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
