var ec_right2 = echarts.init(document.getElementById('right2'), 'dark');
var ddd = [{'name': '肺炎', 'value': '12345'}, {'name': '实时', 'value': '123456'}, {'name': '新型', 'value': '1234567'}]

var ec_right2_option = {
    title: {
        text: '今日疫情热搜',
        textStyle: {
            color: 'white',
        },
        left: 'left'
    },
    tooltip: {
        show: false
    },
    series: [{
        type: 'wordCloud',
        gridSize: 1,
        sizeRange: [12, 55],
        rotationRange: [-45, 0, 45, 90],
        textStyle: {
            normal: {
                color: function () { /* 添加随机颜色 */
                    return 'rgb(' +
                        Math.round(Math.random() * 255) +
                        ',' + Math.round(Math.random() * 255) +
                        ',' + Math.round(Math.random() * 255) + ')'
                }
            }
        },
        right: null,
        bottom: null,
        data: []
    }]
};
ec_right2.setOption(ec_right2_option);