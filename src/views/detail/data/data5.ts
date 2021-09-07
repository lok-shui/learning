export default {
  subject: {
    type: "解答题",
    difficulty: 4,
    view: [
      {
        type: "text",
        content:
          '<p>在<span data-id="u1">△ABC</span>中，∠BAC=<span data-id="u2">90°</span>，AD是BC边上' +
          '的<span data-id="u3">中线</span>，点E为AD的<span data-id="u4">中点</span>，过点A作' +
          '<span data-id="u5">AF//BC</span>交BE的延长线于点F，连接<span data-id="u6">CF</span>．</p>' +
          '<p>（1）求证：AD=AF；</p><p>（2）填空：①当<span data-id="u7">∠ACB</span>=______°时，四边形' +
          '<span data-id="u51">ADCF</span>为正方形；</p><p> ②连接DF，当<span data-id="u8">∠ACB</span>' +
          '=______°时，四边形<span data-id="u52">ABDF</span>为菱形</p>'
      },
      {
        type: "graph",
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAABmCAYAAABleWUDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkJCOTgzRjQ3RkJDMTFFQUE5Nzk4ODU5MjExREM2NUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkJCOTgzRjU3RkJDMTFFQUE5Nzk4ODU5MjExREM2NUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQkI5ODNGMjdGQkMxMUVBQTk3OTg4NTkyMTFEQzY1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQkI5ODNGMzdGQkMxMUVBQTk3OTg4NTkyMTFEQzY1QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoPUbd4AABLoSURBVHja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",
        points: {
          A: [0.5318, 0.1183],
          B: [0.0429, 0.8506],
          C: [0.8272, 0.8506],
          D: [0.432, 0.8506],
          E: [0.4804, 0.4875],
          F: [0.9149, 0.1183]
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
          audio: ["在三角形"]
        },
        {
          audio: ["ABC中，"],

          graphAction: [
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["A", "B"],
              tempPoint: [0.2838, 0.4815]
            },
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["B", "C"],
              tempPoint: [0.432, 0.8506]
            },
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              color: "#ff8800",
              points: ["A", "B"],
              tempPoint: [0.2838, 0.4815]
            },
            {
              type: "hideLine",
              color: "#ff8800",
              points: ["B", "C"],
              tempPoint: [0.432, 0.8506]
            },
            {
              type: "hideLine",
              color: "#ff8800",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            }
          ]
        },
        {
          audio: ["角BAC等于"],
          graphAction: [
            {
              type: "drawLine",
              color: "#6B2FF1",
              points: ["A", "B"],
              tempPoint: [0.2838, 0.4815]
            },
            {
              type: "drawLine",
              color: "#6B2FF1",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            }
          ]
        },
        {
          audio: ["90度"],
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
              color: "#88ff00",
              points: ["A", "B"],
              tempPoint: [0.2838, 0.4815]
            },
            {
              type: "hideLine",
              color: "#88ff00",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            }
          ]
        },
        {
          audio: ["AD是"],

          graphAction: [
            {
              type: "drawLine",
              points: ["A", "D"],
              tempPoint: [0.4189, 0.4895],
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
              color: "#477DFF",
              tempPoint: [0.429, 0.9999]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "D"],
              tempPoint: [0.4189, 0.4895]
            },
            {
              type: "hideLine",
              points: ["B", "C"],
              tempPoint: [0.429, 0.9999]
            }
          ]
        },
        {
          audio: ["点E为"]
        },
        {
          audio: ["AD的中点"],

          graphAction: [
            {
              type: "drawLine",
              points: ["A", "D"],
              tempPoint: [0.4189, 0.4895],
              color: "#FF3D5F"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "D"],
              tempPoint: [0.4189, 0.4895]
            }
          ]
        },
        {
          audio: ["过点A作"]
        },
        {
          audio: ["AF平行"],

          graphAction: [
            {
              type: "drawLine",
              points: ["A", "F"],
              color: "#FF3D5F",
              tempPoint: [0.7193, 0.01]
            }
          ]
        },
        {
          audio: ["BC交"],

          graphAction: [
            {
              type: "drawLine",
              points: ["B", "C"],
              tempPoint: [0.429, 0.9999],
              color: "#477DFF"
            }
          ]
        },
        {
          audio: ["BE的延长线于点F"],

          graphAction: [
            {
              type: "drawLine",
              points: ["B", "E"],
              tempPoint: [0.2556, 0.5898],
              color: "#10CB27"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "F"],
              tempPoint: [0.7193, 0.01]
            },
            {
              type: "hideLine",
              points: ["B", "C"],
              tempPoint: [0.429, 0.9999]
            },
            {
              type: "hideLine",
              points: ["B", "E"],
              tempPoint: [0.2556, 0.5898]
            }
          ]
        },
        {
          audio: ["，连接"]
        },
        {
          audio: ["CF"],
          graphAction: [
            {
              type: "drawLine",
              points: ["C", "F"],
              color: "#FF3D5F",
              tempPoint: [0.9431, 0.5095]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["C", "F"],
              tempPoint: [0.9431, 0.5095]
            }
          ]
        },

        {
          audio: ["第一问，求证"]
        },
        {
          audio: ["AD等于"],

          graphAction: [
            {
              type: "drawLine",
              points: ["A", "D"],
              color: "#FF3D5F",
              tempPoint: [0.4189, 0.4895]
            }
          ]
        },
        {
          audio: ["AF"],

          graphAction: [
            {
              type: "drawLine",
              points: ["A", "F"],
              color: "#477DFF",
              tempPoint: [0.7193, 0.01]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "D"],
              tempPoint: [0.4189, 0.4895]
            },
            {
              type: "hideLine",
              points: ["A", "F"],
              tempPoint: [0.7193, 0.01]
            }
          ]
        },
        {
          audio: ["第二问，求出当"]
        },
        {
          audio: ["角ACB等于多少度时，"],

          graphAction: [
            {
              type: "drawLine",
              color: "#10CB27",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            },
            {
              type: "drawLine",
              color: "#10CB27",
              points: ["B", "C"],
              tempPoint: [0.432, 0.8506]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              color: "#ff8800",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            },
            {
              type: "hideLine",
              color: "#ff8800",
              points: ["B", "C"],
              tempPoint: [0.432, 0.8506]
            }
          ]
        },
        {
          audio: ["四边形"]
        },
        {
          audio: ["ADCF为正方形"],

          graphAction: [
            {
              type: "drawLine",
              color: "#00C2FF",
              points: ["A", "D"],
              tempPoint: [0.4834, 0.4935]
            },
            {
              type: "drawLine",
              color: "#00C2FF",
              points: ["D", "C"],
              tempPoint: [0.6306, 0.8546]
            },
            {
              type: "drawLine",
              color: "#00C2FF",
              points: ["C", "F"],
              tempPoint: [0.8705, 0.4815]
            },
            {
              type: "drawLine",
              color: "#00C2FF",
              points: ["F", "A"],
              tempPoint: [0.7173, 0.1203]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              color: "#ffff00",
              points: ["A", "D"],
              tempPoint: [0.4834, 0.4935]
            },
            {
              type: "hideLine",
              color: "#ffff00",
              points: ["D", "C"],
              tempPoint: [0.6306, 0.8546]
            },
            {
              type: "hideLine",
              color: "#ffff00",
              points: ["C", "F"],
              tempPoint: [0.8705, 0.4815]
            },
            {
              type: "hideLine",
              color: "#ffff00",
              points: ["F", "A"],
              tempPoint: [0.7173, 0.1203]
            }
          ]
        },
        {
          audio: ["连接"]
        },
        {
          audio: ["DF，"],
          graphAction: [
            {
              type: "addLine",
              points: ["D", "F"]
            },
            {
              type: "drawLine",
              points: ["D", "F"],
              color: "#FF3D5F"
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["D", "F"]
            }
          ]
        },
        {
          audio: ["当角"]
        },
        {
          audio: ["ACB等于多少度时"],

          graphAction: [
            {
              type: "drawLine",
              color: "#FF3D5F",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            },
            {
              type: "drawLine",
              color: "#FF3D5F",
              points: ["B", "C"],
              tempPoint: [0.432, 0.8506]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              color: "#ff8800",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            },
            {
              type: "hideLine",
              color: "#ff8800",
              points: ["B", "C"],
              tempPoint: [0.432, 0.8506]
            }
          ]
        },
        {
          audio: ["四边形"]
        },
        {
          audio: ["ABDF为菱形"],

          graphAction: [
            {
              type: "drawLine",
              target: '[data-id="u52"]',
              color: "#477DFF",
              points: ["A", "B"],
              tempPoint: [0.2919, 0.4774]
            },
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["B", "D"],
              tempPoint: [0.2375, 0.8546]
            },
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["D", "F"],
              tempPoint: [0.679, 0.4815]
            },
            {
              type: "drawLine",
              color: "#477DFF",
              points: ["F", "A"],
              tempPoint: [0.7173, 0.1203]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              color: "#00ffff",
              points: ["A", "B"],
              tempPoint: [0.2919, 0.4774]
            },
            {
              type: "hideLine",
              color: "#00ffff",
              points: ["B", "D"],
              tempPoint: [0.2375, 0.8546]
            },
            {
              type: "hideLine",
              color: "#00ffff",
              points: ["D", "F"],
              tempPoint: [0.679, 0.4815]
            },
            {
              type: "hideLine",
              color: "#00ffff",
              points: ["F", "A"],
              tempPoint: [0.7173, 0.1203]
            }
          ]
        }
      ]
    },
    {
      type: "知识点",
      content: [
        {
          text: "直角三角形斜边上的中线"
        },
        {
          text: "全等三角形的判断与性质"
        },
        {
          text: "菱形的判定"
        },
        {
          text: "三角形的中位线定理"
        },
        {
          text: "正方形的判断与性质"
        }
      ],
      link: "https://www.dm-ai.cn",
      substeps: [
        {
          audio: [
            "这道题主要考察直角三角形斜边上的中线、全等三角形的判断与性质、菱形的判定、三角形的中位线定理、正方形的判断与性质这几个知识点"
          ]
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
      type: "步骤-问题",
      questionNo: 1,
      text: "求证：AD=AF",
      audio: ["第一问，求证AD等于AF"],
      graphAction: [
        {
          type: "drawLine",
          points: ["A", "D"],
          tempPoint: [0.4189, 0.4895]
        },
        {
          type: "drawLine",
          points: ["A", "F"],
          tempPoint: [0.7193, 0.01]
        }
      ],
      substeps: []
    },
    {
      type: "步骤-思路",
      text: "步骤1：证明∠AFE=∠DBE",
      audio: ["首先，证明角AFE等于角DBE"],
      graphAction: [
        {
          type: "hideLine",
          points: ["A", "D"],
          tempPoint: [0.4189, 0.4895]
        },
        {
          type: "hideLine",
          points: ["A", "F"],
          tempPoint: [0.7193, 0.01]
        },
        {
          type: "drawLine",
          points: ["A", "F"],
          linetype: "straightline",
          color: "#6B2FF1"
        },
        {
          type: "drawLine",
          points: ["E", "F"],
          linetype: "straightline",
          color: "#6B2FF1"
        },
        {
          type: "drawLine",
          points: ["D", "B"],
          linetype: "straightline",
          color: "#10CB27"
        },
        {
          type: "drawLine",
          points: ["E", "B"],
          linetype: "straightline",
          color: "#10CB27"
        }
      ],
      content: [
        {
          text:
            '<p>∵<span data-id="u9">∠BAC</span>=90°，<span data-id="u10">AD</span>是<span data-id="u11">BC</span>边上的中线，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u9"]',
                  color: "#00C2FF",
                  points: ["A", "B"],
                  tempPoint: [0.2838, 0.4815]
                },
                {
                  type: "drawLine",
                  color: "#00C2FF",
                  points: ["C", "A"],
                  tempPoint: [0.679, 0.4895]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u10"]',
                  points: ["A", "D"],
                  tempPoint: [0.4189, 0.4895]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u11"]',
                  points: ["B", "C"],
                  tempPoint: [0.429, 0.9999]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u12">AD</span>=<span data-id="u13">CD</span>=<span data-id="u14">BD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "hideLine",
                  color: "#ff8800",
                  points: ["A", "B"],
                  tempPoint: [0.2838, 0.4815]
                },
                {
                  type: "hideLine",
                  color: "#ff8800",
                  points: ["C", "A"],
                  tempPoint: [0.679, 0.4895]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u12"]',
                  points: ["A", "D"],
                  tempPoint: [0.4189, 0.4895]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u13"]',
                  points: ["C", "D"],
                  tempPoint: [0.6528, 0.9999]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u14"]',
                  points: ["B", "D"],
                  tempPoint: [0.2455, 0.9999]
                }
              ]
            }
          ]
        },
        {
          text: '<p>∵点E为<span data-id="u15">AD</span>的中点，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u15"]',
                  points: ["A", "D"],
                  tempPoint: [0.4189, 0.4895]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u16">AE</span>=<span data-id="u17">DE</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u16"]',
                  points: ["A", "E"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u17"]',
                  points: ["D", "E"]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∵<span data-id="u18">AF</span>∥<span data-id="u19">BC</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u18"]',
                  points: ["A", "F"],
                  tempPoint: [0.7193, 0.01]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u19"]',
                  points: ["B", "C"],
                  tempPoint: [0.429, 0.9389]
                }
              ]
            }
          ]
        },
        {
          text:
            "<p>∴<span data-id='u20'>∠AFE</span>=<span data-id='u21'>∠DBE</span>，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u20"]',
                  points: ["A", "F"],
                  linetype: "straightline",
                  color: "#FF3D5F"
                },
                {
                  type: "drawLine",
                  points: ["E", "F"],
                  linetype: "straightline",
                  color: "#FF3D5F"
                },
                {
                  type: "drawLine",
                  target: '[data-id="u21"]',
                  points: ["D", "B"],
                  linetype: "straightline",
                  color: "#477DFF"
                },
                {
                  type: "drawLine",
                  points: ["E", "B"],
                  linetype: "straightline",
                  color: "#477DFF"
                }
              ]
            }
          ]
        }
      ],
      skip: true,
      substeps: [
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ],
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "F"],
              linetype: "straightline",
              color: "#ff00ff"
            },
            {
              type: "hideLine",
              points: ["E", "F"],
              linetype: "straightline",
              color: "#ff00ff"
            },
            {
              type: "hideLine",
              points: ["D", "B"],
              linetype: "straightline",
              color: "#ffff00"
            },
            {
              type: "hideLine",
              points: ["E", "B"],
              linetype: "straightline",
              color: "#ffff00"
            }
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤2：证明AF=BD",
      audio: ["然后，证明AF等于BD"],
      graphAction: [
        {
          type: "drawLine",
          points: ["A", "F"],
          tempPoint: [0.7193, 0.01]
        },
        {
          type: "drawLine",
          points: ["B", "D"],
          tempPoint: [0.2375, 0.9999]
        }
      ],
      content: [
        {
          text:
            "<p>∵<span data-id='u22'>∠AEF</span>=<span data-id='u23'>∠DEB</span>，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u22"]',
                  points: ["E", "A"],
                  linetype: "straightline",
                  color: "#6B2FF1"
                },
                {
                  type: "drawLine",
                  points: ["E", "F"],
                  linetype: "straightline",
                  color: "#6B2FF1"
                },
                {
                  type: "drawLine",
                  target: '[data-id="u23"]',
                  points: ["E", "D"],
                  linetype: "straightline",
                  color: "#10CB27"
                },
                {
                  type: "drawLine",
                  points: ["E", "B"],
                  linetype: "straightline",
                  color: "#10CB27"
                }
              ]
            }
          ]
        },
        {
          text:
            "<p>∴<span data-id='uu1'>△AEF</span> ≌ <span data-id='uu2'>△DEB</span>（AAS），</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="uu1"]',
                  points: ["A", "F"],
                  linetype: "straightline",
                  color: "#00C2FF"
                },
                {
                  type: "drawLine",
                  points: ["E", "F"],
                  linetype: "straightline",
                  color: "#00C2FF"
                },
                {
                  type: "drawLine",
                  points: ["E", "A"],
                  linetype: "straightline",
                  color: "#00C2FF"
                },
                {
                  type: "drawLine",
                  target: '[data-id="uu2"]',
                  points: ["D", "B"],
                  linetype: "straightline",
                  color: "#FF3D5F"
                },
                {
                  type: "drawLine",
                  points: ["E", "B"],
                  linetype: "straightline",
                  color: "#FF3D5F"
                },
                {
                  type: "drawLine",
                  points: ["E", "D"],
                  linetype: "straightline",
                  color: "#FF3D5F"
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u24">AF</span>=<span data-id="u25">BD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u24"]',
                  points: ["A", "F"],
                  tempPoint: [0.7193, 0.01]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u25"]',
                  points: ["B", "D"],
                  tempPoint: [0.2375, 0.9999]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u26">AD</span>=<span data-id="u27">AF</span>；</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u26"]',
                  points: ["A", "D"],
                  tempPoint: [0.4189, 0.4895]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u27"]',
                  points: ["A", "F"],
                  tempPoint: [0.7193, 0.01]
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
              points: ["A", "F"]
            },
            {
              type: "hideLine",
              points: ["B", "D"]
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
      ]
    },
    {
      type: "步骤-问题",
      questionNo: 2,
      text: "当∠ACB=__°时，四边形ADCF为正方形；当∠ACB=__°时，四边形ABDF为菱形",
      graphAction: [
        {
          type: "drawLine",
          color: "#FF3D5F",
          points: ["A", "C"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#FF3D5F",
          points: ["B", "C"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#477DFF",
          points: ["A", "D"],
          tempPoint: [0.4834, 0.4935]
        },
        {
          type: "drawLine",
          color: "#477DFF",
          points: ["D", "C"],
          tempPoint: [0.6306, 0.8546]
        },
        {
          type: "drawLine",
          color: "#477DFF",
          points: ["C", "F"],
          tempPoint: [0.8705, 0.4815]
        },
        {
          type: "drawLine",
          color: "#477DFF",
          points: ["F", "A"],
          tempPoint: [0.7173, 0.1203]
        },
        {
          type: "drawLine",
          color: "#6B2FF1",
          points: ["A", "B"],
          tempPoint: [0.2919, 0.4774]
        },
        {
          type: "drawLine",
          color: "#6B2FF1",
          points: ["B", "D"],
          tempPoint: [0.2375, 0.8546]
        },
        {
          type: "drawLine",
          color: "#6B2FF1",
          points: ["D", "F"],
          tempPoint: [0.679, 0.4815]
        },
        {
          type: "drawLine",
          color: "#6B2FF1",
          points: ["F", "A"],
          tempPoint: [0.7173, 0.1203]
        }
      ],
      audio: [
        "第二问，求出当角ACB等于多少度时，四边形ADCF为正方形；当角ACB等于多少度时，四边形ABDF为菱形"
      ],
      substeps: []
    },
    {
      type: "步骤-思路",
      text: "证明∠ACB=45°时，四边形ADCF是正方形",
      audio: ["问题1，证明当角ACB等于45度时，四边形ADCF是正方形"],
      graphAction: [
        {
          type: "hideLine",
          color: "#FF3D5F",
          points: ["A", "C"],
          linetype: "straightline"
        },
        {
          type: "hideLine",
          color: "#FF3D5F",
          points: ["B", "C"],
          linetype: "straightline"
        },
        {
          type: "hideLine",
          color: "#477DFF",
          points: ["A", "D"],
          tempPoint: [0.4834, 0.4935]
        },
        {
          type: "hideLine",
          color: "#477DFF",
          points: ["D", "C"],
          tempPoint: [0.6306, 0.8546]
        },
        {
          type: "hideLine",
          color: "#477DFF",
          points: ["C", "F"],
          tempPoint: [0.8705, 0.4815]
        },
        {
          type: "hideLine",
          color: "#477DFF",
          points: ["F", "A"],
          tempPoint: [0.7173, 0.1203]
        },
        {
          type: "hideLine",
          color: "#6B2FF1",
          points: ["A", "B"],
          tempPoint: [0.2919, 0.4774]
        },
        {
          type: "hideLine",
          color: "#6B2FF1",
          points: ["B", "D"],
          tempPoint: [0.2375, 0.8546]
        },
        {
          type: "hideLine",
          color: "#6B2FF1",
          points: ["D", "F"],
          tempPoint: [0.679, 0.4815]
        },
        {
          type: "hideLine",
          color: "#6B2FF1",
          points: ["F", "A"],
          tempPoint: [0.7173, 0.1203]
        },

        {
          type: "drawLine",
          color: "#10CB27",
          points: ["B", "C"],
          tempPoint: [0.432, 0.8506]
        },
        {
          type: "drawLine",
          color: "#10CB27",
          points: ["C", "A"],
          tempPoint: [0.679, 0.4895]
        },
        {
          type: "drawLine",
          color: "#00C2FF",
          points: ["A", "D"],
          tempPoint: [0.4834, 0.4935]
        },
        {
          type: "drawLine",
          color: "#00C2FF",
          points: ["D", "C"],
          tempPoint: [0.6306, 0.8546]
        },
        {
          type: "drawLine",
          color: "#00C2FF",
          points: ["C", "F"],
          tempPoint: [0.8705, 0.4815]
        },
        {
          type: "drawLine",
          color: "#00C2FF",
          points: ["F", "A"],
          tempPoint: [0.7173, 0.1203]
        }
      ],
      content: [
        {
          text:
            '<p>∵<span data-id="u28">AD</span>=<span data-id="u29">AF</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u28"]',
                  points: ["A", "D"],
                  tempPoint: [0.4189, 0.4895]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u29"]',
                  points: ["A", "F"],
                  tempPoint: [0.7193, 0.01]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u30">AF</span>=<span data-id="u31">CD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u30"]',
                  points: ["A", "F"],
                  tempPoint: [0.7193, 0.01]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u31"]',
                  points: ["C", "D"]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∵<span data-id="u32">AF</span>//<span data-id="u33">CD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u32"]',
                  points: ["A", "F"],
                  tempPoint: [0.7193, 0.01]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u33"]',
                  points: ["C", "D"]
                }
              ]
            }
          ]
        },
        {
          text: "<p>∴四边形<span data-id='u34'>ADCF</span>是菱形，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u34"]',
                  color: "#FF3D5F",
                  points: ["A", "D"],
                  tempPoint: [0.4834, 0.4935]
                },
                {
                  type: "drawLine",
                  color: "#FF3D5F",
                  points: ["D", "C"],
                  tempPoint: [0.6306, 0.8546]
                },
                {
                  type: "drawLine",
                  color: "#FF3D5F",
                  points: ["C", "F"],
                  tempPoint: [0.8705, 0.4815]
                },
                {
                  type: "drawLine",
                  color: "#FF3D5F",
                  points: ["F", "A"],
                  tempPoint: [0.7173, 0.1203]
                }
              ]
            }
          ]
        },
        {
          text:
            "<p>∴<span data-id='uu3'>∠ACD</span>=<span data-id='uu4'>∠ACF</span>=45°，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  color: "#477DFF",
                  target: '[data-id="uu3"]',
                  points: ["D", "C"],
                  linetype: "straightline"
                },
                {
                  type: "hideLine",
                  color: "#477DFF",
                  points: ["C", "A"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#6B2FF1",
                  target: '[data-id="uu4"]',
                  points: ["A", "C"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#6B2FF1",
                  points: ["C", "F"],
                  linetype: "straightline"
                }
              ]
            }
          ]
        },
        {
          text: "<p>∴<span data-id='uu5'>∠DCF</span>=90°，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="uu5"]',
                  color: "#10CB27",
                  points: ["D", "C"],
                  linetype: "straightline"
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["C", "F"],
                  linetype: "straightline"
                }
              ]
            }
          ]
        },
        {
          text: "<p>∴四边形<span data-id='u35'>ADCF</span>是正方形；</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u35"]',
                  color: "#00C2FF",
                  points: ["A", "D"],
                  tempPoint: [0.4834, 0.4935]
                },
                {
                  type: "drawLine",
                  color: "#00C2FF",
                  points: ["D", "C"],
                  tempPoint: [0.6306, 0.8546]
                },
                {
                  type: "drawLine",
                  color: "#00C2FF",
                  points: ["C", "F"],
                  tempPoint: [0.8705, 0.4815]
                },
                {
                  type: "drawLine",
                  color: "#00C2FF",
                  points: ["F", "A"],
                  tempPoint: [0.7173, 0.1203]
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
              color: "#10CB27",
              points: ["B", "C"],
              tempPoint: [0.432, 0.8506]
            },
            {
              type: "hideLine",
              color: "#10CB27",
              points: ["C", "A"],
              tempPoint: [0.679, 0.4895]
            },
            {
              type: "hideLine",
              color: "#00C2FF",
              points: ["A", "D"],
              tempPoint: [0.4834, 0.4935]
            },
            {
              type: "hideLine",
              color: "#00C2FF",
              points: ["D", "C"],
              tempPoint: [0.6306, 0.8546]
            },
            {
              type: "hideLine",
              color: "#00C2FF",
              points: ["C", "F"],
              tempPoint: [0.8705, 0.4815]
            },
            {
              type: "hideLine",
              color: "#00C2FF",
              points: ["F", "A"],
              tempPoint: [0.7173, 0.1203]
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
      ]
    },
    {
      type: "步骤-思路",
      text: "证明当∠ACB=30°时，四边形ABDF为菱形",
      audio: ["问题2，证明当角ACB等于30度时，四边形ABDF为菱形"],
      graphAction: [
        {
          type: "drawLine",
          color: "#FF3D5F",
          points: ["A", "C"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#FF3D5F",
          points: ["C", "B"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#477DFF",
          points: ["A", "B"],
          linetype: "straightline"
        },
        {
          type: "drawLine",
          color: "#477DFF",
          points: ["B", "D"],
          tempPoint: [0.2375, 0.8546]
        },
        {
          type: "drawLine",
          color: "#477DFF",
          points: ["D", "F"],
          tempPoint: [0.679, 0.4815]
        },
        {
          type: "drawLine",
          color: "#477DFF",
          points: ["F", "A"],
          tempPoint: [0.7173, 0.1203]
        }
      ],
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              color: "#FF3D5F",
              points: ["A", "C"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              color: "#FF3D5F",
              points: ["C", "B"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              color: "#477DFF",
              points: ["A", "B"],
              linetype: "straightline"
            },
            {
              type: "hideLine",
              color: "#477DFF",
              points: ["B", "D"],
              tempPoint: [0.2375, 0.8546]
            },
            {
              type: "hideLine",
              color: "#477DFF",
              points: ["D", "F"],
              tempPoint: [0.679, 0.4815]
            },
            {
              type: "hideLine",
              color: "#477DFF",
              points: ["F", "A"],
              tempPoint: [0.7173, 0.1203]
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
          text:
            "<p>∵四边形<span data-id='u53'>ADCF</span>是菱形，四边形<span data-id='u54'>ABDF</span>是平行四边形，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u53"]',
                  color: "#6B2FF1",
                  points: ["A", "D"],
                  tempPoint: [0.4834, 0.4935]
                },
                {
                  type: "drawLine",
                  color: "#6B2FF1",
                  points: ["D", "C"],
                  tempPoint: [0.6306, 0.8546]
                },
                {
                  type: "drawLine",
                  color: "#6B2FF1",
                  points: ["C", "F"],
                  tempPoint: [0.8705, 0.4815]
                },
                {
                  type: "drawLine",
                  color: "#6B2FF1",
                  points: ["F", "A"],
                  tempPoint: [0.7173, 0.1203]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u54"]',
                  color: "#10CB27",
                  points: ["A", "B"],
                  tempPoint: [0.2919, 0.4774]
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["B", "D"],
                  tempPoint: [0.2375, 0.8546]
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["D", "F"],
                  tempPoint: [0.679, 0.4815]
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["F", "A"],
                  tempPoint: [0.7173, 0.1203]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u36">CD</span>=<span data-id="u37">CF</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u36"]',
                  points: ["C", "D"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u37"]',
                  points: ["C", "F"]
                }
              ]
            }
          ]
        },
        {
          text:
            "<p>∵<span data-id='u38'>∠ACB</span>=<span data-id='u39'>∠ACF</span>=30°，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u38"]',
                  color: "#00C2FF",
                  points: ["B", "C"],
                  tempPoint: [0.432, 0.8506]
                },
                {
                  type: "drawLine",
                  color: "#00C2FF",
                  points: ["C", "A"],
                  tempPoint: [0.679, 0.4895]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u39"]',
                  color: "#FF3D5F",
                  points: ["C", "A"],
                  tempPoint: [0.679, 0.4895]
                },
                {
                  type: "drawLine",
                  color: "#FF3D5F",
                  points: ["C", "F"],
                  tempPoint: [0.8705, 0.4815]
                }
              ]
            }
          ]
        },
        {
          text: "<p>∴<span data-id='u40'>∠DCF</span>=60°</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  color: "#477DFF",
                  target: '[data-id="u40"]',
                  points: ["D", "C"],
                  tempPoint: [0.6306, 0.8546]
                },
                {
                  type: "drawLine",
                  color: "#477DFF",
                  points: ["C", "F"],
                  tempPoint: [0.8705, 0.4815]
                }
              ]
            }
          ]
        },
        {
          text: "<p>∴<span data-id='u41'>△DCF</span>是等边三角形，</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u41"]',
                  color: "#6B2FF1",
                  points: ["D", "C"],
                  tempPoint: [0.6326, 0.8466]
                },
                {
                  type: "drawLine",
                  color: "#6B2FF1",
                  points: ["C", "F"],
                  tempPoint: [0.8715, 0.4754]
                },
                {
                  type: "drawLine",
                  color: "#6B2FF1",
                  points: ["F", "D"],
                  tempPoint: [0.679, 0.4835]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u42">DF</span>=<span data-id="u43">CD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u42"]',
                  points: ["D", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u43"]',
                  points: ["C", "D"]
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u44">DF</span>=<span data-id="u45">BD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u44"]',
                  points: ["D", "F"]
                },
                {
                  type: "drawLine",
                  target: '[data-id="u45"]',
                  points: ["B", "D"]
                }
              ]
            }
          ]
        },
        {
          text: "<p>∴四边形<span data-id='u46'>ABDF</span>为菱形；</p>",
          onClick: [
            {
              graphAction: [
                {
                  type: "drawLine",
                  target: '[data-id="u46"]',
                  color: "#10CB27",
                  points: ["A", "B"],
                  tempPoint: [0.2919, 0.4774]
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["B", "D"],
                  tempPoint: [0.2375, 0.8546]
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["D", "F"],
                  tempPoint: [0.679, 0.4815]
                },
                {
                  type: "drawLine",
                  color: "#10CB27",
                  points: ["F", "A"],
                  tempPoint: [0.7173, 0.1203]
                }
              ]
            }
          ]
        },
        {
          text: "<p>故答案为：45, 30</p>"
        }
      ],
      skip: true
    }
  ]
};
