export default {
  subject: {
    type: "单选题",
    difficulty: 4,
    view: [
      {
        type: "text",
        content:
          '如图，AD是△ABC的<span data-id="u1">中线</span>，点E在AD上，AD=<span data-id="u2">4</span>DE ，连接BE并延长交AC于点F，则AF:FC的值是(   )'
      },
      {
        type: "graph",
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAADICAYAAADMQIzcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTI3RkIwQjg3RkI5MTFFQUE5Nzk4ODU5MjExREM2NUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTI3RkIwQjc3RkI5MTFFQUE5Nzk4ODU5MjExREM2NUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RjY3MzI4MzdGQjMxMUVBQTk3OTg4NTkyMTFEQzY1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RjY3MzI4NDdGQjMxMUVBQTk3OTg4NTkyMTFEQzY1QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnHKx+YAABkBSURBVHja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",
        points: {
          A: [0.6825, 0.12],
          B: [0.0357, 0.875],
          C: [0.9444, 0.875],
          D: [0.4841, 0.875],
          E: [0.5437, 0.66],
          F: [0.8294, 0.545]
        }
      },
      {
        type: "options",
        options: {
          A: "3:2",
          B: "4:3",
          C: "2:1",
          D: "2:3"
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
          audio: ["AD是三角形"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "D"]
            }
          ]
        },
        {
          audio: ["ABC的中线"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "B"],
              target: '[data-id="u26"]',
              color: "#477DFF",
              linetype: "straightline",
              tempPoint: [0.3591, 0.4975]
            },
            {
              type: "drawLine",
              points: ["B", "C"],
              target: '[data-id="u26"]',
              color: "#477DFF",
              linetype: "straightline",
              tempPoint: [0.4841, 0.875]
            },
            {
              type: "drawLine",
              points: ["A", "C"],
              target: '[data-id="u26"]',
              color: "#477DFF",
              linetype: "straightline",
              tempPoint: [0.8294, 0.545]
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
              points: ["A", "B"]
            },
            {
              type: "hideLine",
              points: ["B", "C"]
            },
            {
              type: "hideLine",
              points: ["A", "C"]
            }
          ]
        },
        {
          audio: ["点E在"]
        },
        {
          audio: ["AD上"],
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
          audio: ["AD"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "D"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["比上"]
        },
        {
          audio: ["DE"],
          graphAction: [
            {
              type: "drawLine",
              points: ["D", "E"],
              color: "#00C2FF"
            }
          ]
        },
        {
          audio: ["等于"]
        },
        {
          audio: ["一比四"],
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
              points: ["A", "D"]
            },
            {
              type: "hideLine",
              points: ["D", "E"]
            }
          ]
        },
        {
          audio: ["连接"]
        },
        {
          audio: ["BE并延长交"],
          graphAction: [
            {
              type: "drawLine",
              points: ["B", "F"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["AC于点F"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "C"],
              color: "#00C2FF"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["B", "F"]
            },
            {
              type: "hideLine",
              points: ["A", "C"]
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
          audio: ["FC"],
          graphAction: [
            {
              type: "drawLine",
              points: ["F", "C"],
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
              points: ["F", "C"]
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
            '<p>如图，过点D作<span data-id="u3">DG</span>∥<span data-id="u4">AC</span>交<span data-id="u5">BF</span>于G</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u3"]',
                  points: ["D", "G"],
                  tempPoint: [0.55, 0.75]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u4"]',
                  points: ["A", "C"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u5"]',
                  points: ["B", "F"]
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
          audio: ["首先，如图，过点D作DG平行于AC，交BF于G"],
          graphAction: [
            {
              type: "addPoint",
              points: {
                G: [0.4325, 0.705]
              }
            },
            {
              type: "addLine",
              points: ["G", "D"]
            },
            {
              type: "drawLine",
              target: '[data-id="u3"]',
              points: ["G", "D"],
              tempPoint: [0.55, 0.75]
            },
            {
              type: "drawLine",
              target: '[data-id="u4"]',
              points: ["A", "C"]
            },
            {
              type: "drawLine",
              target: '[data-id="u5"]',
              points: ["B", "F"]
            }
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤1：得出AE与DE的关系",
      audio: ["然后，算出AE与DE的关系"],
      graphAction: [
        {
          type: "hideLine",
          points: ["G", "D"]
        },
        {
          type: "hideLine",
          points: ["A", "C"]
        },
        {
          type: "hideLine",
          points: ["B", "F"]
        },
        {
          type: "drawLine",
          target: '[data-id="u6"]',
          points: ["A", "E"]
        },
        {
          type: "drawLine",
          target: '[data-id="u7"]',
          points: ["D", "E"],
          tempPoint: [0.62, 0.8]
        }
      ],
      content: [
        {
          text:
            '<p>∵<span data-id="u6">AD</span>=4<span data-id="u7">DE</span>,</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "hideLine",
                  points: ["A", "E"]
                },
                {
                  type: "hideLine",
                  points: ["D", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u6"]',
                  points: ["A", "D"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u7"]',
                  points: ["D", "E"],
                  tempPoint: [0.4, 0.75]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u8">AE</span>=<span data-id="r1">？</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "hideLine",
                  points: ["A", "E"]
                },
                {
                  type: "hideLine",
                  points: ["D", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u8"]',
                  points: ["A", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u9"]',
                  points: ["D", "E"],
                  tempPoint: [0.65, 0.78]
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
              target: '[data-id="u6"]',
              points: ["A", "E"]
            },
            {
              type: "hideLine",
              target: '[data-id="u7"]',
              points: ["D", "E"]
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
          audio: ["那么AE与DE的关系是怎么样的呢"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "E"]
            },
            {
              type: "drawLine",
              points: ["D", "E"],
              tempPoint: [0.65, 0.78]
            }
          ]
        },
        {
          showOptions: {
            options: ["3DE", "2DE"],
            correctAudio: ["干得不错", "恭喜，你答对了", "你真棒"],
            wrongAudio: ["正确答案是三倍DE，再仔细看一看这一步吧"]
          }
        },
        {
          replaceContent: {
            target: '[data-id="r1"]',
            content: '3<span data-id="u9">DE</span>,'
          }
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "E"]
            },
            {
              type: "hideLine",
              points: ["D", "E"]
            }
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤2：得出AF、FC的关系",
      audio: ["下一步，得出AF、FC的关系"],
      graphAction: [
        {
          type: "drawLine",
          points: ["A", "F"]
        },
        {
          type: "drawLine",
          points: ["F", "C"]
        }
      ],
      content: [
        {
          text:
            '<p>∵<span data-id="u10">AD</span>是<span data-id="u26">△ABC</span>的中线,</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u10"]',
                  points: ["A", "D"]
                },
                {
                  type: "drawLine",
                  points: ["A", "B"],
                  target: '[data-id="u26"]',
                  color: "#477DFF",
                  linetype: "straightline",
                  tempPoint: [0.3591, 0.4975]
                },
                {
                  type: "drawLine",
                  points: ["B", "C"],
                  target: '[data-id="u26"]',
                  color: "#477DFF",
                  linetype: "straightline",
                  tempPoint: [0.4841, 0.875]
                },
                {
                  type: "drawLine",
                  points: ["A", "C"],
                  target: '[data-id="u26"]',
                  color: "#477DFF",
                  linetype: "straightline",
                  tempPoint: [0.8294, 0.545]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u11">BD</span>:<span data-id="u12">BC</span>=1:2,</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u11"]',
                  points: ["B", "D"],
                  tempPoint: [0.26, 1.118]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u12"]',
                  points: ["B", "C"],
                  tempPoint: [0.4841, 1.118]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u13">AF</span>:<span data-id="u14">DG</span>=<span data-id="u15">AE</span>:<span data-id="u16">DE</span>=3:1，即<span data-id="u13">AF</span>=3<span data-id="u14">DG</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u13"]',
                  points: ["A", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u14"]',
                  points: ["D", "G"],
                  tempPoint: [0.56, 0.75]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u15"]',
                  points: ["A", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u16"]',
                  points: ["D", "E"],
                  tempPoint: [0.65, 0.78]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u19">DG</span>:<span data-id="u20">FC</span>=<span data-id="u21">BD</span>:<span data-id="u22">BC</span>=1:2，即<span data-id="u20">FC</span>=2<span data-id="u19">DG</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u19"]',
                  points: ["D", "G"],
                  tempPoint: [0.56, 0.75]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u20"]',
                  points: ["F", "C"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u21"]',
                  points: ["B", "D"],
                  tempPoint: [0.26, 1.118]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u22"]',
                  points: ["B", "C"],
                  tempPoint: [0.4841, 1.118]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u23">AF</span>:<span data-id="u24">FC</span>=3<span data-id="u25">DG</span>:2<span data-id="u25">DG</span>=3:2</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u23"]',
                  points: ["A", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u24"]',
                  points: ["F", "C"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u25"]',
                  points: ["D", "G"],
                  tempPoint: [0.56, 0.75]
                }
              ]
            }
          ]
        },
        {
          text: "<p>故答案为：A</p>"
        }
      ],
      skip: true,
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "F"]
            },
            {
              type: "hideLine",
              points: ["F", "C"]
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
          audio: ["所以，答案为A"]
        }
      ]
    }
  ]
};
