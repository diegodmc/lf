import GeraGrupo4 from '../GeraGrupo4';
import GeraGrupo8 from '../GeraGrupo8';

export default () => {

    const { retornaGrupo4 } = GeraGrupo4();
    const { retornaGrupo8 } = GeraGrupo8();

    const filtroGrupo4 = (arr_entrada) => {

        let arr_resultado_atual = [];
        let arr_resultado_proximo = [];
        let arr_resultado = [];

        for (var i = 10; i < arr_entrada.length - 10; i++) {

            let ultimo = arr_entrada[i];
            let penultimo = arr_entrada[i - 1];

            let buscagrupo4 = retornaGrupo4(ultimo, penultimo);

            let qtdeGrupo4 = buscagrupo4.g1.length + '-' +
                buscagrupo4.g2.length + '-' +
                buscagrupo4.g3.length + '-' +
                buscagrupo4.g4.length;

            let proximo = arr_entrada[i + 1];

            let buscagrupo4Proximo = retornaGrupo4(proximo, ultimo);

            let qtdeGrupo4proximo = buscagrupo4Proximo.g1.length + '-' +
                buscagrupo4Proximo.g2.length + '-' +
                buscagrupo4Proximo.g3.length + '-' +
                buscagrupo4Proximo.g4.length;

            arr_resultado_atual.push({ grupo4Atual: qtdeGrupo4 });
            arr_resultado_proximo.push({ grupo4Proximo: qtdeGrupo4proximo });
            arr_resultado.push({ grupo4Atual: qtdeGrupo4, grupo4Proximo: qtdeGrupo4proximo });
        }
        return {
            arr_resultado_atual,
            arr_resultado_proximo,
            arr_resultado
        };
    }

    const filtroGrupo8 = (arr_entrada) => {

        let arr_resultado_atual = [];
        let arr_resultado_proximo = [];
        let arr_resultado = [];

        for (var i = 10; i < arr_entrada.length - 10; i++) {

            let ultimo = arr_entrada[i];
            let penultimo = arr_entrada[i - 1];
            let antepenultimo = arr_entrada[i - 2];

            let buscagrupo8 = retornaGrupo8(ultimo, penultimo, antepenultimo);
            
            let qtdeGrupo8 = buscagrupo8.g1.length + '-' +
                                    buscagrupo8.g2.length + '-' +
                                    buscagrupo8.g3.length + '-' +
                                    buscagrupo8.g4.length+ '-' +
                                    buscagrupo8.g5.length+ '-' +
                                    buscagrupo8.g6.length+ '-' +
                                    buscagrupo8.g7.length+ '-' +
                                    buscagrupo8.g8.length;

            let ultimoProximo = arr_entrada[i+1];
            let penultimoProximo = arr_entrada[i];
            let antepenultimoProximo = arr_entrada[i - 1];

            let buscagrupo8Proximo = retornaGrupo8(ultimoProximo, penultimoProximo, antepenultimoProximo);

            let qtdeGrupo8proximo = buscagrupo8Proximo.g1.length + '-' +
                                    buscagrupo8Proximo.g2.length + '-' +
                                    buscagrupo8Proximo.g3.length + '-' +
                                    buscagrupo8Proximo.g4.length+ '-' +
                                    buscagrupo8Proximo.g5.length+ '-' +
                                    buscagrupo8Proximo.g6.length+ '-' +
                                    buscagrupo8Proximo.g7.length+ '-' +
                                    buscagrupo8Proximo.g8.length;

        arr_resultado_atual.push({ grupo8Atual: qtdeGrupo8 });
        arr_resultado_proximo.push({ grupo8Proximo: qtdeGrupo8proximo });
        arr_resultado.push({ grupo8Atual: qtdeGrupo8, grupo8Proximo: qtdeGrupo8proximo });

        }
        return {
            arr_resultado_atual,
            arr_resultado_proximo,
            arr_resultado
        };
    }
    return { filtroGrupo4 , filtroGrupo8}
}