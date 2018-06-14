const segment = require('segment');
let seg = new segment();
seg.useDefault();

var str = '今天双十一，心情很不错~';
console.log(seg.doSegment(str));