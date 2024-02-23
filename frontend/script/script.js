document.addEventListener('DOMContentLoaded', async () => {
  const userList = document.getElementById('userList');
  const additionalButtons = document.getElementById('additionalButtons');

  const addedUsers = new Set(); 
  const fetchUserData = async (userId) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userData = await response.json();
      return userData;
  };

  // Function to add user to the database
  const addUserToDatabase = async (userData) => {
      try {
          const response = await fetch('https://weary-blue-overshirt.cyclic.app/addUser', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
          });
          if (response.ok) {
              alert('User added successfully');
              return true;
          } else {
              alert('Failed to add user');
              return false;
          }
      } catch (error) {
          console.error('Error adding user:', error);
          return false;
      }
  };

  // Function to fetch posts for a specific user from the API
  const fetchUserPosts = async (userId) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const postsData = await response.json();
      return postsData;
  };

  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      userList.innerHTML = '';
      users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.classList.add('user-card');
          userCard.innerHTML = `
              <p><strong>Name:</strong> ${user.name}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Phone:</strong> ${user.phone}</p>
              <p><strong>Website:</strong> ${user.website}</p>
              <p><strong>City:</strong> ${user.address.city}</p>
              <p><strong>Company:</strong> ${user.company.name}</p>
              <button class="addBtn" data-user-id="${user.id}" 
                  data-name="${user.name}" 
                  data-email="${user.email}" 
                  data-phone="${user.phone}" 
                  data-website="${user.website}" 
                  data-city="${user.address.city}" 
                  data-company="${user.company.name}">
                  Add
              </button>
              <button class="openBtn" data-user-id="${user.id}">Open User</button>
          `;
          userList.appendChild(userCard);
      });
      additionalButtons.style.display = 'block'; // Show additional buttons
  } catch (error) {
      console.log(error);
  }

  // Event listener for add button click
  userList.addEventListener('click', async (event) => {
      if (event.target.classList.contains('addBtn')) {
          const userId = event.target.dataset.userId;
          const name = event.target.dataset.name;
          const email = event.target.dataset.email;
          const phone = event.target.dataset.phone;
          const website = event.target.dataset.website;
          const city = event.target.dataset.city;
          const company = event.target.dataset.company;

          try {
              // Send data to backend
              const response = await fetch('https://weary-blue-overshirt.cyclic.app/addUser', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      userId,
                      name,
                      email,
                      phone,
                      website,
                      city,
                      company
                  })
              });

              if (response.ok) {
                  // User added successfully
                  alert('User added successfully');
                  event.target.style.display = 'none';
                  event.target.nextElementSibling.style.display = 'inline'; // Show the "Open" button
              } else {
                  // User already exists in the database
                  alert('User already exists in the database');
                  event.target.style.display = 'none';
                  event.target.parentElement.querySelector('.openBtn').style.display = 'inline';
              }
          } catch (error) {
              console.error('Error adding user:', error);
          }
      } else if (event.target.classList.contains('openBtn')) {
          const userId = event.target.dataset.userId;
          if (userId) {
              // Redirect to the post page for the selected user
              window.location.href = `post.html?userId=${userId}`;
          } else {
              console.error('User ID is not available');
              // Handle the case where the user ID is not available
          }
      }
  });
});
