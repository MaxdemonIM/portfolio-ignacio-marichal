let ultimoId = 0;

class Proyect {
    constructor(img, description, technology, link){
        this.id = ultimoId++
        this.img = img;
        this.description = description;
        this.technology = technology;
        this.link = link;
    }
}



class Technology{
    constructor(img, nombre){
        this.img = img;
        this.nombre = nombre;
    }
}