import './App.css'
import CustomForm from './components/NewsletterSubscribe'

function App() {
  

  return (
    <>
      <div>
        <div className='flex justify-center items-center h-[8vh] bg-slate-700'>
          <h1>Logo da NewsLetter!!</h1>
        </div>
        
        <div className='flex flex-col justify-center items-center bg-slate-500 h-[70vh]'>
          <h2>Titulo 2</h2>
          <p>Corpo da mensagem 1</p>
          <img src="" alt="Imagem de 1 email" />
        </div>
        

        <div className=' flex justify-center items-center h-[30vh] bg-gray-500'>
          <form action="" className=''>

            <div className='flex space-x-4'>
              <div className=' w-[10vw]'>

              <input
                type="text"
                name="nome"
                placeholder="Digite seu Nome"
                className="mb-4 border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring focus:border-blue-500 w-full"
              />

              <input
                type="text"
                name="nome"
                placeholder="Digiteseu Email!"
                className="mb-4 border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring focus:border-blue-500 w-full"
              />

              <div className='flex justify-center items-center bg-slate-400 rounded-lg h-11'>
                <button className=' p-4' type="button">Inscrever-se</button>
              </div>
            </div>
              
              
            </div>
            
          </form>


        </div>


        <div className=' bg-slate-300 h-[40vh]'>
          <CustomForm>

          </CustomForm>
        </div>


        <div className=' bg-slate-400 h-[100vh]'>
          
        </div>
      </div>
    </>
  )
}

export default App
