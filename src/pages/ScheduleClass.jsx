import React, { useState, useEffect } from 'react';
import apiService from '../utils/api';

const ScheduleClass = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [meetLink, setMeetLink] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) fetchScheduledClasses(selectedCourse);
  }, [selectedCourse]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await apiService.getTrainerDashboard();
      setCourses(res.courses || []);
      if (res.courses && res.courses.length > 0) setSelectedCourse(res.courses[0]._id);
    } catch (err) {
      setError('Failed to load courses');
    } finally {
      setLoading(false);
    }
  };

  const fetchScheduledClasses = async (courseId) => {
    try {
      setLoading(true);
      const res = await apiService.request(`/courses/${courseId}`);
      setScheduledClasses(res.liveClasses || []);
    } catch (err) {
      setScheduledClasses([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    try {
      await apiService.request(`/trainer/course/${selectedCourse}/live-class`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          date: date + 'T' + time,
          duration,
          meetLink
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      setSuccess(true);
      setTitle('');
      setDate('');
      setTime('');
      setDescription('');
      setDuration('');
      setMeetLink('');
      fetchScheduledClasses(selectedCourse);
    } catch (err) {
      setError('Failed to schedule class');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Schedule Live Class</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      {success && <div className="mb-4 text-green-600">Class scheduled successfully!</div>}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : courses.length === 0 ? (
        <div className="text-center text-gray-600">You have no courses assigned. Please contact the admin to assign you a course before scheduling a live class.</div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Course</label>
              <select value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)} required className="w-full border rounded px-3 py-2">
                {courses.map(course => (
                  <option key={course._id} value={course._id}>{course.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Class Title</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Time</label>
              <input type="time" value={time} onChange={e => setTime(e.target.value)} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Duration (minutes)</label>
              <input type="number" value={duration} onChange={e => setDuration(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Meet Link</label>
              <input type="text" value={meetLink} onChange={e => setMeetLink(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Schedule Class</button>
          </form>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Scheduled Classes</h3>
            {scheduledClasses.length === 0 ? (
              <div className="text-gray-500">No classes scheduled for this course.</div>
            ) : (
              <ul className="space-y-2">
                {scheduledClasses.map((cls) => (
                  <li key={cls._id} className="border rounded p-3 flex flex-col">
                    <span className="font-medium">{cls.title}</span>
                    <span className="text-sm text-gray-600">{new Date(cls.date).toLocaleString()}</span>
                    <span className="text-sm text-gray-600">Duration: {cls.duration || 'N/A'} min</span>
                    <span className="text-sm text-gray-600">Meet Link: {cls.meetLink || 'N/A'}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ScheduleClass;