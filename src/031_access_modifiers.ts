//public is default
//private

class BankAccount{
    public owner: string
    private balance = 0

    #otp = 123456 //consider as private #



    constructor(owner : string){
        this.owner = owner
    }

    deposit(amt : number){
        if(amt <= 0) throw new Error("amount must be positive"
           
        )
         this.balance += amt
    }

    getBalance(){
        return this.balance
    }

    verifyOtp(code:number){
        return this.#otp ===code
    }
}


const acc = new BankAccount('sam')
acc.deposit(5000)

console.log(acc.getBalance());
