// components/ImageUploadForm.tsx
import React, { useEffect, useState } from 'react';

const ImageUploadForm: React.FC<{ onSubmitImg: (file: File) => void }> = ({ onSubmitImg }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  
  useEffect(() => {
    if (file) {
      onSubmitImg(file);
    }
  }, [file, onSubmitImg]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      onSubmitImg(file);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
    </form>
  );
};

export default ImageUploadForm;
