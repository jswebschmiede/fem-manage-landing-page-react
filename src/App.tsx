import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Ui/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <div
        aria-hidden="true"
        className="absolute -top-[4rem] right-0 -z-10 aspect-square min-h-[70vh] w-[85%] bg-tablet-pattern bg-[bottom_left] bg-no-repeat md:w-[45%] xxl:-top-[5.5rem] xxl:aspect-auto"
      ></div>
      <Header />
      <main role="main" className="site-content relative">
        <Home />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
