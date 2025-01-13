const mongoose = require("mongoose");
const User = require("./models/user"); // Adjust the path if necessary
const Ad = require("./models/ad"); // Update the path as necessary

// MongoDB connection
mongoose
  .connect("mongodb://192.168.18.27:27017/cachina")
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Function to generate a unique ID
const generateUniqueId = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const random = Math.floor(10 + Math.random() * 90); // Random two-digit number
  return `C-${year}${month}${day}${random}${hours}${minutes}${seconds}`;
};

// Update users in the database
const updateUsers = async () => {
  try {
    const users = await User.find(); // Fetch all users
    console.log(`Found ${users.length} users.`);

    for (const user of users) {
      if (!user.uniqueId) {
        user.uniqueId = generateUniqueId(); // Assign unique ID
        await user.save(); // Save updated user back to the database
        console.log(`Updated user: ${user.name}, Unique ID: ${user.uniqueId}`);
      } else {
        console.log(`User ${user.name} already has a unique ID: ${user.uniqueId}`);
      }
    }

    console.log("All users updated successfully.");
  } catch (error) {
    console.error("Error updating users:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

// Run the update function
updateUsers();
