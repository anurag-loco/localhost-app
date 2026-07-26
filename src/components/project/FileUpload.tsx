import { FunctionComponent, useState, useRef } from 'react';

export type UploadedFile = {
  id: string;
  name: string;
  type: string;
  size: number;
  icon: string;
};

export type FileUploadProps = {
  className?: string;
  uploadedFiles: UploadedFile[];
  onFileUpload: (files: FileList) => void;
  onFileRemove: (fileId: string) => void;
  maxFiles?: number;
  acceptedTypes?: string[];
};

/**
 * File upload component with drag-and-drop support and file management
 * Displays uploaded files with remove functionality
 */
const FileUpload: FunctionComponent<FileUploadProps> = ({
  className = "",
  uploadedFiles,
  onFileUpload,
  onFileRemove,
  maxFiles = 5,
  acceptedTypes = ['.pdf', '.doc', '.docx', '.xls', '.xlsx']
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const remainingFiles = maxFiles - uploadedFiles.length;
  const canUploadMore = remainingFiles > 0;

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    if (canUploadMore) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    if (canUploadMore && event.dataTransfer.files.length > 0) {
      onFileUpload(event.dataTransfer.files);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onFileUpload(event.target.files);
      // Reset input value to allow selecting the same file again
      event.target.value = '';
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const getFileIcon = (fileName: string): string => {
    const extension = fileName.toLowerCase().split('.').pop();
    switch (extension) {
      case 'pdf':
        return '/Depth-6-Frame-0.svg';
      case 'doc':
      case 'docx':
        return '/Depth-6-Frame-01.svg';
      default:
        return '/Depth-6-Frame-0.svg';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* Uploaded Files Section */}
      {uploadedFiles.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="px-4">
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              Uploaded Files
            </h3>
            <p className="text-sm text-blue-600">
              Uploaded files: {uploadedFiles.length} of {maxFiles} ({remainingFiles} remaining)
            </p>
          </div>

          <div className="flex flex-col">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="h-14 flex items-center justify-between px-4 py-0 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 flex items-center gap-4 min-w-0">
                  <img 
                    className="w-10 h-10 rounded-lg flex-shrink-0" 
                    alt="File type" 
                    src={getFileIcon(file.name)}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-base text-gray-800 truncate font-medium">
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => onFileRemove(file.id)}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-red-100 transition-colors group"
                  aria-label={`Remove ${file.name}`}
                >
                  <img 
                    className="w-5 h-5 opacity-60 group-hover:opacity-100" 
                    alt="Remove file" 
                    src="/Depth-5-Frame-1.svg"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Area */}
      {canUploadMore && (
        <div className="px-4">
          <div
            className={`
              rounded-lg border-2 border-dashed flex flex-col items-center py-14 px-6 gap-6
              transition-colors duration-200 cursor-pointer
              ${isDragOver 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-blue-200 bg-white hover:border-blue-300 hover:bg-blue-25'
              }
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleBrowseClick}
            role="button"
            tabIndex={0}
            aria-label="Upload files"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleBrowseClick();
              }
            }}
          >
            <div className="flex flex-col items-center gap-2 max-w-md text-center">
              <h3 className="text-lg font-bold text-gray-800">
                Upload Files
              </h3>
              <p className="text-sm text-gray-600">
                Drag and drop files here, or browse
              </p>
              <p className="text-xs text-gray-500">
                Accepted formats: {acceptedTypes.join(', ')}
              </p>
            </div>

            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded-md font-medium hover:bg-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => {
                e.stopPropagation();
                handleBrowseClick();
              }}
              disabled={!canUploadMore}
            >
              Browse
            </button>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept={acceptedTypes.join(',')}
              onChange={handleFileSelect}
              className="hidden"
              aria-label="Select files to upload"
            />
          </div>
        </div>
      )}

      {/* Max files reached message */}
      {!canUploadMore && (
        <div className="px-4">
          <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-center">
            <p className="text-sm text-yellow-800">
              Maximum number of files ({maxFiles}) reached. Remove some files to upload more.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
