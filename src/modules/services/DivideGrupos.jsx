import Conversao from './Conversao';
import Complemento from './Complemento';

export default () => {

    const { converteObjetoParaArray } = Conversao();
    const { complemento } = Complemento();

    const converte = (obj) => {
        let current = converteObjetoParaArray(obj);
        return current;
    }

    const intersecaoDentro = (obj_current, obj_prev) => {
        let arr_result = [];
        let obj = { current: converte(obj_current), prev: converte(obj_prev) };
        Object.values(obj.current).filter(x => {
            Object.values(obj.prev).filter(y => {
                if (x == y)
                    arr_result.push(x);
            })
        });
        return arr_result;
    }
    const alternadoForaDentro = (obj_current, obj_prev) => {
        let arr_result = [];
        let obj = { current: converte(obj_current), prev: converte(obj_prev) };
        Object.values(obj.current).filter(x => {
            Object.values(complemento(obj.prev)).filter(y => {
                if (x == y)
                    arr_result.push(x);
            })
        });
        return arr_result;
    }
    const alternadoDentroFora = (obj_current, obj_prev) => {
        let arr_result = [];
        let obj = { current: converte(obj_current), prev: converte(obj_prev) };
        Object.values(complemento(obj.current)).filter(x => {
            Object.values(obj.prev).filter(y => {
                if (x == y)
                    arr_result.push(x);
            })
        });
        return arr_result;
    }
    const intersecaoFora = (obj_current, obj_prev) => {
        let arr_result = [];
        let obj = { current: converte(obj_current), prev: converte(obj_prev) };
        Object.values(complemento(obj.current)).filter(x => {
            Object.values(complemento(obj.prev)).filter(y => {
                if (x == y)
                    arr_result.push(x);
            })
        });
        return arr_result;
    }
    const intersecao = (arr_ultimo, arr_anterior) => {
        let arr_result = [];
        Object.values(arr_ultimo).filter(x => {
            Object.values(arr_anterior).filter(y => {
                if (x == y)
                    arr_result.push(x);
            })
        });
        return arr_result;
    }
    return {
        intersecaoDentro,
        alternadoForaDentro,
        alternadoDentroFora,
        intersecaoFora,
        intersecao
    }
}