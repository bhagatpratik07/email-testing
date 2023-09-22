document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const usernameInput = document.getElementById("reg-username");
    const passwordInput = document.getElementById("reg-password");

    // Check if both fields have values
    if (!usernameInput.value || !passwordInput.value) {
      console.error("Username and password are required.");
      return;
    }

    const formData = {
      username: usernameInput.value,
      password: passwordInput.value,
    };

    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  });

document
  .getElementById("view-inbox-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("view-username").value;
    fetch(`http://localhost:3000/inbox/${username}`)
      .then((response) => response.json())
      .then((inboxData) => {
        // Display inbox data in email format
        const inboxContainer = document.getElementById("inbox-container");
        inboxContainer.innerHTML = ""; // Clear previous inbox data

        if (inboxData.length === 0) {
          inboxContainer.innerHTML = "<p>No emails in the inbox.</p>";
        } else {
          inboxData.forEach((email, index) => {
            const emailElement = document.createElement("div");
            emailElement.classList.add("email");
            emailElement.innerHTML = `
                        <h2>Email ${index + 1}</h2>
                        <p><strong>Subject:</strong> ${email.subject}</p>
                        <p><strong>Message:</strong> ${email.message}</p>
                    `;
            inboxContainer.appendChild(emailElement);
          });
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  });

document
  .getElementById("send-email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect data from form fields
    const username = document.getElementById("send-username").value;
    const subject = document.getElementById("email-subject").value;
    const message = document.getElementById("email-message").value;

    // Create a JavaScript object to hold the data
    const formData = {
      username: username,
      subject: subject,
      message: message,
    };

    // Send the data as JSON in the request body
    fetch(`http://localhost:3000/inbox/${username}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the correct content type
      },
      body: JSON.stringify(formData), // Convert data to JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const successMessage = document.getElementById("success-message");
        successMessage.textContent = "Email sent successfully.";
        setTimeout(() => {
          successMessage.textContent = "";
        }, 3000); // Clear the success message after 3 seconds
        // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  });
