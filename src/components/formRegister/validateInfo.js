export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Endereço de email invalido';
  }

  if (!values.password) {
    errors.password = 'Digite sua senha';
  } else if (values.password.length < 6) {
    errors.password = 'A senha precisa ter 6 caracteres ou mais';
  }

  if (values.role !== 'waiter' && values.role !== 'kitchen') {
    errors.role = 'Selecione uma função';
  }

  return errors;
}
