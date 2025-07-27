import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [students, setStudents] = useState([]);

  // Simulated API fetch
  useEffect(() => {
    const mockStudents = [
      {
        id: 1,
        name: "Alice Uwase",
        email: "alice@example.com",
        course: "Software Engineering",
        year: 2023,
        status: "Active",
        role: "student",
      },
      {
        id: 2,
        name: "Jean Mugisha",
        email: "jean@example.com",
        course: "Cybersecurity",
        year: 2022,
        status: "Graduated",
        role: "student",
      },
    ];
    setStudents(mockStudents);
  }, []);

  const promoteToAdmin = (id) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id ? { ...student, role: "admin" } : student
      )
    );
  };

  const updateStatus = (id, newStatus) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id ? { ...student, status: newStatus } : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        🧑‍💼 Admin Dashboard - Manage Students
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white p-6">
        <table className="min-w-full text-sm text-center border-collapse">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="py-3 px-4 border">Name</th>
              <th className="py-3 px-4 border">Email</th>
              <th className="py-3 px-4 border">Course</th>
              <th className="py-3 px-4 border">Year</th>
              <th className="py-3 px-4 border">Status</th>
              <th className="py-3 px-4 border">Role</th>
              <th className="py-3 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.email}</td>
                <td className="py-2 px-4">{student.course}</td>
                <td className="py-2 px-4">{student.year}</td>
                <td className="py-2 px-4">
                  <select
                    value={student.status}
                    onChange={(e) => updateStatus(student.id, e.target.value)}
                    className="p-1 border rounded bg-white"
                  >
                    <option value="Active">Active</option>
                    <option value="Graduated">Graduated</option>
                    <option value="Dropped">Dropped</option>
                  </select>
                </td>
                <td className="py-2 px-4 capitalize">{student.role}</td>
                <td className="py-2 px-4 space-x-2">
                  {student.role !== "admin" && (
                    <button
                      onClick={() => promoteToAdmin(student.id)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
                    >
                      Promote
                    </button>
                  )}
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="7" className="py-4 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
