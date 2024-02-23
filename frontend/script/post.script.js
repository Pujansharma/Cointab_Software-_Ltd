window.onload = async function () {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const userName = params.get("userName");
  const companyName = params.get("companyName");

  await fetchUserInfo(userId);
  await fetchUserPosts(userId);
  const if_user_exist = await findUser(userId);
  if (if_user_exist) {
    document.getElementById("bulkAddButton").style.display = "none";
    document.getElementById("downloadExcelButton").style.display = "block";
  } else {
    document.getElementById("bulkAddButton").style.display = "block";
    document.getElementById("downloadExcelButton").style.display = "none";
  }

  displayUserInfo(userName, companyName);
};

//geting user's name and company
async function fetchUserInfo(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();

    return user;
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
}

//geting user's post
async function fetchUserPosts(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error("Error fetching user posts:", error);
  }
}

// displaying user's name and company
async function displayUserInfo(userName, companyName) {
  const userInfo = document.getElementById("userInfo");
  userInfo.innerHTML = `
      <h3>Name: ${userName}</h3>
      <h3>Company: ${companyName}</h3>
    `;
}

// appending user's post
async function displayUserPosts(posts) {
  const userPosts = document.getElementById("userPosts");
  userPosts.innerHTML = "";

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `
        <strong>Title:</strong> ${post.title}<br>
        <strong>Body:</strong> ${post.body}<br>
        <hr>
      `;
    userPosts.appendChild(postDiv);
  });
}

//appending all user's data on page
async function loadPostData() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");

  const user = await fetchUserInfo(userId);
  const posts = await fetchUserPosts(userId);

  displayUserInfo(user.name, user.company.name);
  displayUserPosts(posts);
}

// on page load activating function to append data
loadPostData();

// Excel button function to download the post data

async function downloadExcel() {
  try {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");

    const posts = await fetchUserPosts(userId);
    if (!posts || posts.length === 0) {
      alert("No posts found for download.");
      return;
    }
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(posts);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Posts");
    const filename = `user_${userId}_posts.xlsx`;
    XLSX.writeFile(workbook, filename);
    alert("Excel file downloaded successfully.");
  } catch (error) {
    console.error("Error downloading Excel file:", error);

    alert("Error downloading Excel file. Please try again.");
  }
}

//bulk adding button function
async function bulkAdd() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const posts = await fetchUserPosts(userId);
  try {
    const response = await fetch("https://weary-blue-overshirt.cyclic.app/post/bulkAdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        posts,
      }),
    });

    if (response.ok) {
      alert("Posts added successfully");
      document.getElementById("bulkAddButton").style.display = "none";
      document.getElementById("downloadExcelButton").style.display = "block";
    } else {
      const errorData = await response.json();
      alert(errorData.message);
    }
  } catch (err) {
    alert("Error adding posts:", err);
  }
}

//////////////
async function findUser(id) {
  const user_id = id;
  try {
    const response = await fetch(
      `https://weary-blue-overshirt.cyclic.app/post/bulkAdd/present?user_id=${user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}