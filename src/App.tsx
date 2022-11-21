import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Ui/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Header />
      <main role="main" className="site-content">
        <Home />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
