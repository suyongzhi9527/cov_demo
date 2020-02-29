var ec_left2 = echarts.init(document.getElementById('left2'), 'dark');

// 指定图表的配置项和数据
var ec_left2_option = {
    title: {
        text: '全国新增趋势',
        textStyle: {
            fontSize: 14,
        },
        left: 'left',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#7171C6'
            }
        }
    },
    legend: {
        data: ['新增确诊', '新增疑似'],
        left: 'right',
    },
    grid: {
        left: '4%',
        right: '6%',
        bottom: '4%',
        top: 50,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: []
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            color: 'white',
            fontSize: 12,
            formatter: function (value) {
                if (value >= 1000) {
                    value = value / 1000 + 'k';
                }
                return value;
            }
        },
        axisLine: {
            show: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#17273B',
                width: 1,
                type: 'solid'
            }
        }
    }],
    series: [{
        name: '新增确诊',
        type: 'line',
        smooth: true,
        data: []
    }, {
        name: '新增疑似',
        type: 'line',
        smooth: true,
        data: []
    }]
};
ec_left2.setOption(ec_left2_option);