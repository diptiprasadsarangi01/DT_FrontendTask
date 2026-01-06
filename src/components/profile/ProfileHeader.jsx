import { Mail, CheckCircle } from "lucide-react";

export default function ProfileHeader({ user }) {
  return (
    <div className="relative">
      <div
        className="h-48 w-full bg-cover bg-center rounded-xl"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)"
        }}
      />

      
      <div className="bg-white -mt-16 mx-6 p-4 rounded-xl shadow flex items-center gap-4">
        <img
          src={user.avatar}
          className="w-20 h-20 rounded-full border-4 border-blue-200"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 font-semibold">
            <p className="text-blue-600">{user.name}</p>
            <CheckCircle size={16} className="text-blue-500" />
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-1">
            <Mail size={14} /> {user.email}
          </div>
        </div>

        <div className="flex gap-2">
          <button className=" px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600">
            View Plans
          </button>
          <button className="px-3 py-1 text-sm border rounded-md border-gray-300 text-gray-500 hover:bg-gray-500 hover:text-white">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
