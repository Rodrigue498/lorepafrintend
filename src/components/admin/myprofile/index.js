// src/components/admin/myprofile/index.js
import { useState } from "react";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textArea";
import { Button } from "../../ui/button";
import { Select } from "../../ui/select";
import { Calendar, Lock, Mail, MapPin, Phone, User,Upload } from "lucide-react";

export default function Settings() {
    const [formData, setFormData] = useState({
      businessName: "",
      userName: "",
      email: "admin@carjom.com",
      firstName: "System",
      lastName: "Admin",
      phone: "112 666 888",
      birthday: "2025-01-30",
      about: "We're designers who have fallen in love with creating spaces...",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "Aland Islands",
      zip: "",
      avatar: "https://turo.zipprr.com/images/avatar.png",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="p-10 bg-gray-100 min-h-screen">
        <div className=" mx-auto bg-white p-6 rounded-lg shadow">
          
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <Button variant="outline" icon={<Lock />}>Change Password</Button>
          </div>
  
          <div className="grid grid-cols-2 gap-6">
            
            {/* Personal Information */}
            <div>
              <h3 className="font-bold mb-3">Personal Information</h3>
              <Input placeholder="Business name" name="businessName" value={formData.businessName} onChange={handleChange} />
              <Input placeholder="User name *" name="userName" value={formData.userName} onChange={handleChange} className="mt-2" />
              <Input icon={<Mail />} disabled value={formData.email} className="mt-2" />
              <div className="flex gap-2 mt-2">
                <Input placeholder="First name" name="firstName" value={formData.firstName} onChange={handleChange} />
                <Input placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <Input icon={<Phone />} name="phone" value={formData.phone} onChange={handleChange} className="mt-2" />
              <Input icon={<Calendar />} type="date" name="birthday" value={formData.birthday} onChange={handleChange} className="mt-2" />
              <Textarea name="about" value={formData.about} onChange={handleChange} className="mt-2" />
              
              {/* Profile Upload Section */}
              <div className="mt-4">
                <h3 className="font-bold mb-2">Profile Upload</h3>
                <div className="flex items-center gap-2">
                  <Button icon={<Upload />}>Upload Profile</Button>
                  <img src={formData.avatar} alt="Profile" className="w-12 h-12 rounded-full border" />
                </div>
              </div>
  
              {/* Browse Button */}
              <div className="flex gap-2 mt-4 items-center">
                <Button>Browse...</Button>
                <Input disabled value={formData.avatar} />
              </div>
            </div>
  
            {/* Location Information */}
            <div>
              <h3 className="font-bold mb-3">Location Information</h3>
              <Input icon={<MapPin />} placeholder="Address Line 1" name="address1" value={formData.address1} onChange={handleChange} />
              <Input placeholder="Address Line 2" name="address2" value={formData.address2} onChange={handleChange} className="mt-2" />
              <Input placeholder="City" name="city" value={formData.city} onChange={handleChange} className="mt-2" />
              <Input placeholder="State" name="state" value={formData.state} onChange={handleChange} className="mt-2" />
              
              {/* Fixed Select Usage */}
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-2"
                options={[
                  { value: "Aland Islands", label: "Aland Islands" },
                  { value: "United States", label: "United States" },
                  { value: "Canada", label: "Canada" },
                ]}
              />
  
              <Input placeholder="Zip Code" name="zip" value={formData.zip} onChange={handleChange} className="mt-2" />
            </div>
          </div>
  
          <div className="mt-6 flex justify-end">
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>
      </div>
    );
  }