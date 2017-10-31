/*---------------- Form Validators ----------------*/
export const required = value => (value == null ? 'Requerido' : undefined);

export const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email invalido'
    : undefined)

export const number = value =>
      value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9_]/i.test(value)
    ? 'Solamente caracteres alfanuméricos'
    : undefined
/*-------------------------------------------------*/
