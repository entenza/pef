import React, { useState } from 'react'
import EtapaList from './EtapaList'
import FieldList from './FieldList'
import PathList from './PathList'

import {MainDiv} from './style'

export default function Main() {

    const [paths, setPaths] = useState(['P1', 'P2'])
    const [etapas, setEtapas] = useState(['E1', 'E2'])
    const [fields, setFields] = useState(['F1', 'F2'])

    return (
        <MainDiv>
            <PathList paths={paths} />
            <EtapaList etapas={etapas} />
            <FieldList fields={fields} />
        </MainDiv>
    )
}
