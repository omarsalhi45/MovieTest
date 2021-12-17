import React from 'react'
import { Container } from '@material-ui/core'

import Header from './components/header/header'
import Movies from './components/movies/Movies'

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Movies />
    </Container>
    
  )
}

export default App;
