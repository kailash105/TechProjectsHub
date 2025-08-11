import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";

import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Training from "./pages/Training";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import ProjectsCategory from "./pages/ProjectsCategory";
import ITSolutions from "./pages/ITSolutions";
import ITPortfolio from "./pages/ITPortfolio";
import CseMinor from "./pages/CseMinor";
import CseMajor from "./pages/CseMajor";
import EeeMinor from "./pages/EeeMinor";
import EeeMajor from "./pages/EeeMajor";
import AimlMinor from "./pages/AimlMinor";
import AimlMajor from "./pages/AimlMajor";
import IotMinor from "./pages/IotMinor";
import IotMajor from "./pages/IotMajor";
import DataScienceMinor from "./pages/DataScienceMinor";
import DataScienceMajor from "./pages/DataScienceMajor";
import EceMinor from "./pages/EceMinor";
import EceMajor from "./pages/EceMajor";
import MechMinor from "./pages/MechMinor";
import MechMajor from "./pages/MechMajor";
import PythonFullStack from "./pages/PythonFullStack";
import JavaFullStack from "./pages/JavaFullStack";
import MernStack from "./pages/MernStack";
import AIML from "./pages/AIML";
import WebFullStack from "./pages/WebFullStack";
import FrontEnd from "./pages/FrontEnd";
import BackEnd from "./pages/BackEnd";
import DataScience from "./pages/DataScience";
import VLSI from "./pages/VLSI";
import CloudComputingAzure from "./pages/CloudComputingAzure";
import BlockChain from "./pages/BlockChain";


import AIML1Month from "./pages/AIML1Month";
import AIML2Months from "./pages/AIML2Months";
import AIML3Months from "./pages/AIML3Months";
import WebFullStack1Month from "./pages/WebFullStack1Month";
import WebFullStack2Months from "./pages/WebFullStack2Months";
import WebFullStack3Months from "./pages/WebFullStack3Months";
import BackEnd1Month from "./pages/BackEnd1Month";
import BackEnd2Months from "./pages/BackEnd2Months";
import BackEnd3Months from "./pages/BackEnd3Months";
import DataScience1Month from "./pages/DataScience1Month";
import DataScience2Months from "./pages/DataScience2Months";
import DataScience3Months from "./pages/DataScience3Months";
import BlockChain1Month from "./pages/BlockChain1Month";
import BlockChain2Months from "./pages/BlockChain2Months";
import BlockChain3Months from "./pages/BlockChain3Months";
import CustomProjects from "./pages/CustomProjects";
import PythonwithDSA from "./pages/PythonwithDSA";
import JavawithDSA from "./pages/JavawithDSA";
import CivilMinor from "./pages/CivilMinor";
import CivilMajor from "./pages/CivilMajor";

// LMS Components
import LMS from "./pages/LMS";
import LMSLogin from "./pages/LMSLogin";
import LMSRegister from "./pages/LMSRegister";
import StudentDashboard from "./pages/StudentDashboard";
import TrainerDashboard from "./pages/TrainerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminCourses from "./pages/AdminCourses";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminAddCourse from "./pages/AdminAddCourse";
import DynamicTraining from "./pages/DynamicTraining";
import ChatPage from "./pages/ChatPage";
import AdminUserDetail from "./pages/AdminUserDetail";
import AdminUserEdit from "./pages/AdminUserEdit";
import AdminCourseDetail from "./pages/AdminCourseDetail";
import AdminCourseEdit from "./pages/AdminCourseEdit";
import CreateAssignment from "./pages/CreateAssignment";
import SendAnnouncement from "./pages/SendAnnouncement";
import ScheduleClass from "./pages/ScheduleClass";
import UploadContent from "./pages/UploadContent";
import ManageStudents from "./pages/ManageStudents";
import MyCourses from "./pages/MyCourses";
import CourseBrowser from "./pages/CourseBrowser";
import StudentCourseDetail from "./pages/StudentCourseDetail";
import TrainerCourseContent from "./pages/TrainerCourseContent";
import Certificate from "./pages/Certificate";
import Certificates from "./pages/Certificates";
import NotFound from "./pages/NotFound";

// Import the Chatbot component
import Chatbot from "./components/Chatbot";
import AIBotIndicator from "./components/AIBotIndicator";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTop from "./components/BackToTop";
import CookieConsent from "./components/CookieConsent";
import Loading from "./components/Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading message="Loading TechProjectsHub..." />;
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Remove Concrete Printing and Interior Designing routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<Thanks />} />
        <Route path="/training" element={<Training />} />
        <Route path="/dynamic-training" element={<DynamicTraining />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-category" element={<ProjectsCategory />} />
        <Route path="/custom-projects" element={<CustomProjects />} />
        <Route path="/it-solutions" element={<ITSolutions />} />
        <Route path="/it-portfolio" element={<ITPortfolio />} />

        {/* Department Minor/Major Project Pages */}
        <Route path="/cse-minor" element={<CseMinor />} />
        <Route path="/cse-major" element={<CseMajor />} />
        <Route path="/eee-minor" element={<EeeMinor />} />
        <Route path="/eee-major" element={<EeeMajor />} />
        <Route path="/aiml-minor" element={<AimlMinor />} />
        <Route path="/aiml-major" element={<AimlMajor />} />
        <Route path="/iot-minor" element={<IotMinor />} />
        <Route path="/iot-major" element={<IotMajor />} />
        <Route path="/datascience-minor" element={<DataScienceMinor />} />
        <Route path="/datascience-major" element={<DataScienceMajor />} />
        <Route path="/ece-minor" element={<EceMinor />} />
        <Route path="/ece-major" element={<EceMajor />} />
        <Route path="/mech-minor" element={<MechMinor />} />
        <Route path="/mech-major" element={<MechMajor />} />
        <Route path="/civil-minor" element={<CivilMinor />} />
        <Route path="/civil-major" element={<CivilMajor />} />
        <Route path="/training/python-full-stack" element={<PythonFullStack />} />
        <Route path="/training/java-full-stack" element={<JavaFullStack />} />
        <Route path="/training/mern-stack" element={<MernStack />} />
        <Route path="/training/ai-ml" element={<AIML />} />
        <Route path="/training/web-full-stack" element={<WebFullStack />} />
        <Route path="/training/front-end" element={<FrontEnd />} />
        <Route path="/training/back-end" element={<BackEnd />} />
        <Route path="/training/data-science" element={<DataScience />} />
        <Route path="/training/vlsi" element={<VLSI />} />
        <Route path="/training/cloud-computing-azure" element={<CloudComputingAzure />} />
        <Route path="/training/block-chain" element={<BlockChain />} />


        <Route path="/training/ai-ml/1-month" element={<AIML1Month />} />
        <Route path="/training/ai-ml/2-months" element={<AIML2Months />} />
        <Route path="/training/ai-ml/3-months" element={<AIML3Months />} />
        <Route path="/training/web-full-stack/1-month" element={<WebFullStack1Month />} />
        <Route path="/training/web-full-stack/2-months" element={<WebFullStack2Months />} />
        <Route path="/training/web-full-stack/3-months" element={<WebFullStack3Months />} />
        <Route path="/training/back-end/1-month" element={<BackEnd1Month />} />
        <Route path="/training/back-end/2-months" element={<BackEnd2Months />} />
        <Route path="/training/back-end/3-months" element={<BackEnd3Months />} />
        <Route path="/training/data-science/1-month" element={<DataScience1Month />} />
        <Route path="/training/data-science/2-months" element={<DataScience2Months />} />
        <Route path="/training/data-science/3-months" element={<DataScience3Months />} />
        <Route path="/training/block-chain/1-month" element={<BlockChain1Month />} />
        <Route path="/training/block-chain/2-months" element={<BlockChain2Months />} />
        <Route path="/training/block-chain/3-months" element={<BlockChain3Months />} />
        <Route path="/training/python-with-ds" element={<PythonwithDSA />} />
        <Route path="/training/java-with-dsa" element={<JavawithDSA />} />


        <Route path="/training/ai-ml-1month" element={<AIML1Month />} />
        <Route path="/training/ai-ml-2months" element={<AIML2Months />} />
        <Route path="/training/ai-ml-3months" element={<AIML3Months />} />
        <Route path="/training/web-full-stack-1month" element={<WebFullStack1Month />} />
        <Route path="/training/web-full-stack-2months" element={<WebFullStack2Months />} />
        <Route path="/training/web-full-stack-3months" element={<WebFullStack3Months />} />
        <Route path="/training/back-end-1month" element={<BackEnd1Month />} />
        <Route path="/training/back-end-2months" element={<BackEnd2Months />} />
        <Route path="/training/back-end-3months" element={<BackEnd3Months />} />
        <Route path="/training/data-science-1month" element={<DataScience1Month />} />
        <Route path="/training/data-science-2months" element={<DataScience2Months />} />
        <Route path="/training/data-science-3months" element={<DataScience3Months />} />
        <Route path="/training/block-chain-1month" element={<BlockChain1Month />} />
        <Route path="/training/block-chain-2months" element={<BlockChain2Months />} />
        <Route path="/training/block-chain-3months" element={<BlockChain3Months />} />

        {/* LMS Routes */}
        <Route path="/lms" element={<LMS />} />
        <Route path="/lms/login" element={<LMSLogin />} />
        <Route path="/lms/register" element={<LMSRegister />} />
        <Route 
          path="/lms/student/dashboard" 
          element={
            <ProtectedRoute requiredRoles={['student']}>
              <StudentDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/trainer/dashboard" 
          element={
            <ProtectedRoute requiredRoles={['trainer']}>
              <TrainerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/dashboard" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/users" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminUsers />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/courses" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminCourses />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/analytics" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminAnalytics />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/add-course" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminAddCourse />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/user/:userId" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminUserDetail />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/user/:userId/edit" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminUserEdit />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/course/:courseId" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminCourseDetail />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/admin/course/:courseId/edit" 
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminCourseEdit />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/trainer/create-assignment" 
          element={
            <ProtectedRoute requiredRoles={['trainer']}>
              <CreateAssignment />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/trainer/send-announcement" 
          element={
            <ProtectedRoute requiredRoles={['trainer']}>
              <SendAnnouncement />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/trainer/schedule-class" 
          element={
            <ProtectedRoute requiredRoles={['trainer']}>
              <ScheduleClass />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/trainer/upload-content" 
          element={
            <ProtectedRoute requiredRoles={['trainer']}>
              <UploadContent />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/trainer/students" 
          element={
            <ProtectedRoute requiredRoles={['trainer']}>
              <ManageStudents />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/trainer/courses" 
          element={
            <ProtectedRoute requiredRoles={['trainer']}>
              <MyCourses />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/trainer/course/:courseId" 
          element={
            <ProtectedRoute requiredRoles={['trainer']}>
              <TrainerCourseContent />
            </ProtectedRoute>
          } 
        />

        {/* Course Browsing and Details */}
        <Route 
          path="/lms/courses" 
          element={
            <ProtectedRoute requiredRoles={['student']}>
              <CourseBrowser />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/student/course/:courseId" 
          element={
            <ProtectedRoute requiredRoles={['student']}>
              <StudentCourseDetail />
            </ProtectedRoute>
          } 
        />

        {/* Certificate Routes */}
        <Route 
          path="/lms/certificate/:courseId" 
          element={
            <ProtectedRoute requiredRoles={['student']}>
              <Certificate />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lms/certificates" 
          element={
            <ProtectedRoute requiredRoles={['student']}>
              <Certificates />
            </ProtectedRoute>
          } 
        />

        {/* Chat Routes - LMS Only */}
        <Route 
          path="/lms/chat" 
          element={
            <ProtectedRoute requiredRoles={['student', 'trainer']}>
              <ChatPage />
            </ProtectedRoute>
          } 
        />

        {/* 404 Route - Must be last */}
        <Route path="*" element={<NotFound />} />

              </Routes>
        
        {/* Chatbot Component - Available on all pages */}
        <Chatbot />
        <BackToTop />
        <CookieConsent />
        <ToastContainer position="top-right" autoClose={5000} />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
