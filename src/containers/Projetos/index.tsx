import React from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles.ts'

function Projetos() {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
      </Lista>
    </section>
  )
}

export default Projetos
