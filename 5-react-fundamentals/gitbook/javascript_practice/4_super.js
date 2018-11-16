class Customer {
    constructor(username, password){
        this.name = username;
        this.password = password;
        this.type = "Shopper";
    }

    greet() {
        console.log('Hey, ' + this.name);
    }
    
    status() {
        console.log('Status: ' + this.type);
    }
}

var anonShop = new Customer('Mysterio');
anonShop.greet();
anonShop.status();


//super()
class PreferredCustomer extends Customer {
    constructor(username, password, birthday){

        super(username, password); //super() must be called with '{ }' of constructor of derived classes to use 'this' keyword.

        this.type = 'Preferred Customer';
        this.bday = birthday;
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.bday);
    }
}

var venom = new PreferredCustomer('Eddie Brock', 'the_symbiote', 'September 13th, 2986');
venom.greet();
venom.status();

console.log(venom);