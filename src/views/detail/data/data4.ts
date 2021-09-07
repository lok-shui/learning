export default {
  subject: {
    type: "填空题",
    difficulty: 4,
    view: [
      {
        type: "text",
        content:
          '如图，△ABC中，AF:FD=<span data-id="u1">1:2</span>，<span data-id="u2">BD=DC</span>，则EF:BF=____．'
      },
      {
        type: "graph",
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACLCAYAAABCzioLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTI3RkIwQjA3RkI5MTFFQUE5Nzk4ODU5MjExREM2NUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTI3RkIwQUY3RkI5MTFFQUE5Nzk4ODU5MjExREM2NUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNEY3ODE4RTdGQjgxMUVBQTk3OTg4NTkyMTFEQzY1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNEY3ODE4RjdGQjgxMUVBQTk3OTg4NTkyMTFEQzY1QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjOZ6kgAAAwsSURBVHja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",
        points: {
          A: [0.6412, 0.1007],
          B: [0.084, 0.9065],
          C: [0.9389, 0.9065],
          D: [0.5038, 0.9065],
          E: [0.7099, 0.2806],
          F: [0.5877, 0.3884]
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
              points: ["A", "B"],
              linetype: "straightline",
              color: "#477DFF"
            },
            {
              type: "drawLine",
              points: ["B", "C"],
              linetype: "straightline",
              color: "#477DFF"
            },
            {
              type: "drawLine",
              points: ["A", "C"],
              linetype: "straightline",
              color: "#477DFF"
            }
          ]
        },
        {
          graphAction: [
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
              color: "#477DFF"
            }
          ]
        },
        {
          audio: ["等于"]
        },
        {
          audio: ["一比二"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u1"]'
            }
          ]
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
        },
        {
          audio: ["BD等于"],
          graphAction: [
            {
              type: "drawLine",
              points: ["B", "D"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["DC"],
          graphAction: [
            {
              type: "drawLine",
              points: ["D", "C"],
              color: "#477DFF"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["B", "D"]
            },
            {
              type: "hideLine",
              points: ["D", "C"]
            }
          ]
        },
        {
          audio: ["则"]
        },
        {
          audio: ["EF比上"],
          graphAction: [
            {
              type: "drawLine",
              points: ["E", "F"],
              color: "#FF3D5F",
              tempPoint: [0.6259, 0.2877]
            }
          ]
        },
        {
          audio: ["BF"],
          graphAction: [
            {
              type: "drawLine",
              points: ["B", "F"],
              color: "#477DFF"
            }
          ]
        },
        {
          audio: ["的值是什么呢"]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["E", "F"]
            },
            {
              type: "hideLine",
              points: ["B", "F"]
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
            '<p>如图，过点D作<span data-id="u3">DH</span>∥<span data-id="u4">BE</span>交<span data-id="u5">AC</span>于H</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u3"]',
                  points: ["D", "H"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u4"]',
                  points: ["B", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u5"]',
                  points: ["A", "C"]
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
          audio: ["首先，如图，过点D作DH平行于BE交AC于H"],
          graphAction: [
            {
              type: "addPoint",
              points: {
                H: [0.8244, 0.5899]
              }
            },
            {
              type: "addLine",
              points: ["D", "H"]
            },
            {
              type: "drawLine",
              target: '[data-id="u3"]',
              points: ["D", "H"]
            },
            {
              type: "drawLine",
              target: '[data-id="u4"]',
              points: ["B", "E"]
            },
            {
              type: "drawLine",
              target: '[data-id="u5"]',
              points: ["A", "C"]
            }
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤1：得出DH与BE，CD与CB之间的关系",
      audio: ["然后，算出DH与BE，CD与CB之间的关系"],
      graphAction: [
        {
          type: "hideLine",
          points: ["D", "H"]
        },
        {
          type: "hideLine",
          points: ["B", "E"]
        },
        {
          type: "hideLine",
          points: ["A", "C"]
        },
        {
          type: "drawLine",
          points: ["D", "H"]
        },
        {
          type: "drawLine",
          points: ["B", "E"]
        },
        {
          type: "drawLine",
          points: ["C", "D"]
        },
        {
          type: "drawLine",
          points: ["C", "B"]
        }
      ],
      content: [
        {
          text:
            '<p>∵<span data-id="u6">EF</span>∥<span data-id="u7">DH</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u6"]',
                  points: ["E", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u7"]',
                  points: ["D", "H"],
                  tempPoint: [0.7414, 0.7913]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u8">EF</span>:<span data-id="u9">DH</span>=<span data-id="u10">AF</span>:<span data-id="u11">AD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u8"]',
                  points: ["E", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u9"]',
                  points: ["D", "H"],
                  tempPoint: [0.7414, 0.7913]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u10"]',
                  points: ["A", "F"],
                  tempPoint: [0.5572, 0.2877]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u11"]',
                  points: ["A", "D"],
                  tempPoint: [0.2939, 0.55]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∵<span data-id="u12">AF</span>:<span data-id="u13">FD</span>=1:2，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u12"]',
                  points: ["A", "F"],
                  tempPoint: [0.5572, 0.2877]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u13"]',
                  points: ["F", "D"],
                  tempPoint: [0.4198, 0.6906]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u14">EF</span>:<span data-id="u15">DH</span>=<span data-id="u16">AF</span>:<span data-id="u17">AD</span>=1:3，即<span data-id="u14">EF</span>=(1/3)<span data-id="u15">DH</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u14"]',
                  points: ["E", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u15"]',
                  points: ["D", "H"],
                  tempPoint: [0.7414, 0.7913]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u16"]',
                  points: ["A", "F"],
                  tempPoint: [0.5572, 0.2877]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u17"]',
                  points: ["A", "D"],
                  tempPoint: [0.2939, 0.55]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∵<span data-id="u18">DH</span>∥<span data-id="u19">BE</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u18"]',
                  points: ["D", "H"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u19"]',
                  points: ["B", "E"]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u20">DH</span>:<span data-id="u21">BE</span>=<span data-id="u22">CD</span>:<span data-id="u23">CB</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u20"]',
                  points: ["D", "H"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u21"]',
                  points: ["B", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u22"]',
                  points: ["C", "D"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u23"]',
                  points: ["C", "B"]
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
              points: ["D", "H"]
            },
            {
              type: "hideLine",
              points: ["B", "E"]
            },
            {
              type: "hideLine",
              points: ["C", "D"]
            },
            {
              type: "hideLine",
              points: ["C", "B"]
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
          audio: ["到这里，我们可以知道DH比上BE等于CD比上CB"],
          graphAction: [
            {
              type: "drawLine",
              points: ["D", "H"]
            },
            {
              type: "drawLine",
              points: ["B", "E"]
            },
            {
              type: "drawLine",
              points: ["C", "D"]
            },
            {
              type: "drawLine",
              points: ["C", "B"]
            }
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤2：得出EF与BF的关系",
      audio: ["步骤2：算出EF与BF的关系"],
      graphAction: [
        {
          type: "hideLine",
          points: ["D", "H"]
        },
        {
          type: "hideLine",
          points: ["B", "E"]
        },
        {
          type: "hideLine",
          points: ["C", "D"]
        },
        {
          type: "hideLine",
          points: ["C", "B"]
        },
        {
          type: "drawLine",
          points: ["E", "F"],
          tempPoint: [0.6259, 0.2877]
        },
        {
          type: "drawLine",
          points: ["B", "F"]
        }
      ],
      content: [
        {
          text:
            '<p>而<span data-id="u24">BD</span>=<span data-id="u25">CD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u24"]',
                  points: ["B", "D"],
                  tempPoint: [0.2748, 1]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u25"]',
                  points: ["C", "D"]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u26">DH</span>:<span data-id="u27">BE</span>=<span data-id="u28">CD</span>:<span data-id="u29">CB</span>=1:2，即<span data-id="u27">BE</span>=2<span data-id="u26">DH</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u26"]',
                  points: ["D", "H"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u27"]',
                  points: ["B", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u28"]',
                  points: ["C", "D"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u29"]',
                  points: ["C", "B"]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u30">BF</span>=<span data-id="u31">BE</span>-<span data-id="u32">EF</span>=<span data-id="u34">2DH</span>-(1/3)<span data-id="u34">DH</span>=(5/3)<span data-id="u34">DH</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u30"]',
                  points: ["B", "F"],
                  tempPoint: [0.5038, 0.75]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u31"]',
                  points: ["B", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u32"]',
                  points: ["E", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u34"]',
                  points: ["D", "H"],
                  tempPoint: [0.74, 0.88]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u35">EF</span>:<span data-id="u36">BF</span>=(1/3)<span data-id="u37">DH</span>:(5/3)<span data-id="u37">DH</span>=1:5，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u35"]',
                  points: ["E", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u36"]',
                  points: ["B", "F"],
                  tempPoint: [0.5038, 0.75]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u37"]',
                  points: ["D", "H"],
                  tempPoint: [0.74, 0.88]
                }
              ]
            }
          ]
        },
        {
          text: "<p>故答案为1:5.</p>"
        }
      ],
      skip: true,
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["E", "F"]
            },
            {
              type: "hideLine",
              points: ["B", "F"]
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
          audio: ["所以，答案为一比五"]
        }
      ]
    }
  ]
};
