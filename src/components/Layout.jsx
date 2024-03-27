import React from 'react';
import { Link } from 'react-router-dom';
import { authService } from '@/services/auth-services';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import './Layout.css'; 

const Layout = ({ children }) => {
  // Definir el menú dinámico basado en el rol del usuario
  const getMenu = () => {

    // Definir el menú dinámico basado en el rol del usuario
    const userData = sessionStorage.getItem('data-user');

      const user = JSON.parse(userData);
      const role = user.role;

    switch (role) {
      case 'super_administrador':
        return (
          <>
            <AccordionItem value="inicio">
              <AccordionTrigger>Inicio</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="clientes">
              <AccordionTrigger>Clientes</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><Link to='/empresas'>Empresas</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </>
        );
      case 'admin':
        return (
          <>
            <AccordionItem value="inicio">
              <AccordionTrigger>Inicio</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="recursos-humanos">
              <AccordionTrigger>Recursos Humanos</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li> <Link to='/employee'>Empleados</Link></li>
                  <li><Link to='/puestos'>Puestos</Link></li>
                  <li><Link to='/departamentos'>Departamentos</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gestion-nomina">
              <AccordionTrigger>Gestión de Nómina</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><Link to='/nomina'>Nomina</Link></li>
                  <li><Link to='/conceptos'>Conceptos</Link></li>
                  <li><Link to='/periocidad'>Periocidad</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="administracion">
              <AccordionTrigger>Administración</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><Link to='/permisos'>Permisos</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </>
        );
      case 'user':
        return (
          <>
            <AccordionItem value="inicio">
              <AccordionTrigger>Inicio</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gestiones">
              <AccordionTrigger>Gestiones</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><Link to='/permisos'>Permisos</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </>
        );
      default:
        return null; // Manejar cualquier otro caso
    }
  };

  return (
    <>
      <div className="layout">
        <div className="sidebar">
          {/* Contenido de la barra lateral */}
          <Accordion type="single" collapsible>
            {getMenu()}
            <AccordionItem value="salir">
              <AccordionTrigger>Salir</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><Link to='/login'>Salir</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
