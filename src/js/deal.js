function randerpage(arr){
    var str ='';
    arr.forEach(function(ele,index){
        str += '<li>'+' name: '+ele.name+' age: '+ele.age+' sex: '+ele.sex+'</li>'
    })
    oul.innerHTML = str;
}
function filterarr(arr,innertext){
    return( arr.filter(function(ele,index){
           return ele.name.indexOf(innertext) != -1;
    }))
}
function agemin(arr){
    return( arr.map(function(ele,index){
         ele.age--;
         return ele;
    }))
}
function sexfilter(arr,fixsex){
    return(arr.filter(function(ele,index){
        return fixsex == 'showall' ? true : ele.sex === fixsex;
    }))
}