import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Ui/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <div
        aria-hidden="true"
        className="absolute -right-[20rem] -top-[16.5rem] -z-10 aspect-square min-h-screen w-auto scale-[.55] overflow-hidden bg-tablet-pattern bg-[bottom_left] bg-no-repeat md:w-[45%] lg:right-0 lg:-top-[4rem] lg:min-h-[70vh] lg:w-[85%] lg:scale-100 xxl:-top-[5.5rem] xxl:aspect-auto"
      ></div>
      <Header />
      <main role="main" className="site-content relative overflow-x-hidden">
        <Home />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
