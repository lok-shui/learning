export default {
  subject: {
    type: "解答题",
    difficulty: 3,
    view: [
      {
        type: "text",
        content:
          "如图，正方形ABCD的对角线AC与BD交于点O，过点C作CE//BD，过点D作DE//AC，CE与DE交于点E．求证：四边形OCED是正方形．"
      },
      {
        type: "graph",
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABtCAYAAAAmuWpHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkJCOTgzRkM3RkJDMTFFQUE5Nzk4ODU5MjExREM2NUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODZBMDgwNUM3RkJEMTFFQUE5Nzk4ODU5MjExREM2NUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQkI5ODNGQTdGQkMxMUVBQTk3OTg4NTkyMTFEQzY1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQkI5ODNGQjdGQkMxMUVBQTk3OTg4NTkyMTFEQzY1QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppkc6TEAAA7iSURBVHja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",
        points: {
          A: [0.075, 0.0818],
          B: [0.075, 0.9],
          C: [0.6375, 0.9],
          D: [0.6375, 0.0818],
          E: [0.925, 0.4818],
          O: [0.3625, 0.4818]
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
          audio: ["如图，"]
        },
        {
          audio: ["正方形"]
        },
        {
          audio: ["ABCD的对角线"],
          graphAction: [
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["A", "B"],
              linetype: "straightline"
            },
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["B", "C"],
              linetype: "straightline"
            },
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["C", "D"],
              linetype: "straightline"
            },
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["D", "A"],
              linetype: "straightline"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "B"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              points: ["B", "C"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              points: ["C", "D"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              points: ["D", "A"],
              linetype: "straightline"
            }
          ]
        },
        {
          audio: ["AC与"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "C"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["BD交于点O"],
          graphAction: [
            {
              type: "drawLine",
              points: ["B", "D"],
              color: "#477DFF"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "C"]
            },
            {
              type: "hideLine",
              points: ["B", "D"]
            }
          ]
        },
        {
          audio: ["过点C作"]
        },
        {
          audio: ["CE平行于"],
          graphAction: [
            {
              type: "drawLine",
              points: ["C", "E"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["BD"],
          graphAction: [
            {
              type: "drawLine",
              points: ["B", "D"],
              color: "#477DFF"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["C", "E"]
            },
            {
              type: "hideLine",
              points: ["B", "D"]
            }
          ]
        },
        {
          audio: ["过点D作"]
        },
        {
          audio: ["DE平行于"],
          graphAction: [
            {
              type: "drawLine",
              points: ["D", "E"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["AC"],
          graphAction: [
            {
              type: "drawLine",
              points: ["A", "C"],
              color: "#477DFF"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["D", "E"]
            },
            {
              type: "hideLine",
              points: ["A", "C"]
            }
          ]
        },
        {
          audio: ["CE与"],
          graphAction: [
            {
              type: "drawLine",
              points: ["C", "E"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          audio: ["DE交于点E"],
          graphAction: [
            {
              type: "drawLine",
              points: ["D", "E"],
              color: "#477DFF"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["C", "E"]
            },
            {
              type: "hideLine",

              points: ["D", "E"]
            }
          ]
        },
        {
          audio: ["求证：四边形"]
        },
        {
          audio: ["OCED是正方形"],
          graphAction: [
            {
              type: "drawLine",
              color: "#6B2FF1",
              points: ["O", "C"],
              linetype: "straightline"
            },
            {
              type: "drawLine",
              color: "#6B2FF1",
              points: ["C", "E"],
              linetype: "straightline"
            },
            {
              type: "drawLine",
              color: "#6B2FF1",
              points: ["E", "D"],
              linetype: "straightline"
            },
            {
              type: "drawLine",
              color: "#6B2FF1",
              points: ["D", "O"],
              linetype: "straightline"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              color: "#00ff00",
              points: ["O", "C"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              color: "#00ff00",
              points: ["C", "E"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              color: "#00ff00",
              points: ["E", "D"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              color: "#00ff00",
              points: ["D", "O"],
              linetype: "straightline"
            }
          ]
        }
      ]
    },
    {
      type: "知识点",
      content: [
        {
          text: "全等三角形的判定与性质；"
        },
        {
          text: "正方形的判定与性质"
        }
      ],
      link: "https://www.dm-ai.cn",
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["O", "C"]
            },
            {
              type: "hideLine",
              points: ["C", "E"]
            },
            {
              type: "hideLine",
              points: ["E", "D"]
            },
            {
              type: "hideLine",
              points: ["D", "O"]
            }
          ]
        },
        {
          audio: ["这道题主要考察全等三角形的判定与性质"]
        },
        {
          audio: ["和正方形的判定与性质"]
        },
        {
          audio: ["我们想一想，这类题一般怎么做呢？"]
        }
      ]
    },
    {
      type: "步骤-思路",
      questionNo: 1,
      text: "步骤1：证明四边形OCED是平行四边形",
      audio: ["步骤1：证明四边形OCED是平行四边形"],
      graphAction: [
        {
          type: "drawLine",
          color: "#10CB27",
          points: ["O", "C"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#10CB27",
          points: ["C", "E"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#10CB27",
          points: ["E", "D"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#10CB27",
          points: ["D", "O"],
          linetype: "straightline"
        }
      ],
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["O", "C"]
            },
            {
              type: "hideLine",
              points: ["C", "E"]
            },
            {
              type: "hideLine",
              points: ["E", "D"]
            },
            {
              type: "hideLine",
              points: ["D", "O"]
            }
          ]
        },
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        }
        // {
        //   graphAction: [
        //     {
        //       type: "hideLine",
        //       color: "#00ff00",
        //       points: ["O", "C"],
        //       tempPoint: [0.4837, 0.6756]
        //     },
        //     {
        //       type: "hideLine",
        //       color: "#00ff00",
        //       points: ["C", "E"],
        //       tempPoint: [0.7922, 0.6815]
        //     },
        //     {
        //       type: "hideLine",
        //       color: "#00ff00",
        //       points: ["E", "D"],
        //       tempPoint: [0.7841, 0.2803]
        //     },
        //     {
        //       type: "hideLine",
        //       color: "#00ff00",
        //       points: ["D", "O"],
        //       tempPoint: [0.4958, 0.2832]
        //     }
        //   ]
        // }
      ],

      content: [
        {
          text:
            "<p>∵ <span data-id='u3'>CE</span>//<span data-id='u4'>BD</span>,<span data-id='u5'>DE</span>//<span data-id='u6'>AC</span></p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u3"]',
                  points: ["C", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u4"]',
                  points: ["B", "D"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u5"]',
                  points: ["D", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u6"]',
                  points: ["A", "C"]
                }
              ]
            }
          ]
        },
        {
          text: "<p>∴四边形<span data-id='u7'>OCED</span>是平行四边形，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u7"]',
                  color: "#00C2FF",
                  points: ["O", "C"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#00C2FF",
                  points: ["C", "E"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#00C2FF",
                  points: ["E", "D"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#00C2FF",
                  points: ["D", "O"],
                  linetype: "straightline"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤2：证明四边形OCED是正方形",
      audio: ["步骤2：证明四边形OCED是正方形"],
      graphAction: [
        {
          type: "drawLine",
          color: "#FF3D5F",
          points: ["O", "C"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#FF3D5F",
          points: ["C", "E"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#FF3D5F",
          points: ["E", "D"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#FF3D5F",
          points: ["D", "O"],
          linetype: "straightline"
        }
      ],
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["O", "C"]
            },
            {
              type: "hideLine",
              points: ["C", "E"]
            },
            {
              type: "hideLine",
              points: ["E", "D"]
            },
            {
              type: "hideLine",
              points: ["D", "O"]
            }
          ]
        },
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        }
      ],
      content: [
        {
          text: "<p>∵正方形<span data-id='u8'>ABCD</span>的对角线</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  color: "#477DFF",
                  target: '[data-id="u8"]',
                  points: ["A", "B"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#477DFF",
                  points: ["B", "C"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#477DFF",
                  points: ["C", "D"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#477DFF",
                  points: ["D", "A"],
                  linetype: "straightline"
                }
              ]
            }
          ]
        },
        {
          text:
            "<p><span data-id='u9'>AC</span>与<span data-id='u10'>BD</span>交于点O，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u9"]',
                  points: ["A", "C"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u10"]',
                  points: ["B", "D"]
                }
              ]
            }
          ]
        },

        {
          text:
            "<p>∴<span data-id='u11'>OD</span>=<span data-id='u12'>OC</span>, <span data-id='u13'>∠DOC</span>=90°</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u11"]',
                  points: ["O", "D"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u12"]',
                  points: ["O", "C"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u13"]',
                  color: "#6B2FF1",
                  points: ["O", "D"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#6B2FF1",
                  points: ["O", "C"],
                  linetype: "straightline"
                }
              ]
            }
          ]
        },
        {
          text: "<p>∴四边形<span data-id='u14'>OCED</span>是正方形．</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  color: "#10CB27",
                  target: '[data-id="u14"]',
                  points: ["O", "C"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["C", "E"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["E", "D"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["D", "O"],
                  linetype: "straightline"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
