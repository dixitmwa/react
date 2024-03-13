import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import BackgroundWave from './backgroundWave';
import ProtectedRoute from '@/pages/auth/protectedRoute';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children, title = 'CogQuiz', footer, margintop }: any) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no" />
      </Head>
      <Header />
      <main>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          // style: {
          //   fontFamily: muiVariables.mainFontFamily,
          //   fontSize: "auto",
          //   backgroundColor: `${muiVariables.avatarBgColor}`,
          // },
        }}
        containerStyle={{
          top: 30,
          bottom: 20,
          right: 30,
        }}
      />
        <BackgroundWave margintop={margintop} />
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
      </main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;