import React, { useState } from 'react';

interface FileUploadProps {
  onFileChange: (file: File) => void;
  label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, label }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    onFileChange(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className={`form-row ${preview ? 'preview-mode' : ''}`}>
      <div 
        className={`file-upload-container ${isDragOver ? 'drag-over' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          className="file-input"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer'
          }}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileChange(e.target.files[0]);
            }
          }}
        />
        {preview ? (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            width: '100%',
            padding: '0 20px'
          }}>
            <img 
              src={preview} 
              alt="Logo preview" 
              style={{ 
                height: '40px', 
                objectFit: 'contain',
                borderRadius: '4px'
              }}
            />
            <span className="file-label">Click or drag to change logo</span>
          </div>
        ) : (
          <span className="file-label">{label}</span>
        )}
      </div>
    </div>
  );
};

export default FileUpload;