import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { CardRow, CardColumn} from '..';
import * as echarts from 'echarts'
import ConfigSetor from "./Configuracao/ConfigSetor";

const Setor = props => {

   const chart = useRef(null);
   let chartInstance = null;
   
   useEffect(() => {
      renderChart(props.arr_entrada);
   }, [props.arr_entrada]);

   const loadConfigInitChart = () => {
      if (chart.current != null) {
         const renderInstance = echarts.getInstanceByDom(chart.current);
         if (renderInstance) chartInstance = renderInstance;
         else chartInstance = echarts.init(chart.current);
         chartInstance.clear(chart.options);
         return true;
      }
      return false;
   }

   const renderChart = (arr_response) => {
      loadConfigInitChart();
      if (chartInstance != null && arr_response.length > 0)
         chartInstance.setOption(ConfigSetor(arr_response), true);
   }

   return (
      <div>
         <CardRow justifyContent="center" padding="8px">
            <span style={{ color: '#828282' }}>{('')}</span>
         </CardRow>
         <CardRow >
            <CardColumn>
               <div ref={chart} style={{ height: '30vw', width: '90vw' }} />
            </CardColumn>
         </CardRow>
      </div>
   );
}

Setor.propTypes = {
   arr_entrada: PropTypes.object,
}
export default Setor;