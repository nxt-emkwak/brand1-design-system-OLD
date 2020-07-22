import React from 'react'
import styles from './styles.module.css'
import Button from './components/Button'

export const ExampleComponent = ({ text }) => {
  return (
    <div>
      <div className={styles.test}>Example Component: {text}</div>
      <Button primary>Test</Button>
    </div>
  )
}
