export default function validateInfo(values) {
    let errors = {};

    if(!values.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Endereço de email invalido"
    }

    if(!values.password) {
        errors.password = 'Digite sua senha'
    } else if (values.password.length < 6) {
        errors.password = 'A senha precisa ter 6 caracteres ou mais'
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = 'Confirme a sua senha'
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'As senhas não conferem'
    }

    if(values.information !=="waiter" && values.information !== "kitchen") {
        errors.information= "Selecione uma função"
    }

    return errors
}