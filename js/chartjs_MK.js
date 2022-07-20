$(document).ready(function () {

    // AI추천 상세 매매신호 일봉 차트
    if ($('#containeroutline1_1').length) {
        Highcharts.stockChart('containeroutline1_1', {
            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                marginTop: 10,
                marginBottom: 0,
            },
            
            rangeSelector: {
                // enabled: false,
                // allButtonsEnabled: true,
                selected: 0,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                // enabled: false
                // headerFormat: '',                
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                title: {
                    text: null
                },
                type: 'datetime',
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%Y', this.value);
                    },
                },
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },
            
            series: [{
                // type: 'hollowcandlestick',
                type: 'candlestick',
                data: [
                    [1627257600000, 289, 290.15, 282.95, 284.91],  //1
                    [1627862400000, 286.36, 289.63, 283.74, 289.46],//2
                    [1628467200000, 289.75, 292.9, 285.2, 292.85],//3
                    [1629072000000, 293.19, 305.84, 288.64, 304.36],//4
                    [1629676800000, 303.245, 305.65, 296.83, 299.72],//5
                    [1630281600000, 301.115, 305.19, 300.18, 301.14],//6
                    [1630972800000, 301.005, 302.14, 295.38, 295.71],//7
                    [1631491200000, 297.55, 305.32, 294.08, 299.87],//8
                    [1632096000000, 296.33, 300.9, 289.52, 299.35],//9
                    [1632700800000, 296.14, 296.47, 281.29, 289.1],//10
                    [1633305600000, 287.4, 296.641, 280.25, 294.85],//11
                    [1633910400000, 292.92, 304.45, 292.35, 304.21],//12
                    [1634515200000, 303.57, 311.09, 302.69, 309.16],//13
                    [1635120000000, 309.36, 332, 306.46, 331.62],//14
                    [1635724800000, 331.355, 338.79, 326.37, 336.06]//15
                    [1636329600000, 337.3, 338.72, 329.92, 336.72],//16
                    [1636934400000, 337.54, 345.1, 334.034, 343.11],//17
                    [1637539200000, 344.62, 349.67, 328.12, 329.68],//18
                    [1638144000000, 334.94, 339.28, 318.03, 323.01],//19
                    [1638748800000, 323.95, 343, 319.23, 342.54],//20
                    [1639353600000, 340.68, 343.79, 317.25, 323.8],//21
                    [1639958400000, 320.05, 336.39, 317.57, 334.69],//22
                    [1640563200000, 335.46, 344.3, 335.43, 336.32],//23
                    [1641168000000, 335.35, 338, 310.09, 314.04],//24
                    [1641772800000, 309.485, 323.41, 303.75, 310.2],//25
                    [1642464000000, 304.07, 313.909, 295.61, 296.03],//26
                    [1642982400000, 292.2, 308.5, 276.05, 308.26],//27
                    [1643587200000, 308.95, 315.12, 299.96, 305.94],//28
                    [1644192000000, 306.17, 311.93, 294.22, 295.04],//29
                    [1644796800000, 293.77, 300.87, 286.305, 287.93],//30
                    [1645488000000, 285, 297.63, 271.52, 297.31],//31
                    [1646006400000, 294.31, 303.13, 287.165, 289.86],//32
                    [1646611200000, 288.53, 289.69, 270, 280.07],//33
                    [1647216000000, 280.34, 301, 275.82, 300.43],//34
                    [1647820800000, 298.89, 305.5, 294.9, 303.68],//35
                    [1648425600000, 304.33, 315.95, 304.33, 309.42],//36
                    [1649030400000, 310.09, 315.11, 296.28, 296.97],//37
                    [1649635200000, 291.79, 292.61, 279.32, 279.83],//38
                    [1650240000000, 278.91, 293.3, 273.38, 274.03],//39
                    [1650844800000, 273.29, 290.98, 270, 277.52],//40
                    [1651449600000, 277.71, 290.88, 271.27, 274.73],//41
                    [1652054400000, 270.06, 273.75, 250.02, 261.12],//42
                    [1652659200000, 259.955, 268.33, 246.44, 252.56],//43
                ],
                id: 'dataseries'
    
            // the event marker flags
            }, {
                type: 'flags',
                onSeries: 'dataseries',                
                color: '#c35159', // same as onSeries
                fillColor: '#c35159',                
                width: 28,
                style: {
                    fontWeight: 'normal',
                    fontSize: '10px',
                    color: '#fff',
                    fontFamily: "'Spoqa Han Sans Neo', 'Malgun gothic'"
                },     
                           
                data: [{
                    x: 1627257600000,                    
                    // x: lastDate - 60 * days,
                    title: '매수1',                    
                }, {
                    x: 1633305600000,
                    title: '매수2',
                }, {
                    x: 1649635200000,
                    title: '매수3',                    
                }],
                
            }, {
                type: 'flags',
                color: '#0c6bb3', // same as onSeries
                fillColor: '#0c6bb3',
                onSeries: 'dataseries',
                width: 28,
                style: {
                    fontSize: '10px',
                    color: '#fff',
                    fontFamily: "'Spoqa Han Sans Neo', 'Malgun gothic'"
                },
                                
                data: [{
                    x: 1630972800000,
                    title: '매도1',                    
                }, {
                    x: 1629072000000,
                    title: '매도2',
                }, {
                    x: 1650844800000,
                    title: '매도3',                    
                }],
                
            }],

            plotOptions: {
                flags: {
                    accessibility: {
                        exposeAsGroupOnly: true,
                        description: 'Flagged events.'
                    }
                },
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },
        });
    }

    if ($('#containeroutline1_2').length) {
        Highcharts.stockChart('containeroutline1_2', {
            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                marginTop: 10,
                marginBottom: 0,
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                // enabled: false,
                allButtonsEnabled: true,
                selected: 4,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                // enabled: false
                // headerFormat: '',                
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                title: {
                    text: null
                },
                type: 'datetime',
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%Y', this.value);
                    },
                },
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'candlestick',
                data: [
                    [1627257600000, 289, 290.15, 282.95, 284.91],  //1
                    [1627862400000, 286.36, 289.63, 283.74, 289.46],//2
                    [1628467200000, 289.75, 292.9, 285.2, 292.85],//3
                    [1629072000000, 293.19, 305.84, 288.64, 304.36],//4
                    [1629676800000, 303.245, 305.65, 296.83, 299.72],//5
                    [1630281600000, 301.115, 305.19, 300.18, 301.14],//6
                    [1630972800000, 301.005, 302.14, 295.38, 295.71],//7
                    [1631491200000, 297.55, 305.32, 294.08, 299.87],//8
                    [1632096000000, 296.33, 300.9, 289.52, 299.35],//9
                    [1632700800000, 296.14, 296.47, 281.29, 289.1],//10
                    [1633305600000, 287.4, 296.641, 280.25, 294.85],//11
                    [1633910400000, 292.92, 304.45, 292.35, 304.21],//12
                    [1634515200000, 303.57, 311.09, 302.69, 309.16],//13
                    [1635120000000, 309.36, 332, 306.46, 331.62],//14
                    [1635724800000, 331.355, 338.79, 326.37, 336.06]//15
                    [1636329600000, 337.3, 338.72, 329.92, 336.72],//16
                    [1636934400000, 337.54, 345.1, 334.034, 343.11],//17
                    [1637539200000, 344.62, 349.67, 328.12, 329.68],//18
                    [1638144000000, 334.94, 339.28, 318.03, 323.01],//19
                    [1638748800000, 323.95, 343, 319.23, 342.54],//20
                    [1639353600000, 340.68, 343.79, 317.25, 323.8],//21
                    [1639958400000, 320.05, 336.39, 317.57, 334.69],//22
                    [1640563200000, 335.46, 344.3, 335.43, 336.32],//23
                    [1641168000000, 335.35, 338, 310.09, 314.04],//24
                    [1641772800000, 309.485, 323.41, 303.75, 310.2],//25
                    [1642464000000, 304.07, 313.909, 295.61, 296.03],//26
                    [1642982400000, 292.2, 308.5, 276.05, 308.26],//27
                    [1643587200000, 308.95, 315.12, 299.96, 305.94],//28
                    [1644192000000, 306.17, 311.93, 294.22, 295.04],//29
                    [1644796800000, 293.77, 300.87, 286.305, 287.93],//30
                    [1645488000000, 285, 297.63, 271.52, 297.31],//31
                    [1646006400000, 294.31, 303.13, 287.165, 289.86],//32
                    [1646611200000, 288.53, 289.69, 270, 280.07],//33
                    [1647216000000, 280.34, 301, 275.82, 300.43],//34
                    [1647820800000, 298.89, 305.5, 294.9, 303.68],//35
                    [1648425600000, 304.33, 315.95, 304.33, 309.42],//36
                    [1649030400000, 310.09, 315.11, 296.28, 296.97],//37
                    [1649635200000, 291.79, 292.61, 279.32, 279.83],//38
                    [1650240000000, 278.91, 293.3, 273.38, 274.03],//39
                    [1650844800000, 273.29, 290.98, 270, 277.52],//40
                    [1651449600000, 277.71, 290.88, 271.27, 274.73],//41
                    [1652054400000, 270.06, 273.75, 250.02, 261.12],//42
                    [1652659200000, 259.955, 268.33, 246.44, 252.56],//43
                    [1653264000000, 255.49, 273.34, 253.43, 273.24],//44
                    [1653955200000, 272.53, 277.69, 261.6, 270.02],//45
                ],
                id: 'dataseries'

            }, {
                type: 'flags',
                data: [{
                    x: 1652659200000,
                    y: 222.31, //매수 low 값,
                    title: '매수',
                },
                // 매수 박스 여러개 들어가는 경우 추가.
                {
                    x: 1627257600000,
                    y: 254.31,
                    title: '매수',
                },
                // 매수 박스 여러개 들어가는 경우 추가.
                {
                    x: 1630281600000,
                    y: 254.31,
                    title: '매수',
                }],
                color: '#c35159', // same as onSeries
                fillColor: '#c35159',
                onSeries: 'dataseries',
                shape: 'url(../img/flags_buy.svg)',
                width: 32,
                style: {
                    fontWeight: 'normal',
                    fontSize: '11px',
                    color: '#fff',
                    fontFamily: "'Spoqa Han Sans Neo', 'Malgun gothic'"
                },
            }, {
                type: 'flags',
                data: [{
                    x: 1628467200000,
                    y: 325.41, //매도 high 값,
                    title: '매도',
                },
                // 매도 박스 여러개 들어가는 경우 추가.
                {
                    x: 1648425600000,
                    y: 315.41,
                    title: '매도',
                }
                ,
                // 매도 박스 여러개 들어가는 경우 추가.
                {
                    x: 1651449600000,
                    y: 315.41,
                    title: '매도',
                }
                ],
                color: '#0c6bb3', // same as onSeries
                fillColor: '#0c6bb3',
                onSeries: 'dataseries',
                shape: 'url(../img/flags_sell.svg)',
                width: 32,
                style: {
                    fontSize: '11px',
                    color: '#fff',
                    fontFamily: "'Spoqa Han Sans Neo', 'Malgun gothic'"
                },
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },
        });
    }

    if ($('#containeroutline1_3').length) {
        Highcharts.stockChart('containeroutline1_3', {
            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                marginTop: 10,
                marginBottom: 0,
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                // enabled: false,
                allButtonsEnabled: true,
                selected: 5,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                // enabled: false
                // headerFormat: '',                
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                title: {
                    text: null
                },
                type: 'datetime',
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%Y', this.value);
                    },
                },
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'candlestick',
                data: [
                    [1627257600000, 289, 290.15, 282.95, 284.91],  //1
                    [1627862400000, 286.36, 289.63, 283.74, 289.46],//2
                    [1628467200000, 289.75, 292.9, 285.2, 292.85],//3
                    [1629072000000, 293.19, 305.84, 288.64, 304.36],//4
                    [1629676800000, 303.245, 305.65, 296.83, 299.72],//5
                    [1630281600000, 301.115, 305.19, 300.18, 301.14],//6
                    [1630972800000, 301.005, 302.14, 295.38, 295.71],//7
                    [1631491200000, 297.55, 305.32, 294.08, 299.87],//8
                    [1632096000000, 296.33, 300.9, 289.52, 299.35],//9
                    [1632700800000, 296.14, 296.47, 281.29, 289.1],//10
                    [1633305600000, 287.4, 296.641, 280.25, 294.85],//11
                    [1633910400000, 292.92, 304.45, 292.35, 304.21],//12
                    [1634515200000, 303.57, 311.09, 302.69, 309.16],//13
                    [1635120000000, 309.36, 332, 306.46, 331.62],//14
                    [1635724800000, 331.355, 338.79, 326.37, 336.06]//15
                    [1636329600000, 337.3, 338.72, 329.92, 336.72],//16
                    [1636934400000, 337.54, 345.1, 334.034, 343.11],//17
                    [1637539200000, 344.62, 349.67, 328.12, 329.68],//18
                    [1638144000000, 334.94, 339.28, 318.03, 323.01],//19
                    [1638748800000, 323.95, 343, 319.23, 342.54],//20
                    [1639353600000, 340.68, 343.79, 317.25, 323.8],//21
                    [1639958400000, 320.05, 336.39, 317.57, 334.69],//22
                    [1640563200000, 335.46, 344.3, 335.43, 336.32],//23
                    [1641168000000, 335.35, 338, 310.09, 314.04],//24
                    [1641772800000, 309.485, 323.41, 303.75, 310.2],//25
                    [1642464000000, 304.07, 313.909, 295.61, 296.03],//26
                    [1642982400000, 292.2, 308.5, 276.05, 308.26],//27
                    [1643587200000, 308.95, 315.12, 299.96, 305.94],//28
                    [1644192000000, 306.17, 311.93, 294.22, 295.04],//29
                    [1644796800000, 293.77, 300.87, 286.305, 287.93],//30
                    [1645488000000, 285, 297.63, 271.52, 297.31],//31
                    [1646006400000, 294.31, 303.13, 287.165, 289.86],//32
                    [1646611200000, 288.53, 289.69, 270, 280.07],//33
                    [1647216000000, 280.34, 301, 275.82, 300.43],//34
                    [1647820800000, 298.89, 305.5, 294.9, 303.68],//35
                    [1648425600000, 304.33, 315.95, 304.33, 309.42],//36
                    [1649030400000, 310.09, 315.11, 296.28, 296.97],//37
                    [1649635200000, 291.79, 292.61, 279.32, 279.83],//38
                    [1650240000000, 278.91, 293.3, 273.38, 274.03],//39
                    [1650844800000, 273.29, 290.98, 270, 277.52],//40
                    [1651449600000, 277.71, 290.88, 271.27, 274.73],//41
                    [1652054400000, 270.06, 273.75, 250.02, 261.12],//42
                    [1652659200000, 259.955, 268.33, 246.44, 252.56],//43
                    [1653264000000, 255.49, 273.34, 253.43, 273.24],//44
                    [1653955200000, 272.53, 277.69, 261.6, 270.02],//45
                    [1654473600000, 272.06, 274.18, 252.53, 252.99],//46
                    [1655078400000, 245.11, 255.3, 241.51, 247.65],//47
                    [1655769600000, 250.255, 267.98, 249.51, 267.7],//48
                    [1656288000000, 268.205, 268.3, 252.9, 259.58],//49
                    [1656979200000, 256.16, 269.055, 254.74, 267.66],//50
                    [1657497600000, 265.65, 276.53, 245.94, 256.72],//51
                    [1658102400000, 279.74, 280.84, 263.3, 264.25],//52
                    [1659102400000, 279.74, 290.84, 264.3, 264.25],//53
                    [1660102400000, 284.74, 310.84, 265.3, 285.25],//54
                    [1661102400000, 294.74, 301.84, 287.3, 286.25],//55
                    [1662102400000, 297.74, 302.84, 279.3, 287.25],//56
                    [1663102400000, 289.74, 303.84, 273.3, 294.25],//57
                    [1664102400000, 289.74, 304.84, 275.3, 274.25],//58
                    [1665102400000, 289.74, 305.84, 276.3, 284.25],//59
                    [1666102400000, 309.74, 306.84, 287.3, 294.25],//60
                ],
                id: 'dataseries'

            }, {
                type: 'flags',
                data: [{
                    x: 1652659200000,
                    title: '매수',
                },
                // 매수 박스 여러개 들어가는 경우 추가.
                {
                    x: 1627257600000,
                    title: '매수',
                },
                // 매수 박스 여러개 들어가는 경우 추가.
                {
                    x: 1630281600000,
                    title: '매수',
                }],
                color: '#c35159', // same as onSeries
                fillColor: '#c35159',
                onSeries: 'dataseries',
                shape: 'url(../img/flags_buy.svg)',
                width: 32,
                style: {
                    fontWeight: 'normal',
                    fontSize: '11px',
                    color: '#fff',
                    fontFamily: "'Spoqa Han Sans Neo', 'Malgun gothic'"
                },
            }, {
                type: 'flags',
                data: [{
                    x: 1628467200000,
                    y: 325.41, //매도 high 값,
                    title: '매도',
                },
                // 매도 박스 여러개 들어가는 경우 추가.
                {
                    x: 1648425600000,
                    title: '매도',
                }
                ,
                // 매도 박스 여러개 들어가는 경우 추가.
                {
                    x: 1651449600000,
                    title: '매도33',
                }
                ],
                color: '#0c6bb3', // same as onSeries
                fillColor: '#0c6bb3',
                onSeries: 'dataseries',
                shape: 'url(../img/flags_sell.svg)',
                width: 32,
                style: {
                    fontSize: '11px',
                    color: '#fff',
                    fontFamily: "'Spoqa Han Sans Neo', 'Malgun gothic'"
                },
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },
        });
    }

    // 상세 매매신호 막대 차트
    if ($('#containerfinancials1_1').length) {
        Highcharts.chart('containerfinancials1_1', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021', '2022 <br> <span style="font-size:10px">추정</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'column',
                name: '매출액',
                data: [97.988, 45.988, 75.988, 85.988, 95.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },

        });
    }
    if ($('#containerfinancials1_2').length) {
        Highcharts.chart('containerfinancials1_2', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021', '2022 <br> <span style="font-size:10px">추정</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'column',
                name: 'EPS 주당순이익',
                data: [97.988, 45.988, 75.988, 85.988, 95.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },

        });
    }
    if ($('#containerfinancials1_3').length) {
        Highcharts.chart('containerfinancials1_3', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021', '2022 <br> <span style="font-size:10px">추정</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'column',
                name: 'ROE 자기자본이익률',
                data: [97.988, 45.988, 75.988, 85.988, 95.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },

        });
    }
    if ($('#containerfinancials1_4').length) {
        Highcharts.chart('containerfinancials1_4', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021', '2022 <br> <span style="font-size:10px">추정</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'column',
                name: 'ROE 자기자본이익률',
                data: [97.988, 45.988, 75.988, 85.988, 95.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },

        });
    }
    if ($('#containerfinancials1_5').length) {
        Highcharts.chart('containerfinancials1_5', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021', '2022 <br> <span style="font-size:10px">추정</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'column',
                name: 'ROE 자기자본이익률',
                data: [97.988, 45.988, 75.988, 85.988, 95.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },

        });
    }
    if ($('#containerfinancials2_1').length) {
        Highcharts.chart('containerfinancials2_1', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            // legend: {
            //     enabled: false,
            // },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false,
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#126fbe", "#12bebe"],

            xAxis: [{
                categories: ['2018', '2018', '2018', '2018', '2018', '2018', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2020', '2020', '2020', '2020', '2020', '2020', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022'],
                crosshair: true,
                tickInterval: 1,
                labels: {
                    style: {
                        color: '#7f8ca3',
                        fontSize: '10px'
                    },
                }
            }],

            yAxis: [{// 1
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    format: '{value}달러',
                    style: {
                        color: '#d9e0eb',
                        fontSize: '10px'
                    }
                },
            }, {// 2
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    format: '{value}달러',
                    style: {
                        color: '#12bebe',
                        fontSize: '10px'
                    }
                },
                opposite: true
            }],

            series: [{
                type: 'line',
                name: '주당순이익',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 20.8, 23.0, 22.5, 22.5, 21.3,
                    20.1
                ]
            }, {
                type: 'line',
                name: '주가',
                yAxis: 1,
                data: [
                    13.7, 13.3, 13.9, 15.1, 13.5, 13.8, 14.0, 15.0, 16.1, 13.7, 13.3, 16.4,
                    16.9, 16.0, 16.8, 14.4, 14.0, 13.8, 15.0, 14.9, 19.2, 19.6, 19.5, 16.3,
                    19.5, 20.8, 24.0, 21.5, 20.0, 20.2, 20.3, 19.4, 18.9, 20.6, 20.5, 21.1,
                    20.4, 20.7, 21.3, 20.2, 19.6, 20.2, 21.1, 30.8, 40.0, 33.5, 33.5, 33.3,
                    33.1
                ]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
            },

        });
    }

    // 서브 - 관심종목 선차트
    if ($('#containerfist1_1').length) {
        Highcharts.chart('containerfist1_1', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            colors: ["#dae0ea"],

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },


            xAxis: [{
                title: {
                    text: null
                },
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    enabled: false
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'line',
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 20.8, 23.0, 22.5, 22.5, 21.3,
                    20.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },

        });
    }
    if ($('#containerfist1_2').length) {
        Highcharts.chart('containerfist1_2', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            colors: ["#dae0ea"],

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },


            xAxis: [{
                title: {
                    text: null
                },
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    enabled: false
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'line',
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 20.8, 23.0, 22.5, 22.5, 21.3,
                    20.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },

        });
    }
    if ($('#containerfist1_3').length) {
        Highcharts.chart('containerfist1_3', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            colors: ["#dae0ea"],

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },


            xAxis: [{
                title: {
                    text: null
                },
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    enabled: false
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'line',
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 20.8, 23.0, 22.5, 22.5, 21.3,
                    20.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },

        });
    }
});