// const MAX_VISOR_CHAR = 21;

function insert(num) {
   document.querySelector("#displayValue").removeAttribute("hidden");
   // if (document.querySelector("#displayValue").value.length < MAX_VISOR_CHAR) {}
   if (document.querySelector("#displayValue").value == 0) {
         document.querySelector("#displayValue").value = "";
      }
   document.querySelector('#displayValue').value += num;
      
}

// Clear - Limpa o display
function clean() {

   if (document.querySelector("#displayValue").value != 0) {
      document.querySelector("#displayValue").value = 0;
   }

}

// back - deleta o ultimo caracater inserido

function back() {
   var resultado = document.querySelector('#displayValue').value;
   document.querySelector('#displayValue').value = resultado.substring(0, resultado.length -1);
   
}

// calcular - calcula o resultado das operações em questão

function calcular() {

   var resultado = document.querySelector('#displayValue').value;
   if(resultado) {
      document.querySelector('#displayValue').value = eval(resultado);
   }
}
