const staticData = {
  page: {
    box: {
      props: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'info.main'
      }
    }
  },

  logo: {
    box: {
      props: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
  },

  form: {
    box: {
      props: {
        p: 2,
        width: '343px',
        borderRadius: 2,
        boxShadow: 5
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
          type: 'email',
          label: 'Usuário',
          placeholder: 'Insira seu e-mail',
          size: 'small',
          variant: 'outlined'
        },
        helperText: 'E-mail inválido',
        pattern: /^\S+@\S+\.\S+$/
      },
      password: {
        props: {
          type: 'password',
          label: 'Senha',
          placeholder: 'Insira sua senha',
          size: 'small',
          variant: 'outlined'
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
  }
};

export default staticData;
