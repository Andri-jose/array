//array

class Auto {
    constructor(modelo, año, precio){
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        
    }

  
}

const vehiculos = [];

vehiculos.push(new Auto("mustang","1969",20000));
vehiculos.push(new Auto("camaro","1980",6000));
vehiculos.push(new Auto("toyota","2000",1500));

console.log(vehiculos)
                   
// se indica el precio en IVA de cada uno de los autos

console.log(vehiculos.map(vehiculo => vehiculo.precio * 0.21));
                              
// se indica el auto mas viejo

console.log(vehiculos.filter(vehiculo => vehiculo.año < 1980));

// se indica el auto por el nombre

console.log(vehiculos.find(vehiculo => vehiculo.modelo === "toyota"));
