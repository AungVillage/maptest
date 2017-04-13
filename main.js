var myChart = echarts.init(document.getElementById('main'));
function showProvince() {
     myChart.showLoading();

    $.get('chongqing.json', function (geoJson) {

        myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#404a59',
            title: {
                text: "重庆",
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    type: 'map',
                    mapType: 'chongqing',
                    label: {
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#389BB7',
                            areaColor: '#fff',
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    },
                    animation: false
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
                }
            ]
        });
    });
}

var currentIdx = 0;

showProvince();
