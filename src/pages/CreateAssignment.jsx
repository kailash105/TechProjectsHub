import React, { useState } from 'react';

const CreateAssignment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setSuccess(true);
    setTitle('');
    setDescription('');
    setDueDate('');
    setFile(null);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Create Assignment</h2>
      {success && <div className="mb-4 text-green-600">Assignment created successfully!</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Due Date</label>
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">File Upload (optional)</label>
          <input type="file" onChange={e => setFile(e.target.files[0])} className="w-full" />
        </div>
        <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Create Assignment</button>
      </form>
    </div>
  );
};

export default CreateAssignment;