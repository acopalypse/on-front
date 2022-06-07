import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import globalTheme from '../styles/globalTheme';

import AppLayout from '../components/layouts/AppLayout/AppLayout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={globalTheme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}
