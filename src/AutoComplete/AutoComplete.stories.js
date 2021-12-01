import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { withKnobs, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import AutoComplete from './AutoComplete'

// Mock data used as the list of candidates

const mockData = [
  'Aquamarine',
  'Black',
  'Blue',
  'Brown',
  'Cyan',
  'Gray',
  'Green',
  'Indigo',
  'Lime',
  'Magenta',
  'Maroon',
  'Navy',
  'Olive',
  'Orange',
  'Pink',
  'Purple',
  'Red',
  'Silver',
  'Tan',
  'Teal',
  'Turquoise',
  'Violet',
  'White',
  'Yellow',
]

// Utilities

const AutoCompleteMock = ({ children }) => {
  const [value, setValue] = useState('')
  const onChange = useCallback((event) => setValue(event.target.value), [])
  return children({ data: mockData, value, onChange })
}

AutoCompleteMock.propTypes = {
  children: PropTypes.func.isRequired,
}

// Stories

export default {
  title: 'AutoComplete',
}

export const controlledWithMockData = () => {
  return (
    <AutoCompleteMock>
      {(props) => <AutoComplete {...props} />}
    </AutoCompleteMock>
  )
}

controlledWithMockData.story = {
  parameters: { options: { showPanel: false } },
}

export const uncontrolledWithKnobs = () => {
  return (
    <AutoComplete
      data={array('data', ['one', 'two', 'three'])}
      onChange={action('onChange')}
    />
  )
}

uncontrolledWithKnobs.story = {
  decorators: [withKnobs],
  parameters: { options: { showPanel: true } },
}
