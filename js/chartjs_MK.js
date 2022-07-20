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

            exporting: {
                enabled: false
            },

            tooltip: {
                // enabled: false
                // headerFormat: '',
                
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
                    formatter: function() {
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
                type: 'hollowcandlestick',
                data: [                    
                    [Date.UTC(2017, 11, 2),75.11,75.81,74.72,75.16],  //[Date.UTC(2017, 11, 1), 77(open), 78(high), 66(low), 68(close)],
                    [Date.UTC(2017, 11, 3),75.81,76.29,75.49,75.93],
                    [Date.UTC(2017, 11, 4),76.41,77.59,76.07,77.53],
                    [Date.UTC(2017, 11, 5),77.03,79.26,76.81,78.75],
                    [Date.UTC(2017, 11, 6),79.46,79.92,77.73,77.85],
                    [Date.UTC(2017, 11, 7),78.04,78.99,75.8,76.91],
                    [Date.UTC(2017, 11, 8),76.13,77.45,75.38,77.39],
                    [Date.UTC(2017, 11, 9),75.09,76.97,75.05,76.93],
                    [Date.UTC(2017, 11, 10),78.29,79.13,77.58,78.74],
                    [Date.UTC(2017, 11, 11),78.76,79.63,78.25,78.29],
                    [Date.UTC(2017, 11, 12),79.17,79.88,79.13,79.81],
                    [Date.UTC(2017, 11, 13),79.67,80.22,78.97,79.21],
                    [Date.UTC(2017, 11, 14),78.94,79.81,78.84,79.72],
                    [Date.UTC(2017, 11, 15),80.88,81.06,79.13,79.18],
                    [Date.UTC(2017, 11, 16),79.04,79.68,78.27,79.53],
                    [Date.UTC(2017, 11, 17),79.19,80.86,78.91,79.56],
                    [Date.UTC(2017, 11, 18),79.81,80.29,79.12,79.49],
                    [Date.UTC(2017, 11, 21),79.81,80.29,79.12,79.49],                    
                    [Date.UTC(2017, 11, 22),79.81,80.29,79.12,79.49],                    
                    [Date.UTC(2017, 11, 23),79.81,80.29,79.12,79.49],                    
                ],

            }, {
                type: 'flags',                
                data: [{
                    x: Date.UTC(2017, 11, 6),
                    y: 75.73, //매수 low 값,
                    title: '매수',
                },
                // 매수 박스 여러개 들어가는 경우 추가.
                {
                    x: Date.UTC(2017, 11, 21),
                    y: 77.12,
                    title: '매수',
                }
                ],
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
                    x: Date.UTC(2017, 11, 4),
                    y: 78.59, //매도 high 값,
                    title: '매도',
                },
                // 매도 박스 여러개 들어가는 경우 추가.
                {
                    x: Date.UTC(2017, 11, 14),
                    y: 80.81,
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

            colors: ["#126fbe", "#12bebe"],
    
            xAxis: [{
                categories: ['2018', '2018', '2018', '2018', '2018', '2018', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2020','2020','2020','2020','2020','2020', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021' , '2021', '2021', '2021', '2021', '2021' , '2021', '2021', '2021', '2021', '2021', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022', '2022'],
                crosshair: true,
                tickInterval:1,
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