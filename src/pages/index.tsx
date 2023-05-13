import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Buy from '../components/Sections/Buy';
import Wallet from '../components/Sections/Wallet';
import Contact from '../components/Sections/Contact';
import Hero from '../components/Sections/Hero';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
// const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    // @ts-ignore
    <Page description={description} title={title}>
      {/* @ts-ignore */}
      {/* <Header /> */}
      <Hero />
      <About />
      <Buy />
      <Wallet />
      <Contact />
    </Page>
  );
});

export default Home;
