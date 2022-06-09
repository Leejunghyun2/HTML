


function Student(name,pw,web1,web2){
    this.name=name;
    this.pw=pw;
    this.web1=web1;
    this.web2=web2;
    this.total = web1 +web2;
}
let stu =[];
stu[0] = new Student('홍정아',12345,88,77);
stu[1] = new Student('조민규',1345,82,76);
stu[2] = new Student('홍아',1234,98,97);
stu[3] = new Student('아아',1357,46,77);

