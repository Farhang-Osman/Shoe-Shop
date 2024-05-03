import { CostumarReviews, Footer, Hero, PopularProducts, Services, 
  SpecialOffers, Subscribe, SuperQuality } from "./sections";
import Nav from "./Components/Nav";

const App = () => (
  <main className="relative">
    <Nav /> 
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CostumarReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
        
  </main>
)

export default App;