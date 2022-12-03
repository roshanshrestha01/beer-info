import { useState } from 'react';

const useFormData = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetState = () => {
    setFormData(initialState);
  };

  return [formData, handleChange, resetState] as const;
};

export default useFormData;
