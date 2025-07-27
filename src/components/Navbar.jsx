import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="flex justify-between">
        <Link to="/" className="font-bold text-lg">Student Manager</Link>
        <div className="space-x-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/admin">Admin Panel</Link>
        </div>
      </div>
    </nav>
  );
}
