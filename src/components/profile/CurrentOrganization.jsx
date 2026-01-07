import { Globe,ShieldCheck,Layers, MapPin, Mail, Phone,Building2,UserCircle } from "lucide-react";

export default function CurrentOrganization({ org  }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-center gap-2 mb-4">
        <Building2 size={18} className="text-blue-600" />
        <h2 className="font-semibold text-gray-700">
          Current Organization
        </h2>
      </div>
      <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase">
        Overview
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="border rounded-xl p-4 space-y-2">
          <p className="text-xs text-gray-400 uppercase">
            Organization Name
          </p>
          <p className="font-medium text-gray-900">{org.name}</p>

          <p className="text-xs text-gray-400 uppercase mt-3">
            Website
          </p>
          <a
            href={org.website}
            className="text-sm text-blue-600 flex items-center gap-1"
          >
            <Globe size={14} />
            {org.website}
          </a>
        </div>


        <div className="border rounded-xl p-4 space-y-3">
          <div>
            <p className="text-xs text-gray-400 uppercase">
              Your Privileges
            </p>
            <span className="inline-flex items-center gap-1 px-2 py-1 mt-1 text-xs bg-green-100 text-green-700 rounded">
              <ShieldCheck size={12} />
              Member
            </span>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase">
              Sector
            </p>
            <span className="inline-flex items-center gap-1 px-2 py-1 mt-1 text-xs bg-blue-100 text-blue-700 rounded">
              <Layers size={12} />
              Education Technology
            </span>
          </div>
        </div>
      </div>

     
      <div className="mt-4 border rounded-xl p-4">
        <p className="text-xs text-gray-400 uppercase mb-1">
          About
        </p>
        <p className="text-sm text-gray-700">
          DeepThought is a platform for Education Technology
        </p>
      </div>

      <hr className="my-4" />

      <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase">
        Leadership Team
      </h3>
        
      <div className="border rounded-xl p-4 w-full md:w-80 bg-gray-50">
        
        <div className="flex items-center gap-3 mb-3">
          <UserCircle size={36} className="text-blue-500" />
        
          <div>
            <p className="font-semibold text-gray-900">
              {org.leader.name}
            </p>
            <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
              {org.leader.title}
            </span>
          </div>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>{org.leader.email}</span>
          </div>
        
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>{org.leader.phone || "Not available"}</span>
          </div>
        </div>
      </div>



      <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase">
        Locations & Contact
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="border rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase mb-2">
            Office Locations
          </p>

          <div className="flex items-start gap-2 text-sm text-gray-700">
            <MapPin size={16} className="mt-0.5" />
            <div>
              <p className="font-medium text-gray-500"><span>{org.location.city}</span><span>{org.location.state}</span></p>
              <p className="text-gray-500">
               <span>{org.location.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase mb-2">
            Email Addresses
          </p>

          <div className="text-sm text-gray-500 flex items-center gap-2">
            <Mail size={16} />
            No email addresses available
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase mb-2">
            Phone Numbers
          </p>

          <div className="text-sm text-gray-500 flex items-center gap-2">
            <Phone size={16} />
            No phone numbers available
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}