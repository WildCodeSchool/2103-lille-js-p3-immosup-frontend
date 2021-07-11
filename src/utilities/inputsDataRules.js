const usersRules = {
  email: [
    {
      reg: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      msg: 'Adresse email non valide',
    },
  ],
  password: [
    {
      reg: /^(?=.*[a-z])/,
      msg: 'Le mot de passe doit contenir une lettre minuscule',
    },
    {
      reg: /^(?=.*[A-Z])/,
      msg: 'Le mot de passe doit contenir une lettre majuscule',
    },
    {
      reg: /^(?=.*[0-9])/,
      msg: 'Le mot de passe doit contenir un chiffre',
    },
    {
      reg: /^(?=.*[=/!@#$%^&*])/,
      msg: 'Le mot de passe doit contenir un caractère spécial (/!@#$%^&*)',
    },
    {
      reg: /^(?=.{8,})/,
      msg: 'Le mot de passe doit contenir au moins 8 caractères',
    },
  ],
  firstname: [
    {
      reg: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      msg: 'Prénom non valide',
    },
  ],
  lastname: [
    {
      reg: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      msg: 'Nom non valide',
    },
  ],
  city: [
    {
      reg: /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
      msg: 'Nom de ville non valide',
    },
  ],
  phone: [
    {
      reg: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      msg: 'Numero de téléphone non valide',
    },
  ],
};

export default usersRules;
