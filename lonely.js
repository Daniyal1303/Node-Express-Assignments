const array = [4, 7, 9, 5,11, 9, 4, 7]

//  let lonely = array.filter((item,index)=>
//  array.indexOf(item) === array.lastIndexOf(item));
//  console.log({lonely});

 
let lonely = array.filter((item)=> {
     
    return array.indexOf(item) === array.lastIndexOf(item)
});

console.log(lonely);
