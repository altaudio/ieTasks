import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import HelloKitty from './helloKitty'
import Person from './person'
import PersonWithProps from './personWithProps'

export default () => {
  return (
    <div>
      <p>Question 1 Answer</p>
      <Hello />

      <p>Question 2 Answer</p>
      <Kitty />

      <p>Question 3 Answer</p>
      <HelloKitty />

      <p>Question 4 Answer</p>
      <Person />

      <p>Question 5 Answer</p>
      <PersonWithProps name={"John"} age={"20"} />


    </div>
  )
}
