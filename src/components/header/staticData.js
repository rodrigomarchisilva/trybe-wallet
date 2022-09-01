const gridItem = {
  item: true,
  xs: 4,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};

const typo = {
  variant: 'h6',
  component: 'div'
};

const staticData = {
  header: {
    grid: {
      props: {
        container: true,
        p: 2,
        bgcolor: 'secondary.main',
        color: 'info.main'
      }
    }
  },

  logo: {
    grid: {
      props: {
        ...gridItem
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
        ml: 2
      }
    }
  },

  user: {
    grid: {
      props: {
        ...gridItem,
        justifyContent: 'center'
      }
    },
    typo: {
      innerText: 'emailaddress@example.com',
      props: {
        ...typo
      }
    }
  },

  amount: {
    grid: {
      props: {
        ...gridItem,
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
        ml: 2
      }
    }
  }
};

export default staticData;
