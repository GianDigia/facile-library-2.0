import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = (): JSX.Element => <Redirect to={'/books'} />

export default Home
