import React, { useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth, storage } from '../FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import "./MyProfile.css";

const MyProfile = ({ showProfileModal, closeProfileModal }) => {
  const [displayName, setDisplayName] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const handleUpdateProfile = async () => {
    let photoURL = '';

    if (photoFile) {
      const storageRef = ref(storage, `profileImages/${auth.currentUser.uid}/${photoFile.name}`);
      await uploadBytes(storageRef, photoFile);
      photoURL = await getDownloadURL(storageRef);
    }

    const success = await updateProfile({ displayName, photoURL });
    if (success) {
      alert('Profile updated successfully');
      closeProfileModal();
    }
  };

  if (!showProfileModal) {
    return null;
  }

  return (
    <div className="profile-modal">
      <div className="profile-modal-content">
        <span className="profile-close-button" onClick={closeProfileModal}>&times;</span>
        <h2>Update Profile</h2>
        {error && <p className="profile-error">Error: {error.message}</p>}
        {updating ? (
          <p>Updating...</p>
        ) : (
          <>
            <label htmlFor="displayName">Display Name:</label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <label htmlFor="photoURL">Photo:</label>
            <input
              type="file"
              id="photoURL"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button className="profile-update-button" onClick={handleUpdateProfile}>
              Update Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
