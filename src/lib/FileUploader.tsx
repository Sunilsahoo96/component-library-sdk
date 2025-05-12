import React, { useState } from 'react';
import '../styles/file-uploader.css';

interface FileUploaderProps {
  onUpload: (file: File | null) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUpload }) => {
  const [fileName, setFileName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || '');
    onUpload(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" id="avatar" onChange={handleChange} className="file-input" />
      <label htmlFor="avatar" className="upload-label">
        {fileName || 'Drag and drop or click to upload'}
      </label>
    </div>
  );
};

export default FileUploader;
