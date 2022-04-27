interface IUsuario {
  id: string;
  nome: string;
  cargo?: 'Gerente'|'Supervisor'|'Coordernador'|'Funcionario';
}


function redirecione(usuario: IUsuario){
  if(usuario.cargo){
    //redireciona(usuario.cargo);
  }

  //redireciona para a area do usuario
}

































/*interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: 'Gerente' | 'Coordenador' | 'Supervisor';
}

function redirecione(usuario: IUsuario | IAdmin){
  if('cargo' in usuario){

    //Redirecionar para a area de admin.

  }

  //Redirecionar para a area de usuario.
}*/


/*
//Generic Types

function adicionaApendeALista<T>(array: T[], valor: T){
  return array.map(() => valor);
}

adicionaApendeALista([1, 2, 3], 4);

*/


/*const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});*/


/*

  interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático' | 'voador';
}

interface IVoador extends IAnimal {
  voa: boolean;
}

const animal: IAnimal = {
  nome: 'Tigre',
  tipo: 'terrestre'
}

const voa: IVoador = {
  nome: 'Papagaio',
  tipo: 'voador',
  voa: true
}

//HMMMM ENTENTENDO>>> ....
interface ICliente {
  nome: string;
  tipoDoCliente: 'Pessoa Física' | 'Pessoa Jurídica';
  Cpf: number;
}

const pessoa: ICliente = {
  nome: 'Willer',
  tipoDoCliente: 'Pessoa Física',
  Cpf: 51496082893,
}

*/
