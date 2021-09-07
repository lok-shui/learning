export default {
  id: 1,
  commonAudios: {
    stepAudio: [
      {
        text: "第1步的详细过程是这样的",
        hash: "3286895154.wav"
      },
      {
        text: "第2步的详细过程是这样的",
        hash: "1481940299.wav"
      },
      {
        text: "第1步",
        hash: "2445060583.wav"
      },
      {
        text: "第2步",
        hash: "895723788.wav"
      },
      {
        text: "继续来看后面的步骤",
        hash: "302820716.wav"
      }
    ],
    knowledgeAudio: [
      {
        text: "这里主要考察的是含参方程组与不等式综合，可以进一步学习一下哦",
        hash: "877680219.wav"
      },
      {
        text: "在这一步遇到困难了吗？",
        hash: "1074429747.wav"
      },
      {
        text: "已记录你的问题，我们会及时给你答复！",
        hash: "3715923949.wav"
      }
    ],
    endAudio: [
      {
        text: "这道题到这里就结束了，再回顾一下整个解答过程吧",
        hash: "2147609258.wav"
      },
      {
        text: "这一问到这里就结束了，是否学习其他小问",
        hash: "3660794945.wav"
      }
    ]
  },
  title: {
    type: "解答题",
    difficulty: 3,
    text:
      '如果关于<span data-id="title1">x的不等式组<math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="{" close=""><mtable columnalign="left"><mtr><mtd><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>+</mo><mi>a</mi></mtd></mtr><mtr><mtd><mfrac><mrow><mi>x</mi><mo>+</mo><mn>5</mn></mrow><mn>2</mn></mfrac><mo>&gt;</mo><mi>x</mi><mo>-</mo><mn>3</mn></mtd></mtr></mtable></mfenced></math>只有3个整数解</span>，<span data-id="title2">求a的取值范围</span>',
    audios: [
      {
        text: "我们先来看看题目",
        hash: "591695728.wav"
      },
      {
        text: "从题干中可以知道",
        hash: "1582680295.wav"
      },
      {
        text:
          "如果关于x的不等式组，三分之二x加二小于x加a，二分之x加五大于x减3，只有三个整数解",
        hash: "1403587866.wav"
      },
      {
        text: "求a的取值范围",
        hash: "451280560.wav"
      }
    ],
    actions: [
      {},
      {},
      {
        textAction: [
          {
            type: "highlight",
            target: "[data-id='title1']"
          }
        ]
      },
      {
        textAction: [
          {
            type: "highlight",
            target: "[data-id='title2']"
          }
        ]
      }
    ]
  },
  answers: [
    {
      text: "求a的取值范围",
      index: 1,
      audio: {
        text: "求a的取值范围",
        hash: "451280560.wav"
      },
      steps: [
        {
          title: "解关于x的不等式组，用a表示x的取值范围",
          audio: {
            text: "第一步，解不等式组，用a表示出x的取值范围",
            hash: "3309901503.wav"
          },
          commonAudio: {
            text: "这道题可以这样来求解",
            hash: "2095033794.wav"
          },
          contents: [
            {
              text:
                '<math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="{" close=""><mtable columnalign="left"><mtr><mtd><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>+</mo><mi>a</mi><mo>&#x2460;</mo></mtd></mtr><mtr><mtd><mfrac><mrow><mi>x</mi><mo>+</mo><mn>5</mn></mrow><mn>2</mn></mfrac><mo>&gt;</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>&#x2461;</mo></mtd></mtr></mtable></mfenced></math>',
              audio: {
                text: "解一、二两个不等式",
                hash: "4244723753.wav"
              }
            },
            {
              text:
                '由①得：<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>&#xA0;</mo><mo>&gt;</mo><mo>&#xA0;</mo><mn>2</mn><mo>&#xA0;</mo><mo>-</mo><mo>&#xA0;</mo><mn>3</mn><mi>a</mi></math>',
              audio: {
                text: "由<SP>1<SP>得，x大于二减三a",
                hash: "2817876307.wav"
              }
            },
            {
              text: "由②得：x < 11",
              audio: {
                text: "由二得，x小于十一",
                hash: "3968051905.wav"
              }
            },
            {
              text:
                '不等式组的解集为：<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn><mo>&#xA0;</mo><mo>-</mo><mo>&#xA0;</mo><mn>3</mn><mi>a</mi><mo>&#xA0;</mo><mo>&lt;</mo><mo>&#xA0;</mo><mi>x</mi><mo>&#xA0;</mo><mo>&lt;</mo><mo>&#xA0;</mo><mn>11</mn></math>',
              audio: {
                text: "不等式组的解集为：x大于二减三a且x小于十一",
                hash: "1841971349.wav"
              }
            }
          ]
        },
        {
          title: "分情况讨论x的整数解个数，确定a的取值范围",
          audio: {
            text: "第二步，分情况讨论x的整数解个数，得出a的范围",
            hash: "2291130224.wav"
          },
          commonAudio: {
            text: "第二步",
            hash: "272025613.wav"
          },
          contents: [
            {
              text: "∵不等式组只有3个整数解",
              audio: {
                text: "因为不等式组只有三个整数解",
                hash: "892116392.wav"
              }
            },
            {
              text: "又∵x<11",
              audio: {
                text: "且x小于十一",
                hash: "2160536835.wav"
              }
            },
            {
              text: '∴x的整数解是<span data-id="replace1">？</span>',
              audio: {
                text: "所以x的整数解包括哪些值？",
                hash: "2686473905.wav"
              },
              backToAudio: {
                text: "所以x的整数解是<SP>八，九，十",
                hash: "3281850743.wav"
              },
              options: ["9, 10, 11", "8, 9, 10"],
              correctAnswers: [1],
              replace: {
                target: '[data-id="replace1"]',
                text: "8, 9, 10"
              },
              rightAudio: {
                text: "很好！答案是<SP>八，九，十",
                hash: "1676541048.wav"
              },
              wrongAudio: {
                text: "正确选项是<SP>八，九，十",
                hash: "359282446.wav"
              },
              notUnderstandAudio: {
                text: "这里应该选<SP>八，九，十",
                hash: "538135430.wav"
              },
              knowledgePoints: [
                {
                  text: "含参方程组与不等式综合",
                  cards: [
                    {
                      title: "含参方程组与不等式综合",
                      text:
                        "1.先用字母表示出不等式的解集\n\n2.再根据不等式组的特殊解确定字母的取值范围\n\n3.对于端点值得取舍，结果记得回代.",
                      firstFrame: {
                        base64:
                          "http://192.168.3.22:9000/%E4%B9%90%E4%B9%90%E8%AF%BE%E5%A0%82%E5%BE%AE%E8%AF%BE%E8%A7%86%E9%A2%91/%E5%88%9D%E4%BA%8C%E6%95%B0%E5%AD%A6/09%E4%B8%80%E5%85%83%E4%B8%80%E6%AC%A1%E4%B8%8D%E7%AD%89%E5%BC%8F%E4%B8%8E%E4%B8%80%E5%85%83%E4%B8%80%E6%AC%A1%E4%B8%8D%E7%AD%89%E5%BC%8F%E7%BB%84/12%E5%90%AB%E5%8F%82%E6%96%B9%E7%A8%8B%E7%BB%84%E4%B8%8E%E4%B8%8D%E7%AD%89%E5%BC%8F%E7%BB%BC%E5%90%88.png"
                      },
                      url:
                        "http://192.168.3.22:9000/%E4%B9%90%E4%B9%90%E8%AF%BE%E5%A0%82%E5%BE%AE%E8%AF%BE%E8%A7%86%E9%A2%91/%E5%88%9D%E4%BA%8C%E6%95%B0%E5%AD%A6/09%E4%B8%80%E5%85%83%E4%B8%80%E6%AC%A1%E4%B8%8D%E7%AD%89%E5%BC%8F%E4%B8%8E%E4%B8%80%E5%85%83%E4%B8%80%E6%AC%A1%E4%B8%8D%E7%AD%89%E5%BC%8F%E7%BB%84/12%E5%90%AB%E5%8F%82%E6%96%B9%E7%A8%8B%E7%BB%84%E4%B8%8E%E4%B8%8D%E7%AD%89%E5%BC%8F%E7%BB%BC%E5%90%88.mp4"
                    }
                  ]
                }
              ]
            },
            {
              text: "又∵x > 2 - 3a",
              audio: {
                text: "又因为x大于二减三a",
                hash: "3554443348.wav"
              }
            },
            {
              text: "∴2-3a在7与8之间",
              audio: {
                text: "所以二减三a在七与八之间",
                hash: "3395345368.wav"
              }
            },
            {
              text: "当 2-3a=8 时，不等式的解集就是8＜x＜11",
              audio: {
                text: "当二减三a等于八时，得到x大于八，且x小于十一",
                hash: "2229797181.wav"
              }
            },
            {
              text: '整数解为<span data-id="replace2">？</span>',
              audio: {
                text: "此时整数解有哪些值？",
                hash: "1432736351.wav"
              },
              backToAudio: {
                text: "此时整数解为两个，<SP>九和十",
                hash: "620443691.wav"
              },
              options: ["9， 10", "8， 9， 10"],
              correctAnswers: [0],
              replace: {
                target: '[data-id="replace2"]',
                text: "2个：9, 10"
              },
              rightAudio: {
                text: "很好！答案是<SP>九<SP>十",
                hash: "1780727387.wav"
              },
              wrongAudio: {
                text: "正确选项是<SP>九<SP>十",
                hash: "2564405367.wav"
              },
              notUnderstandAudio: {
                text: "这里应该选<SP>九<SP>十",
                hash: "787869799.wav"
              },
              knowledgePoints: [
                {
                  text: "含参方程组与不等式综合",
                  cards: [
                    {
                      title: "含参方程组与不等式综合",
                      text:
                        "1.先用字母表示出不knowledge等式的解集\n\n2.再根据不等式组的特殊解确定字母的取值范围\n\n3.对于端点值得取舍，结果记得回代.",
                      firstFrame: {
                        base64:
                          "http://192.168.3.22:9000/%E4%B9%90%E4%B9%90%E8%AF%BE%E5%A0%82%E5%BE%AE%E8%AF%BE%E8%A7%86%E9%A2%91/%E5%88%9D%E4%BA%8C%E6%95%B0%E5%AD%A6/09%E4%B8%80%E5%85%83%E4%B8%80%E6%AC%A1%E4%B8%8D%E7%AD%89%E5%BC%8F%E4%B8%8E%E4%B8%80%E5%85%83%E4%B8%80%E6%AC%A1%E4%B8%8D%E7%AD%89%E5%BC%8F%E7%BB%84/12%E5%90%AB%E5%8F%82%E6%96%B9%E7%A8%8B%E7%BB%84%E4%B8%8E%E4%B8%8D%E7%AD%89%E5%BC%8F%E7%BB%BC%E5%90%88.png"
                      },
                      url:
                        "http://192.168.3.22:9000/%E4%B9%90%E4%B9%90%E8%AF%BE%E5%A0%82%E5%BE%AE%E8%AF%BE%E8%A7%86%E9%A2%91/%E5%88%9D%E4%BA%8C%E6%95%B0%E5%AD%A6/09%E4%B8%80%E5%85%83%E4%B8%80%E6%AC%A1%E4%B8%8D%E7%AD%89%E5%BC%8F%E4%B8%8E%E4%B8%80%E5%85%83%E4%B8%80%E6%AC%A1%E4%B8%8D%E7%AD%89%E5%BC%8F%E7%BB%84/12%E5%90%AB%E5%8F%82%E6%96%B9%E7%A8%8B%E7%BB%84%E4%B8%8E%E4%B8%8D%E7%AD%89%E5%BC%8F%E7%BB%BC%E5%90%88.mp4"
                    }
                  ]
                }
              ]
            },
            {
              text: "∴2 - 3a ≠ 8",
              audio: {
                text: "所以二减三a不可等于八",
                hash: "2435135098.wav"
              }
            },
            {
              text: "当2-3a=7时，不等式的解集就是7 ＜ x ＜ 11",
              audio: {
                text: "当二减三a等于七时，得到x大于七，<SP>小于十一",
                hash: "1436631683.wav"
              }
            },
            {
              text: "整数解有3个8，9, 10",
              audio: {
                text: "此时整数解有3个",
                hash: "3221786191.wav"
              }
            },
            {
              text: "∴2-3a可以等于7",
              audio: {
                text: "所以二减三a可以等于七",
                hash: "1533891729.wav"
              }
            },
            {
              text:
                '∴<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>7</mn><mo>&#x2264;</mo><mn>2</mn><mo>-</mo><mn>3</mn><mi>a</mi><mo>&lt;</mo><mn>8</mn></math>',
              audio: {
                text: "所以二减三a大于等于七且小于八",
                hash: "646353003.wav"
              }
            },
            {
              text:
                '∴<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mn>2</mn><mo>&lt;</mo><mi>a</mi><mo>&#x2264;</mo><mo>-</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></math>',
              audio: {
                text: "解得a大于负二，<SP>小于等于负三分之五",
                hash: "1454823878.wav"
              }
            }
          ]
        }
      ]
    }
  ]
};
