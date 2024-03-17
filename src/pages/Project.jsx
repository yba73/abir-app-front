
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFilters, setSelectedFilters] = React.useState([]);
    const [formats, setFormats] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/projects', { name, description, filters, formats })
      .then(res => {
        if (res.data.success) {
          navigate('/projects');
        } else {
          alert('Error creating project');
        }
      })
      .catch(err => console.log(err));
  }


  const handleFormatChange = (e) => {
    setFormats(e.target.value);
  }

  return (

    <div
      className='px-4 w-full h-screen flex justify-center items-center'
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/02/36/77/63/240_F_236776308_kQn0MgsaDZgxVS91IH9fsW3cehQ7f5RG.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <form
        className='border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]' onSubmit={handleSubmit}
      >
        <h1 className='uppercase text-xl mb-4 font-bold'> Create New Project</h1>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <label>Name</label>
          <input type="text" className="form-control" placeholder='Project Name' value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Description</label>
          <textarea className="form-control" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          <div className="form-group">
              <label>Supported Document Formats</label>
              <select className="form-control" value={formats} onChange={handleFormatChange} required>

                <option value=".docx">.docx</option>
                <option value=".xlsx">.xlsx</option>
                <option value=".xml">.xml</option>
                {/* Add more formats as needed */}
              </select>

            </div>

            <div className="form-group">
              <label>Upload Files</label>
            

            </div>
            </div>







           
            <button className='mb-4 bg-teal-700 text-white p-2 hover:bg-teal-900' type='submit'> Submit </button>
          </form>
        </div>
        );
};

        export default Project;

