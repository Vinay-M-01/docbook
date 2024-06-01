import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth, storage } from '../FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import "./MyProfilePopover.css";

const MyProfilePopover = ({ closePopover, anchorRef }) => {
  const [user, loading, usererror] = useAuthState(auth);
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [photoFile, setPhotoFile] = useState(null);
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  console.log(user, "popover user")

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
      closePopover();
    }
  };

  const popoverStyle = {
    position: 'absolute',
    top: anchorRef.current.getBoundingClientRect().bottom + window.scrollY,
    // left: anchorRef.current.getBoundingClientRect().left + window.scrollX,
  };

  return (
    <div className="profile-popover" style={popoverStyle}>
      <div className="profile-popover-content">
        <span className="profile-close-button" onClick={closePopover}>&times;</span>
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

export default MyProfilePopover;
