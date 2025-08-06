import React, { useState } from 'react';

const SendAnnouncement = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setSuccess(true);
    setSubject('');
    setMessage('');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Send Announcement</h2>
      {success && <div className="mb-4 text-green-600">Announcement sent successfully!</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Subject</label>
          <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} required className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Send Announcement</button>
      </form>
    </div>
  );
};

export default SendAnnouncement;