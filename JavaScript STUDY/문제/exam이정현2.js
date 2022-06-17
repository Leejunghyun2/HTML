
        var jeju = document.getElementById('jeju');
        jeju.addEventListener('mouseenter',function(){
            let newul = document.getElementById('b1');
            newul.innerHTML = "<img src='jeju.jpg' width=200 height = 150>";
            
        })
        jeju.addEventListener('mouseleave',function(){
            let newul = document.getElementById('b1');
            newul.innerHTML = "";
        })
        
        var ox = false;
        var img1 = document.getElementById('img1');
        img1.addEventListener('mouseenter',function(){
            if(ox==false){
                img1.src = "css3.png"
            }
        })
        img1.addEventListener('mouseleave',function(){
            if(ox==false){
                img1.src = "html5.png"
            }
        })
        img1.addEventListener('click',function(){
            img1.src = "css3.png"
            ox= true;
            
        })
        var grand = document.getElementById('grand');
        grand.addEventListener('click',function(){
            grand.innerHTML = "자이언캐년";
            grand.addEventListener('click',function(){
                grand.innerHTML = "브라이언캐년";
                
            })
        })
        function listPlace(){
            let tag1 = document.getElementById('t1');
            let tag2 = document.getElementById('t2');
            var newplace = document.createElement('li');
            var placename = document.createTextNode(tag1.value);
            newplace.setAttribute('ondblclick','move(this);');
            newplace.appendChild(placename);
            tag2.appendChild(newplace);
            tag1.value = "";
            
        }
        var hwai = document.getElementById('hw');
        hwai.addEventListener('mouseenter',function(){
            hwai.style.backgroundColor = "lightgray";
        })
        hwai.addEventListener('mouseleave',function(){
            hwai.style.backgroundColor = "white";
        })
            
           function move(obj){
            bklist= document.getElementById('bklist');
            bklist.appendChild(obj);
            obj.removeAttribute('ondblclick');
            
        }
        var img = document.getElementById('plus');
        img.addEventListener('click',listPlace());

     
