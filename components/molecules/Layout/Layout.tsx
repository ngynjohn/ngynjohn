import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main
        style={{
          marginTop: '63px',
        }}
      >
        {children}
      </main>
   </>
  );
}
