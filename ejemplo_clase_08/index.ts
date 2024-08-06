console.log("INICIANDO PROGRAMA");

const suma = (a: number, b: number) => a + b;

const resultado = suma(3, 5);

console.log(resultado);

console.log("PROGRAMA FINALIZADO");

// interface User {
//   id: number;
//   name: string;
// }

// const users: User[] | [] = [
//   //   { id: 1, name: "user1" },
//   //   { id: 2, name: "user2" },
//   //   { id: 3, name: "user3" },
// ];

// function fakeAsync(a: number, b: number, callback: (arg: number) => void) {
//   const suma = a + b;
//   console.log("Inicio de la funcion suma");
//   setTimeout(() => {
//     callback(suma);
//   }, 2000);
// }

// console.log("INICIANDO PROGRAMA");

// fakeAsync(3, 5, (resultado) => {
//   console.log("El resultado de la suma es: ", resultado);
// });

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (users.length === 0) {
//         reject(new Error("No hay usuarios"));
//       }
//       resolve(users);
//     }, 2000);
//   });
// }

// async function gettingUsers() {
//   try {
//     const users = await getUsers();
//     console.log(users);
//   } catch (error) {
//     console.log(String(error));
//   }
// }

// gettingUsers();

// getUsers()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// fetch("https://api.escuelajs.co/api/v1/users")
//   .then((response) => {
//     const result = response.json();
//     return result;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function getUsers() {
  try {
    const users = await fetch("https://api.escuelajs.co/api/v1/users")
    const result = await users.json();
    console.log(result);
  } catch (error) {
    console.log('Errrrrror' + error);
  }
}

getUsers()
