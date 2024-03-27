import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';


export const Navigationbar = (props) => {
  return (
    <>
      <h1>Modulo {props.name}</h1>
      <Button variant='info' onClick={props.toggleForm}>Nuevo</Button> {/* Llama a la función toggleForm */}
      <Separator />
    </>
  );
};

