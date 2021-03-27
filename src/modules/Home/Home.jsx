import React, { useEffect, useState } from 'react';
import { TitlePage, BreadCrumb, CardRow, CardColumn } from '../../components';
import Data from '../../Data/Data';
import GeraGrupo4 from '../services/GeraGrupo4';
import GeraGrupo8 from '../services/GeraGrupo8';


export default function Home() {

    useEffect(() => { ultimoSorteio(); }, []);

    const { retornaGrupo4 } = GeraGrupo4();
    const { retornaGrupo8 } = GeraGrupo8();
    const [grupo4, setGrupo4] = useState();
    const [grupo8, setGrupo8] = useState();

    const ultimoSorteio = () => {

        var ultimo = Data[Data.length - 1];
        var penultimo = Data[Data.length - 2];
        var antepenultimo = Data[Data.length - 3];

        let buscagrupo4 = retornaGrupo4(ultimo, penultimo);
        let buscagrupo8 = retornaGrupo8(ultimo, penultimo, antepenultimo);

        let qtdeGrupo4 = buscagrupo4.g1.length + '-' +
            buscagrupo4.g2.length + '-' +
            buscagrupo4.g3.length + '-' +
            buscagrupo4.g4.length;

        setGrupo4(qtdeGrupo4);

        let qtdeGrupo8 = buscagrupo8.g1.length + '-' +
            buscagrupo8.g2.length + '-' +
            buscagrupo8.g3.length + '-' +
            buscagrupo8.g4.length + '-' +
            buscagrupo8.g5.length + '-' +
            buscagrupo8.g6.length + '-' +
            buscagrupo8.g7.length + '-' +
            buscagrupo8.g8.length;

        setGrupo8(qtdeGrupo8);
    }

    return (
        <>
            <CardRow flexWrap="wrap" padding="16px 8px 8px 16px">
                <BreadCrumb secondary={('Último Jogo')} />
            </CardRow>
            <CardRow flexWrap="nowrap" padding="0px 8px 0px 0px">
                <CardColumn padding="0px" flex={1} flexGrow={2}>
                    <TitlePage primary={('Último Jogo')} style={"iconStatus"} />
                </CardColumn>
            </CardRow>
            <CardRow flexWrap="wrap" padding="0px 9px 0px 72px">
                <CardColumn padding="0px"  >
                <TitlePage primary={`Grupo4: ${grupo4}`}/>
                </CardColumn>
                <CardColumn padding="0px"  >
                <TitlePage primary={`Grupo8: ${grupo8}`} />
                </CardColumn>
            </CardRow>
            
        </>
    );
}