class animal {
    constructor() {
        this.hands = 2;
        this.legs = 2;
    }

    khanakhatehay() { }
    saslatahay() { }
}

class khekda extends animal {
    constructor() {
        super();
        this.hands = 0;
        this.legs = 8;
    }

    muttahay() { }
}

let k1 = new khekda()

class dog extends animal{
    constructor(sound){
        super();
        this.sound = sound;
    }

    tattikartahay(){}
}
let d1 = new dog("bhow bhow......");


class human {
    constructor(){
        this._age = 21;
    }

    set age(val){
        if(val < 0){
            console.error("error alay madarchode........")
        }
        this._age = val;
    }

    get age(){
        return this._age
    }
}

let h1 = new human();
h1.age = 25;