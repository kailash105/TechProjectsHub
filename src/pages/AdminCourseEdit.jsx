import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import apiService from '../utils/api';
import { AlertCircle, Save, ArrowLeft, Loader2, Plus, X } from 'lucide-react';

const AdminCourseEdit = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    shortDescription: '',
    category: '',
    level: '',
    duration: '',
    price: '',
    originalPrice: '',
    discount: 0,
    requirements: [''],
    learningOutcomes: [''],
    projects: [{ title: '', description: '', technologies: [''] }],
    programOutcomes: [''],
    isPublished: false,
    isFeatured: false,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchCourse();
    // eslint-disable-next-line
  }, [courseId]);

  const fetchCourse = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.getCourse(courseId);
      setForm({
        title: data.title || '',
        description: data.description || '',
        shortDescription: data.shortDescription || '',
        category: data.category || '',
        level: data.level || '',
        duration: data.duration || '',
        price: data.price || '',
        originalPrice: data.originalPrice || '',
        discount: data.discount || 0,
        requirements: data.requirements && data.requirements.length > 0 ? data.requirements : [''],
        learningOutcomes: data.learningOutcomes && data.learningOutcomes.length > 0 ? data.learningOutcomes : [''],
        projects: data.projects && data.projects.length > 0 ? data.projects : [{ title: '', description: '', technologies: [''] }],
        programOutcomes: data.programOutcomes && data.programOutcomes.length > 0 ? data.programOutcomes : [''],
        isPublished: data.isPublished || false,
        isFeatured: data.isFeatured || false,
      });
    } catch (err) {
      setError(err.message || 'Failed to fetch course');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleArrayChange = (index, field, value) => {
    setForm((prev) => {
      const arr = [...prev[field]];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  };

  const addArrayItem = (field, item = '') => {
    setForm((prev) => ({ ...prev, [field]: [...prev[field], item] }));
  };

  const removeArrayItem = (field, index) => {
    setForm((prev) => {
      const arr = prev[field].filter((_, i) => i !== index);
      return { ...prev, [field]: arr.length > 0 ? arr : [''] };
    });
  };

  const handleProjectChange = (index, key, value) => {
    setForm((prev) => {
      const projects = [...prev.projects];
      projects[index] = { ...projects[index], [key]: value };
      return { ...prev, projects };
    });
  };

  const handleProjectTechChange = (index, value) => {
    setForm((prev) => {
      const projects = [...prev.projects];
      projects[index].technologies = value.split(',').map((t) => t.trim());
      return { ...prev, projects };
    });
  };

  const addProject = () => {
    setForm((prev) => ({ ...prev, projects: [...prev.projects, { title: '', description: '', technologies: [''] }] }));
  };

  const removeProject = (index) => {
    setForm((prev) => {
      const projects = prev.projects.filter((_, i) => i !== index);
      return { ...prev, projects: projects.length > 0 ? projects : [{ title: '', description: '', technologies: [''] }] };
    });
  };

  const validateForm = () => {
    if (!form.title.trim() || !form.description.trim() || !form.category || !form.level || !form.duration || !form.price) {
      setError('Please fill all required fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      // Filter out empty array items
      const filteredData = {
        ...form,
        requirements: form.requirements.filter((r) => r.trim() !== ''),
        learningOutcomes: form.learningOutcomes.filter((r) => r.trim() !== ''),
        projects: form.projects.filter((p) => p.title.trim() !== ''),
        programOutcomes: form.programOutcomes.filter((r) => r.trim() !== ''),
      };
      await apiService.updateCourse(courseId, filteredData);
      setSuccess(true);
      setTimeout(() => navigate(`/lms/admin/course/${courseId}`), 1200);
    } catch (err) {
      setError(err.message || 'Failed to update course');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin w-16 h-16 text-red-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button onClick={fetchCourse} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to={`/lms/admin/course/${courseId}`} className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Edit Course</h1>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" required>
                <option value="">Select category</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="ai-ml">AI/ML</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="blockchain">Blockchain</option>
                <option value="vlsi">VLSI Design</option>
                <option value="programming">Programming</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Level *</label>
              <select name="level" value={form.level} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" required>
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
              <input type="text" name="duration" value={form.duration} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" required placeholder="e.g., 3 months, 6 weeks" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹) *</label>
              <input type="number" name="price" value={form.price} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" required min="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Original Price (₹)</label>
              <input type="number" name="originalPrice" value={form.originalPrice} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" min="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
              <input type="number" name="discount" value={form.discount} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" min="0" max="100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
              <input type="text" name="shortDescription" value={form.shortDescription} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" maxLength={200} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Description *</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" required />
          </div>
          {/* Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
            {form.requirements.map((req, idx) => (
              <div key={idx} className="flex items-center space-x-2 mb-2">
                <input type="text" value={req} onChange={e => handleArrayChange(idx, 'requirements', e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter requirement" />
                <button type="button" onClick={() => removeArrayItem('requirements', idx)} className="p-2 text-red-600 hover:text-red-700"><X className="w-4 h-4" /></button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayItem('requirements')} className="flex items-center text-blue-600 hover:text-blue-700 mt-2"><Plus className="w-4 h-4 mr-1" /> Add Requirement</button>
          </div>
          {/* Learning Outcomes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Learning Outcomes</label>
            {form.learningOutcomes.map((out, idx) => (
              <div key={idx} className="flex items-center space-x-2 mb-2">
                <input type="text" value={out} onChange={e => handleArrayChange(idx, 'learningOutcomes', e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter learning outcome" />
                <button type="button" onClick={() => removeArrayItem('learningOutcomes', idx)} className="p-2 text-red-600 hover:text-red-700"><X className="w-4 h-4" /></button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayItem('learningOutcomes')} className="flex items-center text-blue-600 hover:text-blue-700 mt-2"><Plus className="w-4 h-4 mr-1" /> Add Learning Outcome</button>
          </div>
          {/* Projects */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Projects</label>
            {form.projects.map((proj, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Project Title</label>
                    <input type="text" value={proj.title} onChange={e => handleProjectChange(idx, 'title', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter project title" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Technologies</label>
                    <input type="text" value={proj.technologies.join(', ')} onChange={e => handleProjectTechChange(idx, e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter technologies (comma separated)" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Project Description</label>
                  <textarea value={proj.description} onChange={e => handleProjectChange(idx, 'description', e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter project description" />
                </div>
                <button type="button" onClick={() => removeProject(idx)} className="mt-2 text-red-600 hover:text-red-700 text-sm">Remove Project</button>
              </div>
            ))}
            <button type="button" onClick={addProject} className="flex items-center text-blue-600 hover:text-blue-700 mt-2"><Plus className="w-4 h-4 mr-1" /> Add Project</button>
          </div>
          {/* Program Outcomes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Program Outcomes</label>
            {form.programOutcomes.map((out, idx) => (
              <div key={idx} className="flex items-center space-x-2 mb-2">
                <input type="text" value={out} onChange={e => handleArrayChange(idx, 'programOutcomes', e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter program outcome" />
                <button type="button" onClick={() => removeArrayItem('programOutcomes', idx)} className="p-2 text-red-600 hover:text-red-700"><X className="w-4 h-4" /></button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayItem('programOutcomes')} className="flex items-center text-blue-600 hover:text-blue-700 mt-2"><Plus className="w-4 h-4 mr-1" /> Add Program Outcome</button>
          </div>
          {/* Settings */}
          <div className="flex items-center space-x-6 mt-4">
            <div className="flex items-center">
              <input type="checkbox" name="isPublished" checked={form.isPublished} onChange={handleChange} className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mr-2" />
              <label className="block text-sm text-gray-900">Published</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={handleChange} className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mr-2" />
              <label className="block text-sm text-gray-900">Featured</label>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8">
            <Link to={`/lms/admin/course/${courseId}`} className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">Cancel</Link>
            <button type="submit" disabled={saving} className="flex items-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50">
              {saving ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <Save className="w-4 h-4 mr-2" />}
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
          {success && <div className="text-green-600 text-center font-medium mt-4">Course updated successfully!</div>}
        </form>
      </div>
    </div>
  );
};

export default AdminCourseEdit;