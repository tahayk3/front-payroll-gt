import { authService } from "../services/auth-services"

const App = () => {
  // authService.login('empresa2@gmail.com', 'empresa2')
  // .then(res => console.log(res))
  // .catch(err => console.error(err))
  authService.getToken()
  return (
    <div className='text-center text-2xl'>
      App
    </div>
  )
}

export default App