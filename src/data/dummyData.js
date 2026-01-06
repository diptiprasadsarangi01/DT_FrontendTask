export const user = {
  name: "deep4439",
  email: "deep44@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/88604576?v=4"
};

export const organization = {
  name: "DeepThought",
  website: "https://deepthought.com",
  sector: "Education Technology",
  role: "Member",
  leader: {
    name: "Hariharan Anand",
    title: "CTO",
    email: "hariharan@gmail.com",
    phone: "+91 1234567890"
  },
  location: {
      id: "loc_1",
      city: "Hyderabad",
      state: "TG",
      country: "India",
      address: "Street No. 2, Hyderabad, TG 500007, India"
  },
};

export const memberships = {
  total: 1,
  members:{
  name:"Amresh Puri",
  designation: "spmember",
  joindate: "January 3, 2026",
  status: "Active"
  }
  
};

export const allOrganizations = [
  {
    id: "org_001",
    name: "DeepThought",
    sector: "Education Technology",
    website: "https://deepthought.com",
    isCurrent: true,
    membershipsCount: 1,
    memberships: ["member"],
    description: "DeepThought - Education Technology"
  }
];