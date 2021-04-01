import DivideGrupos from './DivideGrupos';
import Complemento from './Complemento';
import Conversao from './Conversao';

export default () => {

    const {
        intersecaoDentro,
        alternadoForaDentro,
        alternadoDentroFora,
        intersecaoFora,
        intersecao
    } = DivideGrupos();

    const { complemento } = Complemento();
    const { converteObjetoParaArray } = Conversao();

    const retornaGrupo8 = (arr_ultimo, arr_meio, arr_primeiro) => {

        arr_ultimo = converteObjetoParaArray(arr_ultimo);

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
    const retornaGrupo8De3Sorteios = (arr_entrada) => {

        const arr_result = [];
        for (var i = 10; i < arr_entrada.length - 10; i++) {

            let antepenultimo_ultimo = arr_entrada[i];            //12
            let antepenultimo_penultimo = arr_entrada[i - 1];     //11
            let antepenultimo_antepenultimo = arr_entrada[i - 2]; //10

            let antepenultimo = retornaGrupo8(antepenultimo_ultimo, antepenultimo_penultimo, antepenultimo_antepenultimo);

            let penultimo_ultimo = arr_entrada[i + 1];        //13
            let penultimo_penultimo = arr_entrada[i];         //12
            let penultimo_antepenultimo = arr_entrada[i - 1]; //11

            let penultimo = retornaGrupo8(penultimo_ultimo, penultimo_penultimo, penultimo_antepenultimo);

            let ultimo_ultimo = arr_entrada[i + 2];    //14
            let ultimo_penultimo = arr_entrada[i + 1];   //13
            let ultimo_antepenultimo = arr_entrada[i]; //12

            let ultimo = retornaGrupo8(ultimo_ultimo, ultimo_penultimo, ultimo_antepenultimo);
            arr_result.push({ sorteio: arr_entrada[i].sorteio, antepenultimo: antepenultimo, penultimo: penultimo, ultimo: ultimo });
            
        }
        return arr_result;
    }

    const processa = (arr_entrada) => {
        const arr_completo = retornaGrupo8De3Sorteios(arr_entrada);
        const arr_g1 = [];
        const arr_g2 = [];
        const arr_g3 = [];
        const arr_g4 = [];
        const arr_g5 = [];
        const arr_g6 = [];
        const arr_g7 = [];
        const arr_g8 = [];
        arr_completo.map((item) => {
            arr_g1.push(processaG1(item));
            arr_g2.push(processaG2(item));
            arr_g3.push(processaG3(item));
            arr_g4.push(processaG4(item));
            arr_g5.push(processaG5(item));
            arr_g6.push(processaG6(item));
            arr_g7.push(processaG7(item));
            arr_g8.push(processaG8(item));
        })

        return {
            g1: arr_g1,
            g2: arr_g2,
            g3: arr_g3,
            g4: arr_g4,
            g5: arr_g5,
            g6: arr_g6,
            g7: arr_g7,
            g8: arr_g8
        };
    }

    const processaG1 = (item) => {

        const arr_result = [];
        const g1g1_ante_penu = intersecao(item.antepenultimo.g1, item.penultimo.g1);
        const g3g1_ante_penu = intersecao(item.antepenultimo.g3, item.penultimo.g1);

        const g5g3_ante_penu = intersecao(item.antepenultimo.g5, item.penultimo.g3);
        const g7g3_ante_penu = intersecao(item.antepenultimo.g7, item.penultimo.g3);

        const g1g1_penu_ulti = intersecao(item.penultimo.g1, item.ultimo.g1);
        const g3g1_penu_ulti = intersecao(item.penultimo.g3, item.ultimo.g1);

        arr_result.push(
            {
                disp_g1g1_ante_penu: item.antepenultimo.g1,
                acer_g1g1_ante_penu: g1g1_ante_penu,

                disp_g3g1_ante_penu: item.antepenultimo.g3,
                acer_g3g1_ante_penu: g3g1_ante_penu,

                disp_g5g3_ante_penu: item.antepenultimo.g5,
                acer_g5g3_ante_penu: g5g3_ante_penu,

                disp_g7g3_ante_penu: item.antepenultimo.g7,
                acer_g7g3_ante_penu: g7g3_ante_penu,

                disp_g1g1_penu_ulti: item.penultimo.g1,
                acer_g1g1_penu_ulti: g1g1_penu_ulti,

                disp_g3g1_penu_ulti: item.penultimo.g3,
                acer_g3g1_penu_ulti: g3g1_penu_ulti,

                g1: g1g1_penu_ulti +"--"+g3g1_penu_ulti

            });
        return arr_result;
    }
    const processaG2 = (item) => {

        const arr_result = [];
        const g1g1_ante_penu = intersecao(item.antepenultimo.g1, item.penultimo.g1);
        const g3g1_ante_penu = intersecao(item.antepenultimo.g3, item.penultimo.g1);

        const g5g3_ante_penu = intersecao(item.antepenultimo.g5, item.penultimo.g3);
        const g7g3_ante_penu = intersecao(item.antepenultimo.g7, item.penultimo.g3);

        const g1g2_penu_ulti = intersecao(item.penultimo.g1, item.ultimo.g2);
        const g3g2_penu_ulti = intersecao(item.penultimo.g3, item.ultimo.g2);

        arr_result.push(
            {
                disp_g1g1_ante_penu: item.antepenultimo.g1,
                acer_g1g1_ante_penu: g1g1_ante_penu,

                disp_g3g1_ante_penu: item.antepenultimo.g3,
                acer_g3g1_ante_penu: g3g1_ante_penu,

                disp_g5g3_ante_penu: item.antepenultimo.g5,
                acer_g5g3_ante_penu: g5g3_ante_penu,

                disp_g7g3_ante_penu: item.antepenultimo.g7,
                acer_g7g3_ante_penu: g7g3_ante_penu,

                disp_g1g2_penu_ulti: item.penultimo.g1,
                acer_g1g2_penu_ulti: g1g2_penu_ulti,

                disp_g3g2_penu_ulti: item.penultimo.g3,
                acer_g3g2_penu_ulti: g3g2_penu_ulti,

                g2: g1g2_penu_ulti +"--"+g3g2_penu_ulti

            });
        return arr_result;
    }

    const processaG3 = (item) => {

        const arr_result = [];
        const g2g5_ante_penu = intersecao(item.antepenultimo.g2, item.penultimo.g5);
        const g4g5_ante_penu = intersecao(item.antepenultimo.g4, item.penultimo.g5);

        const g6g7_ante_penu = intersecao(item.antepenultimo.g6, item.penultimo.g7);
        const g8g7_ante_penu = intersecao(item.antepenultimo.g8, item.penultimo.g7);

        const g5g3_penu_ulti = intersecao(item.penultimo.g5, item.ultimo.g3);
        const g7g3_penu_ulti = intersecao(item.penultimo.g7, item.ultimo.g3);

        arr_result.push(
            {
                disp_g2g5_ante_penu: item.antepenultimo.g2,
                acer_g2g5_ante_penu: g2g5_ante_penu,

                disp_g4g5_ante_penu: item.antepenultimo.g4,
                acer_g4g5_ante_penu: g4g5_ante_penu,

                disp_g6g7_ante_penu: item.antepenultimo.g6,
                acer_g6g7_ante_penu: g6g7_ante_penu,

                disp_g8g7_ante_penu: item.antepenultimo.g8,
                acer_g8g7_ante_penu: g8g7_ante_penu,

                disp_g5g3_penu_ulti: item.penultimo.g5,
                acer_g5g3_penu_ulti: g5g3_penu_ulti,

                disp_g7g3_penu_ulti: item.penultimo.g7,
                acer_g7g3_penu_ulti: g7g3_penu_ulti,

                g3: g5g3_penu_ulti +"--"+ g7g3_penu_ulti

            });
        return arr_result;
    }
    const processaG4 = (item) =>{

        const arr_result = [];
         const g2g5_ante_penu = intersecao(item.antepenultimo.g2, item.penultimo.g5);
         const g4g5_ante_penu = intersecao(item.antepenultimo.g4, item.penultimo.g5);
 
         const g6g7_ante_penu = intersecao(item.antepenultimo.g6, item.penultimo.g7);
         const g8g7_ante_penu = intersecao(item.antepenultimo.g8, item.penultimo.g7);
 
         const g5g4_penu_ulti = intersecao(item.penultimo.g5, item.ultimo.g4);
         const g7g4_penu_ulti = intersecao(item.penultimo.g7, item.ultimo.g4);
 
         arr_result.push(
             {
                 disp_g2g5_ante_penu: item.antepenultimo.g2,
                 acer_g2g5_ante_penu: g2g5_ante_penu,
 
                 disp_g4g5_ante_penu: item.antepenultimo.g4,
                 acer_g4g5_ante_penu: g4g5_ante_penu,
 
                 disp_g6g7_ante_penu: item.antepenultimo.g6,
                 acer_g6g7_ante_penu: g6g7_ante_penu,
 
                 disp_g8g7_ante_penu: item.antepenultimo.g8,
                 acer_g8g7_ante_penu: g8g7_ante_penu,
 
                 disp_g5g4_penu_ulti: item.penultimo.g5,
                 acer_g5g4_penu_ulti: g5g4_penu_ulti,
 
                 disp_g7g4_penu_ulti: item.penultimo.g7,
                 acer_g7g4_penu_ulti: g7g4_penu_ulti,
 
                 g4: g5g4_penu_ulti +"--"+ g7g4_penu_ulti
 
             });
             return arr_result;
     }

     const processaG5 = (item) =>{

        const arr_result = [];
         const g1g2_ante_penu = intersecao(item.antepenultimo.g1, item.penultimo.g2);
         const g3g2_ante_penu = intersecao(item.antepenultimo.g3, item.penultimo.g2);
 
         const g5g4_ante_penu = intersecao(item.antepenultimo.g5, item.penultimo.g4);
         const g7g4_ante_penu = intersecao(item.antepenultimo.g7, item.penultimo.g4);
 
         const g2g5_penu_ulti = intersecao(item.penultimo.g2, item.ultimo.g5);
         const g4g5_penu_ulti = intersecao(item.penultimo.g4, item.ultimo.g5);
 
         arr_result.push(
             {
                 disp_g1g2_ante_penu: item.antepenultimo.g1,
                 acer_g1g2_ante_penu: g1g2_ante_penu,
 
                 disp_g3g2_ante_penu: item.antepenultimo.g3,
                 acer_g3g2_ante_penu: g3g2_ante_penu,
 
                 disp_g5g4_ante_penu: item.antepenultimo.g5,
                 acer_g5g4_ante_penu: g5g4_ante_penu,
 
                 disp_g7g4_ante_penu: item.antepenultimo.g7,
                 acer_g7g4_ante_penu: g7g4_ante_penu,
 
                 disp_g2g5_penu_ulti: item.penultimo.g2,
                 acer_g2g5_penu_ulti: g2g5_penu_ulti,
 
                 disp_g4g5_penu_ulti: item.penultimo.g4,
                 acer_g4g5_penu_ulti: g4g5_penu_ulti,
 
                 g5: g2g5_penu_ulti +"--"+ g4g5_penu_ulti
 
             });
             return arr_result;
     }

     const processaG6 = (item) =>{

        const arr_result = [];
         const g1g2_ante_penu = intersecao(item.antepenultimo.g1, item.penultimo.g2);
         const g3g2_ante_penu = intersecao(item.antepenultimo.g3, item.penultimo.g2);
 
         const g5g4_ante_penu = intersecao(item.antepenultimo.g5, item.penultimo.g4);
         const g7g4_ante_penu = intersecao(item.antepenultimo.g7, item.penultimo.g4);
 
         const g2g6_penu_ulti = intersecao(item.penultimo.g2, item.ultimo.g6);
         const g4g6_penu_ulti = intersecao(item.penultimo.g4, item.ultimo.g6);
 
         arr_result.push(
             {
                 disp_g1g2_ante_penu: item.antepenultimo.g1,
                 acer_g1g2_ante_penu: g1g2_ante_penu,
 
                 disp_g3g2_ante_penu: item.antepenultimo.g3,
                 acer_g3g2_ante_penu: g3g2_ante_penu,
 
                 disp_g5g4_ante_penu: item.antepenultimo.g5,
                 acer_g5g4_ante_penu: g5g4_ante_penu,
 
                 disp_g7g4_ante_penu: item.antepenultimo.g7,
                 acer_g7g4_ante_penu: g7g4_ante_penu,
 
                 disp_g2g6_penu_ulti: item.penultimo.g2,
                 acer_g2g6_penu_ulti: g2g6_penu_ulti,
 
                 disp_g4g6_penu_ulti: item.penultimo.g4,
                 acer_g4g6_penu_ulti: g4g6_penu_ulti,
 
                 g6: g2g6_penu_ulti +"--"+ g4g6_penu_ulti
 
             });
             return arr_result;
     }

     const processaG7 = (item) =>{

        const arr_result = [];
         const g2g6_ante_penu = intersecao(item.antepenultimo.g2, item.penultimo.g6);
         const g4g6_ante_penu = intersecao(item.antepenultimo.g4, item.penultimo.g6);
 
         const g6g8_ante_penu = intersecao(item.antepenultimo.g6, item.penultimo.g8);
         const g8g8_ante_penu = intersecao(item.antepenultimo.g8, item.penultimo.g8);
 
         const g2g7_penu_ulti = intersecao(item.penultimo.g2, item.ultimo.g7);
         const g4g7_penu_ulti = intersecao(item.penultimo.g4, item.ultimo.g7);
 
         arr_result.push(
             {
                 disp_g2g6_ante_penu: item.antepenultimo.g1,
                 acer_g2g6_ante_penu: g2g6_ante_penu,
 
                 disp_g4g6_ante_penu: item.antepenultimo.g3,
                 acer_g4g6_ante_penu: g4g6_ante_penu,
 
                 disp_g6g8_ante_penu: item.antepenultimo.g5,
                 acer_g6g8_ante_penu: g6g8_ante_penu,
 
                 disp_g8g8_ante_penu: item.antepenultimo.g7,
                 acer_g8g8_ante_penu: g8g8_ante_penu,
 
                 disp_g2g7_penu_ulti: item.penultimo.g2,
                 acer_g2g7_penu_ulti: g2g7_penu_ulti,
 
                 disp_g4g7_penu_ulti: item.penultimo.g4,
                 acer_g4g7_penu_ulti: g4g7_penu_ulti,
 
                 g7: g2g7_penu_ulti +"--"+ g4g7_penu_ulti
 
             });
             return arr_result;
     }

     const processaG8 = (item) =>{

        const arr_result = [];
         const g2g6_ante_penu = intersecao(item.antepenultimo.g2, item.penultimo.g6);
         const g4g6_ante_penu = intersecao(item.antepenultimo.g4, item.penultimo.g6);
 
         const g6g8_ante_penu = intersecao(item.antepenultimo.g6, item.penultimo.g8);
         const g8g8_ante_penu = intersecao(item.antepenultimo.g8, item.penultimo.g8);
 
         const g6g8_penu_ulti = intersecao(item.penultimo.g6, item.ultimo.g8);
         const g8g8_penu_ulti = intersecao(item.penultimo.g8, item.ultimo.g8);
 
         arr_result.push(
             {
                 disp_g2g6_ante_penu: item.antepenultimo.g2,
                 acer_g2g6_ante_penu: g2g6_ante_penu,
 
                 disp_g4g6_ante_penu: item.antepenultimo.g4,
                 acer_g4g6_ante_penu: g4g6_ante_penu,
 
                 disp_g6g8_ante_penu: item.antepenultimo.g6,
                 acer_g6g8_ante_penu: g6g8_ante_penu,
 
                 disp_g8g8_ante_penu: item.antepenultimo.g8,
                 acer_g8g8_ante_penu: g8g8_ante_penu,
 
                 disp_g6g8_penu_ulti: item.penultimo.g6,
                 acer_g6g8_penu_ulti: g6g8_penu_ulti,
 
                 disp_g8g8_penu_ulti: item.penultimo.g8,
                 acer_g8g8_penu_ulti: g8g8_penu_ulti,
 
                 g8: g8g8_penu_ulti +"--"+ g6g8_penu_ulti
 
             });
             return arr_result;
     }
    return { retornaGrupo8, processa };

}