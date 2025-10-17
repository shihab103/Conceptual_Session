import {useContext } from 'react'
import { valueContext } from '../../Component/Layout/RootLayout'

export default function About() {
  const {user} = useContext(valueContext);
  console.log(user)
  return (
    <div>This is a about</div>
  )
}
