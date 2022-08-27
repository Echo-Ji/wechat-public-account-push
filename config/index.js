export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx744af6fc01f09335",
    // 公众号appSecret
    appSecret: "442f9d06ffaf39fbad58ca52058fb18c",
    // 模板消息id
    templateId: "gac40uOdreS5YwLgGuYv1M8Rf4ADUcKmIK1XbMYGz34",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o1DOp5peYKJzdlh8zTagiLDVYJrU"],
     
    // 信息配置
    // 所在省份
    province: "北京",
    // 所在城市
    city: "北京",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthday_message: "2022-10-12",
    // 在一起的日子，格式同上
    love_day: "2020-01-22",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
