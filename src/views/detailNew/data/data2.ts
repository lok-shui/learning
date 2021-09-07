export default {
  id: 1,
  title: {
    type: "解答题",
    difficulty: 3,
    text:
      '如果关于<span data-id="title1">x的不等式组</span><math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="{" close=""><mtable columnalign="left"><mtr><mtd><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>+</mo><mi>a</mi></mtd></mtr><mtr><mtd><mfrac><mrow><mi>x</mi><mo>+</mo><mn>5</mn></mrow><mn>2</mn></mfrac><mo>&gt;</mo><mi>x</mi><mo>-</mo><mn>3</mn></mtd></mtr></mtable></mfenced></math><span data-id="title2">只有3个整数解，</span>求a的取值范围',
    audios: [
      {
        text: "如果关于x的不等式组 三分之二x加二小于x加a，二分之x加五大于x减3",
        hash: "2601291973.wav"
      },
      {
        text: "只有3个整数解，求a的取值范围",
        hash: "1384760896.wav"
      }
    ],
    actions: [
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
    ],
    questions: ["求a的取值范围"],
    audiosForQuestions: [
      {
        text: "求a的取值范围",
        hash: "451280560.wav"
      }
    ]
  },
  answers: [
    {
      text: "求a的取值范围",
      index: 1,
      audio: {
        text: "求a的取值范围；",
        hash: "2853833005.wav"
      },
      steps: [
        {
          title: "解关于x的不等式组",
          audio: {
            text: "解关于x的不等式组",
            hash: "3250446072.wav"
          },
          contents: [
            {
              text:
                '<math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="{" close=""><mtable columnalign="left"><mtr><mtd><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>+</mo><mi>a</mi><mo>&#x2460;</mo></mtd></mtr><mtr><mtd><mfrac><mrow><mi>x</mi><mo>+</mo><mn>5</mn></mrow><mn>2</mn></mfrac><mo>&gt;</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>&#x2461;</mo></mtd></mtr></mtable></mfenced></math>'
            },
            {
              text:
                '由①得：<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>&#xA0;</mo><mo>&gt;</mo><mo>&#xA0;</mo><mn>2</mn><mo>&#xA0;</mo><mo>-</mo><mo>&#xA0;</mo><mn>3</mn><mi>a</mi></math>',
              audio: {
                text: "由1得，x大于2减三a",
                hash: "836519498.wav"
              }
            },
            {
              text: "由②得：x < 11",
              audio: {
                text: "由2得，x小于11",
                hash: "2313782302.wav"
              }
            },
            {
              text:
                '不等式组的解集为：<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn><mo>&#xA0;</mo><mo>-</mo><mo>&#xA0;</mo><mn>3</mn><mi>a</mi><mo>&#xA0;</mo><mo>&lt;</mo><mo>&#xA0;</mo><mi>x</mi><mo>&#xA0;</mo><mo>&lt;</mo><mo>&#xA0;</mo><mn>11</mn></math>',
              audio: {
                text: "不等式组的解集为：x大于二减三a小于十一",
                hash: "3482935967.wav"
              }
            }
          ]
        },
        {
          title: "利用整数解确定a的取值范围",
          audio: {
            text: "利用整数解确定a的取值范围",
            hash: "3463180779.wav"
          },
          contents: [
            {
              text: "∵不等式组只有3个整数解",
              audio: {
                text: "因为不等式组只有3个整数解",
                hash: "3827957826.wav"
              }
            },
            {
              text: "∴不等式组的整数解是8,9,10",
              audio: {
                text: "所以不等式组的整数解是八，九，十",
                hash: "4138903197.wav"
              }
            },
            {
              text: "∴2-3a在7与8之间",
              audio: {
                text: "所以2-3a在7与8之间",
                hash: "3427694700.wav"
              }
            },
            {
              text: "∵如果2-3a=8，那么不等式的解集就是8＜x＜11，",
              audio: {
                text:
                  "因为如果二减三a等于八，那么不等式的解集就是x大于八小于十一，",
                hash: "1139142616.wav"
              }
            },
            {
              text: "整数解只有两个9,10，",
              audio: {
                text: "整数解只有两个九，十",
                hash: "1483616251.wav"
              }
            },
            {
              text: '∴2-3a<span data-id="replace1"></span>等于8',
              audio: {
                text: "所以二减三a是否可以等于八",
                hash: "1865340220.wav"
              },
              options: ["可以", "不可以"],
              correctAnswers: [1],
              replace: {
                target: '[data-id="replace1"]',
                text: "不可以"
              },
              rightAudio: {
                text: "你答对了",
                hash: "1419982547.wav"
              },
              wrongAudio: {
                text: "你答错了",
                hash: "790770068.wav"
              },
              knowledgePoints: [
                {
                  text: "含参方程组与不等式综合",
                  cards: [
                    {
                      title: "含参方程组与不等式综合",
                      text: "",
                      firstFrame: {
                        hash: "hash",
                        base64: "base64 string"
                      },
                      url: "url链接"
                    }
                  ]
                }
              ]
            },
            {
              text: "∵如果2-3a=7，那么不等式的解集就是7＜x＜11，",
              audio: {
                text:
                  "因为如果二减三a等于七，那么不等式的解集就是x大于七小于十一",
                hash: "421872699.wav"
              }
            },
            {
              text: "整数解有3个8，9,10，",
              audio: {
                text: "整数解有三个八，九，十",
                hash: "2167962645.wav"
              }
            },
            {
              text: '∴2-3a<span data-id="replace2"></span>等于7',
              audio: {
                text: "所以二减三a是否可以等于七",
                hash: "2493147373.wav"
              },
              options: ["可以", "不可以"],
              correctAnswers: [0],
              replace: {
                target: '[data-id="replace2"]',
                text: "可以"
              },
              rightAudio: {
                text: "你答对了",
                hash: "1419982547.wav"
              },
              wrongAudio: {
                text: "你答错了",
                hash: "790770068.wav"
              },
              knowledgePoints: [
                {
                  text: "含参方程组与不等式综合",
                  cards: [
                    {
                      title: "含参方程组与不等式综合",
                      text: "",
                      firstFrame: {
                        hash: "hash",
                        base64: "base64 string"
                      },
                      url: "url链接"
                    }
                  ]
                }
              ]
            },
            {
              text:
                '∴<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>7</mn><mo>&#x2264;</mo><mn>2</mn><mo>-</mo><mn>3</mn><mi>a</mi><mo>&lt;</mo><mn>8</mn></math>',
              audio: {
                text: "所以二减三a大于等于七小于八",
                hash: "2031702527.wav"
              }
            },
            {
              text:
                '∴<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mn>2</mn><mo>&lt;</mo><mi>a</mi><mo>&#x2264;</mo><mo>-</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></math>',
              audio: {
                text: "所以a大于负二小于等于负三分之五",
                hash: "1151787704.wav"
              }
            }
          ]
        }
      ]
    }
  ]
};
