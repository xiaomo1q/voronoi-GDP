var mapChart;
$(function () {
    mapChart = {
        amap: function (amapData, dataLine) {
            //begin: constants
            var _2PI = 2 * Math.PI;
            //end: constants

            //begin: layout conf.
            var svgWidth = 700,
                svgHeight = 420,
                margin = {
                    top: 10,
                    right: 0,
                    bottom: 10,
                    left: 10
                },
                height = svgHeight - margin.top - margin.bottom,
                width = svgWidth - margin.left - margin.right,
                halfWidth = width / 1.4,
                halfHeight = height / 2,
                titleY = 20,
                legendsMinY = height - 0,
                treemapRadius = 180,
                treemapCenter = [halfWidth, halfHeight + 5];
            //end: layout conf.

            //begin: treemap conf.
            var _voronoiTreemap = d3.voronoiTreemap();
            var hierarchy, circlingPolygon;
            //end: treemap conf.

            //begin: drawing conf.
            var fontScale = d3.scaleLinear();
            //end: drawing conf.

            //begin: reusable d3Selection
            var svg, drawingArea, treemapContainer;
            //end: reusable d3Selection


            var leaves;
            var menus = [];

            function initLayout(rootData) {
                svg = d3.select("svg")
                    .attr("width", svgWidth)
                    .attr("height", svgHeight);

                drawingArea = svg.append("g")
                    .classed("drawingArea", true)
                    .attr("transform", "translate(" + [margin.left, margin.top] + ")");

                treemapContainer = drawingArea.append("g")
                    .classed("treemap-container", true)
                    .attr("transform", "translate(" + treemapCenter + ")");

                treemapContainer.append("path")
                    .classed("world", true)
                    .attr("transform", "translate(" + [-treemapRadius, -treemapRadius] + ")")
                    .attr("d", "M" + circlingPolygon.join(",") + "Z");

            }

            function jwxTest() {
                rootData = amapData;
                initData();
                initLayout(rootData);
                hierarchy = d3.hierarchy(rootData).sum(function (d) {
                    if (d.value !== undefined) {
                        return d.value;
                    }
                });
                _voronoiTreemap
                    .clip(circlingPolygon)
                    (hierarchy);
                drawTreemap(hierarchy);
            }
            window.onload = function () {
                jwxTest();
            }

            function initData(rootData) {
                circlingPolygon = computeCirclingPolygon(treemapRadius);
                // 此处调节字体缩放比例
                fontScale.domain([3, 20]).range([7, 25]).clamp(true);
            }

            function computeCirclingPolygon(radius) {
                var points = 60,
                    increment = _2PI / points,
                    circlingPolygon = [];

                for (var a = 0, i = 0; i < points; i++, a += increment) {
                    circlingPolygon.push(
                        [radius + radius * Math.cos(a), radius + radius * Math.sin(a)]
                    )
                }

                return circlingPolygon;
            };
            // 中间足球
            function drawTreemap(hierarchy) {
                leaves = JSON.retrocycle(dataLine) //json转换为数组
                var cells = treemapContainer.append("g")
                    .classed('cells', true)
                    .attr("transform", "translate(" + [-treemapRadius, -treemapRadius] + ")")
                    .selectAll(".cell")
                    .data(leaves)
                    .enter()
                    .append("path")
                    .classed("cell", true)
                    .attr("d", function (d) {
                        return "M" + d.polygon.join(",") + "z";
                    })
                    .style("fill", function (d) {
                        return d.data.color;
                    })
                    .style("stroke", function (d) {
                        return d.data.border
                    })
                    .style("stroke-width", function (d) {
                        return d.data.width
                    })
                    .text(function (d) {
                        return d.data.name
                    })

                // labels.append("text")
                //     .classed("value", true)
                //     .text(function (d) {
                //         return d.data.value + "%";
                //     });

                var hoverers = treemapContainer.append("g")
                    .classed('hoverers', true)
                    .attr("transform", "translate(" + [-treemapRadius, -treemapRadius] + ")")
                    .selectAll(".hoverer")
                    .data(leaves)
                    .enter()
                    .append("path")
                    .classed("hoverer", true)
                    .attr("d", function (d) {
                        return "M" + d.polygon.join(",") + "z";
                    })


                // 鼠标交互
                cells.on('mouseover', function (d, i) {
                    d3.selectAll('.legend-color').attr("width", 120).style("stroke", "transparent").style("stroke-width", "0px")
                    let that = this
                    d3.select(that).style("fill", i.data.color).style("fill-opacity", 1)
                        .style("stroke", "#fff").style("stroke-width", '3px')

                    $('.title-con').show()
                    $('.title-con .cir').text(i.data.ring)
                    $('.title-con h5 span').text(i.parent.data.name)
                    $('.title-con h5 p').text(i.data.name)
                    $('.title-con h4 span').text(i.data.value)
                    $('.title-con .cir').css({
                        "color": i.data.border
                    })
                    $('.title-con').css({
                        "left": i.x + 30,
                        "top": i.y + 30
                    })
                })

                hoverers.on('mousemove', function (d, i) {
                    d3.selectAll('.legend-color').attr("width", 120).style("stroke", "transparent").style("stroke-width", "0px")
                    let that = this
                    d3.select(that).style("fill", i.data.color).style("fill-opacity", 1)
                        .style("stroke", "#fff").style("stroke-width", '3px')
                    $('.title-con').show()
                    $('.title-con .cir').text(i.data.ring)
                    $('.title-con h5 span').text(i.parent.data.name)
                    $('.title-con h5 p').text(i.data.name)
                    $('.title-con h4 span').text(i.data.value)
                    $('.title-con .cir').css({
                        "color": i.data.border
                    })
                    $('.title-con').css({
                        "left": i.x + 30,
                        "top": i.y + 30
                    })
                })
                hoverers.on('mouseout', function (d, i) {
                    hoverers.data(leaves)
                        .attr("d", function (d) {
                            return "M" + d.polygon.join(",") + "z";
                        }).style("fill-opacity", 0)
                        .style("stroke", function (d) {
                            return d.data.color;
                        }).style("stroke-width", function (d) {
                            return d.data.width;
                        })
                    $('.title-con').hide()
                })

                drawLegends(leaves, hoverers);

                addressMap(leaves, hoverers)
            }
            // 左边图例
            function drawLegends(list, hover) {
                var legendHeight = 30,
                    interLegend = 4,
                    colorWidth = legendHeight * 4,
                    continents = cityData.reverse();

                var legendContainer = drawingArea.append("g")
                    .classed("legend", true)
                    .attr("transform", "translate(" + [-0, legendsMinY - 80] + ")")

                var legends = legendContainer.selectAll(".legend")
                    .data(continents)
                    .enter();

                var legend = legends.append("g")
                    .classed("legend", true)
                    .attr("transform", function (d, i) {
                        return "translate(" + [0, -i * (legendHeight + interLegend)] + ")";
                    })

                legend.append("rect")
                    .classed("legend-color", true)
                    .attr("y", -legendHeight)
                    .attr("width", colorWidth)
                    .attr("height", legendHeight)
                    .style("fill", function (d) {
                        return d.color;
                    });

                legend.append("text")
                    .classed("tiny", true)
                    .attr("transform", "translate(" + [colorWidth - 90, -10] + ")")
                    .text(function (d) {
                        return d.name;
                    })

                legend.append("circle")
                    .classed("circle", true)
                    .attr("r", 7)
                    .attr("transform", "translate(" + [colorWidth - 105, -15] + ")")
                    .style("stroke", function (d) {
                        return d.color;
                    });

                legend.on('click', function (d, i) {
                    let ringData = []
                    let that = this
                    hover.data(leaves)
                        .attr("d", function (d) {
                            return "M" + d.polygon.join(",") + "z";
                        }).style("fill-opacity", 0)
                        .style("stroke", function (d) {
                            return d.data.color;
                        }).style("stroke-width", function (d) {
                            return d.data.width;
                        })
                    for (let k = 0; k < list.length; k++) {
                        if(i.name == "宁波都市圈" || i.name == "杭州都市圈" || i.name == "合肥都市圈"){
                            if (i.color == list[k].data.color) {
                                console.log(list[k].data.name)
                                ringData.push(list[k])
                            }
                        }else{
                            if (i.border == list[k].data.border) {
                                console.log(list[k].data.name)
                                ringData.push(list[k])
                            }
                        }

                    }
                    d3.selectAll('.legend-color').attr("width", colorWidth).style("stroke", "transparent").style("stroke-width", "0px")

                    d3.select(that).select('.legend-color').attr("width", colorWidth + 20).style("stroke", i.color).style("stroke-width", "2px");

                    console.log(ringData);
                    hover.data(ringData)
                        .attr("d", function (b) {
                            return "M" + b.polygon.join(",") + "z"
                        })
                        .style("fill", function (b) {
                            return b.data.color
                        })
                        .style("fill-opacity", 1)
                        .style("stroke", i.color)
                        .style("stroke-width", 3 + "px")
                })

                var labels = treemapContainer.append("g")
                    .classed('labels', true)
                    .attr("transform", "translate(" + [-treemapRadius, -treemapRadius] + ")")
                    .selectAll(".label")
                    .data(leaves)
                    .enter()
                    .append("g")
                    .classed("label", true)
                    .attr("transform", function (d) {
                        return "translate(" + [d.x, d.y] + ")";
                    })
                    .style("font-size", function (d) {
                        return fontScale(d.data.value);
                    });

                labels.append("text")
                    .classed("name", true)
                    .html(function (d) {
                        return (d.data.value < 4) ? d.data.code : d.data.name;
                        return d.data.name;
                    });
            }
            // 右边地图
            function addressMap(list, hover) {
                var imageDom = document.createElement('img'); // 使用 DOM HTMLImageElement
                // imageDom.src = 'http://39.106.255.75/siteimg/e195b1cbd888b6b983397c013047e3c.png';
                imageDom.src = './img/s.png';
                var myChart = echarts.init(document.getElementById('triangle'));
                echarts.registerMap('长三角', mapAdress);
                var series = [{
                        type: 'map',
                        map: '长三角',
                        aspectScale: 0.75,
                        zoom: 0.8,
                        top: "-4%",
                        right: '0%',
                        roam: false,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: "#1E78FF",
                                    shadowBlur: 10,
                                    shadowColor: '#36B7FF',
                                    opacity: 0.75
                                }
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    color: "#fff",
                                    shadowBlur: 10,
                                    shadowColor: '#36B7FF',
                                    opacity: 0.75
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: {
                                    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                                    repeat: 'repeat-y', // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
                                },
                                // areaColor: "#061E3D",
                                borderColor: {
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#576B7B' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#2C414F' // 100% 处的颜色
                                    }],
                                },
                                borderWidth: 1,
                                borderRadius: 30,
                            },
                            emphasis: {
                                // areaColor: {
                                //     image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                                //     repeat: 'repeat-y', // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
                                // },4ab2e5
                                areaColor: "rgba(37,127,229)",
                                borderColor: 'rgba(37,127,229)',
                            }
                        },
                    },

                ];

                option = {
                    geo: [{
                        map: '长三角',
                        show: true,
                        roam: false,
                        zlevel: -1,
                        label: {
                            emphasis: {
                                show: true
                            }
                        },
                        zoom: 0.8,
                        top: "0%",
                        right: '1.4%',
                        layoutSize: "100%",
                        itemStyle: {
                            normal: {
                                areaColor: "transparent",
                                // opacity:0.4,
                                // shadowColor: '#4ab2e5', //外发光
                                borderColor: '#4771db',
                                borderWidth: 1,
                                shadowBlur: 20,
                                shadowColor: 'rgba(9,32,67,1)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                // borderColor: '#0177ff'
                            },
                            emphasis: {
                                areaColor: 'transparent', //悬浮区背景
                            }
                        }
                    }],
                    series: series
                }
                myChart.setOption(option);

                myChart.on('click', function (e) {
                    console.log(e)
                    // 取消高亮指定的数据图形
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                     // 取消高亮指定的数据图形
                     myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 1
                    });
                     // 取消高亮指定的数据图形
                     myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 2
                    });
                      // 取消高亮指定的数据图形
                      myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 3
                    });
                    // 高亮指定的数据图形
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: e.dataIndex
                    });

                    let cityData = []
                    hover.data(list)
                        .attr("d", function (d) {
                            return "M" + d.polygon.join(",") + "z";
                        }).style("fill-opacity", 0)
                        .style("stroke", function (d) {
                            return d.data.color;
                        }).style("stroke-width", function (d) {
                            return d.data.width;
                        })
                    for (let k = 0; k < list.length; k++) {
                        if (e.name == list[k].parent.data.name) {
                            cityData.push(list[k])
                        }
                    }
                    hover.data(cityData)
                        .attr("d", function (b) {
                            return "M" + b.polygon.join(",") + "z"
                        })
                        .style("fill", function (b) {
                            console.log(b)
                            return b.parent.data.color
                        })
                        .style("fill-opacity", 1)
                        .style("stroke", "#fff")
                        .style("stroke-width", 3 + "px")


                })

            }
        }
    }
})