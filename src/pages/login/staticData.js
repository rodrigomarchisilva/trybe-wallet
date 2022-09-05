const input = {
  size: 'small',
  variant: 'outlined',
  spellCheck: false
};

const box = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const page = {
  box: {
    props: {
      ...box,
      minHeight: '100vh'
    }
  }
};

export const logo = {
  box: {
    props: {
      ...box,
      flexDirection: 'column',
      my: 1
    }
  },
  svg: {
    props: {
      id: 'red-gradient',
      darkColor: '#b71c1c',
      lightColor: '#f44336'
    }
  },
  icon: {
    props: {
      style: {
        fontSize: '10rem',
        fill: `url(#red-gradient)`
      }
    }
  },
  heading: {
    innerText: 'Wallet',
    props: {
      variant: 'h2',
      component: 'h1',
      fontWeight: 'bold',
      color: 'secondary.main'
    }
  }
};

export const form = {
  box: {
    props: {
      p: 2,
      width: '343px',
      borderRadius: 2,
      boxShadow: 5,
      bgcolor: 'info.main'
    }
  },
  stack: {
    props: {
      spacing: 2
    }
  },
  inputs: {
    email: {
      props: {
        ...input,
        type: 'email',
        label: 'Usuário',
        placeholder: 'Insira seu e-mail'
      },
      helperText: 'E-mail inválido',
      pattern: /^\S+@\S+\.\S+$/
    },
    password: {
      props: {
        ...input,
        type: 'password',
        label: 'Senha',
        placeholder: 'Insira sua senha'
      },
      helperText: 'Senha inválida',
      pattern: /^[a-zA-Z0-9]{6,}$/
    }
  },
  button: {
    innerText: 'Entrar',
    props: {
      type: 'submit',
      variant: 'contained',
      color: 'error',
      title: 'Entrar'
    }
  }
};
