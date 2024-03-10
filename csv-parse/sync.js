const fs = require('node:fs');
const { parse } = require('csv-parse/sync');

const input = fs.readFileSync('./test.csv');
const records = parse(input, {
  delimiter: ',',
  columns: true,
});

console.log(records);
// [
//   {
//     id: 'abcde12345',
//     createdAt: '2024-01-25T12:34:56+09:00',
//     family_name: '佐藤',
//     'ニックネーム': 'a.sato'
//   },
//   {
//     id: 'fghij12345',
//     createdAt: '2024-02-20T12:34:56+09:00',
//     family_name: 'スズキ',
//     'ニックネーム': 'b.suzuki'
//   },
//   {
//     id: 'klmno12345',
//     createdAt: '2023-12-31T04:12:55Z',
//     family_name: 'たかはし',
//     'ニックネーム': 'c.takahashi'
//   }
// ]
