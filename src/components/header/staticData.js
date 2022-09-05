const gridItem = {
  item: true,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};

const typo = {
  variant: 'h6',
  component: 'div'
};

export const header = {
  grid: {
    props: {
      container: true,
      p: 2,
      bgcolor: 'secondary.main',
      color: 'info.main'
    }
  }
};

export const logo = {
  grid: {
    props: {
      ...gridItem,
      xs: 8,
      sm: 2,
      lg: 4,
      display: {
        xs: 'flex',
        ms: 'none',
        sm: 'flex'
      }
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
        fontSize: '2rem',
        fill: `url(#red-gradient)`
      }
    }
  },
  typo: {
    innerText: 'Wallet',
    props: {
      ...typo,
      display: {
        xs: 'block',
        ms: 'none',
        md: 'block'
      },
      ml: 2
    }
  }
};

export const user = {
  grid: {
    props: {
      ...gridItem,
      xs: 8,
      lg: 4,
      textAlign: {
        xs: 'start',
        sm: 'center'
      },
      display: {
        xs: 'none',
        ms: 'block'
      }
    }
  },
  typo: {
    fillerText: 'emailaddress@example.com',
    props: {
      ...typo
    }
  }
};

export const amount = {
  grid: {
    props: {
      ...gridItem,
      xs: 4,
      sm: 2,
      lg: 4,
      justifyContent: 'flex-end'
    }
  },
  total: {
    props: {
      ...typo
    }
  },
  currency: {
    props: {
      ...typo,
      display: {
        xs: 'none',
        md: 'block'
      },
      ml: 2
    },
    innerText: 'BRL'
  }
};
