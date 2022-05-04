$(document).ready(function () {

    // AI추천 상세 매매신호 일봉 차트
    if ($('#containeroutline1_1').length) {
        Highcharts.stockChart('containeroutline1_1', {
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

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
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
                type: 'hollowcandlestick',            
                data: [[1586784600000,67.08,68.43,66.46,68.31,131022800],[1586871000000,70,72.06,69.51,71.76,194994800],[1586957400000,70.6,71.58,70.16,71.11,131154400],[1587043800000,71.85,72.05,70.59,71.67,157125200],[1587130200000,71.17,71.74,69.21,70.7,215250000],[1587389400000,69.49,70.42,69.21,69.23,130015200],[1587475800000,69.07,69.31,66.36,67.09,180991600],[1587562200000,68.4,69.47,68.05,69.03,116862400],[1587648600000,68.97,70.44,68.72,68.76,124814400],[1587735000000,69.3,70.75,69.25,70.74,126161200],[1587994200000,70.45,71.14,69.99,70.79,117087600],[1588080600000,71.27,71.46,69.55,69.64,112004800],[1588167000000,71.18,72.42,70.97,71.93,137280800],[1588253400000,72.49,73.63,72.09,73.45,183064000],[1588339800000,71.56,74.75,71.46,72.27,240616800],[1588599000000,72.29,73.42,71.58,73.29,133568000],[1588685400000,73.76,75.25,73.61,74.39,147751200],[1588771800000,75.11,75.81,74.72,75.16,142333600],[1588858200000,75.81,76.29,75.49,75.93,115215200],[1588944600000,76.41,77.59,76.07,77.53,133838400],[1589203800000,77.03,79.26,76.81,78.75,145946400],[1589290200000,79.46,79.92,77.73,77.85,162301200],[1589376600000,78.04,78.99,75.8,76.91,200622400],[1589463000000,76.13,77.45,75.38,77.39,158929200],[1589549400000,75.09,76.97,75.05,76.93,166348400],[1589808600000,78.29,79.13,77.58,78.74,135178400],[1589895000000,78.76,79.63,78.25,78.29,101729600],[1589981400000,79.17,79.88,79.13,79.81,111504800],[1590067800000,79.67,80.22,78.97,79.21,102688800],[1590154200000,78.94,79.81,78.84,79.72,81803200],[1590499800000,80.88,81.06,79.13,79.18,125522000],[1590586200000,79.04,79.68,78.27,79.53,112945200],[1590672600000,79.19,80.86,78.91,79.56,133560800],[1590759000000,79.81,80.29,79.12,79.49,153532400],[1591018200000,79.44,80.59,79.3,80.46,80791200],[1591104600000,80.19,80.86,79.73,80.83,87642800],[1591191000000,81.17,81.55,80.57,81.28,104491200],[1591277400000,81.1,81.4,80.19,80.58,87560400],[1591363800000,80.84,82.94,80.81,82.88,137250400],[1591623000000,82.56,83.4,81.83,83.36,95654400],[1591709400000,83.04,86.4,83,86,147712400],[1591795800000,86.97,88.69,86.52,88.21,166651600],[1591882200000,87.33,87.76,83.87,83.97,201662400],[1591968600000,86.18,86.95,83.56,84.7,200146000],[1592227800000,83.31,86.42,83.14,85.75,138808800],[1592314200000,87.86,88.3,86.18,88.02,165428800],[1592400600000,88.79,88.85,87.77,87.9,114406400],[1592487000000,87.85,88.36,87.31,87.93,96820400],[1592573400000,88.66,89.14,86.29,87.43,264476000],[1592832600000,87.83,89.86,87.79,89.72,135445200],[1592919000000,91,93.1,90.57,91.63,212155600],[1593005400000,91.25,92.2,89.63,90.01,192623200],[1593091800000,90.18,91.25,89.39,91.21,137522400],[1593178200000,91.1,91.33,88.25,88.41,205256800],[1593437400000,88.31,90.54,87.82,90.44,130646000],[1593523800000,90.02,91.5,90,91.2,140223200],[1593610200000,91.28,91.84,90.98,91.03,110737200],[1593696600000,91.96,92.62,90.91,91.03,114041600],[1594042200000,92.5,93.94,92.47,93.46,118655600],[1594128600000,93.85,94.65,93.06,93.17,112424400],[1594215000000,94.18,95.38,94.09,95.34,117092000],[1594301400000,96.26,96.32,94.67,95.75,125642800],[1594387800000,95.33,95.98,94.71,95.92,90257200],[1594647000000,97.26,99.96,95.26,95.48,191649200],[1594733400000,94.84,97.25,93.88,97.06,170989200],[1594819800000,98.99,99.25,96.49,97.72,153198000],[1594906200000,96.56,97.4,95.9,96.52,110577600],[1594992600000,96.99,97.15,95.84,96.33,92186800],[1595251800000,96.42,98.5,96.06,98.36,90318000],[1595338200000,99.17,99.25,96.74,97,103433200],[1595424600000,96.69,97.97,96.6,97.27,89001600],[1595511000000,97,97.08,92.01,92.85,197004400],[1595597400000,90.99,92.97,89.14,92.61,185438800],[1595856600000,93.71,94.9,93.48,94.81,121214000],[1595943000000,94.37,94.55,93.25,93.25,103625600],[1596029400000,93.75,95.23,93.71,95.04,90329200],[1596115800000,94.19,96.3,93.77,96.19,158130000],[1596202200000,102.89,106.42,100.82,106.26,374336800],[1596461400000,108.2,111.64,107.89,108.94,308151200],[1596547800000,109.13,110.79,108.39,109.67,173071600],[1596634200000,109.38,110.39,108.9,110.06,121776800],[1596720600000,110.4,114.41,109.8,113.9,202428800],[1596807000000,113.21,113.68,110.29,111.11,198045600],[1597066200000,112.6,113.78,110,112.73,212403600],[1597152600000,111.97,112.48,109.11,109.38,187902400],[1597239000000,110.5,113.28,110.3,113.01,165598000],[1597325400000,114.43,116.04,113.93,115.01,210082000],[1597411800000,114.83,115,113.04,114.91,165565200],[1597671000000,116.06,116.09,113.96,114.61,119561600],[1597757400000,114.35,116,114.01,115.56,105633600],[1597843800000,115.98,117.16,115.61,115.71,145538000],[1597930200000,115.75,118.39,115.73,118.28,126907200],[1598016600000,119.26,124.87,119.25,124.37,338054800],[1598275800000,128.7,128.79,123.94,125.86,345937600],[1598362200000,124.7,125.18,123.05,124.82,211495600],[1598448600000,126.18,126.99,125.08,126.52,163022400],[1598535000000,127.14,127.49,123.83,125.01,155552400],[1598621400000,126.01,126.44,124.58,124.81,187630000],[1598880600000,127.58,131,126,129.04,225702700],[1598967000000,132.76,134.8,130.53,134.18,151948100],[1599053400000,137.59,137.98,127,131.4,200119000],[1599139800000,126.91,128.84,120.5,120.88,257599600],[1599226200000,120.07,123.7,110.89,120.96,332607200],[1599571800000,113.95,118.99,112.68,112.82,231366600],[1599658200000,117.26,119.14,115.26,117.32,176940500],[1599744600000,120.36,120.5,112.5,113.49,182274400],[1599831000000,114.57,115.23,110,112,180860300],[1600090200000,114.72,115.93,112.8,115.36,140150100],[1600176600000,118.33,118.83,113.61,115.54,184642000],[1600263000000,115.23,116,112.04,112.13,154679000],[1600349400000,109.72,112.2,108.71,110.34,178011000],[1600435800000,110.4,110.88,106.09,106.84,287104900],[1600695000000,104.54,110.19,103.1,110.08,195713800],[1600781400000,112.68,112.86,109.16,111.81,183055400],[1600867800000,111.62,112.11,106.77,107.12,150718700],[1600954200000,105.17,110.25,105,108.22,167743300],[1601040600000,108.43,112.44,107.67,112.28,149981400],[1601299800000,115.01,115.32,112.78,114.96,137672400],[1601386200000,114.55,115.31,113.57,114.09,99382200],[1601472600000,113.79,117.26,113.62,115.81,142675200],[1601559000000,117.64,117.72,115.83,116.79,116120400],[1601645400000,112.89,115.37,112.22,113.02,144712000],[1601904600000,113.91,116.65,113.55,116.5,106243800],[1601991000000,115.7,116.12,112.25,113.16,161498200],[1602077400000,114.62,115.55,114.13,115.08,96849000],[1602163800000,116.25,116.4,114.59,114.97,83477200],[1602250200000,115.28,117,114.92,116.97,100506900],[1602509400000,120.06,125.18,119.28,124.4,240226800],[1602595800000,125.27,125.39,119.65,121.1,262330500],[1602682200000,121,123.03,119.62,121.19,150712000],[1602768600000,118.72,121.2,118.15,120.71,112559200],[1602855000000,121.28,121.55,118.81,119.02,115393800],[1603114200000,119.96,120.42,115.66,115.98,120639300],[1603200600000,116.2,118.98,115.63,117.51,124423700],[1603287000000,116.67,118.71,116.45,116.87,89946000],[1603373400000,117.45,118.04,114.59,115.75,101988000],[1603459800000,116.39,116.55,114.28,115.04,82572600],[1603719000000,114.01,116.55,112.88,115.05,111850700],[1603805400000,115.49,117.28,114.54,116.6,92276800],[1603891800000,115.05,115.43,111.1,111.2,143937800],[1603978200000,112.37,116.93,112.2,115.32,146129200],[1604064600000,111.06,111.99,107.72,108.86,190272600],[1604327400000,109.11,110.68,107.32,108.77,122866900]],
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