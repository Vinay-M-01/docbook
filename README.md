# docbook
DocBook is a web application designed to simplify the process of booking medical appointments with top healthcare professionals across various specialties. This project aims to enhance patient experience by providing a reliable, efficient, and secure platform for managing healthcare appointments.

#Features
Easy appointment booking with board-certified doctors.
User-friendly interface for seamless navigation.
Secure and confidential handling of personal information.
Comprehensive care across multiple health specialties:
-Cardiology
-Dermatology
-Pediatrics
-Orthopedics
-Psychiatry
-Gynecology


#Installation
To run this project locally, follow these steps:
Clone the repository and navigate to the project directory.
Install dependencies by ensuring you have Node.js (version 16.x) installed, then run npm install.

#Usage
To start the development server and run the application locally, use npm start. This will launch the application in development mode. Open http://localhost:3000 to view it in the browser.
To create an optimized production build, use npm run build. The build artifacts will be stored in the build/ directory.

#Available Scripts
In the project directory, you can run:

npm start to run the app in development mode.
npm run build to build the app for production to the build folder.
npm run test to launch the test runner in the interactive watch mode.
npm run eject to eject the default CRA configuration for customization.

#Dependencies
@calcom/embed-react: ^1.5.0
@craco/craco: ^7.0.0-alpha.0
dangerous-html: 0.1.12
firebase: ^9.17.1
prop-types: 15.7.2
react: ^17.0.2
react-dom: ^17.0.2
react-firebase-hooks: ^5.1.1
react-helmet: ^6.1.0
react-router-dom: ^5.2.0

#DevDependencies
react-scripts: ^5.0.1

#Contributing
Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are reviewed on a regular basis.

Test Cases 

Test Case 1: Navigate through the Web App
Test Objective: Ensure the user can freely navigate through the web application.
Preconditions: The web application is running.
Test Steps:
Open the web application.
Navigate through various pages (e.g., Home, About, Specialties).
Refresh on various modal displays & check for any broken images or icons.
Expected Result: The user can navigate through all the sections of the web app without any broken images, icons, or any issues.

Test Case 2: Login to Continue Booking
Test Objective: Verify that the user must log in to book an appointment.
Preconditions: The user is on the web application.
Test Steps:
Attempt to book an appointment without logging in.
Observe the system's response.
Click on the Login button & enter email id.
Check Email for unique link.
Expected Result: The user is prompted to log in.

Test Case 3: Complete Profile to Book Appointment
Test Objective: Ensure that the user must complete their profile to book an appointment.
Preconditions: The user is logged in but has an incomplete profile.
Test Steps:
Attempt to book an appointment with an incomplete profile.
Observe the system's response.
Expected Result: The user is prompted to complete their profile.

Test Case 4: Update Name and Profile Photo
Test Objective: Verify that the user can update their name and profile photo.
Preconditions: The user is logged in and on the profile page.
Test Steps:
Update the name field.
Upload a new profile photo.
Save the changes.
Expected Result: The profile is updated successfully with the new name and photo.

Test Case 5: Booking Appointment Button Functionality
Test Objective: Check the functionality of the "Book an appointment" button.
Preconditions: The user is logged in and has a complete profile.
Test Steps:
Click the "Book an appointment" button.
Observe if the user is directed to select time, date, and doctor specialty.
Expected Result: The user is directed to the appropriate page to select time, date, and doctor specialty.

Test Case 6: Selecting Time, Date, and Specialty
Test Objective: Ensure that selecting time, date, and specialty blocks the doctor slot but does not book it.
Preconditions: The user is on the appointment booking page.
Test Steps:
Select a time, date, and doctor specialty.
Observe if the selected slot is blocked but not booked.
Expected Result: The selected doctor slot is marked as blocked.

Test Case 7: Booking Doctor Slot after Payment
Test Objective: Verify that the doctor slot is booked after payment is made.
Preconditions: The user has selected a doctor slot and is on the payment page.
Test Steps:
Make the payment.
Observe if the doctor slot is booked.
Expected Result: The doctor slot is booked and an email confirmation is sent to both the user and the doctor.

Test Case 8: Email Confirmation on Booking
Test Objective: Ensure that an email confirmation is sent to both the user and the doctor upon successful booking.
Preconditions: The user has successfully booked an appointment.
Test Steps:
Check the user's email for a confirmation message.
Verify that the doctor also receives a confirmation email.
Expected Result: Both the user and the doctor receive email confirmations.

Test Case 9: Cancel Appointment and Release Slot
Test Objective: Ensure that canceling an appointment releases the doctor slot.
Preconditions: The user has a booked appointment.
Test Steps:
Cancel the booked appointment.
Verify that the doctor slot is released.
Expected Result: The doctor slot is released and available for other bookings.

Test Case 10: Slot Booking with Payment Cancellation
Test Objective: Verify the behavior when a slot is booked but the payment is canceled.
Preconditions: The user has selected a doctor slot and initiated the payment process.
Test Steps:
Initiate the payment process.
Cancel the payment before completion.
Observe the status of the doctor slot.
Expected Result: The slot status shows as "booking in progress" but the doctor slot is not blocked.

Test Case 11: Doctor Confirmation of Booking
Test Objective: Verify that the appointment is confirmed by the doctor through Cal.com.
Preconditions: The user has successfully booked a slot and made the payment.
Test Steps:
Complete the booking and payment process.
Wait for the doctor to confirm the appointment via Cal.com.
Check the status of the appointment in the user’s profile.
Expected Result: The appointment status changes to confirmed after the doctor confirms via Cal.com.

Test Case 12: Meeting Scheduled Confirmation Email
Test Objective: Ensure that a meeting scheduled confirmation email is sent to the user after the doctor confirms the appointment.
Preconditions: The doctor has confirmed the appointment.
Test Steps:
Verify that the doctor has confirmed the appointment.
Check the user’s email for a meeting scheduled confirmation message.
Expected Result: The user receives an email confirming the scheduled meeting.

Test Case 13: Reminder Email Before Appointment
Test Objective: Verify that the user receives a reminder email at the specified time before the meeting.
Preconditions: The appointment is confirmed by the doctor and scheduled in the future.
Test Steps:
Wait until the specified reminder time before the scheduled appointment.
Check the user’s email for a reminder message.
Expected Result: The user receives a reminder email before the meeting starts.

Test Case 14: Cancel Appointment After Doctor Confirmation
Test Objective: Ensure that canceling an appointment after the doctor confirms it releases the doctor slot.
Preconditions: The appointment is confirmed by the doctor.
Test Steps:
Cancel the confirmed appointment.
Verify that the doctor slot is released and available for other bookings.
Expected Result: The doctor slot is released and available for new bookings after the cancellation.

Test Case 15: Booking Status During Payment Cancellation
Test Objective: Verify the behavior when a slot is booked but the payment process is canceled before completion.
Preconditions: The user has selected a doctor slot and initiated the payment process.
Test Steps:
Initiate the payment process.
Cancel the payment before completion.
Observe the status of the doctor slot in both the user interface and backend (if accessible).
Expected Result: The slot status shows as "booking in progress" but the doctor slot is not blocked for other users.

Test Case 16: Reminder Functionality from Cal.com
Test Objective: Verify that Cal.com sends reminders to the user before the meeting.
Preconditions: The user has a confirmed appointment scheduled in the future.
Test Steps:
Verify the reminder time settings in Cal.com.
Wait for the reminder time to approach.
Check if the user receives a reminder from Cal.com.
Expected Result: The user receives a reminder from Cal.com at the specified time before the appointment.

Test Case 17: Booking Flow with Cal.com Integration
Test Objective: Ensure the seamless integration of Cal.com in the booking flow, from selecting a slot to receiving confirmation.
Preconditions: The user is logged in and has a complete profile.
Test Steps:
Navigate to the booking page.
Select a time, date, and doctor specialty.
Complete the payment process.
Wait for the doctor to confirm the appointment.
Verify that the user receives a confirmation email and a reminder.
Expected Result: The entire booking flow works seamlessly with Cal.com, with all expected notifications and confirmations received.



