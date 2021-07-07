class ATM{
    constructor(accounts = [], accountLogged){
        this.accounts = accounts;
        this.accountLogged = accountLogged;
        this.accounts.push(new account("Andrew", "Obi27", 10000))
        this.accountLogged = null;
    }

    printInfo(){
        for (var i = 0; i < this.accounts.length; i++){
            prompt(`${i} : ${this.accounts[i].name} PRESS OKAY TO VIEW NEXT`)
        }
    }

    register(){
        let name = prompt("Please input name");
        console.log(name);

        let password = prompt("Please input password");
        console.log(password);

        let newAccount = new account(name, password, 0);
        this.accounts.push(newAccount);
        console.log(this.accounts);
        console.log("account has been registered")
    }

    logout()
    {
        if(this.accountLogged === null){
            console.log("No account logged in to log out from.")
            let input = prompt("would you like to log in? y/n")
            if(response === "n"){
                console.log("Goodbye!")
            }
            else if(response === "y"){
                this.login();
            }
            else{
                console.log("I didn't understand that, please try again")
                logout();
            }
        }else{
            this.accountLogged = null;
            console.log(this.accountLogged)
        }
    }

    checkBalance()
    {
        if(this.accountLogged === null){
            console.log("No account logged in to log out from.")
            let input = prompt("would you like to log in? y/n")
            if(response === "n"){
                console.log("Goodbye!")
            }
            else if(response === "y"){
                this.login();
            }
            else{
                console.log("I didn't understand that, please try again")
                logout();
            }
        }else{
        console.log("Balance = " + this.accountLogged.balance)
        }
    }

    deposite()
    {
        if(this.accountLogged === null){
            console.log("No account logged in to log out from.")
            let input = prompt("would you like to log in? y/n")
            if(response === "n"){
                console.log("Goodbye!")
            }
            else if(response === "y"){
                this.login();
            }
            else{
                console.log("I didn't understand that, please try again")
                logout();
            }
        }else{
            let amount = prompt("How much would you like to deposite? Input number");
            let newBalance = parseFloat(this.accountLogged.balance) + parseFloat(amount);
            this.accountLogged.balance = newBalance;
            console.log("Balance = " + this.accountLogged.balance)
        }
    }

    withdrawl()
    {
        if(this.accountLogged === null){
            console.log("No account logged in to log out from.")
            let input = prompt("would you like to log in? y/n")
            if(response === "n"){
                console.log("Goodbye!")
            }
            else if(response === "y"){
                this.login();
            }
            else{
                console.log("I didn't understand that, please try again")
                logout();
            }
        }else{
            let amount = prompt("How much would you like to withdrawl? Input number");
            if(parseFloat(amount) > parseFloat(this.accountLogged.balance)){
                console.log("Error withdrawl amount larger than balance")
            } else{
            let newBalance = parseFloat(this.accountLogged.balance) - parseFloat(amount);
            this.accountLogged.balance = newBalance;
            console.log("Balance = " + this.accountLogged.balance)
            }
        }
    }

    login(){
        this.printInfo();
        let input = prompt(`Please select account ` + `0 to ${this.accounts.length-1}`);
        console.log(input);

        if(this.accounts[input] === this.accountLogged){
            console.log("Already signed in")
            let x2 = true;
            while(x2 === true){
                let input2 = prompt("Already signed in! Would you like to (1)CheckBalance, (2)Deposit, (3)Withdrawl, or (4)Logout? Please input number");
                //write if statment for responses also put in while loop so if reponse is not valid it loops
                if(input2 === "1"){
                    this.checkBalance();
                    x2 = false;
                }else if( input2 === "2"){
                    this.deposite();
                    x2 = false;
                }else if( input2 === "3"){
                    this.withdrawl();
                    x2 = false;
                }else if( input2 === "4"){
                    this.logout();
                    x2 = false;
                }else{
                    console.log("not valid input")
                    x2 = true;
                }
            }
        }else{
        let name = prompt("Please input username");
        console.log(name);

        let password = prompt("Please input password");
        console.log(password);

        if(name === this.accounts[input].name && password === this.accounts[input].password){
            console.log("login successful");
            this.accountLogged = this.accounts[input];
            let x = true;
            while(x === true){
                let input2 = prompt("Would you like to (1)CheckBalance, (2)Deposit, (3)Withdrawl, or (4)Logout? Please input number");
                //write if statment for responses also put in while loop so if reponse is not valid it loops
                if(input2 === "1"){
                    this.checkBalance();
                    x = false;
                }else if( input2 === "2"){
                    this.deposite();
                    x = false;
                }else if( input2 === "3"){
                    this.withdrawl();
                    x = false;
                }else if( input2 === "4"){
                    this.logout();
                    x = false;
                }else{
                    console.log("not valid input")
                    x = true;
                }
            }          
        }else{
            console.log("login unsuccessful");
        }
    }
    }
}

class account{
    constructor(name, password, balance){
        this.name=name;
        this.password=password;
        this.balance=balance;
    }
}

let x = true;
while (x === true){
let a = new ATM
console.log(this.accounts);
let response = prompt("Welcome (1)Login or (2)Register?")
console.log(response);
if(response === "1"){
    a.login();
    x = false;
}else if(response === "2"){
    a.register();
    x=false;
}else{
    console.log("Not a valid response try again")
    x =true;
}
}

let y =true;
while(y === true){
let input = prompt("would you like to (1)register another account, (2)login, or (3)exit? input number")
            if(input === "1"){
                a.register();
                y = true;
            }
            else if(input === "2"){
                a.login();
                y = true;
            }
            else if (input === "3"){
                break;
            }
            else{
                console.log("not a valid response try again")
                y = true;
            }
        }
    

