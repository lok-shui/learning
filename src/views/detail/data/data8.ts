export default {
  subject: {
    type: "解答题",
    difficulty: 3,
    view: [
      {
        type: "text",
        content:
          '甲、乙两种糖果，售价分别为<span data-id="u1">20</span>元/千克和' +
          '<span data-id="u2">25</span>元/千克，根据市场调查发现，将两种糖果按一定' +
          "的比例混合后销售，取得了较好的销售效果。现只将糖果售价作如下调整：甲种糖果的售" +
          '价上涨<span data-id="u3">10%</span>，乙种糖果的售价下降' +
          '<span data-id="u4">20%</span>．若混合后糖果的售价恰好保持不变，' +
          "求甲、乙两种糖果的混合比例应为多少。"
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
          audio: ["甲、乙两种糖果，售价分别为"]
        },
        {
          audio: ["二十元每千克"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u1"]'
            }
          ]
        },
        {
          audio: ["和"]
        },
        {
          audio: ["二十五元每千克"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u2"]'
            }
          ]
        },
        {
          audio: [
            "，根据市场调查发现，将两种糖果按一定的比例混合后销售，取得了较好的销售效果。现只将糖果售价作如下调整：甲种糖果的售价上涨"
          ],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u2"]'
            }
          ]
        },
        {
          audio: ["百分之十，"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u3"]'
            }
          ]
        },
        {
          audio: ["乙种糖果的售价下降"]
        },
        {
          audio: ["百分之二十。"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u4"]'
            }
          ]
        },
        {
          audio: [
            "若混合后糖果的售价恰好保持不变，求甲、乙两种糖果的混合比例应为多少。"
          ]
        }
      ]
    },
    {
      type: "知识点",
      content: [
        {
          text: "二元一次方程的应用"
        }
      ],
      link: "https://www.dm-ai.cn",
      substeps: [
        {
          audio: ["这道题主要考察二元一次方程的应用这个知识点"]
        },
        {
          audio: ["我们想一想，这类题一般怎么做呢？"]
        }
      ]
    },
    {
      type: "步骤-思路",
      questionNo: 1,
      text: "步骤1：设未知数",
      audio: ["步骤1：设未知数"],
      content: [
        {
          text:
            "<p>设将x千克甲种糖果和y千克乙种糖果混合，混合后糖果的售价恰好保持不变</p>"
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
          audio: [
            "设将x千克甲种糖果和y千克乙种糖果混合，混合后糖果的售价恰好保持不变"
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤2：根据等量关系列方程式",
      audio: ["步骤2：根据等量关系列方程式"],
      content: [
        {
          text: '<p>根据题意得：<span data-id="r1">？</span></p>'
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
          audio: ["根据题意我们可以列出的方程式是怎样呢？"]
        },
        {
          showOptions: {
            options: [
              "20x+25y = 20×(1+10%)x+25×(1-20%)y",
              "20x+25y = 20×10%x-25×20%y"
            ],
            correctAudio: ["干得不错", "恭喜，你答对了", "你真棒"],
            wrongAudio: [
              "正确答案是二十x加二十五y等于二十乘一加百分之十的和乘x加二十五乘一减百分之二十的差乘y，再仔细看一看这一步吧"
            ]
          }
        },
        {
          replaceContent: {
            target: '[data-id="r1"]',
            content: "20x+25y = 20×(1+10%)x+25×(1-20%)y"
          }
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤3：解方程式，得出答案",
      audio: ["步骤3：解方程式，得出答案"],
      content: [
        {
          text: "<p>整理得：2x=5y</p>"
        },
        {
          text: "<p>∴x:y=5:2</p>"
        },
        {
          text: "<p>答：甲、乙两种糖果的混合比例应为5:2</p>"
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
          audio: ["由此可得，甲、乙两种糖果的混合比例应为5:2"]
        }
      ]
    }
  ]
};
