var Transporte = /** @class */ (function () {
    function Transporte(marca, modelo, año, color, placa, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.placa = placa;
        this.tipo = tipo;
    }
    return Transporte;
}());
var miVehiculo = new Transporte("Toyota", "Camry", 2022, "Rojo", "48BE12", "Auto");
var miMoto = new Transporte("Daytona", "4x4", 2012, "Rojo", "EA154", "Moto");
console.log("Marca: ".concat(miVehiculo.marca));
console.log("Modelo: ".concat(miVehiculo.modelo));
console.log("A\u00F1o: ".concat(miVehiculo.año));
console.log("Color: ".concat(miVehiculo.color));
console.log("Placa: ".concat(miVehiculo.placa));
console.log("Tipo: ".concat(miVehiculo.tipo));
//Mimoto
console.log("Marca: ".concat(miMoto.marca));
console.log("Modelo: ".concat(miMoto.modelo));
console.log("A\u00F1o: ".concat(miMoto.año));
console.log("Color: ".concat(miMoto.color));
console.log("Placa: ".concat(miMoto.placa));
console.log("Tipo: ".concat(miMoto.tipo));
