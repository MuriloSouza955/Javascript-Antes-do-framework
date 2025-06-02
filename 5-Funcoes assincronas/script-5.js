
// 1- Executa imediatamente
console.log(1);

// 3- Microstasks sãoexecutadas antes de temporizadores e promessas
queueMicrotask(() => {
  console.log(2);
});

// 5- Macrotasks, aguardam o evento do temporizador.
setTimeout(() => {
  console.log(3);
}, 1000);

// 2- Execucção simcrona
console.log(4);

// 4- Promises são executadas após microtasks
Promise.resolve(true).then(() => {
  console.log(5);
});
