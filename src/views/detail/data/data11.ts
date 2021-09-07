export default {
  subject: {
    type: "填空题",
    difficulty: 4,
    view: [
      {
        type: "text",
        content: `如图，1mL=<span><latex>1cm^{3}</latex></span>.  随便写一点 <span data-id="u1">$\\sqrt{3x-1}+(1+x)^2$</span> is an example of an inline equation. As you see.`
      },
      {
        type: "graph",
        src:
          "data:image/png;base64,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",
        points: [
          {
            chars: "A",
            pos: [170, 8, 183, 30]
          },
          {
            chars: "B",
            pos: [37, 169, 55, 193]
          },
          {
            chars: "C",
            pos: [220, 171, 241, 194]
          },
          {
            chars: "D",
            pos: [105, 172, 128, 194]
          },
          {
            chars: "E",
            pos: [212, 96, 233, 121]
          },
          {
            chars: "F",
            pos: [92, 122, 114, 148]
          },
          {
            chars: "G",
            pos: [95, 122, 126, 148]
          }
        ]
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
          graphAction: [
            {
              type: "polygon",
              points: ["A", "B", "C"]
            }
          ],
          audio: ["ABC中"]
        },
        {
          graphAction: [
            {
              type: "hidePolygon",
              points: ["A", "B", "C"]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "angle",
              points: ["A", "B", "C"]
            }
          ],
          audio: ["测试动画角ABC哈哈哈"]
        },
        {
          graphAction: [
            {
              type: "hideAngle",
              points: ["A", "B", "C"]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "line",
              points: ["A", "F"]
            }
          ],
          audio: ["AF比上"]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["A", "F"]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "line",
              points: ["F", "D"]
            }
          ],
          audio: ["FD"]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["F", "D"]
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
              type: "line",
              points: ["B", "D"]
            }
          ],
          audio: ["BD等于"]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["B", "D"]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "line",
              points: ["D", "C"]
            }
          ],
          audio: ["DC"]
        },
        {
          graphAction: [
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
          graphAction: [
            {
              type: "line",
              points: ["E", "F"]
            }
          ],
          audio: ["EF比上"]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["E", "F"]
            }
          ]
        },
        {
          graphAction: [
            {
              type: "line",
              points: ["B", "F"]
            }
          ],
          audio: ["BF"]
        },
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["B", "F"]
            }
          ]
        },
        {
          audio: ["的值是什么呢"]
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
      type: "技巧",
      text: "作辅助线",
      content: [
        {
          text:
            '<p>如图，过点D作<span data-id="u3">DF</span>∥<span data-id="u4">BE</span>交<span data-id="u5">$\\sqrt{2}<\\sqrt[3]{3}$</span>于F</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u3"]'
                },
                {
                  type: "line",
                  points: ["B", "E"],
                  target: '[data-id="u4"]'
                },
                {
                  type: "line",
                  points: ["A", "C"],
                  target: '[data-id="u5"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>如图，过点D作<span data-id="z3">DF</span>∥<span data-id="z4">BE</span>交<span data-id="z5">AC</span>于F</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="z3"]'
                },
                {
                  type: "angle",
                  points: ["A", "B", "C"],
                  target: '[data-id="z4"]'
                },
                {
                  type: "polygon",
                  points: ["A", "D", "C"],
                  target: '[data-id="z5"]'
                }
              ]
            }
          ]
        }
      ],
      questionNo: 1,
      audio: [
        "平行线分线段成比例这类题目，我们一般要作辅助线，要利用已知的比例关系，则需要在比例的中间点位置做辅助线"
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
          graphAction: [
            {
              type: "line",
              points: ["D", "F"],
              target: '[data-id="u3"]'
            },
            {
              type: "line",
              points: ["B", "E"],
              target: '[data-id="u4"]'
            },
            {
              type: "line",
              points: ["A", "C"],
              target: '[data-id="u5"]'
            }
          ],
          audio: ["首先，如图，过点D作DF平行于BE交AC于F"]
        }
      ]
    },
    {
      type: "技巧2",
      text: "作辅助线",
      content: [
        {
          text:
            '<p>如图，过点D作<span data-id="u3">DF</span>∥<span data-id="u4">BE</span>交<span data-id="u5">$\\sqrt{2}<\\sqrt[3]{3}$</span>于F</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u3"]'
                },
                {
                  type: "line",
                  points: ["B", "E"],
                  target: '[data-id="u4"]'
                },
                {
                  type: "line",
                  points: ["A", "C"],
                  target: '[data-id="u5"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>如图，过点D作<span data-id="z3">DF</span>∥<span data-id="z4">BE</span>交<span data-id="z5">AC</span>于F</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="z3"]'
                },
                {
                  type: "angle",
                  points: ["A", "B", "C"],
                  target: '[data-id="z4"]'
                },
                {
                  type: "polygon",
                  points: ["A", "D", "C"],
                  target: '[data-id="z5"]'
                }
              ]
            }
          ]
        }
      ],
      questionNo: 2,
      audio: [
        "平行线分线段成比例这类题目，我们一般要作辅助线，要利用已知的比例关系，则需要在比例的中间点位置做辅助线"
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
          graphAction: [
            {
              type: "line",
              points: ["D", "F"],
              target: '[data-id="u3"]'
            },
            {
              type: "line",
              points: ["B", "E"],
              target: '[data-id="u4"]'
            },
            {
              type: "line",
              points: ["A", "C"],
              target: '[data-id="u5"]'
            }
          ],
          audio: ["首先，如图，过点D作DF平行于BE交AC于F"]
        }
      ]
    },
    {
      type: "思路",
      text: "步骤1：得出DF与BE，CD与CB之间的关系",
      content: [
        {
          text:
            '<p>∵<span data-id="u6">EF</span>∥<span data-id="u7">DF</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["E", "F"],
                  target: '[data-id="u6"]'
                },
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u7"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u8">EF</span>:<span data-id="u9">DF</span>=<span data-id="u10">AF</span>:<span data-id="u11">$\\sqrt{1+\\sqrt[p]{1+a^2}}$</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["E", "F"],
                  target: '[data-id="u8"]'
                },
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u9"]'
                },
                {
                  type: "line",
                  points: ["A", "F"],
                  target: '[data-id="u10"]'
                },
                {
                  type: "line",
                  points: ["A", "D"],
                  target: '[data-id="u11"]'
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
                  type: "line",
                  points: ["A", "F"],
                  target: '[data-id="u12"]'
                },
                {
                  type: "line",
                  points: ["F", "D"],
                  target: '[data-id="u13"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u14">EF</span>:<span data-id="u15">DF</span>=<span data-id="u16">AF</span>:<span data-id="u17">AD</span>=1:3，即<span data-id="u14">EF</span>=(1/3)<span data-id="u15">DF</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["E", "F"],
                  target: '[data-id="u14"]'
                },
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u15"]'
                },
                {
                  type: "line",
                  points: ["A", "F"],
                  target: '[data-id="u16"]'
                },
                {
                  type: "line",
                  points: ["A", "D"],
                  target: '[data-id="u17"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∵<span data-id="u18">DF</span>∥<span data-id="u19">BE</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u18"]'
                },
                {
                  type: "line",
                  points: ["B", "E"],
                  target: '[data-id="u19"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u20">DF</span>:<span data-id="u21">BE</span>=<span data-id="u22">CD</span>:<span data-id="u23">CB</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u20"]'
                },
                {
                  type: "line",
                  points: ["B", "E"],
                  target: '[data-id="u21"]'
                },
                {
                  type: "line",
                  points: ["C", "D"],
                  target: '[data-id="u22"]'
                },
                {
                  type: "line",
                  points: ["C", "B"],
                  target: '[data-id="u23"]'
                }
              ]
            }
          ]
        }
      ],
      audio: ["然后，算出DF与BE，CD与CB之间的关系"],
      substeps: [
        {
          graphAction: [
            {
              type: "hideLine",
              points: ["D", "F"]
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
          graphAction: [
            {
              type: "line",
              points: ["D", "F"]
            },
            {
              type: "line",
              points: ["B", "E"]
            },
            {
              type: "line",
              points: ["C", "D"]
            },
            {
              type: "line",
              points: ["C", "B"]
            }
          ],
          audio: ["到这里，我们可以知道DF比上BE等于CD比上CB"]
        }
      ]
    },
    {
      type: "思路",
      text: "步骤2：得出EF与BF的关系",
      content: [
        {
          text:
            '<p>而<span data-id="u24">BD</span>=<span data-id="u25">CD</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["B", "D"],
                  target: '[data-id="u24"]'
                },
                {
                  type: "line",
                  points: ["C", "D"],
                  target: '[data-id="u25"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u26">DF</span>:<span data-id="u27">BE</span>=<span data-id="u28">CD</span>:<span data-id="u29">CB</span>=1:2，即<span data-id="u27">BE</span>=2<span data-id="u26">DF</span>，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u26"]'
                },
                {
                  type: "line",
                  points: ["B", "E"],
                  target: '[data-id="u27"]'
                },
                {
                  type: "line",
                  points: ["C", "D"],
                  target: '[data-id="u28"]'
                },
                {
                  type: "line",
                  points: ["C", "B"],
                  target: '[data-id="u29"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u30">BF</span>=<span data-id="u31">BE</span>-<span data-id="u32">EF</span>=<span data-id="u34">2DF</span>-(1/3)<span data-id="u34">DF</span>=(5/3)<span data-id="u34">DF</span></p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["B", "F"],
                  target: '[data-id="u30"]'
                },
                {
                  type: "line",
                  points: ["B", "E"],
                  target: '[data-id="u31"]'
                },
                {
                  type: "line",
                  points: ["E", "F"],
                  target: '[data-id="u32"]'
                },
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u34"]'
                }
              ]
            }
          ]
        },
        {
          text:
            '<p>∴<span data-id="u35">EF</span>:<span data-id="u36">BF</span>=(1/3)<span data-id="u37">DF</span>:(5/3)<span data-id="u37">DF</span>=1:5，</p>',
          onClick: [
            {
              graphAction: [
                {
                  type: "line",
                  points: ["E", "F"],
                  target: '[data-id="u35"]'
                },
                {
                  type: "line",
                  points: ["B", "F"],
                  target: '[data-id="u36"]'
                },
                {
                  type: "line",
                  points: ["D", "F"],
                  target: '[data-id="u37"]'
                }
              ]
            }
          ]
        },
        {
          text: "<p>故答案为1:5.</p>"
        }
      ],
      audio: ["步骤2：算出EF与BF的关系"],
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
