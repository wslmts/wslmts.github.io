function format(m){
  return m>9?m:'0'+m
}
function formatDate(value){
  let y=format(value.getFullYear())
  let m=format(value.getMonth()+1)
  //let d=format(value.getDate())
  return `${y}-${m}`
}
function  get2Days(){
  let c=28
  if(c%100==0&&c%400==0||c%4==0) c=29
  return c
}
var commom={
  methods:{
    change(v){
      let t=new Date(this.title)
      this.time=new Date(t.getFullYear(),t.getMonth()+v,1)
      this.title= formatDate(this.time)
   },
  }
}