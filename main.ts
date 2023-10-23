class Transporte {
    marca: string;
    modelo: string;
    año: number;
    color: string;
    placa: string;
    tipo: string;
  
    constructor(marca: string, modelo: string, año: number, color: string, placa: string,tipo:string) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.color = color;
      this.placa = placa;
      this.tipo = tipo
      
    }
  }
 
  const miVehiculo= new Transporte("Toyota", "Camry", 2022, "Rojo","48BE12","Auto");
  const miMoto = new Transporte("Daytona", "4x4", 2012, "Rojo", "EA154", "Moto")
  console.log(`Marca: ${miVehiculo.marca}`);
  console.log(`Modelo: ${miVehiculo.modelo}`);
  console.log(`Año: ${miVehiculo.año}`);
  console.log(`Color: ${miVehiculo.color}`);
  console.log(`Placa: ${miVehiculo.placa}`);
  console.log(`Tipo: ${miVehiculo.tipo}`);
  //Mimoto
  console.log(`Marca: ${miMoto.marca}`);
  console.log(`Modelo: ${miMoto.modelo}`);
  console.log(`Año: ${miMoto.año}`);
  console.log(`Color: ${miMoto.color}`);
  console.log(`Placa: ${miMoto.placa}`);
  console.log(`Tipo: ${miMoto.tipo}`);

