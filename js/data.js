// num = 1 上海大都市圈：上海、苏州、无锡、常州、宁波、舟山、嘉兴、南通、湖州。
// num = 2 南京都市圈：南京、镇江、扬州、马鞍山、滁州、芜湖、淮安、宣城。
// num = 3 杭州都市圈：杭州、湖州、嘉兴、绍兴、黄山、衢州。
// num = 4 合肥都市圈：合肥、六安、蚌埠、滁州、淮南、马鞍山、芜湖。
// num = 5 宁波都市圈：宁波、舟山、台州。
// num = 6 非都市圈 
// num = 0 重叠都市圈 宁波、舟山、嘉兴、马鞍山、芜湖、滁州、湖州
var cityData = [{
    name: "上海大都市圈",
    color: "rgba(255,24,24,1)",
    border: "#FF4848",
},
{
    name: "南京都市圈",
    color: "rgba(255,169,40,1)",
    border: "#FFB775",
},
{
    name: "宁波都市圈",
    color: "rgba(255,236,137,1)",
    border: "#FFEC89",
},
{
    name: "杭州都市圈",
    color: "rgba(101,255,212,1)",
    border: "#48EFC0",
},
{
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
                "color": "rgba(255,24,24,1)",
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
                    "color": "rgba(255,24,24,1)",
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
                    "color": "rgba(255,24,24,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    value: 3.16
                },
                {
                    "name": "苏州市",
                    "color": "rgba(255,24,24,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    value: 8.17
                },
                {
                    "name": "南通市",
                    "color": "rgba(255,24,24,1)",
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
                    "color": "rgba(101,255,212,1)",
                    border: "#48EFC0",
                    ring: "杭州都市圈",
                    value: 6.52
                },
                {
                    "name": "宁波市",
                    // "color": "rgba(255,24,24,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    "color": "rgba(255,236,137,1)",
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
                    // "color": "rgba(255,24,24,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    "color": "rgba(101,255,212,1)",
                    value: 2.23
                },
                {
                    "name": "湖州市",
                    // "color": "rgba(255,24,24,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    "color": "rgba(101,255,212,1)",
                    value: 1.3
                },
                {
                    "name": "绍兴市",
                    "color": "rgba(101,255,212,1)",
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
                    // "color": "rgba(255,24,24,1)",
                    border: "#FF4848",
                    ring: "上海大都市圈",
                    "color": "rgba(255,236,137,1)",
                    value: 0.62
                },
                {
                    "name": "台州市",
                    "color": "rgba(255,236,137,1)",
                    border: "#FFEC89",
                    ring: "宁波都市圈",
                    value: 2.15
                },
                {
                    "name": "衢州市",
                    "color": "rgba(101,255,212,1)",
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
                    "color": "rgba(101,255,212,1)",
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
    "name": "2020年长江三角洲各 GDP占比",
    "children": [{
            "name": '上海 ',
            "color": "#FF1818",
            children: []
        },
        {
            "name": '江苏省',
            "color": "#FF6CCD",
            children: []
        },
        {
            "name": '浙江省',
            "color": "#FF8F28",
            children: []
        },
        {
            "name": '安徽省',
            "color": "#FFE86F",
            children: []
        },
    ]
}