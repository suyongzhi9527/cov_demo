var ec_right1 = echarts.init(document.getElementById('right1'), 'dark');

var ec_right1_option = {
    title:{
      text:'非湖北地区城市确诊TOPS',
        textStyle:{
          color:'white'
        }
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [],
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth: '50%',
            data: []
        }
    ]
};

ec_right1.setOption(ec_right1_option);
