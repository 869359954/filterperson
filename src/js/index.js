var allarr = [
    {name:'邓旭明',age:18,sex:'male'},
    {name:'老邓',age:12,sex:'female'},
    {name:'胡一天',age:11,sex:'male'},
    {name:'胡一菲',age:23,sex:'female'},
    {name:'霍建华',age:21,sex:'male'},
    {name:'邓大嫂',age:17,sex:'female'}
]
var nowarr = allarr;
var lastsex = 'showall';
randerpage(allarr);
function bindeventbyaction(arr){
    arr.forEach(function(ele,index){
        switch(ele.type){
             case 'input':
                 ele.leadingrole.oninput = function(){
                     randerpage(nowarr=filterarr(allarr,this.value))
                 }
             break;
             case 'agemin':
                 ele.leadingrole.onclick = function(){
                     randerpage(agemin(sexfilter(nowarr,lastsex)))
                 }
             break;
             case 'sex':
                 ele.leadingrole.onclick = function(){
                     randerpage(sexfilter(nowarr,lastsex=ele.prama))
                 }
             break;
        }
   })
}
bindeventbyaction(actionarr);

        // int.oninput = function(){
        //     randerpage(nowarr = filterarr(allarr,this.value));
        // }
        // but1.onclick = function(){
        //     randerpage(agemin(sexfilter(nowarr,lastsex)))
        // }
        // btn2.onclick = function(){
        //     randerpage(sexfilter(nowarr,lastsex='male'));
        // }
        // btn3.onclick = function(){
        //     randerpage(sexfilter(nowarr,lastsex='female'));
        // }
        // btn4.onclick = function(){
        //     randerpage(sexfilter(nowarr,lastsex='showall'));
        // }
