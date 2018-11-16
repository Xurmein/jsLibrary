class User {
    constructor(name){
        this.name = name;
        this.type = 'betaUser';
    }

    greet(){
        console.log('Hello, ' + this.name);
    }

    status(){
        console.log('Present status: ' + this.type);
    }
}

var guest = new User("Guest");
var someone = new User("some1");
var someoneElse = new User("sum1_3ls3");
var chet = new User("Chet");

guest.greet();
guest.status();

someone.greet();
someone.status();

someoneElse.greet();
someoneElse.status();

chet.greet();
chet.status();