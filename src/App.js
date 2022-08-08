import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Content from './components/Content';



function App() {
  return (
    <>
      <section className='todoapp'>
        <Header />
        <Form />
        <Content />       
      </section>
      <Footer />
    </>
      
    
  );
}

export default App;
