export class Developer{
    #nome;
    #skills;
    constructor(nome){
        this.#nome = nome;
        this.#skills =[];
    }
    get nome(){
       return this.#nome ? this.#nome.toUpperCase(): 'Sem nome';
    }

    addSkills(skill){
       this.#skills.push(skill);
    }

    get skills(){
       return this.#skills;
    }
}

export class Publisher{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    get nome(){
       return this.#nome ? this.#nome.toUpperCase(): 'Sem nome';
    }
}

export class Game{
    #nome;
    #achievement = [];
    #tags = [];
    
    constructor(nome){
        this.#nome = nome;
    }

    addAchievement(achievement){
        this.#achievement.push(achievement);
    }

    get achievement(){
       return this.#achievement;
    }

    addTag(tag){
        this.#tags.push(tag);
    }

    get tags(){
       return this.#tags;
    }

    get nome(){
       return this.#nome ? this.#nome.toUpperCase(): 'Sem nome';
    }
}

export class Tag{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    get nome(){
       return this.#nome;
    }
}

export class Language{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    get nome(){
       return this.#nome;
    }
}

export class Specs{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    get nome(){
       return this.#nome;
    }
}

export class Review{
    #comentario;
    constructor(comentario){
        this.#comentario = comentario;
    }
    get comentario(){
       return this.#comentario;
    }
}

export class User{
    #username;
    constructor(username){
        this.#username = username;
    }
    get username(){
       return this.#username;
    }
}

export class Profile{
    #nickname;
    constructor(nickname){
        this.#nickname = nickname;
    }
    get nickname(){
       return this.#nickname;
    }
}

export class Community{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    get nome(){
       return this.#nome;
    }
}

export class Badge{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    get nome(){
       return this.#nome;
    }
}

export class Inventory{
    #items = [];
    
    addItem(item){
        this.#items.push(item);
    }

    get items(){
       return this.#items;
    }
}

export class Item{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    get nome(){
       return this.#nome;
    }
}