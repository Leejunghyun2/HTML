


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
stu[4] = new Student('송나현',112233,65,75);

