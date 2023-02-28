import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#2d3d8a',
        },
        secondary: {
            main: '#ffb922',
        },
    },
    status: {
      danger: '#d32f2f',
    },
    typography: {
        h1: {
            fontSize: 28,
            fontWeight: 600,
            textTransform: 'uppercase',
        },
        subtitle1: {
            fontSize: 16,
            textTransform: 'uppercase',
        }
    }
  });