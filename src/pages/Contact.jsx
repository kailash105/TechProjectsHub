import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { MapPin, Linkedin, Instagram, Facebook, Twitter, CheckCircle, AlertCircle } from "lucide-react";
import Footer from "../components/Footer";
import logo from "../assets/logo.jpg";
import { sendContactEmail } from "../utils/emailService";

function Contact() {
  const [interestedIn, setInterestedIn] = useState("");
  const [projectType, setProjectType] = useState("");
  const [department, setDepartment] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [trainingDomain, setTrainingDomain] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    referral: '',
    message: ''
  });
  const domainOptions = [
    "Full Stack Dev",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "Java Full Stack",
    "Cloud Computing (Azure)",
    "GenAI",
    "Prompt Engineering",
    ".Net",
    "IoT"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const contactData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `Contact Form - ${interestedIn}`,
        message: `
          Interest: ${interestedIn}
          ${projectType ? `Project Type: ${projectType}` : ''}
          ${department ? `Department: ${department}` : ''}
          ${trainingType ? `Training Type: ${trainingType}` : ''}
          ${trainingDomain ? `Training Domain: ${trainingDomain}` : ''}
          Referral: ${formData.referral}
          
          Message: ${formData.message}
        `
      };

      const result = await sendContactEmail(contactData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          referral: '',
          message: ''
        });
        setInterestedIn('');
        setProjectType('');
        setDepartment('');
        setTrainingType('');
        setTrainingDomain('');
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* If you have a video, use it here. Otherwise, keep the image. */}
        {/* <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Contact/ContactHero.mp4"
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/Imagescontact/contact.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            <span className="text-white text-5xl">Contact </span>
            <span className="text-gray-500">Tech</span>
            <span className="text-white text-5xl">ProjectsHub</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Reach out for project support, research, or training in all technical domains.
          </p>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="max-w-[1200px] w-full mx-auto px-4 py-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-green-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl p-6 md:p-10 lg:p-14 xl:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 xl:gap-20">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name" 
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                required 
              />
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name" 
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                required 
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                required 
              />
            </div>
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
              />
            </div>
            {/* Interested In */}
            <div className="md:col-span-2">
              <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
              <select
                name="interestedIn"
                id="interestedIn"
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
                value={interestedIn}
                onChange={e => setInterestedIn(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="projects">Projects</option>
                <option value="training">Training</option>
                <option value="research-paper">Research Paper (IEEE)</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* Conditional fields for Projects */}
            {interestedIn === "projects" && (
              <>
                {/* Type of Project */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Type of Project</label>
                  <select
                    name="projectType"
                    id="projectType"
                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={projectType}
                    onChange={e => setProjectType(e.target.value)}
                  >
                    <option value="">Select type</option>
                    <option value="mini">Mini</option>
                    <option value="major">Major</option>
                  </select>
                </div>
                {/* Department */}
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    name="department"
                    id="department"
                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                  >
                    <option value="">Select department</option>
                    <option value="CSE">CSE</option>
                    <option value="MECH">MECH</option>
                    <option value="ECE">ECE</option>
                    <option value="IoT">IoT</option>
                    <option value="EEE">EEE</option>
                    <option value="AIML">AIML</option>
                    <option value="Cyber Sec">Cyber Sec</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </>
            )}
            {/* Conditional fields for Training */}
            {interestedIn === "training" && (
              <>
                {/* Training Type */}
                <div>
                  <label htmlFor="trainingType" className="block text-sm font-medium text-gray-700 mb-1">Training Type</label>
                  <select
                    name="trainingType"
                    id="trainingType"
                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={trainingType}
                    onChange={e => {
                      setTrainingType(e.target.value);
                      setTrainingDomain(""); // Reset domain when type changes
                    }}
                  >
                    <option value="">Select training type</option>
                    <option value="course">Course</option>
                    <option value="course-pbl">Course + PBL</option>
                    <option value="placement-training">Placement training (DSA+Aptitude)</option>
                  </select>
                </div>
                {/* Domain (only for Course or Course + PBL) */}
                {(trainingType === "course" || trainingType === "course-pbl") && (
                  <div>
                    <label htmlFor="trainingDomain" className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
                    <select
                      name="trainingDomain"
                      id="trainingDomain"
                      className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      required
                      value={trainingDomain}
                      onChange={e => setTrainingDomain(e.target.value)}
                    >
                      <option value="">Select domain</option>
                      {domainOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}
            {/* Where did you hear about us */}
            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">Where did you hear about us?</label>
              <input 
                type="text" 
                name="referral" 
                id="referral" 
                value={formData.referral}
                onChange={handleChange}
                placeholder="e.g. Google, Social Media, Friend" 
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
              />
            </div>
            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..." 
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
            {/* Terms and Conditions */}
            <div className="md:col-span-2 flex items-center gap-2 mt-2">
              <input type="checkbox" name="terms" id="terms" required className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
              <label htmlFor="terms" className="text-sm text-gray-700">I agree to the <a href="#" className="underline text-indigo-700 hover:text-indigo-900">terms and conditions</a>.</label>
            </div>
            {/* Status Message */}
            {submitStatus && (
              <div className={`col-span-2 p-4 rounded-lg flex items-center gap-3 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="text-sm font-medium">{submitStatus.message}</span>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`col-span-2 px-6 py-3 font-semibold rounded-lg transition mt-2 flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
            {/* Map + Filler Image */}
            <div className="flex flex-col h-full">
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/20 h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.779201047863!2d79.28588076154723!3d13.62345264391564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b511cbefcaf3%3A0x4eb0b29e1d33b522!2sMohan%20Babu%20University!5e0!3m2!1sen!2sin!4v1751289500300!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alpha Groups Location"
                ></iframe>
              </div>
              {/* Filler Image for vertical gap */}
              <img src="/src/assets/ImageConcretePrinting/concretePrint.webp" alt="Project Related" className="w-full h-40 object-cover rounded-xl shadow-lg mt-4 hidden md:block flex-1" />
            </div>
          </div>
        </div>
      </div>
      {/* Social Media & Address Section */}
      <div className="max-w-[1200px] w-full mx-auto px-4 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-pink-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl p-6 md:p-10 lg:p-14 xl:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Address */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <MapPin className="w-8 h-8 text-red-500" />
            <div>
              <div className="font-bold text-lg text-gray-800">TechProjectsHub</div>
              <div className="text-gray-700">123 Main Street, City Name, State, Country</div>
              <div className="text-gray-700">Phone: +91 12345 67890</div>
              <div className="text-gray-700">Email: info@alphagroups.com</div>
            </div>
          </div>
          {/* Social Media Handles */}
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition flex items-center gap-2">
              <Linkedin className="w-7 h-7" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 transition flex items-center gap-2">
              <Instagram className="w-7 h-7" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2">
              <Facebook className="w-7 h-7" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition flex items-center gap-2">
              <Twitter className="w-7 h-7" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
