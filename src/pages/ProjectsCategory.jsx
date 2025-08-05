import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Default mapping of departments to domains (customize as needed)
const departmentDomainMap = {
  CSE: [
    "Web Development",
    "AI/ML",
    "Data Science",
    "Cloud Computing",
    "Cyber Security",
    "Blockchain",
    "Full Stack",
    "Front End",
    "Back End",
    "Java Full Stack",
    "Python Full Stack",
    "MERN stack",
    "Deep Learning",
    "Natural Language Processing",
    "IoT",
    "Embedded Systems",
    "Wireless Sensor Networks",
    "Big Data",
    "Analytics"
  ],
  ECE: ["Embedded Systems", "VLSI", "Signal Processing", "IoT", "Robotics"],
  EEE: ["Power Systems", "Control Systems", "Electrical Machines", "Renewable Energy"],
  MECH: ["Thermal Engineering", "Design", "Manufacturing", "Automobile"],
  CIVIL: ["Structural", "Construction Management", "Geotechnical", "Environmental"],
};

function ProjectsCategory() {
  const [projects, setProjects] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");

  useEffect(() => {
    fetch("/Excel/ProjectsList.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const workbook = XLSX.read(ab, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        setProjects(data);
      });
  }, []);

  // Gather all unique domains from the data
  const allDomains = Array.from(new Set(projects.map((p) => p.Domain)));

  // Filter departmentDomainMap to only show departments with at least one domain present in the data
  const filteredDeptDomainMap = Object.fromEntries(
    Object.entries(departmentDomainMap).map(([dept, domains]) => [
      dept,
      domains.filter((d) => allDomains.includes(d)),
    ]).filter(([_, domains]) => domains.length > 0)
  );

  // Filter projects by selected domain
  const filteredProjects = selectedDomain
    ? projects.filter((p) => p.Domain === selectedDomain)
    : projects;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-64 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 via-white to-green-100">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-800 drop-shadow-lg">All Projects by Category</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Browse all minor and major projects, organized department-wise with domain dropdowns.</p>
      </div>
      {/* Department Dropdowns */}
      <div className="max-w-6xl mx-auto w-full px-4 pt-8 pb-2 flex flex-wrap gap-8 items-center justify-center">
        {Object.entries(filteredDeptDomainMap).map(([dept, domains]) => (
          <div key={dept} className="flex flex-col items-center">
            <label className="mb-2 font-semibold text-blue-700">{dept}</label>
            <select
              className="p-2 rounded-lg border border-blue-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedDept === dept ? selectedDomain : ""}
              onChange={e => {
                setSelectedDept(dept);
                setSelectedDomain(e.target.value);
              }}
            >
              <option value="">Select Domain</option>
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>
        ))}
        {/* Reset Button */}
        <button
          className="px-5 py-2 rounded-full font-semibold border bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 transition shadow-sm mt-6"
          onClick={() => { setSelectedDept(""); setSelectedDomain(""); }}
        >
          Show All Projects
        </button>
      </div>
      {/* Projects Table */}
      <div className="max-w-6xl mx-auto w-full px-4 py-8 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left font-bold text-gray-700">Project Title</th>
              <th className="py-3 px-4 text-left font-bold text-gray-700">Domain</th>
              <th className="py-3 px-4 text-left font-bold text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((proj, idx) => (
              <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-800">{proj["Project Title"]}</td>
                <td className="py-3 px-4 text-gray-700">{proj.Domain}</td>
                <td className="py-3 px-4 text-gray-600">{proj.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsCategory; 