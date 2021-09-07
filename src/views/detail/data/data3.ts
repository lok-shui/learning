export default {
  subject: {
    type: "填空题",
    difficulty: 4,
    view: [
      {
        type: "text",
        content:
          '如图，在△ABC中，AD是BC边上的<span data-id="u1">中线</span>，F是AD边上一点．射线CF交AB于点E，且AE:EB=<span data-id="u2">1:6</span>，则AF:FD等于____'
      },
      {
        type: "graph",
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACGCAYAAAAW/E67AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjRGNzgxOTc3RkI4MTFFQUE5Nzk4ODU5MjExREM2NUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjRGNzgxOTY3RkI4MTFFQUE5Nzk4ODU5MjExREM2NUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RjY3MzI4NzdGQjMxMUVBQTk3OTg4NTkyMTFEQzY1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RjY3MzI4ODdGQjMxMUVBQTk3OTg4NTkyMTFEQzY1QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjTqZVgAAArhSURBVHja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",
        points: {
          A: [0.6917, 0.0896],
          B: [0.0833, 0.9104],
          C: [0.95, 0.9254],
          D: [0.5167, 0.9179],
          E: [0.5583, 0.2687],
          F: [0.625, 0.3806]
        }
      }
    ]
  },
  steps: [
    {
      type: "审题",
      substeps: [
        {
          audio: ["我们先观察题目", "我们来看一下题目吧", "让我们看一下这道题"]
        },
        {
          audio: ["如图，在三角形"]
        },
        {
          audio: ["ABC中"],
          graphAction: [
            {
              type: "drawLine",
              linetype: "straightline",
              points: ["A", "B"],
              color: "#477DFF",
              tempPoint: [0.3875, 0.5]
            },
            {
              type: "drawLine",
              points: ["B", "C"],
              linetype: "straightline",
              color: "#477DFF",
              tempPoint: [0.51665, 0.9179]
            },
            {
              type: "drawLine",
              target: '[data-id="u5"]',
              points: ["C", "A"],
              linetype: "straightline",
              color: "#477DFF",
              tempPoint: [0.82085, 0.5075]
            }
          ]
        },
        {
          audio: ["AD是"],
          graphAction: [
            {
              type: "hideLine",
              linetype: "straightline",
              points: ["A", "B"],
              color: "#FF3D5F",
              tempPoint: [0.3875, 0.5]
            },
            {
              type: "hideLine",
              points: ["B", "C"],
              linetype: "straightline",
              color: "#FF3D5F",
              tempPoint: [0.51665, 0.9179]
            },
            {
              type: "hideLine",
              target: '[data-id="u5"]',
              points: ["C", "A"],
              linetype: "straightline",
              color: "#FF3D5F",
              tempPoint: [0.82085, 0.5075]
            },
            {
              type: "drawLine",
              points: ["A", "D"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["BC边上的中线"],
          graphAction: [
            {
              type: "drawLine",
              points: ["B", "C"],
              tempPoint: [0.5167, 1.05],
              color: "#477DFF"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "D"]
            },
            {
              type: "hideLine",
              points: ["B", "C"]
            },
            {
              type: "hideLine",
              points: ["A", "B"]
            }
          ]
        },
        {
          audio: ["F是"]
        },
        {
          audio: ["AD边上一点"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "D"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "D"]
            }
          ]
        },
        {
          audio: ["射线"]
        },
        {
          audio: ["CF交"],
          graphAction: [
            {
              type: "drawLine",
              points: ["C", "F"],
              linetype: "straightline",
              tempPoint: [0.7875, 0.653],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["AB于点E"],
          graphAction: [
            {
              type: "drawLine",
              linetype: "straightline",
              points: ["A", "B"],
              color: "#00C2FF",
              tempPoint: [0.3875, 0.5]
            }
          ]
        },
        {
          audio: ["AE比上"],
          graphAction: [
            {
              type: "hideLine",
              points: ["C", "F"]
            },
            {
              type: "hideLine",
              points: ["A", "B"]
            },
            {
              type: "drawLine",
              points: ["A", "E"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["EB"],
          graphAction: [
            {
              type: "drawLine",
              points: ["E", "B"],
              color: "#00C2FF"
            }
          ]
        },
        {
          audio: ["等于"]
        },
        {
          audio: ["一比六"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u2"]'
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "E"]
            },
            {
              type: "hideLine",
              points: ["E", "B"]
            }
          ]
        },
        {
          audio: ["则"]
        },
        {
          audio: ["AF比上"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "F"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["FD"],
          graphAction: [
            {
              type: "drawLine",
              points: ["F", "D"],
              color: "#00C2FF"
            }
          ]
        },
        {
          audio: ["的值是多少呢"]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "F"]
            },
            {
              type: "hideLine",
              points: ["F", "D"]
            }
          ]
        }
      ]
    },
    {
      type: "知识点",
      content: [
        {
          text: "平行线分线段成比例"
        }
      ],
      link: "https://www.dm-ai.cn",
      substeps: [
        {
          audio: ["这道题主要考察平行线分线段成比例这个知识点"]
        },
        {
          audio: [
            "我们想一想，这类题一般怎么做呢？",
            "只看题目的话，不容易找到切入点"
          ]
        }
      ]
    },
    {
      type: "步骤-技巧",
      questionNo: 1,
      text: "作辅助线",
      audio: [
        "平行线分线段成比例这类题目，我们一般要作辅助线，要利用已知的比例关系，则需要在比例的中间点位置做辅助线"
      ],
      content: [
        {
          text:
            '<p>如图，过点D作<span data-id="u3">DG</span>∥<span data-id="u4">EC</span>交<span data-id="u5">AB</span>于G</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u3"]',
                  points: ["D", "G"],
                  tempPoint: [0.471, 0.6167]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u4"]',
                  points: ["E", "C"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u5"]',
                  points: ["A", "B"],
                  tempPoint: [0.0661, 0.2105]
                }
              ]
            }
          ]
        }
      ],
      substeps: [
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        },
        {
          audio: ["首先，如图，"]
        },
        {
          audio: ["过点D作DG平行于EC"],
          graphAction: [
            {
              type: "addPoint",
              points: {
                G: [0.325, 0.5597]
              }
            },
            {
              type: "addLine",
              points: ["D", "G"]
            },
            {
              type: "drawLine",
              target: '[data-id="u3"]',
              points: ["D", "G"],
              tempPoint: [0.471, 0.6167]
            },
            {
              type: "drawLine",
              target: '[data-id="u4"]',
              points: ["E", "C"]
            }
          ]
        },
        {
          audio: ["交AB于G"],
          graphAction: [
            {
              type: "drawLine",
              target: '[data-id="u5"]',
              points: ["A", "B"],
              tempPoint: [0.0661, 0.2105],
              color: "#10CB27"
            }
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤1：得出BD与CD，BG与GE的关系",
      audio: ["然后，我们试着去计算一下BD与CD，BG与GE的关系吧"],
      graphAction: [
        {
          type: "hideLine",
          points: ["D", "G"]
        },
        {
          type: "hideLine",
          points: ["E", "C"]
        },
        {
          type: "hideLine",
          points: ["A", "B"]
        },
        {
          type: "drawLine",
          points: ["B", "D"],
          tempPoint: [0.3, 1.1]
        },
        {
          type: "drawLine",
          points: ["C", "D"],
          tempPoint: [0.7334, 1.1]
        },
        {
          type: "drawLine",
          points: ["B", "G"]
        },
        {
          type: "drawLine",
          points: ["G", "E"]
        }
      ],
      content: [
        {
          text:
            '<p>∵<span data-id="u6">AD</span>是<span data-id="u7">BC</span>边上的中线，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "hideLine",
                  points: ["B", "D"],
                  tempPoint: [0.3, 1.1]
                },
                {
                  type: "hideLine",
                  points: ["C", "D"],
                  tempPoint: [0.7334, 1.1]
                },
                {
                  type: "hideLine",
                  points: ["B", "G"]
                },
                {
                  type: "hideLine",
                  points: ["G", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u6"]',
                  points: ["A", "D"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u7"]',
                  points: ["B", "C"],
                  tempPoint: [0.5167, 1.1]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u8">GD</span>是<span data-id="i8">△BEC</span>的中位线，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "hideLine",
                  points: ["B", "D"]
                },
                {
                  type: "hideLine",
                  points: ["C", "D"]
                },
                {
                  type: "hideLine",
                  points: ["B", "G"]
                },
                {
                  type: "hideLine",
                  points: ["G", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u8"]',
                  points: ["G", "D"],
                  tempPoint: [0.471, 0.6167],
                  color: "#FF3D5F"
                },
                {
                  target: '[data-id="i8"]',
                  type: "drawLine",
                  color: "#477DFF",
                  points: ["B", "E"],
                  tempPoint: [0.3208, 0.58955]
                },
                {
                  target: '[data-id="i8"]',
                  type: "drawLine",
                  color: "#477DFF",
                  points: ["E", "C"],
                  tempPoint: [0.75415, 0.59705]
                },
                {
                  target: '[data-id="i8"]',
                  type: "drawLine",
                  color: "#477DFF",
                  points: ["C", "B"],
                  tempPoint: [0.51665, 0.9179]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u9">BD</span>=<span data-id="u10">CD</span>，<span data-id="u11">BG</span>=<span data-id="u12">GE</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u9"]',
                  points: ["B", "D"],
                  tempPoint: [0.3, 1.1]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u10"]',
                  points: ["C", "D"],
                  tempPoint: [0.7334, 1.1]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u11"]',
                  points: ["B", "G"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u12"]',
                  points: ["G", "E"]
                }
              ]
            }
          ]
        }
      ],
      skip: true,
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["B", "D"]
            },
            {
              type: "hideLine",
              points: ["C", "D"]
            },
            {
              type: "hideLine",
              points: ["B", "G"]
            },
            {
              type: "hideLine",
              points: ["G", "E"]
            }
          ]
        },
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        },
        {
          audio: ["到这里，我们可以知道"]
        },
        {
          audio: ["BD等于CD"],
          graphAction: [
            {
              type: "drawLine",
              points: ["B", "D"],
              tempPoint: [0.3, 1.1]
            },
            {
              type: "drawLine",
              points: ["C", "D"],
              tempPoint: [0.7334, 1.1]
            }
          ]
        },
        {
          audio: ["BG等于GE"],
          graphAction: [
            {
              type: "drawLine",
              points: ["B", "G"],
              color: "#10CB27"
            },
            {
              type: "drawLine",
              points: ["G", "E"],
              color: "#6B2FF1"
            }
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤2：得出AE与EG的关系",
      audio: ["下一步，得出AE与EG的关系"],
      graphAction: [
        {
          type: "hideLine",
          points: ["B", "D"]
        },
        {
          type: "hideLine",
          points: ["C", "D"]
        },
        {
          type: "hideLine",
          points: ["B", "G"]
        },
        {
          type: "hideLine",
          points: ["G", "E"]
        },
        {
          type: "drawLine",
          points: ["A", "E"],
          tempPoint: [0.5124, 0.1053]
        },
        {
          type: "drawLine",
          points: ["E", "G"],
          tempPoint: [0.2893, 0.2857]
        }
      ],
      content: [
        {
          text:
            '<p>∵<span data-id="u13">AE</span>:<span data-id="u14">EB</span>=1:6，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u13"]',
                  points: ["A", "E"],
                  tempPoint: [0.5124, 0.1053]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u14"]',
                  points: ["E", "B"],
                  tempPoint: [0.0661, 0.2105]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u15">AE</span>:<span data-id="u16">EG</span>=1:3</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u15"]',
                  points: ["A", "E"],
                  tempPoint: [0.5124, 0.1053]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u16"]',
                  points: ["E", "G"],
                  tempPoint: [0.2893, 0.2857]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∵<span data-id="u17">DG</span>∥<span data-id="u18">EC</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u17"]',
                  points: ["D", "G"],
                  tempPoint: [0.471, 0.6167]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u18"]',
                  points: ["E", "C"]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u19">AE</span>:<span data-id="u20">EG</span>=<span data-id="u21">AF</span>:<span data-id="u22">FD</span>=1:3</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u19"]',
                  points: ["A", "E"],
                  tempPoint: [0.5124, 0.1053]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u20"]',
                  points: ["E", "G"],
                  tempPoint: [0.2893, 0.2857]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u21"]',
                  points: ["A", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u22"]',
                  points: ["F", "D"]
                }
              ]
            }
          ]
        },
        {
          text: "<p>故答案为：1:3</p>"
        }
      ],
      skip: true,
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "E"]
            },
            {
              type: "hideLine",
              points: ["E", "G"]
            }
          ]
        },
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        },
        {
          audio: ["所以，答案为一比三"]
        }
      ]
    }
  ]
};
