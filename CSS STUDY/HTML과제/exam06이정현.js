var bt1 = document.querySelectorAll('#a1');
var di = document.querySelectorAll('iframe');
  var i= [1,2,3,4,5];
  bt1[1].childNodes
  
for(i=0;i<bt1.length;i++){
    bt1[i].addEventListener('click',function(){
        console.log(111);
        console.log(di.length);
        for(j=0;j<di.length;j++){
            di[j].style.display = 'none';
        }
        di[i].style.display = 'block';
    })
}