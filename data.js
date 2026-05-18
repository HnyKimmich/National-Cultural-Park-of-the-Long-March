// 长征纪念公园数据配置
const parkData = [
  {
    id: 1,
    name: "扎西会议纪念馆 / 扎西会址",
    coordinates: [27.85, 105.05], 
    keywords: ["长征进入云南东北部后的重要会议旧址"],
    address: "云南省昭通市威信县扎西镇龙井社区老街1号（扎西镇老街一带）",
    history: "中央红军长征进入云南东北部后的重要会议旧址，衔接“扎西会议—滇川黔边活动”线路。",
    officialLink: "",
    images: [
      {
        url: "images/1.1.png",
        caption: "扎西镇老街—扎西会议会址"
      },
      {
        url: "images/1.2.png",
        caption: "扎西会议相关旧址建筑" 
      }
    ]
  },
  {
    id: 2,
    name: "红军长征柯渡纪念馆",
    coordinates: [25.56, 102.86], 
    keywords: ["中央红军总部驻地旧址"],
    address: "云南省昆明市寻甸回族彝族自治县柯渡镇丹桂村195号",
    history: "纪念馆依托丹桂村中央红军总部驻地旧址和领导人驻地旧址布展，集中呈现红军长征过寻甸、过柯渡的历史。",
    officialLink: "",
    images: [
      {
        url: "images/2.1.png",
        caption: "重点路段：柯渡镇丹桂村—柯渡纪念馆入口"
      },
      {
        url: "images/2.2.png",
        caption: "柯渡纪念馆展陈/旧址场景" 
      },
      {
        url: "images/2.3.png",
        caption: "红军长征柯渡纪念馆外观" 
      }
    ]
  },
  {
    id: 3,
    name: "皎平渡红军渡口 / 红军渡江纪念馆",
    coordinates: [26.29, 102.42], 
    keywords: ["“巧渡金沙江”核心渡口"],
    address: "云南省昆明市禄劝彝族苗族自治县皎平渡镇皎平村委会拉嘎厂村一带。",
    history: "皎平渡是中央红军巧渡金沙江的重要发生地，现存红军渡口、渡江纪念馆、纪念碑等纪念设施。连接云南段与川西南方向长征线路。",
    officialLink: "https://www.ynds.yn.gov.cn/html/2023/hongseyinji_1203/1830.html",
    images: [
      {
        url: "images/3.1.png",
        caption: "皎平渡红军长征渡江纪念馆"
      },
      {
        url: "images/3.2.png",
        caption: "皎平渡红军渡江纪念碑" 
      }
    ]
  }
  ,
  {
    id: 4,
    name: "吴起中央红军长征胜利纪念园",
    coordinates: [36.92, 108.17], 
    keywords: ["长征胜利重要纪念节点"],
    address: "陕西省延安市吴起县长征街和平路2号，胜利山下。",
    history: "纪念园依托胜利山及长征胜利纪念碑、展馆、广场等空间，集中呈现中央红军到达吴起及陕北根据地的历史意义。",
    officialLink: "",
    images: [
      {
        url: "images/4.1.png",
        caption: "吴起中央红军长征胜利纪念园入口及台阶"
      },
      {
        url: "images/4.2.png",
        caption: "吴起中央红军长征胜利纪念碑" 
      }
    ]
  }
  ,
  {
    id: 5,
    name: "葛牌镇区苏维埃政府纪念馆 / 旧址群",
    coordinates: [33.91, 109.51], 
    keywords: [""],
    address: "陕西省西安市蓝田县葛牌镇葛牌街及周边旧址群",
    history: "葛牌镇保留红二十五军军部、省委会议、苏维埃政府等相关旧址，是陕西段红二十五军长征线路的重要支点。红二十五军长征进入秦岭、创建鄂豫陕革命根据地的重要点位。",
    officialLink: "",
    images: [
      {
        url: "images/5.1.png",
        caption: "葛牌镇红色旧址/纪念空间"
      },
      {
        url: "images/5.2.png",
        caption: "葛牌镇红色旧址相关展示" 
      }
    ]
  },
  {
    id: 6,
    name: "甘泉长征历史步道 / 象鼻子湾“雪地讲话”旧址",
    coordinates: [36.63, 109.51], 
    keywords: [""],
    address: "陕西省延安市甘泉县，核心点包括象鼻子湾村“雪地讲话”旧址及沿线长征历史步道。",
    history: "中央红军进入陕北后从甘泉至吴起方向的历史线路展示段,甘泉段通过步道、旧址和村落节点串联长征历史记忆，可与吴起纪念园共同构成陕西北部重点线路。",
    officialLink: "",
    images: [
      {
        url: "images/6.1.png",
        caption: "甘泉长征历史步道相关节点"
      },
      {
        url: "images/6.2.png",
        caption: "甘泉长征历史步道沿线展示" 
      }
    ]
  },
  {
    id: 7,
    name: "腊子口战役纪念馆 / 腊子口战役遗址",
    coordinates: [34.13, 103.92], 
    keywords: ["红军突破天险", "打开北上通道"],
    address: "甘肃省甘南藏族自治州迭部县腊子口镇一带；纪念馆位于腊子口镇久里才村。",
    history: "腊子口战役遗址与纪念馆共同构成长征甘肃段极具代表性的山地战役纪念空间。",
    officialLink: "https://www.lzkzyjng.com/page/cid/23.html",
    images: [
      {
        url: "images/6.1.png",
        caption: "腊子口战役纪念碑"
      },
      {
        url: "images/6.2.png",
        caption: "腊子口遗址景观" 
      }
    ]
  },
  {
    id: 8,
    name: "哈达铺红军长征纪念馆 / 哈达铺红军街",
    coordinates: [34.23, 104.22], 
    keywords: ["长征路上的加油站"],
    address: "甘肃省陇南市宕昌县哈达铺镇，国道212线沿线",
    history: "哈达铺保留红军街、纪念馆及相关旧址，是甘肃南部连接腊子口、榜罗、会宁等线路的重要中转点。红军北上途中获取陕北信息、补给休整的重要节点，常被称为“长征路上的加油站”。",
    officialLink: "https://www.gansu.gov.cn/gsszf/c100289/202105/1461998.shtml",
    images: [
      {
        url: "images/8.1.png",
        caption: "哈达铺红色旧址/红军街相关景观"
      },
      {
        url: "images/8.2.png",
        caption: "哈达铺纪念展示空间" 
      }
    ]
  },
  {
    id: 9,
    name: "红军会宁会师旧址 / 会宁红军长征胜利纪念馆",
    coordinates: [35.69, 105.05], 
    keywords: ["红一、二、四方面军会师地"],
    address: "甘肃省白银市会宁县会师镇会师路一带",
    history: "长征胜利的重要标志性节点,会宁旧址群包括会师楼、会师塔、联欢会址、长征胜利纪念馆和将帅碑林等，是甘肃段收束性核心点位。",
    officialLink: "",
    images: [
      {
        url: "images/9.1.png",
        caption: "会宁会师楼及旧址广场"
      },
      {
        url: "images/9.2.png",
        caption: "会师塔" 
      }
    ]
  },
  {
    id: 10,
    name: "中国工农红军西路军纪念馆（西宁）",
    coordinates: [36.59, 101.76], 
    keywords: [""],
    address: "青海省西宁市城中区南川东路19号，烈士陵园旁/陵园内。",
    history: "青海红色教育核心场馆，适合与班玛红军沟线路组合，形成“西宁—果洛班玛”红色研学线。馆区集中纪念中国工农红军西路军相关历史，是青海红色文化资源体系中的重要场馆。",
    officialLink: "https://www.qinghai.gov.cn/dmqh/system/2021/05/07/010382339.shtml",
    images: [
      {
        url: "images/10.1.png",
        caption: "中国工农红军西路军纪念馆外景及群雕"
      },
      {
        url: "images/10.2.png",
        caption: "中国工农红军西路军纪念馆馆区" 
      }
    ]
  },
  {
    id: 11,
    name: "班玛红军沟纪念馆",
    coordinates: [32.77, 100.83], 
    keywords: [""],
    address: "青海省果洛藏族自治州班玛县亚尔堂乡子木达沟（红军沟景区）一带。",
    history: "班玛县亚尔堂乡子木达沟—红军沟景区入口—班玛红军沟纪念馆—红军亭、红军桥、红军路等遗址群。红军沟纪念馆通过展陈、旧址和景区节点呈现红军在班玛地区活动的历史，是青海段最具代表性的长征记忆空间之一。",
    officialLink: "https://www.qinghai.gov.cn/dmqh/system/2021/04/19/010380828.shtml",
    images: [
      {
        url: "images/11.1.png",
        caption: "班玛红军沟纪念馆外观"
      },
      {
        url: "images/11.2.png",
        caption: "班玛红军沟纪念馆展陈空间" 
      }
    ]
  },
  {
    id: 12,
    name: "班玛红军亭 / 红军墓 / 红军沟遗址群",
    coordinates: [33.24, 100.84], 
    keywords: [""],
    address: "青海省果洛藏族自治州班玛县亚尔堂乡红军沟景区内，子木达沟及周边。",
    history: "遗址群以纪念亭、墓地、道路和村落记忆串联红军在班玛的活动痕迹，适合做“红军沟”专题段落。",
    officialLink: "https://www.redtourism.com.cn/ztch/content/2021-12/03/content_115906.html",
    images: [
      {
        url: "images/12.1.png",
        caption: "班玛红军亭"
      },
      {
        url: "images/12.2.png",
        caption: "红军墓及相关遗址" 
      }
    ]
  },
  {
    id: 13,
    name: "六盘山红军长征纪念馆 / 六盘山红军长征旅游区",
    coordinates: [35.67, 106.19], 
    keywords: ["翻越六盘山"],
    address: "宁夏回族自治区固原市隆德县城关镇杨家店村，隆德县城东约7公里。",
    history: "中央红军翻越六盘山及红军长征宁夏段核心展示区。景区由纪念馆、纪念碑、纪念广场、红军小道等组成，可作为宁夏段“翻越六盘山”重点线路核心。",
    officialLink: "https://www.lpshjczlyq.com/",
    images: [
      {
        url: "images/13.1.png",
        caption: "六盘山红军长征纪念馆/纪念广场"
      },
      {
        url: "images/13.2.png",
        caption: "六盘山红军长征纪念碑" 
      }
    ]
  },
  {
    id: 14,
    name: "将台堡红军长征会师纪念园",
    coordinates: [35.82, 105.84], 
    keywords: ["三大主力会师"],
    address: "宁夏回族自治区固原市西吉县将台堡镇，西吉县城南约30公里。",
    history: "纪念园依托将台堡古堡、会师纪念碑、会师广场和纪念馆展示红军会师史实，是宁夏段收束性重点节点。",
    officialLink: "https://m.ctrip.com/webapp/you/sight/xiji1446188/4577412.html?ext-shelfPage=ctrip_shelf_seo",
    images: [
      {
        url: "images/14.1.png",
        caption: "将台堡红军长征会师纪念碑"
      },
      {
        url: "images/14.2.png",
        caption: "将台堡红军会师纪念馆/纪念空间" 
      }
    ]
  },
  {
    id: 15,
    name: "单家集单南清真寺红军长征遗址",
    coordinates: [35.68, 105.83], 
    keywords: ["三过单家集","民族团结","军民鱼水情"],
    address: "宁夏回族自治区固原市西吉县兴隆镇单家集村",
    history: "单南清真寺及相邻旧址保留红军驻扎、群众夜话、民族团结故事等历史记忆，可与六盘山、将台堡串联。",
    officialLink: "",
    images: [
      {
        url: "images/15.1.png",
        caption: "单家集单南清真寺及相关红色遗址"
      },
      {
        url: "images/15.2.png",
        caption: "单家集旧址建筑细部" 
      }
    ]
  },
  {
    id: 16,
    name: "红军长征粤北纪念馆",
    coordinates: [25.32, 113.74], 
    keywords: ["过境粤北"],
    address: "广东省韶关市仁化县335县道与106国道交叉口西40米西北方向170米",
    history: "1934年10月25日—11月14日，中央红军长征过境粤北；攻占城口、突破封锁线等。广东省内唯一以红军长征为主题的纪念馆。展陈运用声、光、电、VR、多媒体和雕塑等方式，展示红军长征经过粤北的历史。",
    officialLink: "https://hongsehui.cn/service/venue/910/",
    images: [
      {
        url: "images/16.1.png",
        caption: ""
      },
      {
        url: "images/16.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 17,
    name: "乐昌红军长征教育基地",
    coordinates: [25.33, 113.43], 
    keywords: ["西进乐昌"],
    address: "韶关市乐昌市五山镇麻坑村一带",
    history: "长征国家文化公园广东段相关节点，适合进行“红军转战粤北”线路研学。",
    officialLink: "hongsehui.cn/service/venue/1297/",
    images: [
      {
        url: "images/17.1.png",
        caption: ""
      },
      {
        url: "images/17.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 18,
    name: "南粤雄关与梅关古道",
    coordinates: [25.32, 114.34], 
    keywords: [""],
    address: "广东省韶关市南雄市珠玑镇梅岭村",
    history: "赣粤边重要通道，兼具红军游击战争、粤北红色线路与古道景观几多特点。粤雄关坐落在粤赣交界的梅岭山巅隘口，关楼南向门额刻“岭南第一关”，北向门额刻“南粤雄关”。",
    officialLink: "",
    images: [
      {
        url: "images/18.1.png",
        caption: ""
      },
      {
        url: "images/18.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 19,
    name: "红军长征湘江战役纪念园",
    coordinates: [25.94, 110.96], 
    keywords: ["湘江战役"],
    address: "桂林市全州县才湾镇脚山铺",
    history: "记录了湘江战役，脚山铺阻击战，是全国唯一展示红军长征全貌的专题纪念馆；展陈规模大，资料系统，免费开放。",
    officialLink: "http://www.hjczxjzyjng.com/",
    images: [
      {
        url: "images/19.1.png",
        caption: ""
      },
      {
        url: "images/19.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 20,
    name: "兴安界首渡江遗址公园",
    coordinates: [25.73, 110.76], 
    keywords: ["过湘江重要渡河点"],
    address: "桂林市兴安县界首镇",
    history: "中央红军突破湘江的重要渡河点；光华铺阻击战主战场。界首是中央红军过湘江重要渡河点，现有红军堂、界首渡江遗址公园、胜利广场等。",
    officialLink: "http://www.gxred.cn/product/info/6387",
    images: [
      {
        url: "images/20.1.png",
        caption: ""
      },
      {
        url: "images/20.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 21,
    name: "酒海井红军纪念园",
    coordinates: [25.63, 111.12], 
    keywords: ["新圩阻击战"],
    address: "桂林市灌阳县新圩镇酒海井红军纪念园",
    history: "新圩阻击战；湘江战役烈士遗骸收殓保护。陈列馆设“血战新圩、红军忠魂、薪火相传”等展区，照片、文物和主题雕塑较丰富。",
    officialLink: "hongsehui.cn/service/venue/216/",
    images: [
      {
        url: "images/21.1.png",
        caption: ""
      },
      {
        url: "images/21.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 22,
    name: "酉阳南腰界革命根据地 / 红三军司令部旧址",
    coordinates: [28.40, 108.64], 
    keywords: ["红三军与红六军会师"],
    address: "重庆市酉阳县南腰界乡南界村2组",
    history: "1934年红三军建立黔东特区；红三军与红六军团在南腰界会师。重庆段主体建设区之一，依托红军寨、红军街、红三军司令部旧址、政治部旧址等打造红色旅游区。",
    officialLink: "https://epaper.cqrb.cn/cqrb/2023-08/22/006/content_rb_321004.htm",
    images: [
      {
        url: "images/22.1.png",
        caption: ""
      },
      {
        url: "images/22.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 23,
    name: "綦江红一军团司令部旧址 / 石壕红军烈士墓",
    coordinates: [28.54, 106.68], 
    keywords: [""],
    address: "重庆市綦江区石壕镇",
    history: "1935年1月，中央红军红一军团转战綦江石壕、安稳。綦江是中央红军长征在重庆唯一过境和转战地；石壕红军烈士墓设诗碑、烈士塑像、纪念塔、陈列室等。",
    officialLink: "hongsehui.cn/service/venue/1335/",
    images: [
      {
        url: "images/23.1.png",
        caption: ""
      },
      {
        url: "images/23.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 24,
    name: "城口川陕苏区城口纪念馆 / 红三十三军旧址群",
    coordinates: [29.53, 106.56], 
    keywords: [""],
    address: "重庆市城口县，含坪坝等片区",
    history: "红四方面军相关活动，城口红军长征西征路。重庆段拓展延伸区，官方资料提到红三十三军旧址保护展示、川陕苏区城口纪念馆提升改造。",
    officialLink: "http://www.redsa.com.cn/site/article/1270684941774839808/web/content_1270684941774839808.htm",
    images: [
      {
        url: "images/24.1.png",
        caption: ""
      },
      {
        url: "images/24.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 25,
    name: "红军飞夺泸定桥纪念馆 / 泸定桥景区",
    coordinates: [29.90, 102.23], 
    keywords: ["飞夺泸定桥"],
    address: "甘孜州泸定县丰碑路2号，距泸定桥约600米",
    history: "1935年5月29日，中央红军飞夺泸定桥。展陈包括“中央红军长征到四川、飞兵奔袭到泸定、飞夺天险泸定桥”等内容，服务设施成熟。",
    officialLink: "https://www.hjfdldqjng.com/",
    images: [
      {
        url: "images/25.1.png",
        caption: ""
      },
      {
        url: "images/25.2.png",
        caption: "" 
      }
    ]
  }
  ,
  {
    id: 26,
    name: "中国工农红军强渡大渡河纪念馆 / 安顺场遗址",
    coordinates: [29.27, 102.28], 
    keywords: ["强渡大渡河"],
    address: "雅安市石棉县安顺场，距石棉县城约11公里",
    history: "1935年5月，红军强渡大渡河。全国红色旅游精品景区之一，有红军指挥楼、纪念碑、纪念馆，实物和图片资料丰富。",
    officialLink: "https://www.ddhjng.cn/",
    images: [
      {
        url: "images/26.1.png",
        caption: ""
      },
      {
        url: "images/26.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 27,
    name: "红军长征纪念碑碑园",
    coordinates: [32.77, 103.63], 
    keywords: [],
    address: "阿坝州松潘县川主寺镇元宝山",
    history: "纪念红军长征胜利，集中呈现长征全过程。全国唯一纪念红军长征胜利的总碑园，占地约299亩，由纪念馆、群雕、主碑组成。",
    officialLink: "hongsehui.cn/service/venue/770/",
    images: [
      {
        url: "images/27.1.png",
        caption: ""
      },
      {
        url: "images/27.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 28,
    name: "遵义会议纪念馆",
    coordinates: [27.69, 106.92], 
    keywords: ["遵义会议"],
    address: "遵义市红花岗区子尹路96号",
    history: "1935年遵义会议，长征重大转折。新中国成立后最早建立的革命纪念馆之一，国家一级博物馆；有全景、语音讲解、藏品展示等。",
    officialLink: "hongsehui.cn/service/venue/365/",
    images: [
      {
        url: "images/28.1.png",
        caption: ""
      },
      {
        url: "images/28.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 29,
    name: "四渡赤水纪念馆 / 土城博物馆群",
    coordinates: [28.26, 106.01], 
    keywords: ["四渡赤水"],
    address: "遵义市习水县土城镇",
    history: "1935年四渡赤水战役。以四渡赤水战史为核心，形成四渡赤水纪念馆、女红军纪念馆、红军医院纪念馆等博物馆群。",
    officialLink: "hongsehui.cn/service/venue/342/",
    images: [
      {
        url: "images/29.1.png",
        caption: ""
      },
      {
        url: "images/29.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 30,
    name: "黎平会议纪念馆",
    coordinates: [26.23, 109.14], 
    keywords: ["黎平会议"],
    address: "黔东南州黎平县德凤街道翘街",
    history: "1934年黎平会议，中央红军入黔后重要会议，为遵义会议召开奠定基础。位于历史文化街区翘街，官网提供开放时间、预约、交通信息，适合研学参访",
    officialLink: "hongsehui.cn/service/venue/393/",
    images: [
      {
        url: "images/30.1.png",
        caption: ""
      },
      {
        url: "images/30.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 31,
    name: "红飘带",
    coordinates: [26.54, 106.81], 
    keywords: [""],
    address: "贵阳市南明区龙洞堡国际机场旁",
    history: "以长征为主题，并以“地球的红飘带”为建筑主题，以“高昂的旗帜，不绝的队伍”为核心主旨，以“一面红旗，一盏马灯”作为视觉线索的全域行浸式数字科技体验馆。",
    officialLink: "https://local.cctv.com/2023/08/01/ARTIR5005MFnUaRWe5Fuc3bS230801.shtml",
    images: [
      {
        url: "images/31.1.png",
        caption: ""
      },
      {
        url: "images/31.2.png",
        caption: "" 
      }
    ]
  },
  {
    id: 32,
    name: "长汀县瞿秋白烈士纪念园",
    coordinates: [25.83, 116.35], 
    keywords: [""],
    address: "福建省龙岩市长汀县汀州镇罗汉岭",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/32.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 33,
    name: "福建省苏维埃政府旧址",
    coordinates: [25.10, 117.04], 
    keywords: [""],
    address: "福建省龙岩市长汀县汀州镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/34.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 35,
    name: "红军长征第一村（中复村）",
    coordinates: [25.57, 116.55], 
    keywords: [""],
    address: "福建省龙岩市长汀县南山镇中复村",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/35.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 36,
    name: "松毛岭战役旧址",
    coordinates: [25.85, 116.21], 
    keywords: [""],
    address: "福建省龙岩市长汀县古城镇、连城县交界一带",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/36.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 37,
    name: "长汀县杨成武将军纪念馆",
    coordinates: [25.40, 116.38], 
    keywords: [""],
    address: "福建省龙岩市长汀县宣成乡下畲村附近",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/37.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 38,
    name: "连城县新泉整训旧址群",
    coordinates: [25.35, 116.63], 
    keywords: [""],
    address: "福建省龙岩市连城县新泉镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/38.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 39,
    name: "宁化县长征出发纪念馆",
    coordinates: [26.25, 116.67], 
    keywords: [""],
    address: "福建省三明市宁化县长征出发广场一带",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/39.1.png",
        caption: ""
      },
      {
        url: "images/39.2.png",
        caption: ""
      }
    ]
  },
  {
    id: 40,
    name: "宁化县曹坊红军街旧址",
    coordinates: [26.06, 116.62], 
    keywords: [""],
    address: "福建省三明市宁化县曹坊镇",
    history: "",
    officialLink: "",
    images: [
      
    ]
  },
  {
    id: 41,
    name: "清流县林畲毛泽东旧居",
    coordinates: [26.31, 117.06], 
    keywords: [""],
    address: "福建省三明市清流县林畲镇石下村",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/41.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 42,
    name: "瑞金中央革命根据地纪念馆",
    coordinates: [25.89, 116.02], 
    keywords: [""],
    address: "江西省赣州市瑞金市象湖镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/42.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 43,
    name: "叶坪革命旧址群",
    coordinates: [25.90, 116.08], 
    keywords: [""],
    address: "江西省赣州市瑞金市叶坪镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/43.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 44,
    name: "沙洲坝革命旧址群",
    coordinates: [25.90, 116.07], 
    keywords: [""],
    address: "江西省赣州市瑞金市沙洲坝镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/44.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 45,
    name: "于都中央红军长征出发纪念馆",
    coordinates: [25.96, 115.42,], 
    keywords: [""],
    address: "江西省赣州市于都县贡江镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/45.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 46,
    name: "于都河红军渡口",
    coordinates: [25.98, 115.42,], 
    keywords: [""],
    address: "江西省赣州市于都县贡江镇于都河沿岸",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/46.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 47,
    name: "兴国县将军园",
    coordinates: [26.34, 115.36,], 
    keywords: [""],
    address: "江西省赣州市兴国县潋江镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/47.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 48,
    name: "兴国革命烈士纪念馆",
    coordinates: [26.33, 115.35,], 
    keywords: [""],
    address: "江西省赣州市兴国县潋江镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/48.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 49,
    name: "宁都起义纪念馆",
    coordinates: [26.47, 116.02,], 
    keywords: [""],
    address: "江西省赣州市宁都县梅江镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/49.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 50,
    name: "石城县阻击战旧址群",
    coordinates: [26.28, 116.37], 
    keywords: [""],
    address: "江西省赣州市石城县境内",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/50.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 51,
    name: "鄂豫皖苏区首府革命博物馆",
    coordinates: [31.62, 114.88], 
    keywords: [""],
    address: "河南省信阳市新县首府路附近",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/51.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 52,
    name: "许世友将军故里景区",
    coordinates: [31.48, 114.99], 
    keywords: [""],
    address: "河南省信阳市新县田铺乡许家洼村",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/52.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 53,
    name: "红四方面军总部旧址",
    coordinates: [31.64, 114.88], 
    keywords: [""],
    address: "河南省信阳市新县境内",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/53.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 54,
    name: "红二十五军长征出发纪念馆",
    coordinates: [31.81, 114.32], 
    keywords: [""],
    address: "河南省信阳市罗山县何家冲村",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/54.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 55,
    name: "鄂豫皖革命纪念馆（商城相关点位）",
    coordinates: [31.66, 115.30], 
    keywords: [""],
    address: "河南省信阳市商城县境内",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/55.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 56,
    name: "金刚台红军洞群及红色遗址",
    coordinates: [31.79, 115.50], 
    keywords: [""],
    address: "河南省信阳市商城县金刚台镇一带",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/56.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 57,
    name: "桐柏革命纪念馆",
    coordinates: [32.35, 113.41], 
    keywords: [""],
    address: "河南省南阳市桐柏县城关镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/57.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 58,
    name: "红安县黄麻起义和鄂豫皖苏区纪念园",
    coordinates: [31.27, 114.60], 
    keywords: [""],
    address: "湖北省黄冈市红安县城关镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/58.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 59,
    name: "董必武故居",
    coordinates: [31.29, 114.62], 
    keywords: [""],
    address: "湖北省黄冈市红安县城关镇董必武故居景区",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/59.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 60,
    name: "七里坪长胜街革命遗址群",
    coordinates: [31.46, 114.65], 
    keywords: [""],
    address: "湖北省黄冈市红安县七里坪镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/60.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 61,
    name: "麻城市乘马会馆（中共一大代表董必武等活动相关旧址线）",
    coordinates: [31.35, 114.98], 
    keywords: [""],
    address: "湖北省黄冈市麻城市乘马岗镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/61.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 62,
    name: "大悟县鄂豫边区革命烈士陵园",
    coordinates: [31.56, 114.12], 
    keywords: [""],
    address: "湖北省孝感市大悟县城关镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/62.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 63,
    name: "宣恩县湘鄂西革命根据地旧址群",
    coordinates: [30.27, 109.49], 
    keywords: [""],
    address: "湖北省恩施土家族苗族自治州宣恩县境内",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/63.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 64,
    name: "鹤峰县红二六军团旧址群",
    coordinates: [30.27, 109.49], 
    keywords: [""],
    address: "湖北省恩施土家族苗族自治州鹤峰县容美镇及周边",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/64.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 65,
    name: "来凤县湘鄂川黔革命根据地纪念馆",
    coordinates: [29.50, 109.40], 
    keywords: [""],
    address: "湖北省恩施土家族苗族自治州来凤县翔凤镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/65.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 66,
    name: "咸丰县忠堡大捷遗址",
    coordinates: [29.68, 109.28], 
    keywords: [""],
    address: "湖北省恩施土家族苗族自治州咸丰县忠堡镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/66.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 67,
    name: "郧西县红二十五军长征转战遗址",
    coordinates: [33.17, 109.67], 
    keywords: [""],
    address: "湖北省十堰市郧西县境内",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/67.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 68,
    name: "通道转兵纪念馆",
    coordinates: [26.17, 109.80], 
    keywords: [""],
    address: "湖南省怀化市通道侗族自治县双江镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/68.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 69,
    name: "芷江受降旧址中的长征文化展示点",
    coordinates: [27.43, 109.68], 
    keywords: [""],
    address: "湖南省怀化市芷江侗族自治县芷江镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/69.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 70,
    name: "靖州县红军长征遗址群",
    coordinates: [27.43, 109.70], 
    keywords: [""],
    address: "湖南省怀化市靖州苗族侗族自治县境内",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/70.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 71,
    name: "桑植县贺龙纪念馆",
    coordinates: [29.47, 110.17], 
    keywords: [""],
    address: "湖南省张家界市桑植县洪家关白族乡",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/71.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 72,
    name: "刘家坪红二方面军长征出发地纪念地",
    coordinates: [29.46, 110.24], 
    keywords: [""],
    address: "湖南省张家界市桑植县刘家坪白族乡",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/72.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 73,
    name: "龙山县湘鄂川黔革命根据地旧址群",
    coordinates: [29.46, 109.44], 
    keywords: [""],
    address: "湖南省湘西土家族苗族自治州龙山县境内",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/73.1.png",
        caption: ""
      }
    ]
  },
  {
    id: 74,
    name: "永顺县塔卧革命旧址群",
    coordinates: [29.19, 109.96], 
    keywords: [""],
    address: "湖南省湘西土家族苗族自治州永顺县塔卧镇",
    history: "",
    officialLink: "",
    images: [
      {
        url: "images/74.1.png",
        caption: ""
      }
    ]
  }
];