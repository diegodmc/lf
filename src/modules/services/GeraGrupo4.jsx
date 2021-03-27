import DivideGrupos from './DivideGrupos';

export default () => {

    const {
        intersecaoDentro,
        alternadoForaDentro,
        alternadoDentroFora,
        intersecaoFora
    } = DivideGrupos();

    const retornaGrupo4 = (arr_ultimo, arr_anterior) => {

        const grupo4_01 = intersecaoDentro(arr_ultimo, arr_anterior);
        const grupo4_02 = alternadoForaDentro(arr_ultimo, arr_anterior);
        const grupo4_03 = alternadoDentroFora(arr_ultimo, arr_anterior);
        const grupo4_04 = intersecaoFora(arr_ultimo, arr_anterior);

        return {
            g1: grupo4_01,
            g2: grupo4_02,
            g3: grupo4_03,
            g4: grupo4_04
        }
    }

    const quantidadePorGrupo = (arr_grupo4, val_grupo) => {
        let qty = 0;
        arr_grupo4.map((item) => {
            if (item.grupo4Atual == val_grupo) qty++;
        })
        return qty;
    }

    return { retornaGrupo4, quantidadePorGrupo }
}