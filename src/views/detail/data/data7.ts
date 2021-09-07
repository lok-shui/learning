export default {
  subject: {
    type: "解答题",
    difficulty: 3,
    view: [
      {
        type: "text",
        content:
          '<p>大江东产业集聚区某中学李老师为学校开展的“喜迎G20峰会”演讲比赛购买奖品，回到学校向总务处王主任交账时说：“我买了两类书，共<span data-id="u1">105</span>本，单价分别为<span data-id="u2">8</span>元和<span data-id="u3">12</span>元，买书前我领取了<span data-id="u4">1400</span>元，现还剩余<span data-id="u5">318</span>元，”王主任算了算觉得不对，就说：李老师你搞错了。</p><br>' +
          "(1) 请同学们用所学知识解释李老师为什么搞错了？<br>" +
          '(2) 李老师急忙拿出发票，发现原来还多买了一只水笔，但水笔的单价写的模糊不清，李老师只记得水笔价格为小于<span data-id="u6">8</span>的正整数，则这支水笔单价应为多少元？'
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
          audio: [
            "大江东产业集聚区某中学李老师为学校开展的“喜迎G二零峰会”演讲比赛购买奖品，回到学校向总务处王主任交账时说：“我买了两类书，共"
          ]
        },
        {
          audio: ["一百零五本，单价分别为"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u1"]'
            }
          ]
        },
        {
          audio: ["八元和"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u2"]'
            }
          ]
        },
        {
          audio: ["十二元，买书前我领取了"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u3"]'
            }
          ]
        },
        {
          audio: ["一千四百元，现还剩余"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u4"]'
            }
          ]
        },
        {
          audio: ["三百一十八元，”"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u5"]'
            }
          ]
        },
        {
          audio: [
            "王主任算了算觉得不对，就说：李老师你搞错了．" +
              "第一问 请同学们用所学知识解释李老师为什么搞错了？" +
              "第二问 李老师急忙拿出发票，发现原来还多买了一只水笔，但水笔的单价写的模糊不清"
          ]
        },
        {
          audio: ["李老师只记得水笔价格为小于"]
        },
        {
          audio: ["8的正整数，"],
          textAction: [
            {
              type: "underline",
              target: '[data-id="u6"]'
            }
          ]
        },
        {
          audio: ["，则这支水笔单价应为多少元？"]
        }
      ]
    },
    {
      type: "知识点",
      content: [
        {
          text: "一元一次方程的应用"
        },
        {
          text: "二元一次方程的应用"
        }
      ],
      link: "https://www.dm-ai.cn",
      substeps: [
        {
          audio: ["这道题主要考察一元一次方程和二元一次方程的应用"]
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
      text: "解释李老师为什么搞错了",
      substeps: [
        {
          audio: ["我们先来看第一问，解释李老师为什么搞错了"]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤1：设未知数",
      audio: ["步骤1：设未知数"],
      content: [
        {
          text: "<p>设8元的买了x本，12元的是(105-x)本</p>"
        }
      ],
      skip: true,
      substeps: [
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        },
        {
          audio: ["设8元的买了x本，12元的就是一百零五减x本"]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤2：根据等量关系列方程式",
      audio: ["步骤2：根据等量关系列方程式"],
      content: [
        {
          text: "<p>∴一共花了：8x+12&times;(105-x)=1400-318</p>"
        }
      ],
      skip: true,
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
            "所以一共花了：八x加十二乘以一百零五减x的差等于一千四百减三百一十八"
          ]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤3：解方程式，得出答案",
      audio: ["步骤3：解方程式，得出答案"],
      content: [
        {
          text: "<p>8x-12x+1260=1082,</p>"
        },
        {
          text: "<p>4x=178,</p>"
        },
        {
          text: "<p>x=44.5（不符合题意）</p>"
        },
        {
          text: "<p>∴不能整除，所以错了</p>"
        }
      ],
      skip: true,
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
      type: "步骤-问题",
      questionNo: 2,
      text: "求这支水笔单价应为多少元？",
      substeps: [
        {
          audio: ["第二问，求这支水笔单价应为多少元？"]
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤1：设未知数",
      audio: ["步骤1：设未知数"],
      content: [
        {
          text: "<p>设8元的书为x本，那么12元的书为(105-x)本，水笔为a元</p>"
        }
      ],
      skip: true,
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
      text: "步骤2：根据等量关系列方程式",
      audio: ["步骤2：根据等量关系列方程式"],
      content: [
        {
          text: '<p><span data-id="r1">根据题意得：？</span></p>'
        }
      ],
      skip: true,
      substeps: [
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        },
        {
          audio: ["那么这个方程应该是怎样的呢"]
        },
        {
          showOptions: {
            options: ["1400-8x-12×(105-x)-a=318", "1400-8x-12×(105-x)+a=318"],
            correctAudio: ["干得不错", "恭喜，你答对了", "你真棒"],
            wrongAudio: [
              "正确答案是一千四百减八x减12乘以一百零五减x的差减a等于三百一十八，再仔细看一看这一步吧"
            ]
          }
        },
        {
          replaceContent: {
            target: '[data-id="r1"]',
            content: "根据题意得：1400-8x-12×(105-x)-a=318"
          }
        }
      ]
    },
    {
      type: "步骤-思路",
      text: "步骤3：解方程式",
      audio: ["步骤3：解方程式"],
      content: [
        {
          text: "<p>4x-a=178</p>"
        },
        {
          text: "<p>x=(178+a)/4</p>"
        },
        {
          text: "<p>x=44+(2+a)/4</p>"
        }
      ],
      skip: true,
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
      text: "步骤4：得出答案",
      audio: ["步骤4：得出答案"],
      content: [
        {
          text: "<p>又x为正整数，且a为小于8的正整数</p>"
        },
        {
          text: "<p>∴(2+a)必须被4整除</p>"
        },
        {
          text: "<p>∴a=2或6</p>"
        },
        {
          text: "<p>∴水笔的价格为2元或者6元</p>"
        }
      ],
      skip: true,
      substeps: [
        {
          audio: [
            "这一步的详细过程是这样的",
            "我们来看一下这一步是怎么做的吧",
            "我们来看一下这一步吧"
          ]
        },
        {
          audio: ["所以水笔的价格为二元或者六元"]
        }
      ]
    }
  ]
};
