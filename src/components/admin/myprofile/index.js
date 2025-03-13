import { useState } from "react";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textArea";
import { Button } from "../../ui/button";
import { Select } from "../../ui/select";
import { Calendar, Lock, Mail, MapPin, Phone, Upload } from "lucide-react";
import axios from "axios";

export default function Settings({ user }) {
  const [formData, setFormData] = useState({
    businessName: user?.businessName || "",
    userName: user?.name || "",
    email: user?.email || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phone: user?.phone || "",
    birthday: user?.birthday || "",
    about: user?.about || "",
    address1: user?.address || "",
    address2: user?.address2 || "",
    city: user?.city || "",
    state: user?.state || "",
    country: user?.country || "",
    zip: user?.zip || "",
    avatar: user?.avatar || "https://turo.zipprr.com/images/avatar.png",
  });
  
  const API_URL = process.env.REACT_APP_API_URL;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
        const userId = user.id; // Ensure this is correct
        const token = localStorage.getItem("token");

        if (!API_URL) {
            console.error("API_URL is not defined.");
            return;
        }
        
        if (!user) {
            console.error("User data is undefined.");
            return;
        }

        // Compare formData with the initial user data and only send changed values
        const updatedFields = Object.keys(formData).reduce((acc, key) => {
            if (formData[key] !== user?.[key]) {  // Only include changed fields
                acc[key] = formData[key];
            }
            return acc;
        }, {});

        // If nothing has changed, don't make an API request
        if (Object.keys(updatedFields).length === 0) {
            console.log("No changes detected, skipping API call.");
            return;
        }

        // Ensure 'name' is included if required by backend
        if (updatedFields.userName || !updatedFields.email && user?.email) {
            updatedFields.name = updatedFields.userName;
            updatedFields.email = user.email;
            delete updatedFields.userName;
        }

        console.log("Updating profile with:", updatedFields);

        const response = await axios.put(
            `${API_URL}/users/update-profile/${userId}`,
            updatedFields,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        alert("Profile updated:", response.data);
    } catch (error) {
        alert("Error updating profile:", error.response?.data || error);
    }
};




  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="mx-auto bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <Button variant="outline" icon={<Lock />}>Change Password</Button>
        </div>

        <div className="grid grid-cols-2 gap-6">
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
          </div>

          <div>
            <h3 className="font-bold mb-3">Location Information</h3>
            <Input icon={<MapPin />} placeholder="Address Line 1" name="address1" value={formData.address} onChange={handleChange} />
            <Input placeholder="Address Line 2" name="address2" value={formData.address2} onChange={handleChange} className="mt-2" />
            <Input placeholder="City" name="city" value={formData.city} onChange={handleChange} className="mt-2" />
            <Input placeholder="State" name="state" value={formData.state} onChange={handleChange} className="mt-2" />
            <Select name="country" value={formData.country} onChange={handleChange} className="mt-2" options={[{ value: "Aland Islands", label: "Aland Islands" }, { value: "United States", label: "United States" }, { value: "Canada", label: "Canada" }]} />
            <Input placeholder="Zip Code" name="zip" value={formData.zip} onChange={handleChange} className="mt-2" />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
