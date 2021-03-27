export default () => {

    const complemento = (arr_input) => {
        const arr_result = [];
        const arr_full = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
        Object.values(arr_full).filter(x => {
            let bool = false;
            Object.values(arr_input).filter(y => {
                if(x == y)
                  bool = true;
            })
            if(!bool) arr_result.push(x);
        });
        return arr_result;
    }

    return { complemento }
}