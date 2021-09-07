export default {
  subject: {
    type: "解答题",
    difficulty: 2,
    view: [
      {
        type: "text",
        content:
          "已知方程" +
          '<span data-id="u1">(m-2)x<sup>|m|-1</sup>+' +
          "(n+3)y<sup>n<sup>2</sup>-8</sup>=6</span>是关于x, y的二元一次方程，" +
          '求m、n的值；并求当<span data-id="u2">x=-(2/3)</span>时相应y的值。'
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
          audio: ["方程"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u1"]'
            }
          ]
        },
        {
          audio: ["是关于x，y的二元一次方程，求m、n的值；并求当 "]
        },
        {
          audio: ["x等于负三分之二"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u2"]'
            }
          ]
        },
        {
          audio: ["时相应y的值。"]
        }
      ]
    },
    {
      type: "知识点",
      content: [
        {
          text: "绝对值"
        },
        {
          text: "二元一次方程的定义"
        }
      ],
      link: "https://www.dm-ai.cn",
      substeps: [
        {
          audio: ["这道题主要考察绝对值和二元一次方程的定义这两个知识点"]
        },
        {
          audio: ["我们想一想，这类题一般怎么做呢？"]
        }
      ]
    },
    {
      type: "步骤-思路",
      questionNo: 1,
      text: "步骤1：列方程式",
      audio: ["步骤1：列方程式"],
      content: [
        {
          text: "<p>解：由题意可得，|m|-1=1，n<sup>2</sup>-8=1</p>"
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
          audio: ["由题意可得，m的绝对值减1等于1，n的平方减8等于1"]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤2：解方程式",
      audio: ["步骤2：解方程式"],
      content: [
        {
          text:
            "<p>∴m=-2或m=2（由题意为二元一次方程舍去2），n=3或n=-3（同理舍去-3）</p>"
        },
        {
          text: "<p>即m=-2，n=3</p>"
        },
        {
          text: '<p>∴原方程化为<span data-id="r1">？</span></p>'
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
          audio: ["那么原方程可以化为什么样呢？"]
        },
        {
          showOptions: {
            options: ["-4x+6y=6", "4x+6y=6"],
            correctAudio: ["干得不错", "恭喜，你答对了", "你真棒"],
            wrongAudio: ["正确答案是负四X加六Y等于六，再仔细看一看这一步吧"]
          }
        },
        {
          replaceContent: {
            target: '[data-id="r1"]',
            content: "-4x+6y=6"
          }
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤3：得出y的值",
      audio: ["步骤3：得出y的值"],
      content: [
        {
          text: "<p>当x=-(2/3)时，-4&times;(-2/3)+6y=6</p>"
        },
        {
          text: "<p>解得y=5/9</p>"
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
          audio: ["最后我们解得y等于九分之五"]
        }
      ]
    }
  ]
};
