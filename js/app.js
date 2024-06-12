// Selectores 
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');


// Objeto de cita
const citaObj = {
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: ''
}

// Eventos 
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

function submitCita(e) {
  e.preventDefault();
  if(Object.values(citaObj).some( valor => valor.trim() === '')) {
    new Notificacion({
      texto: 'Todos los campos son obligatorios',
      tipo: 'error'
    })
    return;
  }
}


class Notificacion {
  constructor({ texto, tipo }) {
    this.texto = texto;
    this.tipo = tipo;
    
    
    this.mostrar();
  }

  mostrar() {
    const alerta = document.createElement('DIV');
    alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm')

    // Si es tipo derror, agrega una clase
    this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

    // Mensaje de error
    alerta.textContent = this.texto;

    formulario.parentElement.insertBefore(alerta, formulario);

    setTimeout(() => {
      alerta.remove();
    }, 5000);
  }


}