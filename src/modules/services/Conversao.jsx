export default () => {

    const converteObjetoParaArray = (obj_current) => {
        const arr_result = [];
        arr_result.push(obj_current.um);
        arr_result.push(obj_current.dois);
        arr_result.push(obj_current.tres);
        arr_result.push(obj_current.quatro);
        arr_result.push(obj_current.cinco);
        arr_result.push(obj_current.seis);
        arr_result.push(obj_current.sete);
        arr_result.push(obj_current.oito);
        arr_result.push(obj_current.nove);
        arr_result.push(obj_current.dez);
        arr_result.push(obj_current.onze);
        arr_result.push(obj_current.doze);
        arr_result.push(obj_current.treze);
        arr_result.push(obj_current.catorze);
        arr_result.push(obj_current.quinze);
        return arr_result;
    }

    return { converteObjetoParaArray }
}