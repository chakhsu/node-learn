const list = ['a','b','c'];

const arr = [
  [{key:'aaaa'},{key:'aaaa'},{key:'aaa'}],
  [{key:'aaaa'},{key:'aaaa'},{key:'aaa'}],
  [{key:'bbb'},{key:'bbbbbb'},{key:'bbbb'}],
  [{key:'cccccc'},{key:'c'},{key:'ccc'}],
  [{key:'cccccc'},{key:'c'},{key:'ccc'}],
  [{key:'aaaa'},{key:'aaaa'},{key:'aaa'}],
  [{key:'bbb'},{key:'bbbbbb'},{key:'bbbb'}],
  [{key:'bbb'},{key:'bbbbbb'},{key:'bbbb'}],
  [{key:'cccccc'},{key:'c'},{key:'ccc'}],
  [{key:'cccccc'},{key:'c'},{key:'ccc'}],
  [{key:'aaaa'},{key:'aaaa'},{key:'aaa'}],
  [{key:'bbb'},{key:'bbbbbb'},{key:'bbbb'}]
];

let final = [];

arr.forEach((arrItem)=>{
  list.forEach((listItem=>{
    if(typeof arrItem.key === 'string' && arrItem.key.indexOf(listItem) !== -1){
      if(!(final[listItem] instanceof Array)){
        final[listItem] = [];
      }
      final[listItem].push(arrItem);
    }
  }));
});

console.log(final);