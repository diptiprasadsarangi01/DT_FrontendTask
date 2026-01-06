import ProfileHeader from "@/components/profile/ProfileHeader";
import { user } from "@/data/dummyData";
export default function Home() {
  return (
  <>
   <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      <ProfileHeader user={user} />
    </div>
  </>
  );
}
