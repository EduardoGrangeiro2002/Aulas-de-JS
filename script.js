let usuarios = ["Eduardo", "Luana", "Lamber"];
let Paragrafos = document.getElementById("Paragrafo");

function inserirUsuarios(nome){
   let promise = new Promise(function(resolve, reject){
   setTimeout(() => {
    usuarios.push(nome);

    if (nome != ""){
      error = false;

    }else{

      error = true;
    }
    
    if(!error){

      resolve()

    
    }else{

      reject({msg:"Erro de inserção de usuário"})

    }

 },1000)
})
  return promise;
  }
function listarusuários(){
let paragrafo = document.getElementById("Paragrafo");
paragrafo.innerHTML = usuarios;
}


function Adicionar(){
  
  let Texto = document.getElementById("Nomes");
  
  let nomeUs = Texto.value;
  
  async function executar(){
    await inserirUsuarios(nomeUs)
    .then(listarusuários)
    .catch((error) =>{
       console.log(error.msg)
     })
   
   }
   executar();
}

