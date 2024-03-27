import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import ImgUploader from '@/components/uploadFiles/ImgUploader';
import { useState, useEffect } from 'react';

import { companyService } from '@/services/company-service';

const schema = Yup.object().shape({
  name: Yup.string().required('Este campo es requerido'),
  phone: Yup.string()
    .required('Este campo es requerido')
    .matches(/^\d{8}$/, 'El número de teléfono debe tener 8 dígitos'),
  password: Yup.string()
    .required('La contraseña es requerida'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('La confirmación de contraseña es requerida'),
});

export const RegisterCompany = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  
  useEffect(() => {
    // Verificar si la imagen se ha cargado para enviar el formulario
    if (imageUrl !== '' && isImageUploaded) {
      handleSubmit(); // Llamar a la función de envío del formulario
    }
  }, [imageUrl, isImageUploaded]); // Ejecutar efecto cuando imageUrl o isImageUploaded cambien

  const handleImageUpload = (url) => {
    setImageUrl(url);
    setIsImageUploaded(true); // Establecer que la imagen se ha cargado
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const formData = { ...data, picture: imageUrl };
      const response = await companyService.createCompany(
        formData.name,
        formData.phone,
        formData.description,
        formData.address,
        formData.picture,
        formData.email,
        formData.password
      );
      console.log(response.data); 
      
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };

  return (
    <>
      <ImgUploader onUpload={handleImageUpload} />
      <h1>REGISTRO</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre de la empresa o institucion *:</label>
          <input type="text" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Telefono *:</label>
          <input type="number" {...register('phone')} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <div>
          <label>Direccion *:</label>
          <input type="text" {...register('description')} />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <div>
          <label>Description *:</label>
          <input type="text" {...register('address')} />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div>
          <label>Correo electronico (usuario) *:</label>
          <input type="text" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Password *:</label>
          <input type="password" {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label>Confirmacion *:</label>
          <input type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>

        {console.log("la url es :" + imageUrl)}
        <input type="text" name="picture" value={imageUrl || ''} readOnly />

        <button type="submit">Enviar</button>
      </form>
      <Link to='/'>Volver al inicio</Link>
    </>
  );
};
