import { authService } from "../services/auth-services"

const App = () => {
  authService.login()
  .then(res => console.log(res))
  .catch(err => console.error(err))

  
  return (
    <div className='text-center text-2xl '>
      App
    </div>
  )
}

export default App