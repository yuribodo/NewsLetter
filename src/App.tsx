import './App.css';
import NewsForm from './components/NewsForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 ">
      <header className="flex justify-center items-center h-20 bg-gray-800">
        <h1 className="text-3xl font-bold text-white">Logo da Newsletter</h1>
      </header>
      <main className="flex-grow flex justify-center items-center">
        <NewsForm />
      </main>
      <footer className="h-16 flex justify-center items-center bg-gray-800 text-white">
        <p>© 2024 Newsletter. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
