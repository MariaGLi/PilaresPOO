class Book{
    //Atributos
    #title
    #author
    #price
    #stock
    #id
    constructor(title, author, price, stock, id){
        this.#title = title
        this.#author = author
        this.#price = price
        this.#stock = stock
        this.#id = id
        
        console.log("soy yo, Bob el constructor ;)");
    }

    getInfo(){
        let info = `
        Título: ${this.#title}
        Autor: ${this.#author}
        Precio: ${this.#price}
        Existencias: ${this.#stock}
        Id: ${this.#id}`
        
        console.log(info);
    }
}

//Instanciar
const book1 = new Book('Harry Potter y la piedra filosofal', 'JK Rowling', 250.00, 100, 1);
console.log(book1.title);


console.log(book1.getInfo());
