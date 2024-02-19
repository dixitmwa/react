import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import BackgroundWave from './backgroundWave';
import ProtectedRoute from '@/pages/auth/ProtectedRoute';

const Layout = ({ children, title = 'CogQuiz', footer, margintop }: any) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>
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