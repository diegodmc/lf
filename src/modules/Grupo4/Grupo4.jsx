import React, { useEffect, useState } from 'react';
import { TitlePage, DropdownMultiField, BreadCrumb, CardRow, CardColumn } from '../../components';
import Filtro from '../services/Filtro/Filtro';
import Data from '../../Data/Data';
import Setor from '../../components/Grafico/Setor';

export default function Grupo4() {

    const { filtroGrupo4 } = Filtro();

    const [dados, setDados] = useState([]);
    const [grupo4, setGrupo4] = useState([]);
    const [grupo4Selecionado, setGrupo4Selecionado] = useState([]);
    const [dadosTop10, montaDadosTop10] = useState([]);

    useEffect(() => { iniciaTela(); }, []);

    const iniciaTela = () => {
        let buscaDados = filtroGrupo4(Data);
        setDados(buscaDados);
        setGrupo4(removeDuplicado(buscaDados.arr_resultado_atual, 'grupo4Atual'));

        carregaTabelaTop10(buscaDados);
    }
    const carregaTabelaTop10 = (arr_grupo4) => {
        let arr_grupo4_chave_unica = removeDuplicado(arr_grupo4.arr_resultado_atual, 'grupo4Atual');
        let arr_quantidade_grupo = [];
        arr_grupo4_chave_unica.map((item) => {
            arr_quantidade_grupo.push({ name: item.grupo4Atual, value: quantidadeGrupo(arr_grupo4.arr_resultado, item.grupo4Atual, false, true)});
        })
        montaDadosTop10(arr_quantidade_grupo.sort((a, b) => (a.qtde < b.qtde) ? 1 : -1).splice(0, 10));
    }

    const quantidadeGrupo = (arr_grupo4, val_grupo, proximo, atual) => {
        let qty = 0;
        arr_grupo4.map((item) => {
            if (item.grupo4Atual == val_grupo && atual) qty++;
            if (item.grupo4Proximo == val_grupo && proximo) qty++;
        })
        return qty;
    }

    function removeDuplicado(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const handleGroup4 = (evt, v) => {
        const arr_group_selected = [];
        evt.target.value.map((item) => { arr_group_selected.push(item); });
        setGrupo4Selecionado(arr_group_selected);
        const arr_result = [];
        if (arr_group_selected.length > 0) {
            let arr_sub = [];
            dados.arr_resultado.map((item) => {
                arr_group_selected.map((subitem) => {
                    if (subitem.grupo4Atual == item.grupo4Atual)
                        arr_sub.push({ grupo4Proximo: item.grupo4Proximo });
                })
            })
            let arr_sem_duplicacao = removeDuplicado(arr_sub, 'grupo4Proximo');
            arr_sem_duplicacao.map((item) => {
                arr_result.push({ name: item.grupo4Proximo, value: quantidadeGrupo(arr_sub, item.grupo4Proximo, true, false)});
            })
            montaDadosTop10(arr_result);
        }
    }

    return (
        <>
            <CardRow flexWrap="wrap" padding="16px 8px 8px 16px">
                <BreadCrumb secondary={('Grupo 4')} />
            </CardRow>
            <CardRow flexWrap="nowrap" padding="0px 8px 0px 0px">
                <CardColumn padding="0px" flex={1} flexGrow={2}>
                    <TitlePage primary={('Grupo 4')} style={"iconStatus"} />
                </CardColumn>
                <CardColumn padding="0px" margin="0px 0px 0px 400px">
                    <DropdownMultiField
                        options={grupo4}
                        valueField="grupo4Atual"
                        labelField="grupo4Atual"
                        value={grupo4Selecionado}
                        onChange={handleGroup4}
                        placeholder={'Grupo 4'}
                    />
                </CardColumn>
                <CardColumn padding="0px" margin="0px 0px 0px 0px">

                </CardColumn>
            </CardRow>

            <CardRow flexWrap="wrap" padding="0px 9px 0px 72px">
                <Setor arr_entrada={dadosTop10} />
            </CardRow>
        </>
    );
}