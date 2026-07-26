import React, { useState } from 'react';
import ProjectHeader from '../components/project/ProjectHeader';
import FormInput from '../components/project/FormInput';
import FileUpload, { UploadedFile } from '../components/project/FileUpload';
import ActionButton from '../components/project/ActionButton';

/**
 * New Project Creation Page
 * 
 * This page allows users to create new projects by filling out project details,
 * selecting company and industry information, and uploading relevant files.
 */
const NewProjectPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    projectName: '',
    company: '',
    industry: '',
    subIndustry: ''
  });

  // File upload state
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: '1',
      name: 'Financial Report 2023.pdf',
      type: 'application/pdf',
      size: 2048576, // 2MB
      icon: '/Depth-6-Frame-0.svg'
    },
    {
      id: '2',
      name: 'Market Analysis.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      size: 1536000, // 1.5MB
      icon: '/Depth-6-Frame-01.svg'
    },
    {
      id: '3',
      name: 'Project Proposal.pdf',
      type: 'application/pdf',
      size: 3072000, // 3MB
      icon: '/Depth-6-Frame-0.svg'
    }
  ]);

  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Form validation
  const isFormValid = formData.projectName.trim() !== '' && 
                     formData.company.trim() !== '' && 
                     formData.industry.trim() !== '' && 
                     formData.subIndustry.trim() !== '';

  // Sample data for dropdowns
  const companies = [
    'Innovatech Solutions',
    'TechCorp Industries',
    'Digital Dynamics',
    'Future Systems Inc.',
    'Global Tech Partners'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Energy'
  ];

  const subIndustries = {
    Technology: ['Software Development', 'AI/ML', 'Cybersecurity', 'Cloud Computing'],
    Healthcare: ['Medical Devices', 'Pharmaceuticals', 'Telemedicine', 'Health Analytics'],
    Finance: ['Banking', 'Insurance', 'Investment', 'Fintech'],
    Manufacturing: ['Automotive', 'Electronics', 'Textiles', 'Food Processing'],
    Retail: ['E-commerce', 'Fashion', 'Grocery', 'Luxury Goods'],
    Education: ['K-12', 'Higher Education', 'Online Learning', 'Corporate Training'],
    Energy: ['Renewable Energy', 'Oil & Gas', 'Nuclear', 'Energy Storage']
  };

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      // Reset sub-industry when industry changes
      ...(field === 'industry' ? { subIndustry: '' } : {})
    }));
  };

  const handleFileUpload = (files: FileList) => {
    const newFiles: UploadedFile[] = Array.from(files).map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      type: file.type,
      size: file.size,
      icon: file.type.includes('pdf') ? '/Depth-6-Frame-0.svg' : '/Depth-6-Frame-01.svg'
    }));

    setUploadedFiles(prev => [...prev, ...newFiles].slice(0, 5)); // Max 5 files
  };

  const handleFileRemove = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      projectName: '',
      company: '',
      industry: '',
      subIndustry: ''
    });
    setUploadedFiles([]);
  };

  const handleSave = async () => {
    if (!isFormValid) return;
    
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Saving project:', { formData, uploadedFiles });
      // Handle success (e.g., show toast, redirect)
    } catch (error) {
      console.error('Error saving project:', error);
      // Handle error (e.g., show error message)
    } finally {
      setIsSaving(false);
    }
  };

  const handleProcess = async () => {
    if (!isFormValid) return;
    
    setIsLoading(true);
    try {
      // Simulate processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log('Processing project:', { formData, uploadedFiles });
      // Handle success (e.g., navigate to processing page)
    } catch (error) {
      console.error('Error processing project:', error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <ProjectHeader 
        companyName="Innovatech Solutions"
        userAvatar="/Depth-4-Frame-2@2x.png"
      />

      {/* Main Content */}
      <main className="flex-1 flex items-start justify-center py-0 px-5 max-w-full">
        <section className="w-full max-w-4xl flex flex-col gap-6">
          {/* Page Title */}
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between p-4">
              <div className="w-72 min-w-72">
                <h1 className="text-3xl font-bold text-gray-800 leading-10">
                  New Project
                </h1>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full max-w-2xl px-4">
              <div className="flex flex-col gap-8">
                <FormInput
                  label="Project Name"
                  placeholder="Enter project name"
                  required
                  value={formData.projectName}
                  onChange={handleInputChange('projectName')}
                  helpText="Choose a descriptive name for your project"
                />

                <FormInput
                  label="Company"
                  placeholder="Select company"
                  required
                  type="select"
                  options={companies}
                  value={formData.company}
                  onChange={handleInputChange('company')}
                />

                <FormInput
                  label="Industry"
                  placeholder="Select industry"
                  required
                  type="select"
                  options={industries}
                  value={formData.industry}
                  onChange={handleInputChange('industry')}
                />

                <FormInput
                  label="Sub-Industry"
                  placeholder="Select sub-industry"
                  required
                  type="select"
                  options={formData.industry ? subIndustries[formData.industry as keyof typeof subIndustries] || [] : []}
                  value={formData.subIndustry}
                  onChange={handleInputChange('subIndustry')}
                  disabled={!formData.industry}
                />
              </div>
            </div>
          </div>

          {/* File Upload Section */}
          <FileUpload
            uploadedFiles={uploadedFiles}
            onFileUpload={handleFileUpload}
            onFileRemove={handleFileRemove}
            maxFiles={5}
            acceptedTypes={['.pdf', '.doc', '.docx', '.xls', '.xlsx']}
          />

          {/* Action Buttons */}
          <footer className="flex items-center justify-end px-4 gap-4 pb-8">
            <ActionButton
              variant="secondary"
              size="large"
              onClick={handleCancel}
              disabled={isLoading || isSaving}
            >
              Cancel
            </ActionButton>

            <ActionButton
              variant="secondary"
              size="large"
              onClick={handleSave}
              loading={isSaving}
              disabled={!isFormValid || isLoading}
            >
              Save
            </ActionButton>

            <ActionButton
              variant="primary"
              size="large"
              onClick={handleProcess}
              loading={isLoading}
              disabled={!isFormValid || isSaving}
            >
              Process
            </ActionButton>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default NewProjectPage;
