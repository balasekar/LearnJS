let str1 = 'recede'
let charCountList = []
let strArr = str1.split('')

strArr.forEach(val => {
  let tmp = {}
  tmp.val = val
  tmp.count = strArr.filter(val1 => (val1 == val)).length
  charCountList.push(tmp)
})

let strArr2 = strArr.map(val => {
  if (charCountList.filter(item => item.val == val)[0].count > 1) {
    return ')'
  } else {
    return '('
  }
});

console.log('strArr2:', strArr2.join(''));