import React from 'react';

const PrivateInformation = () => {
  return (
    <div>
      <h2>Private Information</h2>
      <div>
        <h3>Private Contact</h3>
        <p>Address:</p>
        <p>Email:</p>
        <p>Phone:</p>
        <p>Language:</p>
        <p>Home-Work Distance:</p>
        <p>Private car plate:</p>
      </div>
      <div>
        <h3>Family Status</h3>
        <p>Married:</p>
        <p>Number of dependents:</p>
      </div>
      <div>
        <h3>Education</h3>
        <p>Certificate level:</p>
        <p>Field of study:</p>
        <p>School:</p>
      </div>
      <div>
        <h3>Work Permit</h3>
        <p>Visa No:</p>
        <p>Work Permit No:</p>
        <p>Visa Expire Date:</p>
        <p>Work Permit Expiration Date:</p>
        <button>Upload Work Permit Image</button>
      </div>
      <div>
        <h3>Emergency</h3>
        <p>Contact Name:</p>
        <p>Number:</p>
      </div>
      <div>
        <h3>Citizenship</h3>
        <p>Nationality:</p>
      </div>
    </div>
  );
};

export default PrivateInformation;
