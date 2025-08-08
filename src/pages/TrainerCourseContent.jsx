import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import apiService from '../utils/api';
import { 
  ArrowLeft, 
  BookOpen, 
  Plus, 
  Edit, 
  Trash2, 
  Play, 
  FileText, 
  Video,
  Upload,
  Save,
  X,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { toast } from 'react-toastify';

const TrainerCourseContent = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedModules, setExpandedModules] = useState(new Set());
  const [editingModule, setEditingModule] = useState(null);
  const [editingLesson, setEditingLesson] = useState(null);
  const [showAddModule, setShowAddModule] = useState(false);
  const [showAddLesson, setShowAddLesson] = useState(null);

  // Form states
  const [moduleForm, setModuleForm] = useState({
    title: '',
    description: '',
    order: 0
  });
  const [lessonForm, setLessonForm] = useState({
    title: '',
    description: '',
    type: 'video',
    duration: '',
    content: '',
    order: 0
  });

  useEffect(() => {
    fetchCourseContent();
  }, [courseId]);

  const fetchCourseContent = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await apiService.getCourse(courseId);
      setCourse(response);
      setModules(response.modules || []);
      
      // Expand first module by default
      if (response.modules && response.modules.length > 0) {
        setExpandedModules(new Set([response.modules[0].id]));
      }
    } catch (error) {
      console.error('Error fetching course content:', error);
      setError(error.message || 'Failed to load course content');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const handleAddModule = async (e) => {
    e.preventDefault();
    try {
      const newModule = await apiService.createModule(courseId, moduleForm);
      setModules(prev => [...prev, newModule]);
      setModuleForm({ title: '', description: '', order: 0 });
      setShowAddModule(false);
      toast.success('Module created successfully!');
    } catch (error) {
      console.error('Error creating module:', error);
      toast.error(error.message || 'Failed to create module');
    }
  };

  const handleUpdateModule = async (moduleId) => {
    try {
      const updatedModule = await apiService.updateModule(courseId, moduleId, moduleForm);
      setModules(prev => prev.map(m => m.id === moduleId ? updatedModule : m));
      setEditingModule(null);
      setModuleForm({ title: '', description: '', order: 0 });
      toast.success('Module updated successfully!');
    } catch (error) {
      console.error('Error updating module:', error);
      toast.error(error.message || 'Failed to update module');
    }
  };

  const handleDeleteModule = async (moduleId) => {
    if (!window.confirm('Are you sure you want to delete this module? This action cannot be undone.')) {
      return;
    }
    
    try {
      await apiService.deleteModule(courseId, moduleId);
      setModules(prev => prev.filter(m => m.id !== moduleId));
      toast.success('Module deleted successfully!');
    } catch (error) {
      console.error('Error deleting module:', error);
      toast.error(error.message || 'Failed to delete module');
    }
  };

  const handleAddLesson = async (moduleId, e) => {
    e.preventDefault();
    try {
      const newLesson = await apiService.createLesson(courseId, moduleId, lessonForm);
      setModules(prev => prev.map(m => {
        if (m.id === moduleId) {
          return { ...m, lessons: [...(m.lessons || []), newLesson] };
        }
        return m;
      }));
      setLessonForm({ title: '', description: '', type: 'video', duration: '', content: '', order: 0 });
      setShowAddLesson(null);
      toast.success('Lesson created successfully!');
    } catch (error) {
      console.error('Error creating lesson:', error);
      toast.error(error.message || 'Failed to create lesson');
    }
  };

  const handleUpdateLesson = async (moduleId, lessonId) => {
    try {
      const updatedLesson = await apiService.updateLesson(courseId, moduleId, lessonId, lessonForm);
      setModules(prev => prev.map(m => {
        if (m.id === moduleId) {
          return {
            ...m,
            lessons: m.lessons.map(l => l.id === lessonId ? updatedLesson : l)
          };
        }
        return m;
      }));
      setEditingLesson(null);
      setLessonForm({ title: '', description: '', type: 'video', duration: '', content: '', order: 0 });
      toast.success('Lesson updated successfully!');
    } catch (error) {
      console.error('Error updating lesson:', error);
      toast.error(error.message || 'Failed to update lesson');
    }
  };

  const handleDeleteLesson = async (moduleId, lessonId) => {
    if (!window.confirm('Are you sure you want to delete this lesson? This action cannot be undone.')) {
      return;
    }
    
    try {
      await apiService.deleteLesson(courseId, moduleId, lessonId);
      setModules(prev => prev.map(m => {
        if (m.id === moduleId) {
          return { ...m, lessons: m.lessons.filter(l => l.id !== lessonId) };
        }
        return m;
      }));
      toast.success('Lesson deleted successfully!');
    } catch (error) {
      console.error('Error deleting lesson:', error);
      toast.error(error.message || 'Failed to delete lesson');
    }
  };

  const startEditingModule = (module) => {
    setEditingModule(module.id);
    setModuleForm({
      title: module.title,
      description: module.description,
      order: module.order || 0
    });
  };

  const startEditingLesson = (lesson) => {
    setEditingLesson(lesson.id);
    setLessonForm({
      title: lesson.title,
      description: lesson.description,
      type: lesson.type || 'video',
      duration: lesson.duration || '',
      content: lesson.content || '',
      order: lesson.order || 0
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="animate-spin w-16 h-16 text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={fetchCourseContent}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/lms/trainer/courses"
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Course Content</h1>
                <p className="text-gray-600 mt-1">{course?.title}</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddModule(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Module
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Module Modal */}
        {showAddModule && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Module</h3>
              <form onSubmit={handleAddModule}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={moduleForm.title}
                      onChange={(e) => setModuleForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={moduleForm.description}
                      onChange={(e) => setModuleForm(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                    <input
                      type="number"
                      value={moduleForm.order}
                      onChange={(e) => setModuleForm(prev => ({ ...prev, order: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddModule(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add Module
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modules List */}
        <div className="space-y-4">
          {modules.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No modules yet</h3>
              <p className="text-gray-600 mb-6">Start by creating your first module</p>
              <button
                onClick={() => setShowAddModule(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create First Module
              </button>
            </div>
          ) : (
            modules.map((module) => (
              <div key={module.id} className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="flex items-center space-x-3 flex-1"
                    >
                      {expandedModules.has(module.id) ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-600">{module.description}</p>
                      </div>
                    </button>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => startEditingModule(module)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteModule(module.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Module Edit Form */}
                  {editingModule === module.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <form onSubmit={(e) => { e.preventDefault(); handleUpdateModule(module.id); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                              type="text"
                              value={moduleForm.title}
                              onChange={(e) => setModuleForm(prev => ({ ...prev, title: e.target.value }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                            <input
                              type="number"
                              value={moduleForm.order}
                              onChange={(e) => setModuleForm(prev => ({ ...prev, order: parseInt(e.target.value) }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            value={moduleForm.description}
                            onChange={(e) => setModuleForm(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={3}
                          />
                        </div>
                        <div className="flex justify-end space-x-3 mt-4">
                          <button
                            type="button"
                            onClick={() => setEditingModule(null)}
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Update Module
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Lessons */}
                  {expandedModules.has(module.id) && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-gray-900">Lessons</h4>
                        <button
                          onClick={() => setShowAddLesson(module.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1 text-sm"
                        >
                          <Plus className="w-3 h-3" />
                          Add Lesson
                        </button>
                      </div>

                      {/* Add Lesson Modal */}
                      {showAddLesson === module.id && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                          <div className="bg-white rounded-xl p-6 w-full max-w-md">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Lesson</h3>
                            <form onSubmit={(e) => handleAddLesson(module.id, e)}>
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                  <input
                                    type="text"
                                    value={lessonForm.title}
                                    onChange={(e) => setLessonForm(prev => ({ ...prev, title: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                  <select
                                    value={lessonForm.type}
                                    onChange={(e) => setLessonForm(prev => ({ ...prev, type: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  >
                                    <option value="video">Video</option>
                                    <option value="document">Document</option>
                                    <option value="quiz">Quiz</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                  <input
                                    type="text"
                                    value={lessonForm.duration}
                                    onChange={(e) => setLessonForm(prev => ({ ...prev, duration: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., 15 minutes"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                  <textarea
                                    value={lessonForm.description}
                                    onChange={(e) => setLessonForm(prev => ({ ...prev, description: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    rows={3}
                                  />
                                </div>
                              </div>
                              <div className="flex justify-end space-x-3 mt-6">
                                <button
                                  type="button"
                                  onClick={() => setShowAddLesson(null)}
                                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                  Add Lesson
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        {module.lessons && module.lessons.length > 0 ? (
                          module.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                {lesson.type === 'video' ? (
                                  <Video className="w-4 h-4 text-blue-500" />
                                ) : lesson.type === 'quiz' ? (
                                  <FileText className="w-4 h-4 text-green-500" />
                                ) : (
                                  <FileText className="w-4 h-4 text-gray-500" />
                                )}
                                <div>
                                  <span className="font-medium text-gray-900">{lesson.title}</span>
                                  {lesson.duration && (
                                    <span className="text-sm text-gray-500 ml-2">({lesson.duration})</span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => startEditingLesson(lesson)}
                                  className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                                >
                                  <Edit className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => handleDeleteLesson(module.id, lesson.id)}
                                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-4 text-gray-500">
                            No lessons yet. Add your first lesson to get started.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainerCourseContent; 