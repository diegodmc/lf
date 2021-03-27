import DivideGrupos from './DivideGrupos';
import Complemento from './Complemento';

export default () => {

    const {
        intersecaoDentro,
        alternadoForaDentro,
        alternadoDentroFora,
        intersecaoFora,
        intersecao
    } = DivideGrupos();

    const { complemento } = Complemento();

    const retornaGrupo8 = (arr_ultimo, arr_meio, arr_primeiro) => {

        const grupo4_01 = intersecaoDentro(arr_meio, arr_primeiro);
        const grupo4_02 = alternadoForaDentro(arr_meio, arr_primeiro);
        const grupo4_03 = alternadoDentroFora(arr_meio, arr_primeiro);
        const grupo4_04 = intersecaoFora(arr_meio, arr_primeiro);


        const grupo8_01 = intersecao(grupo4_01, arr_ultimo);
        const grupo8_02 = intersecao(grupo4_01, complemento(arr_ultimo));
        const grupo8_03 = intersecao(grupo4_02, arr_ultimo);
        const grupo8_04 = intersecao(grupo4_02, complemento(arr_ultimo));
        const grupo8_05 = intersecao(grupo4_03, arr_ultimo);
        const grupo8_06 = intersecao(grupo4_03, complemento(arr_ultimo));
        const grupo8_07 = intersecao(grupo4_04, arr_ultimo);
        const grupo8_08 = intersecao(grupo4_04, complemento(arr_ultimo));

        return {
            g1: grupo8_01,
            g2: grupo8_02,
            g3: grupo8_03,
            g4: grupo8_04,
            g5: grupo8_05,
            g6: grupo8_06,
            g7: grupo8_07,
            g8: grupo8_08
        }
    }

    return { retornaGrupo8 };

}