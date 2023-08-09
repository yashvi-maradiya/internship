// class key word 
class UserInfo{
    constructor(Firstname, lastname,age,email,address,){
        this.Firstname = Firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about(){
         return `${this.Firstname} ${this.lastname}`;
    }
    is18(){
        return this.age >= 18;
    }
}
const user1 = new UserInfo("lila","Taylor",18,"lila@gmail.com","US");
const user2 = new UserInfo("sophia","lee",17,"sophia@gmail.com","spain");
const user3 = new UserInfo("alice","Taylor",20,"alice@gmail.com","japan");
console.log("my address ",user1.address)
console.log(user1.about())
console.log(user2.email)
console.log(user2.about())
console.log(user3.about())
console.log(user3.is18())

// other example

class animal {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    eat(){
        return`${this.name} is eating`;
    }
    iscute(){
        return this.age <= 1;
    }
}

const animal1 = new animal("lion","1")
const animal2 = new animal("dog","2")
const animal3 = new animal("cat","0.5")
console.log(animal1)
console.log(animal1.iscute())
console.log(animal2.eat())
console.log(animal3.age)

// inheritance
// sub class extends in parent class
class monkey extends animal{

}
const animal4 = new monkey("chimpanzee","5")
console.log(animal4)
console.log(animal4.eat())

//super method
class rabbit extends animal{
    constructor(name,age,speed){
    super(name,age);
    this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}
const animal5 = new rabbit("rabbit",4,50)
console.log(animal5)
console.log(animal5.run())

//getter and setter and static method
class parson {
    constructor(Firstname,lastname,age){
        this.Firstname = Firstname;
        this.lastname = lastname;
        this.age = age;
    }
    static INFO()
    {
        return 'this is the sataic method';
    }
     get FullName(){
        return `${this.Firstname} ${this.lastname}`
     }
     set FullName(FullName){
        const [Firstname,lastname] = FullName.split(" ")
        this.Firstname = Firstname;
        this.lastname = lastname;
     }
}
const parson1 = new parson("luna","lee",19)
console.log(parson1.Firstname)
console.log(parson1.FullName)
parson1.Firstname ="Alice"
console.log(parson1)
const xyz = parson.INFO()
console.log(xyz)


