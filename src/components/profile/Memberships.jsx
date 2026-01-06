import {LayoutGrid, BadgeCheck } from "lucide-react";

export default function Memberships({mem}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-center gap-2 mb-1">
        <LayoutGrid className="text-blue-600" size={18} />
        <h2 className="font-semibold text-gray-600">Your Memberships</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        You have <span>{mem.total}</span> active membership
      </p>

      <div className="border rounded-lg p-4 w-64">
        
        <div className="flex items-center gap-2 font-medium">
          <BadgeCheck className="text-blue-500" size={18} />
           <span className="text-gray-800">{mem.members.designation}</span>
        </div>
        <p className=" text-gray-400 mt-2">{mem.members.name}</p>
        <p className="text-xs text-gray-400 mt-2">JOINED</p>
        <p className="text-sm text-blue-400">{mem.members.joindate}</p>

        <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
          {mem.members.status}
        </span>
      </div>
    </div>
  );
}
