import React from 'react'
import { shallow } from 'enzyme'

import {App} from '../../../client/components/App'

test('Title renders on App', () => {
  // Arrange
  const expected = 'Greetings!'

  // Act
  const wrapper = shallow(<App auth={{isAuthenticated: false}} dispatch={() => {}}/>)
  const actual = wrapper.find('h1').text()

  // Debug output
  // console.log(wrapper.debug())

  // Assert
  expect(actual).toEqual(expected)
})

test('App has some routes when not logged in', () => {
  // Arrange
  const expected = 4

  // Act
  const wrapper = shallow(<App auth={{isAuthenticated: false}} dispatch={() => {}}/>)
  const actual = wrapper.find('Route').length

  // Assert
  expect(actual).toEqual(expected)
})

test('App has one less route when logged in', () => {
  // Arrange
  const expected = 3

  // Act
  const wrapper = shallow(<App auth={{isAuthenticated: true}} dispatch={() => {}}/>)
  const actual = wrapper.find('Route').length

  // Assert
  expect(actual).toEqual(expected)
})
