class Greeter{
    private _title:string;
    set title(msg: string){
        this._title = msg;
    }
    get title(){
        return this._title;
    }



}

let greeter = new Greeter();
greeter.title = "Hello Vatsal";
console.log(greeter.title);