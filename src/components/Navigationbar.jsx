import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export const Navigationbar = (props) => {
  return (
    <>
      <h1>Modulo {props.name}</h1>
      <Button variant='info'>nuevo</Button>
      <Separator />  
    </>
  );
};