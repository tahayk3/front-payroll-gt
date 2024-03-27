import { Navigation } from '../../components/Navigation'
import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom"

export const Home = () => (
  <>
    <Navigation />
    
    
    <Link to='/login'><Button variant='info'>Login</Button></Link>
    <Link to='/register-company'><Button>Prueba gratis</Button></Link>
   
  </>
)


