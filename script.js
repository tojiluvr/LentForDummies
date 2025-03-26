// Profile Picture Preview from File Input
function previewProfilePicFromFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const profilePic = document.getElementById("profile-pic");
    profilePic.src = reader.result; // Set the image to the uploaded file
  }

  if (file) {
    reader.readAsDataURL(file); // Read the file
  }
}

// Username Update
function updateUsername() {
  const usernameInput = document.getElementById("username-input");
  const username = usernameInput.value.trim();
  const profilePic = document.getElementById("profile-pic");

  if (username !== "") {
    // For now, just log it to the console
    console.log("Username updated:", username);
  }
}

// Send Message Function
function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const messageText = messageInput.value;

  const usernameInput = document.getElementById("username-input");
  const username = usernameInput.value.trim() || "Anonymous"; // Default to "Anonymous" if no username

  if (messageText.trim() !== "") {
    const messageContainer = document.getElementById("message-container");

    // Create new message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    // Create profile pic and username elements
    const avatarElement = document.createElement("img");
    const profilePicSrc = document.getElementById("profile-pic").src;
    avatarElement.src = profilePicSrc && profilePicSrc !== "" ? profilePicSrc : "default-avatar.png"; // Default to a placeholder if no profile pic
    avatarElement.classList.add("avatar");

    const usernameElement = document.createElement("span");
    usernameElement.classList.add("username");
    usernameElement.textContent = username;

    const textElement = document.createElement("span");
    textElement.classList.add("text");
    textElement.textContent = messageText;

    // Create a container to hold both profile picture and username together
    const avatarAndUsernameContainer = document.createElement("div");
    avatarAndUsernameContainer.classList.add("avatar-username-container");
    avatarAndUsernameContainer.appendChild(avatarElement);
    avatarAndUsernameContainer.appendChild(usernameElement);

    // Append the new elements to the message element
    messageElement.appendChild(avatarAndUsernameContainer);
    messageElement.appendChild(textElement);

    // Append new message to container
    messageContainer.appendChild(messageElement);

    // Clear input field
    messageInput.value = "";

    // Scroll to the bottom of the message container
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}

// Add event listeners for message sending
document.getElementById("send-button").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default action (if it's a form submit)
  sendMessage(); // Call the send message function
});

// Add event listener to send message when Enter key is pressed in the message input
document.getElementById("message-input").addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submit if Enter is pressed
    sendMessage(); // Call the send message function
  }
});
