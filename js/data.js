// num = 1 上海大都市圈：上海、苏州、无锡、常州、宁波、舟山、嘉兴、南通、湖州。
// num = 2 南京都市圈：南京、镇江、扬州、马鞍山、滁州、芜湖、淮安、宣城。
// num = 3 杭州都市圈：杭州、湖州、嘉兴、绍兴、黄山、衢州。
// num = 4 合肥都市圈：合肥、六安、蚌埠、滁州、淮南、马鞍山、芜湖。
// num = 5 宁波都市圈：宁波、舟山、台州。
// num = 6 非都市圈 
// num = 0 重叠都市圈 宁波、舟山、嘉兴、马鞍山、芜湖、滁州、湖州
var cityData = [{
    id:1,
        name: "上海大都市圈",
        color: "rgba(209,0,38,1)",
        border: "#FF4848",
    },
    {
        id:2,
        name: "南京都市圈",
        color: "rgba(255,169,40,1)",
        border: "#FFB775",
    },
    {
        id:3,
        name: "宁波都市圈",
        color: "rgba(255,230,110,1)",
        border: "#FFEC89",
    },
    {id:4,
        name: "杭州都市圈",
        color: "rgba(28,252,289,1)",
        border: "#48EFC0",
    },
    {
        id:5,
        name: "合肥都市圈",
        color: "rgba(142,214,255,1)",
        border: "#61C6FF",
    },
]

var data1 = {
    "name": "2020年长江三角洲各市GDP占比",
    "children": [{
            "name": '上海市',
            "color": "#FF1818",
            children: [{
                "name": "上海市",
                "color": "rgba( 209,0,38,1)",
                border: "#FF4848",
                ring: "上海大都市圈",
                "value": 15.68
            }]
        },
        {
            "name": '江苏省',
            "color": "#FF6CCD",
            children: [{
                    "name": "南京市",
                    "color": "rgba(255,169,40,1)",
                    border: "#FFB775",
                    ring: "南京都市圈",
                    value: 6
                },
                {
                    "name": "无锡市",
                    "color": "rgba( 209,0,38,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    value: 5.01
                },
                {
                    "name": "徐州市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 2.97
                },
                {
                    "name": "常州市",
                    "color": "rgba( 209,0,38,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    value: 3.16
                },
                {
                    "name": "苏州市",
                    "color": "rgba( 209,0,38,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    value: 8.17
                },
                {
                    "name": "南通市",
                    "color": "rgba( 209,0,38,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    value: 4.07
                },
                {
                    "name": "连云港市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 1.32
                },
                {
                    "name": "淮安市",
                    "color": "rgba(255,169,40,1)",
                    border: "#FFB775",
                    ring: "南京都市圈",
                    value: 1.63
                },
                {
                    "name": "盐城市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 2.41
                },
                {
                    "name": "扬州市",
                    "color": "rgba(255,169,40,1)",
                    border: "#FFB775",
                    ring: "南京都市圈",
                    value: 2.45
                },
                {
                    "name": "镇江市",
                    "color": "rgba(255,169,40,1)",
                    border: "#FFB775",
                    ring: "南京都市圈",
                    value: 1.71
                },
                {
                    "name": "泰州市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 2.15
                },
                {
                    "name": "宿迁市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 1.32
                },

            ]
        },
        {
            "name": '浙江省',
            "color": "#FF8F28",
            children: [{
                    "name": "杭州市",
                    "color": "rgba(28,252,289,1)",
                    border: "#48EFC0",
                    ring: "杭州都市圈",
                    value: 6.52
                },
                {
                    "name": "宁波市",
                    // "color": "rgba( 209,0,38,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    "color": "rgba(255,230,110,1)",
                    value: 5.03
                },
                {
                    "name": "温州市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 2.78
                },
                {
                    "name": "嘉兴市",
                    // "color": "rgba( 209,0,38,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    "color": "rgba(28,252,289,1)",
                    value: 2.23
                },
                {
                    "name": "湖州市",
                    // "color": "rgba( 209,0,38,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    "color": "rgba(28,252,289,1)",
                    value: 1.3
                },
                {
                    "name": "绍兴市",
                    "color": "rgba(28,252,289,1)",
                    border: "#48EFC0",
                    ring: "杭州都市圈",
                    value: 2.43
                },
                {
                    "name": "金华市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 1.91
                },
                {
                    "name": "舟山市",
                    // "color": "rgba( 209,0,38,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    "color": "rgba(255,230,110,1)",
                    value: 0.62
                },
                {
                    "name": "台州市",
                    "color": "rgba(255,230,110,1)",
                    border: "#FFEC89",
                    ring: "宁波都市圈",
                    value: 2.15
                },
                {
                    "name": "衢州市",
                    "color": "rgba(28,252,289,1)",
                    border: "#48EFC0",
                    ring: "杭州都市圈",
                    value: 0.66
                },
                {
                    "name": "丽水市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 0.62
                },
            ]
        },
        {
            "name": '安徽省',
            "color": "#FFE86F",
            children: [{
                    "name": "合肥市",
                    "color": "rgba(142,214,255,1)",
                    border: "#61C6FF",
                    ring: "合肥都市圈",
                    value: 4.07
                },
                {
                    "name": "芜湖市",
                    // "color": "rgba(255,169,40,1)",
                    "color": "rgba(142,214,255,1)",
                    border: "#FFB775",
                    ring: "南京都市圈",
                    value: 1.52
                },
                {
                    "name": "蚌埠市",
                    "color": "rgba(142,214,255,1)",
                    border: "#61C6FF",
                    ring: "合肥都市圈",
                    value: 0.87
                },
                {
                    "name": "淮南市",
                    "color": "rgba(142,214,255,1)",
                    border: "#61C6FF",
                    ring: "合肥都市圈",
                    value: 0.54
                },
                {
                    "name": "马鞍山市",
                    // "color": "rgba(255,169,40,1)",
                    "color": "rgba(142,214,255,1)",
                    border: "#FFB775",
                    ring: "南京都市圈",
                    value: 0.89
                },
                {
                    "name": "淮北市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 0.45
                },
                {
                    "name": "铜陵市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 0.41
                },
                {
                    "name": "安庆市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 1
                },
                {
                    "name": "黄山市",
                    "color": "rgba(28,252,289,1)",
                    border: "#48EFC0",
                    ring: "杭州都市圈",
                    value: 0.34
                },
                {
                    "name": "滁州市",
                    // "color": "rgba(255,169,40,1)",
                    "color": "rgba(142,214,255,1)",
                    border: "#FFB775",
                    ring: "南京都市圈",
                    value: 1.23
                },
                {
                    "name": "阜阳市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 1.14
                },
                {
                    "name": "宿州市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 0.83
                },
                {
                    "name": "六安市",
                    "color": "rgba(142,214,255,1)",
                    border: "#61C6FF",
                    ring: "合肥都市圈",
                    value: 0.68
                },
                {
                    "name": "亳州市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 0.73
                },
                {
                    "name": "池州市",
                    "color": "rgba(45,88,154,1)",
                    "border": "#000",
                    width: 0,
                    value: 0.35
                },
                {
                    "name": "宣城市",
                    "color": "rgba(255,169,40,1)",
                    border: "#FFB775",
                    ring: "南京都市圈",
                    value: 0.65
                },
            ]
        },
    ]
}

var data2 = {
    "name": "2020年长江三角洲各市GDP增加值占比",
    "children": [{
        "name": "上海市",
        "color": "#FF1818",
        "children": [{
            "name": "上海市",
            "color": "rgba( 209,0,38,1)",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "value": 5.89
        }]
    }, {
        "name": "江苏省",
        "color": "#FFA928",
        "children": [{
            "name": "南京市",
            "color": "rgba(255,169,40,1)",
            "border": "#FFB775",
            "ring": "南京都市圈",
            "value": 8.5
        }, {
            "name": "无锡市",
            "color": "rgba( 209,0,38,1)",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "value": 5.6
        }, {
            "name": "徐州市",
            "color": "rgba(86,102,147,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 1.82
        }, {
            "name": "常州市",
            "color": "rgba( 209,0,38,1)",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "value": 4.37
        }, {
            "name": "苏州市",
            "color": "rgba( 209,0,38,1)",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "value": 10.09
        }, {
            "name": "南通市",
            "color": "rgba( 209,0,38,1)",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "value": 7.05
        }, {
            "name": "连云港市",
            "color": "rgba(63,87,126,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 1.17
        }, {
            "name": "淮安市",
            "color": "rgba(255,169,40,1)",
            "border": "#FFB775",
            "ring": "南京都市圈",
            "value": 1.39
        }, {
            "name": "盐城市",
            "color": "rgba(69,101,189,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 2.71
        }, {
            "name": "扬州市",
            "color": "rgba(255,169,40,1)",
            "border": "#FFB775",
            "ring": "南京都市圈",
            "value": 2.14
        }, {
            "name": "镇江市",
            "color": "rgba(255,169,40,1)",
            "border": "#FFB775",
            "ring": "南京都市圈",
            "value": 1
        }, {
            "name": "泰州市",
            "color": "rgba(121,155,208,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 1.93
        }, {
            "name": "宿迁市",
            "color": "rgba(45,88,154,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 1.76
        }]
    }, {
        "name": "浙江省",
        "color": "#65FFD4",
        "children": [{
            "name": "杭州市",
            "color": "rgba(28,252,289,1)",
            "border": "#48EFC0",
            "ring": "杭州都市圈",
            "value": 7.92
        }, {
            "name": "宁波市",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "color": "rgba(255,230,110,1)",
            "value": 4.57
        }, {
            "name": "温州市",
            "color": "rgba(86,102,147,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 2.86
        }, {
            "name": "嘉兴市",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "color": "rgba(28,252,289,1)",
            "value": 1.5
        }, {
            "name": "湖州市",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "color": "rgba(28,252,289,1)",
            "value": 0.85
        }, {
            "name": "绍兴市",
            "color": "rgba(28,252,289,1)",
            "border": "#48EFC0",
            "ring": "杭州都市圈",
            "value": 2.38
        }, {
            "name": "金华市",
            "color": "rgba(121,155,208,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 1.56
        }, {
            "name": "舟山市",
            "border": "#FF4848",
            "ring": "上海大都市圈",
            "color": "rgba(255,230,110,1)",
            "value": 1.78
        }, {
            "name": "台州市",
            "color": "rgba(255,230,110,1)",
            "border": "#FFEC89",
            "ring": "宁波都市圈",
            "value": 1.89
        }, {
            "name": "衢州市",
            "color": "rgba(28,252,289,1)",
            "border": "#48EFC0",
            "ring": "杭州都市圈",
            "value": 0.59
        }, {
            "name": "丽水市",
            "color": "rgba(69,101,189,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 0.68
        }]
    }, {
        "name": "安徽省",
        "color": "#8ED6FF",
        "children": [{
            "name": "合肥市",
            "color": "rgba(142,214,255,1)",
            "border": "#61C6FF",
            "ring": "合肥都市圈",
            "value": 6.87
        }, {
            "name": "芜湖市",
            "color": "rgba(142,214,255,1)",
            "border": "#FFB775",
            "ring": "南京都市圈",
            "value": 1.45
        }, {
            "name": "蚌埠市",
            "color": "rgba(142,214,255,1)",
            "border": "#61C6FF",
            "ring": "合肥都市圈",
            "value": 0.89
        }, {
            "name": "淮南市",
            "color": "rgba(142,214,255,1)",
            "border": "#61C6FF",
            "ring": "合肥都市圈",
            "value": 0.58
        }, {
            "name": "马鞍山市",
            "color": "rgba(142,214,255,1)",
            "border": "#FFB775",
            "ring": "南京都市圈",
            "value": 0.91
        }, {
            "name": "淮北市",
            "color": "rgba(69,101,189,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 0.44
        }, {
            "name": "铜陵市",
            "color": "rgba(86,102,147,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 0.36
        }, {
            "name": "安庆市",
            "color": "rgba(121,155,208,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 0.94
        }, {
            "name": "黄山市",
            "color": "rgba(28,252,289,1)",
            "border": "#48EFC0",
            "ring": "杭州都市圈",
            "value": 0.24
        }, {
            "name": "滁州市",
            "color": "rgba(142,214,255,1)",
            "border": "#FFB775",
            "ring": "南京都市圈",
            "value": 1.33
        }, {
            "name": "阜阳市",
            "color": "rgba(121,155,208,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 1.08
        }, {
            "name": "宿州市",
            "color": "rgba(69,101,189,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 0.83
        }, {
            "name": "六安市",
            "color": "rgba(142,214,255,1)",
            "border": "#61C6FF",
            "ring": "合肥都市圈",
            "value": 0.53
        }, {
            "name": "亳州市",
            "color": "rgba(121,155,208,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 0.62
        }, {
            "name": "池州市",
            "color": "rgba(45,88,154,1)",
            "border": "#2D589A",
            "ring": "非都市圈城市",
            "width": 0,
            "value": 0.4
        }, {
            "name": "宣城市",
            "color": "rgba(255,169,40,1)",
            "border": "#FFB775",
            "ring": "南京都市圈",
            "value": 0.5
        }]
    }]
}

var data3={"name":"2020年长江三角洲各市上市公司数量占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":24.77}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"6.31 "},{"name":"无锡市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"6.04 "},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.66 "},{"name":"常州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"3.19 "},{"name":"苏州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"9.56 "},{"name":"南通市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"2.32 "},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.46 "},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.20 "},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.33 "},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.00 "},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.06 "},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.66 "},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.40 "}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"10.89 "},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"6.18 "},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.73 "},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"2.99 "},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"1.93 "},{"name":"绍兴市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"4.18 "},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.99 "},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"0.07 "},{"name":"台州市","color":"rgba(255,230,110,1)","border":"#FFEC89","ring":"宁波都市圈","value":"3.78 "},{"name":"衢州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.46 "},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.27 "}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"3.92 "},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"1.06 "},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.33 "},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.13 "},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.46 "},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.27 "},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.46 "},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.27 "},{"name":"黄山市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.20 "},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.46 "},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.07 "},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.13 "},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.13 "},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.13 "},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.53 "}]}]}

var data4 ={"name":"2020年长江三角洲各市上市公司增长数占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":21.43}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"3.85 "},{"name":"无锡市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"7.14 "},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"常州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"3.30 "},{"name":"苏州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"13.74 "},{"name":"南通市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"1.10 "},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.55 "},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.10 "},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.10 "},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.55 "},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.10 "}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"9.34 "},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"7.14 "},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"3.30 "},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"3.85 "},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"3.30 "},{"name":"绍兴市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"2.75 "},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"0.00 "},{"name":"台州市","color":"rgba(255,230,110,1)","border":"#FFEC89","ring":"宁波都市圈","value":"3.30 "},{"name":"衢州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.55 "},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.55 "}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"6.04 "},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"1.10 "},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.00 "},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.00 "},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.55 "},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.55 "},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.10 "},{"name":"黄山市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.00 "},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"1.10 "},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.00 "},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.00 "},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.55 "},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.00 "}]}]}

var data5 ={"name":"2020年长江三角洲各市社会消费品零售总额占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":14.63}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"6.57 "},{"name":"无锡市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"4.40 "},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"3.46 "},{"name":"常州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"3.09 "},{"name":"苏州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"7.84 "},{"name":"南通市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"3.33 "},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.28 "},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.46 "},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"2.11 "},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.79 "},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.54 "},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.44 "},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.96 "}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"6.88 "},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"4.90 "},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"4.08 "},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"2.32 "},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"1.60 "},{"name":"绍兴市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"2.47 "},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"2.66 "},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"0.64 "},{"name":"台州市","color":"rgba(255,230,110,1)","border":"#FFEC89","ring":"宁波都市圈","value":"2.82 "},{"name":"衢州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.85 "},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.83 "}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"3.39 "},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"1.31 "},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"1.22 "},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.74 "},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.81 "},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.47 "},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.41 "},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.01 "},{"name":"黄山市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.47 "},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"1.20 "},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.87 "},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.65 "},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.84 "},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.76 "},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.29 "},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.60 "}]}]}

var data6 ={"name":"2020年长江三角洲各市社会消费品零售总额增加值占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":10.56}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"3.84 "},{"name":"无锡市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"4.08 "},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.84 "},{"name":"常州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"2.64 "},{"name":"苏州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"19.42 "},{"name":"南通市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"0.12 "},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.94 "},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.24 "},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.85 "},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.26 "},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.93 "},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.84 "},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.70 "}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"6.58 "},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"4.15 "},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"4.23 "},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"2.15 "},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"1.76 "},{"name":"绍兴市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"2.66 "},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"2.25 "},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"0.57 "},{"name":"台州市","color":"rgba(255,230,110,1)","border":"#FFEC89","ring":"宁波都市圈","value":"2.56 "},{"name":"衢州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.76 "},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.86 "}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"1.21 "},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"1.63 "},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"3.51 "},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.77 "},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.23 "},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.07 "},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.09 "},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.14 "},{"name":"黄山市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.55 "},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.53 "},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"9.08 "},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.25 "},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.99 "},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.98 "},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.03 "},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.14 "}]}]}

var data7 ={"name":"2020年长江三角洲各市实际利用外资占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":21.59}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"4.54 "},{"name":"无锡市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"3.87 "},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"2.46 "},{"name":"常州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"13.88 "},{"name":"苏州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"5.91 "},{"name":"南通市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"2.89 "},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.66 "},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.12 "},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.12 "},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.60 "},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.54 "},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.57 "},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.56 "}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"7.46 "},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"3.02 "},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.17 "},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"2.71 "},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"1.63 "},{"name":"绍兴市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.42 "},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.23 "},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"0.07 "},{"name":"台州市","color":"rgba(255,230,110,1)","border":"#FFEC89","ring":"宁波都市圈","value":"0.34 "},{"name":"衢州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.08 "},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.15 "}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"3.80 "},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"3.12 "},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"1.50 "},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.05 "},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"3.04 "},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.07 "},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.46 "},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.23 "},{"name":"黄山市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.24 "},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"1.71 "},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.53 "},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.12 "},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.64 "},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.10 "},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.43 "},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.37 "}]}]}

var data8 ={"name":"2020年长江三角洲各市进出口总额占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":28.8}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"4.22 "},{"name":"无锡市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"4.99 "},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.89 "},{"name":"常州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"8.73 "},{"name":"苏州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"17.60 "},{"name":"南通市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"2.08 "},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.46 "},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.27 "},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.60 "},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.58 "},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.58 "},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.78 "},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.18 "}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"4.21 "},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"7.43 "},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.73 "},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"2.16 "},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"0.76 "},{"name":"绍兴市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"2.04 "},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"3.57 "},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"1.25 "},{"name":"台州市","color":"rgba(255,230,110,1)","border":"#FFEC89","ring":"宁波都市圈","value":"1.26 "},{"name":"衢州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.24 "},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.28 "}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"2.05 "},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.41 "},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.10 "},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.04 "},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.30 "},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.05 "},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.46 "},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.10 "},{"name":"黄山市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.06 "},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.29 "},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.09 "},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.07 "},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.05 "},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.07 "},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.06 "},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.11 "}]}]}

var data9 ={"name":"2020年长江三角洲各市固定资产投资额占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":6.52}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"4.01 "},{"name":"无锡市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"2.82 "},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"4.28 "},{"name":"常州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"0.66 "},{"name":"苏州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"3.86 "},{"name":"南通市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"4.50 "},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.58 "},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"2.59 "},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"3.36 "},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"3.17 "},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.76 "},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"3.11 "},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.98 "}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"5.72 "},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"4.38 "},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"3.87 "},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"1.56 "},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"2.93 "},{"name":"绍兴市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"2.76 "},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.95 "},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"1.27 "},{"name":"台州市","color":"rgba(255,230,110,1)","border":"#FFEC89","ring":"宁波都市圈","value":"2.32 "},{"name":"衢州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.93 "},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.82 "}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"5.74 "},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"3.16 "},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"2.22 "},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.85 "},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"2.10 "},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.03 "},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.93 "},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.71 "},{"name":"黄山市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.64 "},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"2.08 "},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.81 "},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.44 "},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"1.25 "},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.02 "},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.70 "},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.61 "}]}]}

var data10 ={"name":"2020年长江三角洲各市一般公共预算收入占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":25.66}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"5.97 "},{"name":"无锡市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"3.92 "},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.52 "},{"name":"常州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"2.25 "},{"name":"苏州市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"8.39 "},{"name":"南通市","color":"rgba( 209,0,38,1)","border":"#FF4848","ring":"上海大都市圈","value":"2.33 "},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.89 "},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.96 "},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.46 "},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.23 "},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"1.14 "},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.39 "},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.81 "}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"7.62 "},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"5.69 "},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"2.19 "},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"2.25 "},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(28,252,289,1)","value":"1.27 "},{"name":"绍兴市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"1.98 "},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.57 "},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,230,110,1)","value":"0.60 "},{"name":"台州市","color":"rgba(255,230,110,1)","border":"#FFEC89","ring":"宁波都市圈","value":"1.62 "},{"name":"衢州市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.53 "},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.55 "}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"5.34 "},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"1.19 "},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"1.24 "},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.65 "},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.61 "},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.29 "},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.30 "},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.51 "},{"name":"黄山市","color":"rgba(28,252,289,1)","border":"#48EFC0","ring":"杭州都市圈","value":"0.45 "},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":"0.84 "},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"1.39 "},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.84 "},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":"0.86 "},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.84 "},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":"0.24 "},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":"0.61 "}]}]}

var data11={"name":"2020年长江三角洲各市企业数占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":21.87}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":6.21},{"name":"无锡市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":3.37},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":2.65},{"name":"常州市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":2.03},{"name":"苏州市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":6.97},{"name":"南通市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":2.65},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.36},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.24},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":2.17},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.71},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.24},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.52},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.4}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":6.74},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,236,137,1)","value":4.28},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":3.13},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(101,255,212,1)","value":1.8},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(101,255,212,1)","value":1.13},{"name":"绍兴市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":1.9},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":3.93},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,236,137,1)","value":0.46},{"name":"台州市","color":"rgba(255,236,137,1)","border":"#FFEC89","ring":"宁波都市圈","value":2.22},{"name":"衢州市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":0.5},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.56}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":4.6},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":1.03},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.72},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.54},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":0.71},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.35},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.35},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.27},{"name":"黄山市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":0.37},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":1.09},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.76},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.14},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.9},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.21},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.31},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":0.6}]}]}


var data13={"name":"2020年长江三角洲各市新增企业数占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":22.22}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":5.2},{"name":"无锡市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":3.32},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":3.03},{"name":"常州市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":1.59},{"name":"苏州市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":5.79},{"name":"南通市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":2.18},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.77},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.17},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":2.06},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.55},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.06},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.49},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.52}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":6.49},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,236,137,1)","value":3.98},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":3.49},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(101,255,212,1)","value":1.61},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(101,255,212,1)","value":1.28},{"name":"绍兴市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":1.7},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":4.99},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,236,137,1)","value":0.53},{"name":"台州市","color":"rgba(255,236,137,1)","border":"#FFEC89","ring":"宁波都市圈","value":2.22},{"name":"衢州市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":0.53},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.61}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":5.4},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":1.22},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.85},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.6},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":0.56},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.41},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.35},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.18},{"name":"黄山市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":0.37},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":0.96},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.75},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.36},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":1.2},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.54},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.33},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":0.52}]}]}


var data12={"name":"2020年长江三角洲各市高新技术企业数量占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":21.04}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":7.95},{"name":"无锡市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":4.91},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.42},{"name":"常州市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":3.16},{"name":"苏州市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":12.39},{"name":"南通市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":2.71},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.57},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":0.74},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.88},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":2.06},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.54},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.6},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.65}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":9.21},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,236,137,1)","value":3.74},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":2.82},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(101,255,212,1)","value":2.74},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(101,255,212,1)","value":1.4},{"name":"绍兴市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":2.16},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.65},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,236,137,1)","value":0.27},{"name":"台州市","color":"rgba(255,236,137,1)","border":"#FFEC89","ring":"宁波都市圈","value":1.36},{"name":"衢州市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":0.57},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.58}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":4.29},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":1.27},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.52},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.22},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":0.73},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.2},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.34},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.44},{"name":"黄山市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":0.2},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":0.74},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.45},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.25},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.34},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.21},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.19},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":0.48}]}]}


var data14={"name":"2020年长江三角洲各市新增高新技术企业数量占比","children":[{"name":"上海市","color":"#FF1818","children":[{"name":"上海市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":21.45}]},{"name":"江苏省","color":"#FFA928","children":[{"name":"南京市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":6.57},{"name":"无锡市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":5.15},{"name":"徐州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.11},{"name":"常州市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":3.33},{"name":"苏州市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":12.15},{"name":"南通市","color":"rgba(255,24,24,1)","border":"#FF4848","ring":"上海大都市圈","value":2.46},{"name":"连云港市","color":"rgba(63,87,126,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.43},{"name":"淮安市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":0.62},{"name":"盐城市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.57},{"name":"扬州市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.65},{"name":"镇江市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":1.25},{"name":"泰州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.31},{"name":"宿迁市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.54}]},{"name":"浙江省","color":"#65FFD4","children":[{"name":"杭州市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":10.36},{"name":"宁波市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,236,137,1)","value":4.86},{"name":"温州市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":2.84},{"name":"嘉兴市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(101,255,212,1)","value":3.02},{"name":"湖州市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(101,255,212,1)","value":1.44},{"name":"绍兴市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":2.34},{"name":"金华市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":1.84},{"name":"舟山市","border":"#FF4848","ring":"上海大都市圈","color":"rgba(255,236,137,1)","value":0.23},{"name":"台州市","color":"rgba(255,236,137,1)","border":"#FFEC89","ring":"宁波都市圈","value":1.39},{"name":"衢州市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":0.58},{"name":"丽水市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.61}]},{"name":"安徽省","color":"#8ED6FF","children":[{"name":"合肥市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":4.46},{"name":"芜湖市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":1.16},{"name":"蚌埠市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.55},{"name":"淮南市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.19},{"name":"马鞍山市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":0.72},{"name":"淮北市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.18},{"name":"铜陵市","color":"rgba(86,102,147,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.32},{"name":"安庆市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.43},{"name":"黄山市","color":"rgba(101,255,212,1)","border":"#48EFC0","ring":"杭州都市圈","value":0.2},{"name":"滁州市","color":"rgba(142,214,255,1)","border":"#FFB775","ring":"南京都市圈","value":0.83},{"name":"阜阳市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.43},{"name":"宿州市","color":"rgba(69,101,189,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.23},{"name":"六安市","color":"rgba(142,214,255,1)","border":"#61C6FF","ring":"合肥都市圈","value":0.33},{"name":"亳州市","color":"rgba(121,155,208,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.23},{"name":"池州市","color":"rgba(45,88,154,1)","border":"#2D589A","ring":"非都市圈城市","width":0,"value":0.18},{"name":"宣城市","color":"rgba(255,169,40,1)","border":"#FFB775","ring":"南京都市圈","value":0.48}]}]}

