const input = {
  size: 'small',
  variant: 'outlined',
  bgcolor: 'primary.light',
  fullWidth: true,
  spellCheck: false
};

export const inputGrid = {
  props: {
    item: true,
    p: 1,
    lg: 2,
    md: 4,
    ms: 6,
    xs: 12
  }
};

export const inputs = {
  number: {
    props: {
      ...input,
      type: 'number',
      label: 'Valor'
    }
  },
  textArea: {
    props: {
      ...input,
      multiline: true,
      label: 'Descrição'
    }
  },
  selects: {
    currency: {
      id: 'currency',
      label: 'Moeda',
      gridProps: inputGrid.props
    },
    method: {
      id: 'method',
      label: 'Método de pagamento',
      gridProps: inputGrid.props,
      options: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito']
    },
    tag: {
      id: 'tag',
      label: 'Tag',
      gridProps: inputGrid.props,
      options: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']
    }
  }
};

export const formGrid = {
  props: {
    container: true,
    bgcolor: 'info.main',
    p: 1
  }
};

export const buttons = {
  create: {
    props: {
      variant: 'contained',
      color: 'error',
      fullWidth: true
    },
    innerText: 'Adicionar despesa'
  },
  update: {
    props: {
      variant: 'contained',
      color: 'success',
      fullWidth: true
    },
    innerText: 'Editar despesa'
  }
};

export const formStyle = {
  style: { boxShadow: '0 4px 2px -2px gray' }
};
