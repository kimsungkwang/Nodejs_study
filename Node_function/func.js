// import ~~~ from ~~~
const { odd, even } = require("./var");

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

// 파일 당 한번 씩만 사용 가능 !
// exports default ~~~
module.exports = checkOddOrEven;
