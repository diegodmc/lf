export default (arr_chart) => {

    const initOption = {
       
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'horizontal',
            bottom: 0,
            textStyle: { color: '#828282' },
            data: arr_chart.map(function (obj) { return obj.name }),
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                center: ['50%', '48%'],
                label: { color: '#828282' },
                data: arr_chart,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return initOption;
};