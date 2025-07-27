import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "0781234567",
    course: "Computer Science",
    role: "student",
  });

  const handleChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Send updated profile to backend
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={profile.fullName}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full p-2 border"
          disabled
        />
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          type="text"
          name="course"
          value={profile.course}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          type="text"
          name="role"
          value={profile.role}
          className="w-full p-2 border"
          disabled
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2">
          Save Changes
        </button>
      </form>
    </div>
  );
}
