class ATM{
    constructor(accounts){
        this.accounts = accounts;
        accounts = [];
    }

    register(){
        let name = prompt("Please input name");
        console.log(name);

        let password = prompt("Please input password");
        console.log(password);

        let newAccount = new account(name, password, 0);
        this.accounts.push(newAccount);
        console.log(this.accounts);
    }
}

class account{
    constructor(name, password, balance){
        this.name=name;
        this.password=password;
        this.balance=balance;
    }
}

let a = new ATM
a.register();

