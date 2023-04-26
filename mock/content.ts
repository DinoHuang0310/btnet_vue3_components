import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getSlider',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: 0,
        data: [
          {
            "title": "新北市推動重汙鍋爐退場 不再展延生煤許可 盼終結空汙夢魘",
            "url": "https://pse.is/lr32p",
            "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/106596/92.jpg_1140x855.jpg"
          },
          {
            "title": "桃園市虎頭山創新園區 專攻智慧製造等領域",
            "url": "https://pse.is/x66kk",
            "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/106598/96.jpg_1140x855.jpg"
          },
          {
            "title": "神奈川靠「市民力」 登日本最強永續城市",
            "url": "https://pse.is/wfn9c",
            "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/106849/102.jpg_1140x855.jpg"
          },
          {
            "title": "若每天睡到自然醒、看電視發呆，那幹嘛退休？學會5件事，玩出全新第二人生",
            "url": "https://pse.is/wbt82",
            "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/101072/2020.04.24-3.jpg_1140x855.jpg"
          },
          {
            "title": "今天開始，經營你的退休生活！獨立到老、不依賴子女，50歲後一定要做的8件事",
            "url": "https://pse.is/wfekd",
            "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/100056/060401.jpg_1140x855.jpg"
          },
          {
            "title": "她看似幸福無缺，怎麼還會這麼焦慮？擁有幸福快樂人生，從改變4個日常開始",
            "url": "https://pse.is/w7tu9",
            "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/104159/shutterstock_498664765.jpg_1140x855.jpg"
          },
          {
            "title": "退休金700萬就夠用！江育誠：我用「0056＋勞保老年年金」，打造每月5萬生活費",
            "url": "https://pse.is/vhqvg",
            "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/102087/Untitled.jpg_1140x855.jpg"
          }
        ],
      }
    },
  },
  {
    url: '/api/getNav',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: 0,
        data: [
          {
            title: "首頁",
            url: "#app",
            isAnchor: true,
            className: 'home',
          },
          {
            title: "composables",
            navList: [
              {
                title: "螢幕尺寸監聽",
                url: "#client-size",
                isAnchor: true,
              },
              {
                title: "window scroll監聽",
                url: "#window-scroll",
                isAnchor: true,
              },
              {
                title: "scrollTo",
                url: "#scroll-to",
                isAnchor: true,
              },
            ]
          },
          {
            title: "輪播",
            url: "#slider",
            isAnchor: true,
          },
          {
            title: "light box",
            url: "#light-box",
            isAnchor: true,
          },
          {
            title: "歷屆回顧",
            navList: [
              {
                title: '2020',
                url: '#2020'
              },
              {
                title: '2021',
                url: '#2021'
              },
              {
                title: '2022',
                url: '#2022'
              },
            ]
          },
        ]
      }
    }
  },
] as MockMethod[]