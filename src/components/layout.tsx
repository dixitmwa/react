import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, title = 'Next.js App', footer }: any) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;