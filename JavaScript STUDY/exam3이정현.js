function Student(name,pw,web1,web2){
    this.name=name;
    this.pw=pw;
    this.middle=web1;
    this.final=web2;
    this.total = web1 +web2;
    this.avg = this.total/2;
}
let stu =[];
stu[0] = new Student('조동영',12345,88,77);
stu[1] = new Student('박자바',54321,82,86);
stu[2] = new Student('주성치',12123,64,78);
stu[3] = new Student('강경인',11111,94,86);
stu[4] = new Student('홍길동',14345,65,75);



