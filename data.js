// 长征纪念公园数据配置
const parkData = [
  {
    id: 1,
    name: "于都中央红军长征出发地纪念园",
    // 经纬度坐标 [纬度, 经度] （可以在 https://lbs.amap.com/tools/picker 拾取）
    coordinates: [25.9563, 115.4215], 
    keywords: ["长征源头", "集结出发", "中央红军"],
    address: "江西省赣州市于都县渡江大道",
    history: "1934年10月，中央红军主力各军团及中央、军委机关共8.6万人在此渡过于都河，开始举世闻名的二万五千里长征。",
    officialLink: "http://www.example.com/yudu", // 官方入口网址，若没有可写 ""
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800", // 图片1
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800", // 图片2
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"  // 图片3
    ]
  },
  {
    id: 2,
    name: "遵义会议纪念馆",
    coordinates: [27.6964, 106.9328],
    keywords: ["生死攸关", "历史转折", "遵义会议"],
    address: "贵州省遵义市红花岗区子尹路96号",
    history: "1935年1月，中共中央在此召开了政治局扩大会议，结束了‘左’倾教条主义在中央的统治，确立了毛泽东在红军和党中央的领导地位。",
    officialLink: "", // 演示为空的情况
    images: [
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800"
    ]
  }
  // 如果有新公园，直接复制上面的格式往后粘贴即可（记得用逗号隔开）
];