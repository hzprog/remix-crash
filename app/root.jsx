import { Outlet, LiveReload, Link, Links, Meta } from 'remix';
import globalStylesUrl from '~/styles/globals.css';

export const links = () => [{ rel: 'stylesheet', href: globalStylesUrl }];

export const meta = () => {
  const description = 'a cool blog built with remix';
  const keywords = 'remix, react, javascript';
  return { description, keywords };
};

export default function app() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='width=device-width,inital-scale=1' />
        <Meta />
        <Links />
        <title>{title ? title : 'Remix Crash Course'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          Remix
        </Link>

        <ul className='nav'>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      <div className='container'>{children}</div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}
