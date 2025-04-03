import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'
import Projetos from './containers/Projetos'
import React from 'react'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
