
var a = 1234.123;
a
    
        function solve(){
            var a1 = prompt("2차방정식 2차항의 계수는 ?");
            var b1 = prompt("2차방정식 1차항의 계수는 ?");
            var c1 = prompt("2차방정식 상수의 계수는 ?");
            a = parseInt(a1); b= parseInt(b1); c= parseInt(c1);
            
            d = b*b-4*a*c;
            
            if(a==0){
                alert("2차 방정식이 아님!");
            }else if(d<0){
                alert("근 없음");
            }else if(d==0){
                root1 = (-1*b+Math.sqrt(d))/(2*a);
                alert("중근 : " + root1.toPrecision(3));
                
            }
            else{
                root1 = (-1*b+Math.sqrt(d))/(2*a);
                root2 = (-1*b-Math.sqrt(d))/(2*a);
                
               alert("서로 다른 두 실근 : " +root1.toPrecision(3) + "," + root2.toPrecision(3));
            }
        }
