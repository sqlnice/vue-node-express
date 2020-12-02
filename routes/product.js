var express = require("express"); //使用express
var router = express.Router(); //放数据
/* GET home page. */
router.get("/", function (req, res, next) {
  var data = {
    code: 0,
    data: {
      name: "aaa",
      pwd: "123"
    },
    isSuccess: true,
    msg: "请求成功"
  };
  res.json(data);
});
module.exports = router;
