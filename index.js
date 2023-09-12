const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


//a)  Las pizzas que tengan un id impar.

const pizzasIdImpares = pizzas.filter((pizzas) => {
  return pizzas.id % 2 === 1;
});
pizzasIdImpares.forEach((pizzas) => {
  console.log(`La ${pizzas.nombre} tiene un ID impar`);
});

//b) Responder: ¿Hay alguna pizza que valga menos de $600?
const menosDe600 = pizzas.some ( 
  (pizza) => {
    return pizza.precio < 600;
  });

  if (menosDe600) {
    console.log(`Si existe alguna pizza por menos de $600`);
  }else{
    console.log(`No hay pizzas a menos de $600`);
  }


//c) El nombre de cada pizza con su respectivo precio.
const preciosPizza = pizzas.map ((pizza) => 
console.log(`La ${pizza.nombre} cuesta ${pizza.precio}`));



//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos,
//ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor 
//es un array con ingredientes.

pizzas.forEach((arrayPizzas) => {
  console.log(`La ${arrayPizzas.nombre} tiene los siguientes ingredientes:`);

  arrayPizzas.ingredientes.forEach((arrayIngredientes) => {
    console.log(arrayIngredientes);
  });

  console.log(" ");
});