// const user = {
//     user: "om",
//     age: 20,
//     gritting(){
//         console.log(`hello, i am ${this.user}`)
//     }
// }

// user.user = "sunil"
// user.gritting();
// console.log(user)
// [simple object in ja]

//class and objects and prototypes
class studant {

    constructor(name, age, stydy) {
        this.name = name;     // constructor which automatically execute when onject is created of this class
        this.age = age;
        this.stydy = stydy;
    }

    sayhello() {
        console.log(`hello, i am ${this.name}`) //method we have to call/run it saperately 
    }
};
// the prototype is predsent in the shared memeor with class and prototype 
studant.prototype.study = function () {
    console.log(`${this.name} he is not baste but average at evary thing`)
}

let stu1 = new studant("om", 20, "BE-ty") 
stu1.study()
console.log(stu1)
stu1.sayhello();

// constructor without class syntax
function User(name,email){
    this.name = name;
    this.email = email;
}

User.prototype.same = function(){
    return this.name + " " + this.email
}

let user1 = new User("om dhamole","omdhamole@gmail.com")
console.log(user1)
user1.same()


// call 
function callback(){
    console.log(`${this.name} is intalligent main`)
}

let obj = {
    name: "shubnam bhau bharsakde"
}

callback.call(obj)

//apply
function applyee(a,b){
    console.log(this.name, a + b)
} 

let objj = {
    name: "om"
}

applyee.apply(objj, [2,3])

//bind
function binddd(c , d){
    console.log(this.name, this.email, c - d)
}

let objjj = {
    name: " om dhamole",
    email: "ombhau134@gmail.com"
}

const nava = binddd.bind(objjj, 2,3)
nava()
