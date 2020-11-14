//基础交互功能
$(function () {

  // 左侧tab栏切换功能
  $('.monitor .tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings('a').removeClass('active');
    $('.content').eq($(this).index()).show().siblings('.content').hide();
  })


  // jq实现轮播图
  /*  function lunbo() {
     $('.monitor .content ul').animate({
         top: -525
       }, 10000, 'linear',
       function () {
         $('.monitor .content ul').css('top', 0)
       });
   };
  */





  // 后台订单数据
  let o_data = [{
      '订单量': '301,987',
      '销售额': '99834'
    },
    {
      '订单量': '20,301',
      '销售额': '9834'
    },
    {
      '订单量': '1,987',
      '销售额': '3834'
    },
    {
      '订单量': '987',
      '销售额': '834'
    },
  ];

  // 点击切换数据显示功能
  $('.order .head a').on('click', function (e) {
    num = $(this).index();
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    $('.order .parts p:eq(0)').text(o_data[$(this).index()]['订单量']);
    $('.order .parts p:eq(1)').text(o_data[$(this).index()]['销售额']);
  });




  // 定时轮播功能
  let num = 0;
  let clock01 = setInterval(timeID01, 4000);


  function timeID01() {
    num++;
    if (num > 3) {
      num = 0
    };
    $('.order .head a').eq(num).click();
    // console.log(num);
  }



  /*   $('.order .head a').hover(
      function () {
        clearInterval(clock01);
      },
      function () {
        clock01;
      }
    ) */




  //后台排名数据
  let data = [{
    'name': '好多鱼',
    'num': '2170'
  }, {
    'name': '可爱多',
    'num': '9086'
  }, {
    'name': '哇哈哈',
    'num': '8341'
  }, {
    'name': '喜之郎',
    'num': '7407'
  }, {
    'name': '八喜',
    'num': '6080'
  }, {
    'name': '小洋人',
    'num': '6724'
  }]
  // 创建后台排名数据组
  let listArr = [];
  for (let i = 0; i < 5; i++) {
    let tmp = {};
    data.push(data.shift());
    for (let key in data) {
      tmp[key] = data[key];
    }
    listArr.push(tmp);
  }
  // 设置鼠标移入事件
  $('.hot .hot_right .data ul:eq(0) li').each(function (idx, elm) {
    $(elm).on('mouseenter', function () {
      nbr = idx;
      $(this).addClass('active').siblings('li').removeClass('active');
      $('.hot .hot_right .data ul:eq(1) li>span').each(function (index, elm) {
        $(elm).text(listArr[idx][index].name);
      })
    })
  })
  //自动轮播功能
  let nbr = 0;
  setInterval(function () {
    nbr++;
    nbr == 5 ? nbr = 0 : null;
    $('.hot .hot_right .data ul:eq(0) li').eq(nbr).mouseenter();
  }, 4000)

});




// 饼状图
$(function () {


  // 饼状图
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.querySelector('.point .echarts .pie'));

  // 指定图表的配置项和数据
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      position: function (point, params, dom, rect, size) {
        // 提示信息出现位置
        return [point[0] + 10, point[1] + 10];
      }
    },
    series: [{
      name: '点位分布',
      type: 'pie',
      radius: [8, 60],
      center: ['50%', '50%'],
      roseType: 'radius',
      label: {
        show: true
      },
      labelLine: {
        length: 10,
        length2: 5
      },
      color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
      data: [{
          value: 110,
          name: '云南'
        },
        {
          value: 160,
          name: '北京'
        },
        {
          value: 180,
          name: '山东'
        },
        {
          value: 180,
          name: '河北'
        },
        {
          value: 160,
          name: '江苏'
        },
        {
          value: 200,
          name: '浙江'
        },
        {
          value: 280,
          name: '四川'
        },
        {
          value: 335,
          name: '湖北'
        }
      ]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);



});




//柱状图
$(function () {

  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.querySelector('.user .echarts .histogram'));


  //中间样式不同的柱形条样式设置
  let item = {
    value: 1000,
    itemStyle: {
      color: '#20324f',
      opacity: 0.5
    }
  }

  // 指定图表的配置项和数据
  let = option = {


    textStyle: {
      color: '#468ce5'
    },
    tooltip: {

    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '15%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#01586b',
        },
      },

    }],
    yAxis: [{
        type: 'value',
        axisTick: {
          show: false
        },

        axisLine: {
          lineStyle: {
            color: '#01586b',
          },
        },

        splitLine: {
          lineStyle: {
            color: '#01586b',
          },
        },

      },

      {
        axisLine: {
          lineStyle: {
            color: '#01586b',
          },
        },
      },
    ],
    series: [{
      name: '全国用户总量统计',
      type: 'bar',
      barWidth: '60%',
      data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [{
                offset: 0,
                color: '#00f8f8'
              },
              {
                offset: 1,
                color: '#0065cf'
              }
            ]
          )
        }

      }
    }]
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);


});




//环状图
$(function () {

  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.querySelector('.season .echarts .loop'));


  // 指定图表的配置项和数据

  let option = {
    series: [{
      name: '销售进度',
      type: 'pie',
      startAngle: 45,
      radius: ['90%', '120%'],
      top: '25%',
      label: {
        show: false,
        position: 'center'
      },
      data: [{
          value: 1,
          itemStyle: {
            color: '#e42a54'
          }
        },
        {
          value: 4,
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 3,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0,
              [{
                  offset: 0,
                  color: '#00f8f8'
                },
                {
                  offset: 1,
                  color: '#0065cf'
                }
              ]
            )
          }
        }
      ]
    }]
  };



  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);


});




//折线图
$(function () {

  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.querySelector('.sales .echarts'));

  //要显示的数据
  let data = [
    [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    [
      [23, 475, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 265, 23, 78, 421, 82, 64, 343, 60, 19, 34],
    ],
    [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 298, 21, 456, 87, 43, 12, 343, 54, 12, 98],
    ],
    [
      [43, 173, 262, 54, 91, 54, 84, 43, 86, 343, 154, 53],
      [32, 54, 234, 87, 332, 45, 462, 68, 93, 54, 154, 24],
    ],
  ];



  // 指定图表的配置项和数据


  let option = {
    legend: {
      right: 8,
      top: 0,
      textStyle: {
        color: '#4895f4',
        fontSize: 12
      }
    },
    textStyle: {
      color: '#4895f4'
    },
    title: {
      text: '单位 万',
      textStyle: {
        color: '#4895f4',
        fontSize: 12

      }
    },
    tooltip: {

    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      top: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        onZero: true,
        lineStyle: {
          color: '#012b48',
        }
      },
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false
      },

    },
    yAxis: {
      min: 0,
      max: 500,
      type: 'value',
      axisLine: {
        onZero: true,
        lineStyle: {
          color: '#012b48',
        }
      },
      splitLine: {
        lineStyle: {
          color: '#012b48',
        }
      },
      axisTick: {
        show: false
      }
    },
    series: [{
        name: '最高额度',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        data: data[0][0],
        color: '#00efef',
      },
      {
        name: '最低额度',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        data: data[1][1],
        color: '#dd3c36'
      }
    ]
  };


  // 点击功能
  $('.sales .head a').on('click', function (e) {
    e.preventDefault();
    times = $(this).index() - 1;
    $(this).addClass('active').siblings('a').removeClass('active');
    let index = $(this).index() - 1;
    option.series[0].data = data[index][0];
    option.series[1].data = data[index][1];
    myChart.setOption(option);
  });

  // 轮播功能
  let times = 0;
  setInterval(function () {
    times++;
    if (times == 4) {
      times = 0
    };
    $('.sales .head a').eq(times).click();
  }, 4000);


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);


});


// 迁徙图
$(function () {
  // 加载地址
  // https://www.makeapie.com/editor.html?c=x2Ei_JbHZb

  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.querySelector('.map .echarts'));

  let geoCoordMap = {
    '新疆玛纳斯基地': [86.22, 44.30],
    '九江': [116.00, 29.70],
    '新乡': [116.402217, 35.311657],
    ' ': [79.92, 37.12],
    '  ': [86.85, 47.70],
    '若羌县': [88.17, 39.02],
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };

  let BJData = [
    [{
      name: '新乡'
    }, {
      name: '新乡',
      value: 200
    }],
    [{
      name: '新乡'
    }, {
      name: '呼和浩特',
      value: 90
    }],
    [{
      name: '新乡'
    }, {
      name: '哈尔滨',
      value: 90
    }],
    [{
      name: '新乡'
    }, {
      name: '石家庄',
      value: 90
    }],
    [{
      name: '新乡'
    }, {
      name: '昆明',
      value: 30
    }],
    [{
      name: '新乡'
    }, {
      name: '北京',
      value: 100
    }],
    [{
      name: '新乡'
    }, {
      name: '长春',
      value: 40
    }],
    [{
      name: '新乡'
    }, {
      name: '重庆',
      value: 40
    }],
    [{
      name: '新乡'
    }, {
      name: '贵阳',
      value: 50
    }],
    [{
      name: '新乡'
    }, {
      name: '南宁',
      value: 30
    }],
    [{
      name: '新乡'
    }, {
      name: '济南',
      value: 10
    }],
    [{
      name: '新乡'
    }, {
      name: '太原',
      value: 40
    }],
    [{
      name: '新乡'
    }, {
      name: '西安',
      value: 60
    }],
    [{
      name: '新乡'
    }, {
      name: '武汉',
      value: 50
    }],
    [{
      name: '新乡'
    }, {
      name: '合肥',
      value: 40
    }],
    [{
      name: '新乡'
    }, {
      name: '南京',
      value: 30
    }],
    [{
      name: '新乡'
    }, {
      name: '沈阳',
      value: 20
    }],
    [{
      name: '新乡'
    }, {
      name: '成都',
      value: 10
    }]
  ];

  let SHData = [
    [{
      name: '九江'
    }, {
      name: '九江',
      value: 200
    }],

    [{
      name: '九江'
    }, {
      name: '长沙',
      value: 95
    }],
    [{
      name: '九江'
    }, {
      name: '武汉',
      value: 30
    }],
    [{
      name: '九江'
    }, {
      name: '南昌',
      value: 20
    }],
    [{
      name: '九江'
    }, {
      name: '合肥',
      value: 70
    }],
    [{
      name: '九江'
    }, {
      name: '南京',
      value: 60
    }],
    [{
      name: '九江'
    }, {
      name: '福州',
      value: 50
    }],
    [{
      name: '九江'
    }, {
      name: '上海',
      value: 100
    }],
    [{
      name: '九江'
    }, {
      name: '深圳',
      value: 100
    }],

  ];

  let GZData = [
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '新疆玛纳斯基地',
      value: 200
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '  ',
      value: 90
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: ' ',
      value: 40
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '呼和浩特',
      value: 90
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '昆明',
      value: 40
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '成都',
      value: 10
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '兰州',
      value: 95
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '银川',
      value: 90
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '西宁',
      value: 80
    }],

  ];

  let planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let fromCoord = geoCoordMap[dataItem[0].name];
      let toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push([{
          coord: fromCoord
        }, {
          coord: toCoord
        }]);
      }
    }
    return res;
  };

  let color = ['#3ed4ff', '#ffa022', '#a6c84c'];
  let series = [];
  [
    ['新乡', BJData],
    ['九江', SHData],
    ['新疆', GZData]
  ].forEach(function (item, i) {
    series.push({
      name: item[0] + ' Top10',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      name: item[0] + ' Top10',
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.4,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      name: item[0] + ' Top10',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i]
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    });
  });

  let option = {
    backgroundColor: '#080a20',
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['北京 Top10', '上海 Top10', '广州 Top10'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'single'
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#132937',
          borderColor: '#0692a4'
        },
        emphasis: {
          areaColor: '#0b1c2d'
        }
      }
    },
    series: series
  };





  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});