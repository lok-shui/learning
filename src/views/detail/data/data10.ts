export default {
  subject: {
    type: "解答题",
    difficulty: 2,
    view: [
      {
        type: "text",
        content:
          '已知多项式<span data-id="u1">-3x<sup>2</sup>y<sup>m+1</sup>+x<sup>3' +
          "</sup>y-3x<sup>4</sup>-1</span>是五次四项式，且单项式" +
          '<span data-id="u2">3x<sup>2n</sup>y<sup>2-m</sup></span>' +
          "的次数与该多项式的次数相同。<br>(1) 求m、n的值；<br>" +
          "(2) 把这个多项式按x的降幂排列。"
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
          audio: ["已知"]
        },
        {
          audio: ["多项式是五次四项式且"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u1"]'
            }
          ]
        },
        {
          audio: ["单项式的次数"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u2"]'
            }
          ]
        },
        {
          audio: ["与该多项式的次数相同。"]
        },
        {
          audio: ["1 求m、n的值；"]
        },
        {
          audio: ["2 把这个多项式按x的降幂排列。"]
        }
      ]
    },
    {
      type: "知识点",
      content: [
        {
          text: "单项式"
        },
        {
          text: "多项式"
        }
      ],
      link: "https://www.dm-ai.cn",
      substeps: [
        {
          audio: ["这道题主要考察单项式和多项式的知识点"]
        },
        {
          audio: ["我们想一想，这类题一般怎么做呢？"]
        }
      ]
    },
    {
      type: "步骤-问题",
      questionNo: 1,
      text: "求m、n的值",
      substeps: [
        {
          audio: ["第一问，求m和n的值"]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤1：得出m的值",
      audio: ["步骤1：得出m的值"],
      content: [
        {
          text:
            "<p>∵-3x<sup>2</sup>y<sup>m+1</sup>+x<sup>3</sup>y-3x<sup>4</sup>-1是五次四项式</p>"
        },
        {
          text: "<p>∴m+1=3，解得m=2</p>"
        }
      ],
      substeps: [
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
      text: "步骤2：得出n的值",
      audio: ["步骤2：得出n的值"],
      content: [
        {
          text:
            "<p>∵单项式3x<sup>2n</sup>y<sup>2-m</sup>的次数与该多项式的次数相同</p>"
        },
        {
          text: "<p>∴2n+2-m=5</p>"
        },
        {
          text: '<p>即2n+2-2=5，解得n=<span data-id="r1">？</span></p>'
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
          audio: ["则我们可以得出n等于多少呢"]
        },
        {
          showOptions: {
            options: ["5/2", "2/5"],
            correctAudio: ["干得不错", "恭喜，你答对了", "你真棒"],
            wrongAudio: ["正确答案是二分之五，再仔细看一看这一步吧"]
          }
        },
        {
          replaceContent: {
            target: '[data-id="r1"]',
            content: "5/2"
          }
        }
      ]
    },
    {
      type: "步骤-问题",
      questionNo: 2,
      text: "把这个多项式按x的降幂排列",
      substeps: [
        {
          audio: ["问题2，把这个多项式按x的降幂排列"]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "得出答案",
      audio: ["得出答案"],
      content: [
        {
          text:
            "<p>把这个多项式按x的降幂排列为-3x<sup>4</sup>+x<sup>3</sup>y-3x<sup>2</sup>y<sup>3</sup>-1</p>"
        }
      ],
      substeps: [
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        }
      ]
    }
  ]
};
