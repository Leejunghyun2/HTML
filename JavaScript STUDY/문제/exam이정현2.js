
        var jeju = document.getElementById('jeju');
        jeju.addEventListener('mouseenter',function(){
            let div = document.createElement('img');
            div.setAttribute('id','jejuvalue');
            div.style.display = 'block';
            div.setAttribute('src',"jeju.jpg");
            div.setAttribute('width','200');
            div.setAttribute('height','150');
            jeju.appendChild(div); 
        })
        jeju.addEventListener('mouseleave',function(){
            let del = document.getElementById('jejuvalue');
            jeju.removeChild(del);
        })
        var img1 = document.getElementById('img1');
        img1.addEventListener('mouseenter',function(){
                img1.src = "css3.png"
        })
        var chanege = function(){  img1.src = "html5.png"};
        img1.addEventListener('mouseleave',chanege);
        img1.addEventListener('click',function(){
            img1.src = "css3.png"
            img1.removeEventListener('mouseleave',chanege);
        })
        var grand = document.getElementById('grand');
        grand.addEventListener('click',function(){
            grand.innerHTML = "자이언캐년";
            grand.addEventListener('click',function(){
                grand.innerHTML = "브라이언캐년";
                
            })
        })
        
    
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
        img.addEventListener('click',function listPlace(){
            let tag1 = document.getElementById('t1');
            let tag2 = document.getElementById('t2');
            var newplace = document.createElement('li');
            var placename = document.createTextNode(tag1.value);
            newplace.setAttribute('ondblclick','move(this);');
            newplace.appendChild(placename);
            tag2.appendChild(newplace);
            tag1.value = "";
        });
        
        