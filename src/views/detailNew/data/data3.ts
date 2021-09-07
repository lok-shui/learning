export default {
  id: 9,
  title: {
    type: "应用题",
    difficulty: 3,
    text:
      "一块材料的形状是<span data-id='title1'>锐角三角形ABC</span>，<span data-id='title2'>边BC = 120mm</span>，<span data-id='title3'>高 AD = 80mm</span>，把它<span data-id='title4'>加工成正方形零件</span>如图1，使正方形的一边在BC上，其余两个顶点分别在AB，AC上．",
    images: [
      {
        hash: "stem1",
        points: [
          {
            text: "H",
            pos: [140, 110, 152, 124]
          },
          {
            text: "B",
            pos: [0, 102, 9, 116]
          },
          {
            text: "F",
            pos: [144, 36, 155, 50]
          },
          {
            text: "E",
            pos: [70, 36, 81, 50]
          },
          {
            text: "G",
            pos: [73, 109, 83, 122]
          },
          {
            text: "C",
            pos: [173, 103, 182, 116]
          },
          {
            text: "A",
            pos: [119, 0, 130, 11]
          },
          {
            text: "K",
            pos: [109, 34, 120, 49]
          },
          {
            text: "D",
            pos: [120, 109, 131, 123]
          }
        ],
        height: 144,
        width: 199,
        base64:
          "data:image/png;base64,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"
      },
      {
        hash: "stem2",
        points: [
          {
            text: "A",
            pos: [135, 2, 145, 15]
          },
          {
            text: "E",
            pos: [62, 62, 74, 75]
          },
          {
            text: "B",
            pos: [16, 110, 27, 123]
          },
          {
            text: "K",
            pos: [128, 60, 141, 74]
          },
          {
            text: "F",
            pos: [171, 59, 182, 74]
          },
          {
            text: "H",
            pos: [162, 113, 174, 126]
          },
          {
            text: "G",
            pos: [70, 113, 81, 126]
          },
          {
            text: "D",
            pos: [138, 114, 149, 126]
          },
          {
            text: "C",
            pos: [190, 107, 200, 121]
          }
        ],
        height: 144,
        width: 201,
        base64:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAACQCAYAAACiR086AAAMw0lEQVR4Ae3BAW5bW5BkwTxrznXUms8UGg8Njdr6lm1SIqkbgSvHcXwIV47j+BCuHMfxIVw5juNDuHIcfwFoljp5YbhyHH8IaC7q5IXhynH8IaC5qJMXhivH8QeA5g118sJw5Tg+CWjeUCcvDleO45OAqgM0S528OFw5jk8AmnfUyYvDleP4DaBZ6mQBzVInLw5XjuM/AM1SJxegWerkxeHKcXwAaN5QB2jeUCcvDFeO4/gQrhzH8SFcOY4/ADRLnfwAuHIcnwQ0F3XyA+DKcXwC0LyjTl4crhzHbwDNUgdoLurkxeHKcfwHoFnqZAHNG+rkheHKcfwC0FzUyQVo3lAnLwxXjuMdoLmokzeAZqkDVJ28MFw5jjeAZqmTXwCapQ7QLHXyonDlOC5As9TJB4BmqZMFVJ28KFw5jgU0S538B6BZ6mQBzVInLwhXjh8NaC7q5DeAZqmTC1B18oJw5fixgOaiTj4BaJY6uQDNUicvBleOHwloLurkk4BmqZM3gKqTF4Mrx48DNEud/CGgWerkDaBZ6uSF4MrxowDNUid/AWiWOnkDaJY6eSG4cvwIQHNRJ38JaJY6eQdoljp5EbhyvDyguaiTfwA0S528AzRLnbwIXDleGtBc1Mk/ApqlTn4BaJY6eQG4crwsoFnq5EaAZqmTXwCapU5eAK4cLwloljq5IaBZ6uQDQLPUyZPDlePlAM1SJzcGNEudfABoljp5crhyvAyguaiTOwCapU7+A9AsdfLEcOV4CUBzUSd3AjRLnfwHoFnq5InhyvH0gGapkzsDmqVOfgNoljp5UrhyPDWgWerkCwDNUie/ATRLnTwpXDmeFtAsdfJFgGapk08Aqk6eFK4cTwdoLurkCwHNUiefADRLnTwhXDmeCtBc1MkXA5qlTj4JqDp5QrhyPA2guaiTbwA0S518EtAsdfJkcOV4CkCz1Mk3ApqlTv4AUHXyZHDleHhAs9TJNwOapU7+ANAsdfJEcOV4WEBzUScPAGiWOvlDQNXJE8GV4yEBzUWdPAigWerkDwHNUidPAleOhwM0F3XyQIBmqZM/BDRLnTwJXDkeCtAsdfKAgGapk78ANEudPAFcOR4G0Cx18qCAZqmTvwA0S508AVw5vh3QXNTJAwOapU7+EtAsdfLgcOX4VkBzUScPDmiWOvlLQLPUyYPDlePbAM1FnTwBoFnq5B8AzVInDwxXjm8BNEudPBGgWerkHwDNUicPDFeOLwc0S508GaBZ6uQfAc1SJw8KV44vBTRLnTwhoFnq5B8BzVInDwpXji8BNBd18qSAZqmTGwCapU4eEK4cdwc0F3XyxIBmqZMbAJqlTh4Qrhx3BTRLnbwAoFnq5EaAqpMHhCvH3QDNUicvAmiWOrkRoFnq5MHgynEXQLPUyRMAmjfUAZo31AGapU5uCKg6+SSg+Q/q5AZw5bgpoLmokycCNEudLKBZ6uQCNEud3BDQLHXySUCz1MkCmos6uQFcOQI0H1AnnwQ0F3XyRIDmF9TJG0Cz1MmNAVUnnwA0S50soOoAVSc3givH/wCapU4W0Cx18glAc1EnTwZo3lAnvwA0S53cGNAsdfIbQLPUAZqlTm4MV47/AVSdLKC5qJPfAJqlTp4U0FzUyQeAZqmTOwCqTn4DaN5RJzeGK0eAZqkDNEudfALQLHXyxIDmok4+ADRLndwB0Cx18h+AZqkDNEud3BiuHAGad9TJfwCaizp5YkDzjjr5BaBZ6uQOgGapkw8AzVInC2iWOrkxXDkCNEsdoFnq5ANAc1EnTw5oljpAc1En7wDNUid3AjRLnfwC0Cx1cme48sMBzVInC6g6+QDQXNTJCwCapU4W0FzUyRtAs9TJnQDNUie/ADRLndwZrvxwQLPUyRtA1ckbQLPUyQsAmk9QJxegWerkjoBmqZML0LyjTu4IV344oFnq5AI0S51cgGapkx8MaJY6uSOgWerkG+HKDwU0v6FOFtAc30adfBNcOT4ENBd1cgRoljq5M6BZ6uSb4MrxS0Dzhjo5AjRLndwZ0FzUyTfAleP/AJqlThZQdXIEaJY6uTOguaiTb4Arx/8HaJY6uQBVJ0eAZqmTOwOqDtAsdfLFcOX4X0Cz1MkbQNXJEaBZ6uTOgKoDNEudfDFcOQI0F3XyDlB1cgRoljq5M6DqZAFVJ18MV344oLmok18Aqk6OAM1SJ3cGVJ0soFnq5Avhyg8GNBd18gGg6uQI0Cx1cmdA1ckFqDr5QrjyQwHNUie/AVSdHAGapU7uDKg6uQDNUidfBFd+IKBZ6uQTgKqTI0Cz1MmdAVUnbwBVJ18EV34QoLmok08Cqk6OAM1SJ3cGVJ28ATRLnXwBXPkhgOaiTv4AUHVyBGiWOrkzoOrkHaDq5Avgyg8ANBd18oeAqpMjQLPUyZ0BVSfvAM1SJ3eGKy8OaJY6+UtA1ckRoFnq5M6AqpN3gGapkzvDlRcGNEud/AOg6uQI0Cx1cmdA1ckvAM1SJ3eEKy8IaC7q5B8BVSdHgGapkzsDqk5+AWiWOrkjXHkxQHNRJzcAVJ0cAZqlTu4MqDr5ANAsdXInuPJCgOaiTm4EqDo5AjRLndwZUHXyAaBZ6uROcOVFAM1SJzcGVJ0cAZqlTu4MqDr5D0Cz1Mkd4MoLAJqlTu4AqDo5AjRLndwZUHXyH4BmqZM7wJUnBzRLndwJUHVyBGiWOrkzoOrkN4BmqZMbw5UnBTQXdXJHQNXJEaBZ6uTOgKqT3wCapU5uDFeeENBc1MmdAVUnR4BmqZM7A6pOPgFoljq5IVx5MkCz1MkXAapOjgDNUid3BlSdfALQLHVyQ7jyRIBmqZMvBFSdHAGapU7uDKg6+SSg6uSGcOVJAM1SJ18MqDo5AjRLndwZUHXySUCz1MmN4MqDA5qLOvkGQNXJEaBZ6uTOgKqTPwBUndwIrjwwoLmok28CVJ0cAZqlTu4MqDr5A0Cz1MkN4MqDApqLOvlGQNXJEaBZ6uTOgKqTPwRUndwArjwgoFnq5AEAVSdHgGapkzsDqk7+ENAsdfKPcOXBAM1SJw8CqDo5AjRLndwZUHXyF4Cqk3+EKw8CaC7q5IEAVSdHgGapkzsDqk7+AtAsdfIPcOUBAM1FnTwYoOrkCNAsdXJnQNXJXwCapU7+Aa58M6C5qJMHBFSdHAGapU7uDKg6+UtAs9TJX8KVbwQ0S508MKDq5AjQLHVyZ0DVyV8CmqVO/hKufBOgWerkwQFVJ0eAZqmTOwOqTv4B0Cx18hdw5RsAzVInTwCoOjkCNEud3BlQdfIPgGapk/8ANL+AK18IaI7jm6iTd4Dmok4W0Fxw5YaA5hfUyQKa4/gm6uQNoLmokzeAZuHKjQHNUgdoLurkOB4I0FzUyRtAs3DlhoBmqZMFNBd1chwPAmgu6uQDuHJDQLPUyQKapU6eGNB8QJ0cNwM0b6gDNO+ok38ANBd18gFcuSGgeUedPCmguaiTC9AsdfLDAM0H1MkNAM1SJxegWerkBoDmok4+gCs3BDRLHaC5qJMnAzQXdfIG0Cx18gMBzVInC2gu6uQfAM1FnVyAZqmTGwCaizp5A2iWOrhyI0Cz1MkCmos6eTJAs9TJ8b+AZqmTN4BmqZN/ADRLnbwBNEud3AjQXNTJApqlThau3AjQLHWygOaiTp4I0FzUyfG/gGapkzeAZqmTfwA0H1AnNwY076iTC67cCNAsdYDmDXXyRIDmok4uQPOOOvlBgGapkzeAZqmTfwA0S51cgGapky+GK/8IaD6gTp4Q0FzUyRtAs9TJDwQ0S528ATRLnfwloFnq5A2gWerki+HK8X8AzUWdvAE0S538MECz1MkbQHNRJ38JaJY6uQDNRZ18MVw5fgloLurkAjRLnfwwQLPUyRtAs9TJPwCapU4uQLPUyTfAleNDQPML6uSHAZqLOllAc1Enfwlo3lEHaN5QJ18MV47jN4DmP6iTF4Urx3F8CFeO4/gQrhzH8SFcOY7jQ7hyPDSg+QPq5LgZXDkeGlB1cgGqTn4BqDo5bgZXjocGVJ1cgOYddbKAqpML0LyhTo4/givHQwOqThbQLHWygKqTC1B1soBmqQM0F3VyfBquHA8NqDpA1QGqThZQdXIBqk4WUHVyAZqlTo5Pw5XjoQFVJ28AzVInbwBVJ78ANEudHJ+GK8dDA6pOFtAsdbKAZqmTBVSd/ALQLHVyfBquHA8NaC7qZAFVJxeguaiTd4BmqZPjj+DK8dCAqpN3gGapkwtQdfIO0Cx1cvwRXDkeGlB1cgGapU7eAapO3gCapU6OP4Yrx0MDqk7eAZqlTi5A1ckFaJY6WUCz1MnxKbhyPDSg6uQTgKqTBTQfUCfHp+DK8dCA5g+ok+NmcOU4jg/9P6AZqL/XqIVWAAAAAElFTkSuQmCC"
      }
    ],
    imagesInLine: [
      {
        hash: "title1",
        height: 65,
        width: 307,
        base64:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAABBCAYAAAC9xUMgAAAEPUlEQVR4Ae3BQW4tRxIEwfArV54jz+zqRS+IB5H8Gm2mhDAjyUlV1eVIctRNVdWlgCHJUTdVVZcChiRH3VRVXQoYkhx1U1V1KWBIctRNVdWlgCHJUTdVVZcChiRH3VRVXQoYkhx1U1V1KWBIctRNVdWlgCHJUTdVVZcChiRH3VRVXQoYkhx1U1V1KWBIctRNVdWlgCHJUTdVVZcChiRH3VRVXQoYkhx1U1V1KWBIctRNVdWlgCHJUTdVVZcChiRH3VRVXQoYkhx1U1V1KWBIctRNVdWlgCHJUTdVVZcChiRH3VRVXQoYkhx1U1V1KWBIctRNVdWlgCHJUTdVVZcChiRH3dRVgMlD3byAUTcfgMk31M0fAiYf1M0LGHWByS/UBSa/UDdfAJOHuvkAjLp5AKNuHsDkoS4w+YW6qasAQ5Kjbuo6wOQH6uYBTL6hbv4hYPJSNw9g8lAXmPxC3XwARt18ACY/UDcPYPIDdYFRF5h8UBcYdVNXAYYkR93UfxYw6uYLYPJQN38ImHxD3byAUTcPYPJSNw9g1M0XwOShbj4Ao24ewOShbh7AqJsfAJOHusDkC3WByUNdYNRNXQUYkhx1U9cAJi91gVE3L2DUzQuYfEPd/CFg1M0LmHxQF5h8Q11g8ofUBUbdPIDJQ908gFEXmPxCXWDyC3VTVwGGJEfd1HWAUReYfKFuHsDk/4y6wOQPqQuMunkAk5e6wKgLTP5H6gKTl7qpqwBDkqNu6irA5KFuXsDkoW6+AYy6+ReAyUtdYNTNB2DUBSYvdYFRN18Ak4e6+QBMXurmAUxe6uYBTH6gLjDq5gVMXuoCo27qKsCQ5KibugoweagLTP6GunkAo24ewOQLdfMPAaMuMOoCk4e6eQCjLjB5qAtMXurmAzB5qJsPwOShbr4AJg91gclDXWDyUBeYPNTNAxh1gckHdYFRN3UVYEhy1E1dBZi81M03gMlLXWDUzb8AjLrA5IO6wOSlLjB5qJsHMOrmC2DyUDcfgFE3fwMYdfMAJj9QF5j8Qt3UVYAhyVE3dQ1g8lAXmPxCXWDyDXXzB4DJS11g1M0LmLzUBSY/UDcvYPJQNx+AUTdfAJOXusDkoW4ewOShbh7A5KVuvgGMuqmrAEOSo26qqi4FDEmOuqmquhQwJDnqpqrqUsCQ5KibqqpLAUOSo26qqi4FDEmOuqmquhQwJDnqpqrqUsCQ5KibqqpLAUOSo26qqi4FDEmOuqmquhQwJDnqpqrqUsCQ5KibqqpLAUOSo26qqi4FDEmOuqmquhQwJDnqpqrqUsCQ5KibqqpLAUOSo26qqi4FDEmOuqmquhQwJDnqpqrqUsCQ5KibqqpLAUOSo26qqi4FDEmOuqmquhQwJDnqpqrqUsCQ5KibqqpLAUOSo26qqi4FDEmOuqmquhQwJDnqpqrqUsCQ5KibqqpLAUOSk6qqy/0Ftwb5UsItFgwAAAAASUVORK5CYII="
      }
    ],
    audios: [
      {
        text: "一块材料的形状是锐角三角形ABC",
        hash: "3424504289.wav"
      },
      {
        text: "边BC等于120毫米",
        hash: "335466860.wav"
      },
      {
        text: "高AD等于80毫米",
        hash: "850083765.wav"
      },
      {
        text:
          "把它加工成正方形零件如图1，使正方形的一边在BC上，其余两个顶点分别在AB、AC上。",
        hash: "3289441659.wav"
      }
    ],
    actions: [
      {
        graphActions: [
          {
            type: "polygon",
            target: "[data-id='title1']",
            points: ["A", "B", "C"],
            color: 0,
            pictureNo: 0
          }
        ]
      },
      {
        graphActions: [
          {
            type: "line",
            target: "[data-id='title2']",
            points: ["B", "C"],
            value: 120,
            color: 1,
            pictureNo: 0
          }
        ]
      },
      {
        graphActions: [
          {
            type: "line",
            target: "[data-id='title3']",
            points: ["A", "D"],
            value: 80,
            color: 2,
            pictureNo: 0
          }
        ]
      },
      {
        textActions: [
          {
            type: "highlight",
            target: "[data-id='title4']"
          }
        ]
      }
    ],
    questions: [
      '求证：<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x25B3;</mo>  <mi>A</mi>  <mi>E</mi>  <mi>F</mi>  <mo>&#x223C;</mo>  <mo>&#x25B3;</mo>  <mi>A</mi>  <mi>B</mi>  <mi>C</mi></math></span>',
      "求这个正方形零件的边长",
      "如果把它加工成矩形零件如图2，求矩形的最大面积是多少？"
    ],
    audiosForQuestions: [
      {
        text: "求证：三角形AEF相似于三角形ABC",
        hash: "1068575290.wav"
      },
      {
        text: "求这个正方形零件的边长",
        hash: "2182730231.wav"
      },
      {
        text: "如果把它加工成矩形零件如图2，求矩形的最大面积是多少？",
        hash: "1091410522.wav"
      }
    ],
    actionsForQuestions: [
      {},
      {},
      {
        graphActions: [
          {
            type: "line",
            target: "[data-id='title31']",
            points: ["pointA", "pointB"],
            color: 3,
            pictureNo: 0
          }
        ]
      }
    ],
    options: ["123123", "123123123", "dfgdfg", "123qwe"]
  },
  answers: [
    {
      text:
        '求证：<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x25B3;</mo>  <mi>A</mi>  <mi>E</mi>  <mi>F</mi>  <mo>&#x223C;</mo>  <mo>&#x25B3;</mo>  <mi>A</mi>  <mi>B</mi>  <mi>C</mi></math></span>',
      index: 1,
      audio: {
        text: "求证：三角形AEF相似于三角形ABC",
        hash: "1068575290.wav"
      },
      pictureNo: 0,
      steps: [
        {
          title: "这是一个技巧，满分的技巧就是做对所有的题目",
          type: "技巧",
          audio: {
            text: "这是一个技巧，满分的技巧就是做对所有的题目",
            hash: "1611313433.wav"
          },
          contents: [
            {
              text: "这是技巧详细过程，过程就是做对每一道题",
              audio: {
                text: "这是技巧详细过程，过程就是做对每一道题",
                hash: "918031749.wav"
              }
            }
          ]
        },
        {
          title: "根据正方形EGFH的性质，证明BC//EF",
          audio: {
            text: "根据正方形EGFH的性质，证明BC平行于EF",
            hash: "1103359301.wav"
          },
          contents: [
            {
              text: '∵四边形<span class="color0">EGFH</span>为正方形，',
              audio: {
                text: "因为四边形EGFH为正方形，",
                hash: "1236721087.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "polygon",
                    points: ["E", "G", "H", "F"],
                    color: 0
                  }
                ]
              }
            },
            {
              text:
                '<span class="color1">BC</span>//<span class="color1">EF</span>',
              audio: {
                text: "BC平行于EF",
                hash: "45619712.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["B", "C"],
                    color: 1
                  },
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 1
                  }
                ]
              }
            }
          ]
        },
        {
          title: "证明三角形AEF和三角形ABC中有两个内角相等，从而证明相似",
          audio: {
            text: "证明三角形AEF和三角形ABC中有两个内角相等，从而证明相似",
            hash: "1301463389.wav"
          },
          contents: [
            {
              text:
                '∵<span class="color2">BC</span>//<span class="color2">EF</span>',
              audio: {
                text: "因为BC平行于EF",
                hash: "2877699896.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["B", "C"],
                    color: 2
                  },
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 2
                  }
                ]
              }
            },
            {
              text:
                '∴<span class="color3">∠AEF</span>=<span class="color3">∠ABC</span>',
              audio: {
                text: "所以角AEF等于角ABC",
                hash: "272373489.wav"
              },
              knowledgePoints: [
                {
                  text: "平行线性质",
                  cards: [
                    {
                      title: "平行线性质",
                      text: "两直线平行，同位角相等",
                      firstFrame: {
                        hash: "hash",
                        base64: "base64 string"
                      },
                      url: "url链接"
                    }
                  ]
                }
              ],
              actions: {
                graphActions: [
                  {
                    type: "angle",
                    points: ["A", "E", "F"],
                    color: 3,
                    highlight: "E"
                  },
                  {
                    type: "angle",
                    points: ["A", "B", "C"],
                    color: 3,
                    highlight: "B"
                  }
                ]
              }
            },
            {
              text:
                '又∵<span class="color4">∠EAF</span>=<span class="color4">∠BAC</span>',
              audio: {
                text: "又因为角EAF等于角BAC",
                hash: "3556191841.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "angle",
                    points: ["E", "A", "F"],
                    color: 4,
                    highlight: "A"
                  },
                  {
                    type: "angle",
                    points: ["B", "A", "C"],
                    color: 4,
                    highlight: "A"
                  }
                ]
              }
            },
            {
              text:
                '∴<span class="color0">△AEF</span><span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x223C;</mo></math></span><span class="color0">△ABC</span>',
              audio: {
                text: "所以三角形AEF相似于三角形ABC",
                hash: "2027011430.wav"
              },
              knowledgePoints: [
                {
                  text: "相似三角形的判定",
                  cards: [
                    {
                      title: "相似三角形的判定",
                      text: "两角相等的三角形相似",
                      firstFrame: {
                        hash: "hash",
                        base64: "base64 string"
                      },
                      url: "url链接"
                    }
                  ]
                }
              ],
              actions: {
                graphActions: [
                  {
                    type: "polygon",
                    points: ["A", "E", "F"],
                    color: 0
                  },
                  {
                    type: "angle",
                    points: ["A", "B", "C"],
                    color: 0
                  }
                ]
              }
            },
            {
              text: "这是一条小步骤",
              audio: {
                text: "这是一条小步骤",
                hash: "2372903696.wav"
              }
            },
            {
              text: "强行加的小步骤",
              audio: {
                text: "强行加的小步骤",
                hash: "2220527411.wav"
              }
            },
            {
              text:
                '<span class="color1">AD</span>=<span data-id="replace1"></span>',
              audio: {
                text: "可以算出AD等于多少呢？",
                hash: "14560883.wav"
              },
              options: ["1000", "900"],
              correctAnswers: [0],
              replace: {
                target: '[data-id="replace1"]',
                text: "1000"
              },
              rightAudio: {
                text: "你答对了",
                hash: "1419982547.wav"
              },
              wrongAudio: {
                text: "你答错了",
                hash: "790770068.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["A", "D"],
                    color: 1
                  }
                ]
              }
            },
            {
              text: "这是又一条小步骤",
              audio: {
                text: "这是又一条小步骤",
                hash: "4009556291.wav"
              }
            },
            {
              text: "又强行加的小步骤",
              audio: {
                text: "又强行加的小步骤",
                hash: "1590357080.wav"
              }
            },
            {
              imageInLine: {
                hash: "step1.png",
                isGeo: false,
                resize: false,
                height: 65,
                width: 307,
                base64:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAABBCAYAAAC9xUMgAAADJUlEQVR4Ae3BUWpdRwAFwe4tz/6hw/148BCSJeNgmORUCRxmZi4ncCpmZm6lInAqZmZupSJwKmZmbqUicCpmZm6lInAqZmZupSJwKmZmbqUicCpmZm6lInAqZmZupSJwKmZmbqUicCpmZm6lInAqZmZupSJwKmZmbqUicCpmZm6lInAqZmZupSJwKmZmbqUicCpmZm6lInAqZmZupSJwKmZmbqUicCpmZm6lInAqZmZupSJwKmZmbqUicCpmZm6lInAqZmZupSJwKmZmbqUicCpmZm6lInAqZmZupSJwKuZ+Ko+Kh8qj4p3Kr1T8lMpLhUrFZ1QqHioV71T+LRUq36mY+6kInIr5b1D5lQqVX6n4XSoVKhUPlUfFQ6XiofJRhcp3Kh4qj4p3Kj9VMfdTETgV8/+h8qh4p/Ko+CmVlwqVl4p3KhUPlYp3Kh9VqPxExUPlMxUqjwqVirmfisCpmLupvFSoVDxUHhUvKl+p+CmViofKZypU/qYKle9UzP1UBE7F3E/lUaHyruKh8rdVqPyuiheVn6h4UfmoQuWlYu6nInAq5n4qj4oXlUfFZ1QeFX9CpUKlQqXincqjQqXiofKoeFH5TIXKo+Kh8lLxovKoeKi8VKhUzP1UBE7F3E/lowqVR8WLSoXKRxW/S6VC5V3FQ+VR8VB5V/FQ+RMVKt+pUKmY+6kInIq5n8pLxVdUPqr4EyoVKo8KlUfFi8pHFR+pVKi8q1D5SoXKT1XM/VQETsXcTeVRofKdCpWvVPyEykuFSsWLykcVX1H5SoXKS8VD5VcqPqNSMfdTETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4FTMzt1IROBUzM7dSETgVMzO3UhE4zMxc7h9uuutD09QzMQAAAABJRU5ErkJggg=="
              },
              audio: {
                text: "这是图片步骤的配音",
                hash: "2628964289.wav"
              }
            },
            {
              text: "这是下一个小步骤",
              audio: {
                text: "这是下一个小步骤",
                hash: "78909874.wav"
              }
            },
            {
              text: "本文最后的小步骤",
              audio: {
                text: "本文最后的小步骤",
                hash: "2784634639.wav"
              }
            }
          ]
        }
      ]
    },
    {
      text: "求这个正方形零件的边长",
      index: 2,
      audio: {
        text: "求这个正方形零件的边长",
        hash: "2182730231.wav"
      },
      pictureNo: 0,
      steps: [
        {
          title: "设正方形零件边长为EF=FH=x mm",
          audio: {
            text: "设正方形零件边长为EF等于FH等于x 毫米",
            hash: "4027130595.wav"
          },
          contents: [
            {
              text: "设正方形零件的边长为 x mm",
              audio: {
                text: "设正方形零件的边长为 x 毫米",
                hash: "508058.wav"
              }
            },
            {
              text:
                '∵<span class="color2">KD</span><span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x22A5;</mo></math></span><span class="color2">GH</span>',
              audio: {
                text: "KD垂直于GH",
                hash: "2438702244.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["K", "D"],
                    color: 2
                  },
                  {
                    type: "line",
                    points: ["G", "H"],
                    color: 2
                  }
                ]
              }
            },
            {
              text: '且四边形<span class="color3">EFHG</span>是正方形',
              audio: {
                text: "且四边形EFHG是正方形",
                hash: "299346506.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "polygon",
                    points: ["E", "F", "H", "G"],
                    color: 3
                  }
                ]
              }
            },
            {
              text:
                '∴<span class="color4">KD</span>=<span class="color4">FH</span>=x',
              audio: {
                text: "KD等于FH等于x",
                hash: "2580205399.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["K", "D"],
                    color: 4
                  },
                  {
                    type: "line",
                    points: ["F", "H"],
                    color: 4
                  }
                ]
              }
            },
            {
              text: '又∵<span class="color0">AD</span>=80',
              audio: {
                text: "又因为AD等于80",
                hash: "2443949559.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["A", "D"],
                    color: 0,
                    value: 80
                  }
                ]
              }
            },
            {
              text:
                '∴<span class="color1">AK</span>=<span data-id="replace2"><span>',
              audio: {
                text: "所以AK可以怎么用x表达呢？",
                hash: "1935394030.wav"
              },
              options: ["80 - x", "80 + x"],
              correctAnswers: [0],
              replace: {
                target: '[data-id="replace2"]',
                text: "80 - x"
              },
              rightAudio: {
                text: "你答对了",
                hash: "1419982547.wav"
              },
              wrongAudio: {
                text: "你答错了",
                hash: "790770068.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["A", "K"],
                    color: 1
                  }
                ]
              }
            }
          ]
        },
        {
          title: "根据EF//BC，证明三角形AEF和三角形ABC相似",
          audio: {
            text: "根据EF平行于BC，证明三角形AEF和三角形ABC相似",
            hash: "2958682046.wav"
          },
          contents: [
            {
              text: '∵四边形<span class="color2">EGFH</span>为正方形',
              audio: {
                text: "因为四边形EGFH为正方形",
                hash: "2356229639.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "polygon",
                    points: ["E", "G", "F", "H"],
                    color: 2
                  }
                ]
              }
            },
            {
              text:
                '∴<span class="color3">BC</span>//<span class="color3">EF</span>',
              audio: {
                text: "所以BC平行于EF",
                hash: "2925904751.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["B", "C"],
                    color: 3
                  },
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 3
                  }
                ]
              }
            },
            {
              text:
                '∴<span class="color4">∠AEF</span>=<span class="color4">∠ABC</span>',
              audio: {
                text: "所以角AEF等于角ABC",
                hash: "272373489.wav"
              },
              knowledgePoints: [
                {
                  text: "平行线性质",
                  cards: [
                    {
                      title: "平行线性质",
                      text: "两直线平行，同位角相等",
                      firstFrame: {
                        hash: "hash",
                        base64: "base64 string"
                      },
                      url: "url链接"
                    }
                  ]
                }
              ],
              actions: {
                graphActions: [
                  {
                    type: "angle",
                    points: ["A", "E", "F"],
                    color: 4,
                    highlight: "E"
                  },
                  {
                    type: "angle",
                    points: ["A", "B", "C"],
                    color: 4,
                    highlight: "B"
                  }
                ]
              }
            },
            {
              text:
                '又∵<span class="color0">∠EAF</span>=<span class="color0">∠BAC</span>',
              audio: {
                text: "又因为角EAF等于角BAC",
                hash: "3556191841.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "angle",
                    points: ["E", "A", "F"],
                    color: 0,
                    highlight: "A"
                  },
                  {
                    type: "angle",
                    points: ["B", "A", "C"],
                    color: 0,
                    highlight: "A"
                  }
                ]
              }
            },
            {
              text:
                '∴<span class="color1">△AEF</span><span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x223C;</mo></math></span><span class="color1">△ABC</span>',
              audio: {
                text: "所以三角形AEF相似于三角形ABC",
                hash: "2027011430.wav"
              },
              knowledgePoints: [
                {
                  text: "相似三角形的判定",
                  cards: [
                    {
                      title: "相似三角形的判定",
                      text: "两角相等的三角形相似",
                      firstFrame: {
                        hash: "hash",
                        base64: "base64 string"
                      },
                      url: "url链接"
                    }
                  ]
                }
              ],
              actions: {
                graphActions: [
                  {
                    type: "polygon",
                    points: ["A", "E", "F"],
                    color: 1
                  },
                  {
                    type: "polygon",
                    points: ["A", "B", "C"],
                    color: 1
                  }
                ]
              }
            }
          ]
        },
        {
          title: "根据相似三角形的性质，寻找与边长相关的等量关系",
          audio: {
            text: "根据相似三角形的性质，寻找与边长相关的等量关系",
            hash: "491566339.wav"
          },
          contents: [
            {
              text:
                '∵<span class="color2">△AEF</span><span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x223C;</mo></math></span><span class="color2">△ABC</span>',
              audio: {
                text: "因为三角形AEF相似于三角形ABC",
                hash: "4187354408.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "polygon",
                    points: ["A", "E", "F"],
                    color: 2
                  },
                  {
                    type: "polygon",
                    points: ["A", "B", "C"],
                    color: 2
                  }
                ]
              }
            },
            {
              text:
                '且<span class="color3">AD</span><span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x22A5;</mo></math></span><span class="color3">BC</span>，',
              audio: {
                text: "且AD垂直于BC",
                hash: "1229558829.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["A", "D"],
                    color: 3
                  },
                  {
                    type: "line",
                    points: ["B", "C"],
                    color: 3
                  }
                ]
              }
            },
            {
              text:
                '<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mfrac class="color4">    <mrow>      <mi>E</mi>      <mi>F</mi>    </mrow>    <mrow class="color0">      <mi>B</mi>      <mi>C</mi>    </mrow>  </mfrac>  <mo>=</mo>  <mfrac class="color4">    <mrow>      <mi>A</mi>      <mi>K</mi>    </mrow>    <mrow class="color0">      <mi>A</mi>      <mi>D</mi>    </mrow>  </mfrac></math></span>',
              audio: {
                text: "EF比上BC等于AK比上AD",
                hash: "70276207.wav"
              },
              knowledgePoints: [
                {
                  text: "相似三角形性质",
                  cards: [
                    {
                      title: "相似三角形性质",
                      text: "相似三角形对应边上中线、高、角平分线成比例",
                      firstFrame: {
                        hash: "hash",
                        base64: "base64 string"
                      },
                      url: "url链接"
                    }
                  ]
                }
              ],
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 4
                  },
                  {
                    type: "line",
                    points: ["A", "K"],
                    color: 4
                  },
                  {
                    type: "line",
                    points: ["B", "C"],
                    color: 0
                  },
                  {
                    type: "line",
                    points: ["A", "D"],
                    color: 0
                  }
                ]
              }
            }
          ]
        },
        {
          title: "根据等量关系，代入x，并解方程得到答案",
          audio: {
            text: "根据等量关系，代入x，并解方程得到答案",
            hash: "3018054970.wav"
          },
          contents: [
            {
              text:
                '∵<span class="color1">EF</span>=x，<span class="color2">AK</span>=80 - x',
              audio: {
                text: "因为EF等于x，AK等于八十减x",
                hash: "435496477.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 1
                  },
                  {
                    type: "line",
                    points: ["A", "K"],
                    color: 2
                  }
                ]
              }
            },
            {
              text:
                '且<span class="color3">BC</span>=120，<span class="color4">AD</span>=80',
              audio: {
                text: "且BC等于120，AD等于80",
                hash: "3825588537.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["B", "C"],
                    color: 3,
                    value: 120
                  },
                  {
                    type: "line",
                    points: ["A", "D"],
                    color: 4,
                    value: 80
                  }
                ]
              }
            },
            {
              text:
                '∴<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mfrac>    <mi>x</mi>    <mn>120</mn>  </mfrac>  <mo>=</mo>  <mfrac>    <mrow>      <mn>80</mn>      <mo>&#x2212;</mo>      <mi>x</mi>    </mrow>    <mn>80</mn>  </mfrac></math></span>，',
              audio: {
                text: "代入等量关系得到关于x的方程",
                hash: "2881153110.wav"
              }
            },
            {
              text: "解得x=48",
              audio: {
                text: "解得x等于48",
                hash: "3943345605.wav"
              }
            },
            {
              text: "∴正方形零件的边长为48mm",
              audio: {
                text: "所以正方形零件的边长为四十八毫米",
                hash: "1287843317.wav"
              }
            }
          ]
        }
      ]
    },
    {
      text: "如果把它加工成矩形零件如图2，求矩形的最大面积是多少？",
      index: 3,
      audio: {
        text: "如果把它加工成矩形零件如图2，求矩形的最大面积是多少",
        hash: "4184820995.wav"
      },
      pictureNo: 1,
      steps: [
        {
          title: "设矩形的边长分别为x和y，寻找x和y的等量关系",
          audio: {
            text: "设矩形的边长分别为x和y，寻找x和y的等量关系",
            hash: "3418843908.wav"
          },
          contents: [
            {
              text:
                '设<span class="color0">EF</span> = x，<span class="color1">EG</span> = y，',
              audio: {
                text: "设EF等于x，EG等于y",
                hash: "1827932759.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 0
                  },
                  {
                    type: "line",
                    points: ["E", "G"],
                    color: 1
                  }
                ]
              }
            },
            {
              text:
                '∵<span class="color2">△AEF</span><span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x223C;</mo></math></span><span class="color3">△ABC</span>',
              audio: {
                text: "因为三角形AEF相似于三角形ABC",
                hash: "4187354408.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "polygon",
                    points: ["A", "E", "F"],
                    color: 2
                  },
                  {
                    type: "polygon",
                    points: ["A", "B", "C"],
                    color: 3
                  }
                ]
              }
            },
            {
              text:
                '∴<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mfrac>    <mrow class="color4">      <mi>E</mi>      <mi>F</mi>    </mrow>    <mrow class="color0">      <mi>B</mi>      <mi>C</mi>    </mrow>  </mfrac>  <mo>=</mo>  <mfrac>    <mrow class="color4">      <mi>A</mi>      <mi>K</mi>    </mrow>    <mrow class="color0">      <mi>A</mi>      <mi>D</mi>    </mrow>  </mfrac></math></span>，',
              audio: {
                text: "所以EF比上BC等于AK比上AD",
                hash: "2252960820.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 4
                  },
                  {
                    type: "line",
                    points: ["A", "K"],
                    color: 4
                  },
                  {
                    type: "line",
                    points: ["B", "C"],
                    color: 0
                  },
                  {
                    type: "line",
                    points: ["A", "D"],
                    color: 0
                  }
                ]
              }
            },
            {
              text:
                '∴<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mfrac>    <mi>x</mi>    <mn>120</mn>  </mfrac>  <mo>=</mo>  <mfrac>    <mrow>      <mn>80</mn>      <mo>&#x2212;</mo>      <mi>y</mi>    </mrow>    <mn>80</mn>  </mfrac></math></span>',
              audio: {
                text: "将x与y代入得到等量关系式",
                hash: "190768048.wav"
              }
            },
            {
              text:
                '∴y=80-<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mfrac>    <mn>2</mn>    <mn>3</mn>  </mfrac></math></span>x',
              audio: {
                text: "整理得到y的表达式为80减三分之二x",
                hash: "2565375699.wav"
              }
            }
          ]
        },
        {
          title: "将x与y的关系式带入面积公式S=xy，得出S的表达式",
          audio: {
            text: "将x与y的关系式带入面积公式S等于xy，得出S的表达式",
            hash: "4165741276.wav"
          },
          contents: [
            {
              text:
                '矩形面积S=xy=<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x2212;</mo>  <mfrac>    <mn>2</mn>    <mn>3</mn>  </mfrac>  <mi>x</mi>  <mo data-mjx-texclass="OP" movablelimits="true">sup</mo>  <mrow>    <mn>2</mn>  </mrow></math></span>+80x',
              audio: {
                text: "得出矩形面积S=负三分之二x的平方加80x",
                hash: "115211428.wav"
              }
            }
          ]
        },
        {
          title: "根据x的取值范围，得出S的最大值",
          audio: {
            text: "根据x的取值范围，得出S的最大值",
            hash: "1841728219.wav"
          },
          contents: [
            {
              text:
                '∵<span class="color1">EF</span>始终在<span class="color2">△ABC</span>内',
              audio: {
                text: "因为EF始终在三角形ABC内",
                hash: "918482279.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 1
                  },
                  {
                    type: "polygon",
                    points: ["A", "B", "C"],
                    color: 2
                  }
                ]
              }
            },
            {
              text:
                '∴<span class="color3">EF</span>的取值范围是：<span data-id="replace3"><span>',
              audio: {
                text: "所以EF的取值范围是",
                hash: "2057878535.wav"
              },
              options: ["0 < EF < BC", "0 < EF < GH"],
              correctAnswers: [0],
              replace: {
                target: '[data-id="replace3"]',
                text: "0 < EF < BC"
              },
              rightAudio: {
                text: "你答对了",
                hash: "1419982547.wav"
              },
              wrongAudio: {
                text: "你答错了",
                hash: "790770068.wav"
              },
              actions: {
                graphActions: [
                  {
                    type: "line",
                    points: ["E", "F"],
                    color: 3
                  }
                ]
              }
            },
            {
              text: "即：0 < x < 120",
              audio: {
                text: "即0小于x小于一百二十",
                hash: "1590668081.wav"
              }
            },
            {
              text:
                '∵S = xy = <span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x2212;</mo>  <mfrac>    <mn>2</mn>    <mn>3</mn>  </mfrac>  <mi>x</mi>  <mo data-mjx-texclass="OP" movablelimits="true">sup</mo>  <mrow>    <mn>2</mn>  </mrow></math></span>+80x=<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mo>&#x2212;</mo>  <mfrac>    <mn>2</mn>    <mn>3</mn>  </mfrac>  <mo stretchy="false">(</mo>  <mi>x</mi>  <mo>&#x2212;</mo>  <mn>60</mn>  <mo stretchy="false">)</mo>  <mo data-mjx-texclass="OP" movablelimits="true">sup</mo>  <mrow>    <mn>2</mn>  </mrow></math></span>+2400',
              audio: {
                text:
                  "S等于xy等于负三分之二x的平方加上八十x，等于负三分之二x减去六十的平方加上二千四百",
                hash: "3379887768.wav"
              }
            },
            {
              text:
                '故当x=60时，此时矩形的面积最大，最大面积为2400<span><math xmlns="http://www.w3.org/1998/Math/MathML">  <mi>m</mi>  <mi>m</mi>  <mo data-mjx-texclass="OP" movablelimits="true">sup</mo>  <mrow>    <mn>2</mn>  </mrow></math></span>.',
              audio: {
                text:
                  "故当x等于六十时，此时矩形的面积最大，最大面积为二千四百平方毫米",
                hash: "124447686.wav"
              }
            }
          ]
        }
      ]
    }
  ]
};
