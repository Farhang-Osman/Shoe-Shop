import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from './sections';
import Nav from './Components/Nav';

const App = () => (
  <main className='relative'>
    <Nav />
    <section className='snap-start xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='snap-start bg-pale-blue padding'>
      <PopularProducts />
    </section>
    <section className='snap-start padding'>
      <SuperQuality />
    </section>
    <section className='snap-start bg-pale-blue padding'>
      <Services />
    </section>
    <section className='snap-start padding'>
      <SpecialOffers />
    </section>
    <section className='snap-start bg-pale-blue padding'>
      <CustomerReviews />
    </section>
    <section className='snap-start padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className='snap-start bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
);

export default App;
