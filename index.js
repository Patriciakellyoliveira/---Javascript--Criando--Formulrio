class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos(); 
    }    
    Eventos() {
       this.formulario.addEventListener('submit', e => {
          this.handleSubmit(e);
       })
    }
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.checarCampos();
    }

    checarCampos() {
        let valid = true;

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
        if(!campo.value) {
            MensagemErro.mostrarMensagemDeErro(campo, `Campo "${label}"obrigadório`);
            valid = false;
        }
        }
    }
}

const valida = new ValidaFormulario();