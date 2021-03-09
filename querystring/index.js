const { strict } = require('assert');
const qs = require('querystring');

const abc = qs.escape('abcdefg');
console.log(abc); // abcdefg

const hiragana = qs.escape('あいうえお');
console.log(hiragana); // %E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A

const kanji = qs.escape('叱る');
console.log(kanji); // %E5%8F%B1%E3%82%8B

const hanKigou = qs.escape('=?#%\\');
console.log(hanKigou); // %3D%3F%23%25%5C

const zenKigou = qs.escape('＝？＃％￥');
console.log(zenKigou); // %EF%BC%9D%EF%BC%9F%EF%BC%83%EF%BC%85%EF%BF%A5

const origin = qs.stringify({ w: 'あいうえお', foo: 'bar' });
console.log(origin); // w=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A&foo=bar

const array = qs.stringify({ w: 'あいうえお', foo: ['bar', 'hoge']});
console.log(array); // w=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A&foo=bar&foo=hoge

const nest = qs.stringify({ w: 'あいうえお', foo: { bar: 2}, hoge: 'piyo'});
console.log(nest); // w=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A&foo=&hoge=piyo
// ネストした場合にはstringfyできず、キーだけ出力される

const un = qs.stringify({ w: undefined, foo: 'bar'});
console.log(un);  // w=&foo=bar
// 値がundefinedの場合、キーだけが出力される(nullでも同様だった)

const myEncoding = function (str) {
    // 「い」を「1」に置換するというエンコーディング
    return str.replace('い', '1'); 
};
const replace = qs.stringify({ w: 'あいうえお', foo: 'bar' }, null, null, { encodeURIComponent: myEncoding });
console.log(replace); // w=あ1うえお&foo=bar

const arraied = qs.parse('w=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A&foo=bar&foo=hoge');
console.log(arraied);  // { w: 'あいうえお', foo: [ 'bar', 'hoge' ] }

const unescaped = qs.unescape('w=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A&foo=bar');
console.log(unescaped);   // w=あいうえお&foo=bar
