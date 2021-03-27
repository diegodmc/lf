import React, { useEffect, useState } from 'react';
import { TitlePage, DropdownMultiField, BreadCrumb, CardRow, CardColumn, GenericTable } from '../../components';
import Filtro from '../services/Filtro/Filtro';
import Data from '../../Data/Data';
import Setor from '../../components/Grafico/Setor';

export default function Grupo8() {

    const { filtroGrupo8 } = Filtro();

    const [dados, setDados] = useState([]);
    const [grupo8, setGrupo8] = useState([]);
    const [grupo8Selecionado, setGrupo8Selecionado] = useState([]);
    const [dadosTop10, montaDadosTop10] = useState([]);
    
    const header = [{ description: 'Grupo', field: 'name' },
                    { description: 'Quantidade', field: 'value' }
                   ];

    const [table, setTable] = useState([]);

    useEffect(() => { iniciaTela(); }, []);

    const iniciaTela = () => {
        let buscaDados = filtroGrupo8(Data);
        setDados(buscaDados);
        setGrupo8(removeDuplicado(buscaDados.arr_resultado_atual, 'grupo8Atual'));
        carregaTop10(buscaDados);
    }

    const carregaTop10 = (arr_grupo8) => {
        let arr_grupo8_chave_unica = removeDuplicado(arr_grupo8.arr_resultado_atual, 'grupo8Atual');
        let arr_quantidade_grupo = [];
        arr_grupo8_chave_unica.map((item) => {
            arr_quantidade_grupo.push({ name: item.grupo8Atual, value: quantidadeGrupo(arr_grupo8.arr_resultado, item.grupo8Atual, false, true), visible: true, bol_parent: false });
        })
        renderTop10(arr_quantidade_grupo);
    }

    const recarregaTop10 = (arr_grupo8, val_grupo) => {
        let arr_filtrado = [];
        arr_grupo8.arr_resultado.map((item) => {
            if (val_grupo == item.grupo8Atual)
                arr_filtrado.push({ grupo8Proximo: item.grupo8Proximo });
        })
        let arr_grupo8_chave_unica = removeDuplicado(arr_filtrado, 'grupo8Proximo');
        let arr_quantidade_grupo = [];
        arr_grupo8_chave_unica.map((item) => {
            arr_quantidade_grupo.push({ name: item.grupo8Proximo, value: quantidadeGrupo(arr_filtrado, item.grupo8Proximo, true, false), visible: true, bol_parent: false });
        })
        renderTop10(arr_quantidade_grupo);
    }

    const renderTop10 = (arr_quantidade_grupo) => {
        let arr_final = arr_quantidade_grupo.sort((a, b) => (a.value < b.value) ? 1 : -1).splice(0, 10);
        montaDadosTop10(arr_final);
        setTable(arr_final);
    }

    const quantidadeGrupo = (arr_grupo8, val_grupo, proximo, atual) => {
        let qty = 0;
        arr_grupo8.map((item) => {
            if (item.grupo8Atual == val_grupo && atual) qty++;
            if (item.grupo8Proximo == val_grupo && proximo) qty++;
        })
        return qty;
    }

    function removeDuplicado(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const handleGroup8 = (evt) => {
        const arr_group_selected = [];
        evt.target.value.map((item) => { arr_group_selected.push(item); });
        setGrupo8Selecionado(arr_group_selected);
        recarregaTop10(dados, arr_group_selected[arr_group_selected.length - 1].grupo8Atual);
    }

    return (
        <>
            <CardRow flexWrap="wrap" padding="16px 8px 8px 16px">
                <BreadCrumb secondary={('Grupo 8')} />
            </CardRow>
            <CardRow flexWrap="nowrap" padding="0px 8px 0px 0px">
                <CardColumn padding="0px" flex={1} flexGrow={2}>
                    <TitlePage primary={('Grupo 8')} style={"iconStatus"} />
                </CardColumn>
                <CardColumn padding="0px" margin="0px 0px 0px 400px">
                    <DropdownMultiField
                        options={grupo8}
                        valueField="grupo8Atual"
                        labelField="grupo8Atual"
                        value={grupo8Selecionado}
                        onChange={handleGroup8}
                        placeholder={'Grupo 8'}
                    />
                </CardColumn>
                <CardColumn padding="0px" margin="0px 0px 0px 0px">
                </CardColumn>
            </CardRow>
            <CardRow flexWrap="wrap" padding="0px 9px 0px 72px">
                <Setor arr_entrada={dadosTop10} />
            </CardRow>
            <CardRow flexWrap="wrap" padding="0px 9px 0px 72px">
                <GenericTable
                    arrHeader={header}
                    arrRow={table}
                    loading={false}
                    tableWithChildren={true}
                />
            </CardRow>
        </>
    );
}