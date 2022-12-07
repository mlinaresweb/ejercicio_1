export class Contacto {
    name = '';
    apellido = '';
    email = '';
    conected = false;
    

    constructor(name, apellido, email, conected){
        this.name= name;
        this.apellido= apellido;
        this.email = email;
        this.conected = conected;
    }
}