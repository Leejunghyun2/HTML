function Student(name,pw,web1,web2){
    this.name=name;
    this.pw=pw;
    this.middle=web1;
    this.final=web2;
    this.total = web1 +web2;
    this.avg = this.total/2;
}
let stu =[];
stu[0] = new Student('홍정아',12345,88,77);
stu[1] = new Student('조민규',54321,82,86);
stu[2] = new Student('이은준',1357,64,78);
stu[3] = new Student('신은수',24680,94,86);

function score(){
for(i=0;i<stu.length;i++){
    document.getElementById('name'+i).innerHTML = stu[i].name;
    document.getElementById("middle"+i).innerHTML = stu[i].middle;
    document.getElementById("final"+i).innerHTML = stu[i].final;
    document.getElementById("total"+i).innerHTML = stu[i].total;
    }
}

