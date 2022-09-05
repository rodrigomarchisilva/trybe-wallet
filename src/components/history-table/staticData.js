import { grey } from '@mui/material/colors';

export const table = {
  props: {
    size: 'small',
    width: 100
  }
};

export const head = {
  props: {
    bgcolor: grey[900]
  },

  innerText: [
    'Descrição',
    'Tag',
    'Método de pagamento',
    'Valor',
    'Moeda',
    'Câmbio utilizado',
    'Valor convertido',
    'Moeda de conversão',
    'Editar/Excluir'
  ]
};

export const cells = {
  head: {
    props: {
      sx: {
        color: grey[50],
        textAlign: 'center'
      }
    }
  },

  body: {
    props: {
      sx: {
        textAlign: 'center'
      }
    }
  },

  buttons: {
    props: {
      sx: {
        display: 'flex',
        justifyContent: 'space-evenly'
      }
    }
  }
};

export const buttons = {
  props: {
    type: 'button'
  }
};
