function bubble(list){
  for(let i=0;i<list.length;i++){
    for(let j=0;j<list.length-i-1;j++){
      if(list[j+1]<list[j]) [list[j+1],list[j]]=[list[j],list[j+1]]
    }
  }
}
let list=[5,8,6,3,9,2,1,7]
bubble(list)
console.log(list)