import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>

      <h1>Bienvenido al Dashboard (private)</h1>

      <Link to='/'>Volver al inicio</Link>
    </>
  )
}

export default Dashboard;