import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    mail: {
      overflow: 'hidden',
      width: 400,
      height: 400,
      [`@media (max-width: 918px)`]: {
        display: 'none',
      },
    },

    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,
      [BREAKPOINT]: {
        flexDirection: 'column',
      },
      overflow: 'hidden',
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,
      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
      width: 500,
      height: 500,
      [`@media (max-height: 980px)`]: {
        width: 500,
        height: 450,
      },
      [`@media (max-width: 550px)`]: {
        width: 350,
        height: 230,
      },
    },

    fields: {
      marginTop: -12,
      marginRight: 20,
      [BREAKPOINT]: {
        marginRight: 0,
      }
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',
      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 280px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      fontSize: theme.fontSizes.xl,
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      color: 'white',
      backgroundColor: 'black',
      [BREAKPOINT]: {
        flex: 1,
      },
      '&:hover': {
        backgroundColor: '#656565',
      },
    }
  };
});
