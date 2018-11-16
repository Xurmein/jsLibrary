class trial {
    constructor(n){
        this.name = n;
        this.type = 'Trial User';
    }

    greet(){
        console.log('Howdy, ' + this.name);
    }

    status(){
        console.log('Current status: ' + this.type);
    }
}

class beta extends trial {
    trialEnd(){
        console.log('You sure have gone and done it, ' + this.name + '! You better sign up for real cuz yer trial is about to end!');
    }
}

var fella = new trial("buckaroo");
var guy = new beta("buddy");

fella.greet();
fella.status();
guy.greet();
guy.status();
guy.trialEnd();
