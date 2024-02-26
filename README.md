# Cointab SE-ASSIGNMENT

This repository contains the code for a simple 2-page website developed to fulfill the given business requirements. The project utilizes Node.js for the backend, MySQL for data storage, and HTML/CSS/JavaScript for the frontend. The backend is built with Express.js, and AWS RDS is utilized for hosting the SQL database.

## Business Requirements

### Page 1: Home Page

- **Prominent Heading:** Upon opening the website, users are greeted with a prominent heading stating "Cointab SE-ASSIGNMENT."
- **All Users Button:** A button named "All Users" is prominently displayed on the webpage.
- **User Data Display:** Clicking the "All Users" button fetches data from the specified API and displays essential user information, including Name, Email, Phone, Website, City, and Company.
- **Add User Feature:** Alongside the displayed user information, users are provided with an "Add" button to store user information from the API into the database.
- **Conditional Display:** If the database contains the user's entry, the "Open" button is displayed instead of the "Add" button.
- **Open Post Page:** Clicking the "Open" button opens a new Post page.

### Page 2: Post Page

- **Data Fetching:** Data is fetched from the API for the specific userId stored in the database.
- **User Data Display:** Essential user information is displayed, including Name (corresponding to the specific userId), Title, Body, and Company.
- **Bulk Add and Download:** Two buttons are provided at the top of the page: "Bulk Add" and "Download In Excel." Initially, only the "Bulk Add" button is visible.
- **Bulk Addition:** Clicking the "Bulk Add" button stores all the posts present on that page into the database.
- **Conditional Display:** If the database contains post entries for the specific userId, the "Bulk Add" button is hidden, and the "Download in Excel" button is shown.
- **Excel Download:** Clicking the "Download in Excel" button initiates the download of an Excel file containing all the post information for that particular user.

## Deployment

- **Frontend:** [https://cointabltd-assignments.netlify.app](https://cointabltd-assignments.netlify.app)
- **Backend/API:** [https://weary-blue-overshirt.cyclic.app](https://weary-blue-overshirt.cyclic.app)

## Technologies Used

- **Node.js**: Backend environment.
- **SQL database (MySQL)**: For data storage.
- **Express.js**: Web application framework for Node.js.
- **JavaScript (Frontend and Backend)**: Programming language used both client-side and server-side.
- **HTML/CSS**: Frontend markup and styling.
- **AWS RDS**: For SQL database hosting.

## API Documentation

### Endpoints

#### GET /users

- Fetches all users from the API.
- Returns an array of user objects with properties: id, name, email, phone, website, city, company.

#### POST /users/add

- Adds a new user to the database.
- Expects a JSON object with user information in the request body.
- Returns a success message upon successful addition.

#### GET /posts/:userId

- Fetches all posts for a specific user ID from the API.
- Returns an array of post objects with properties: userId, id, title, body.

#### POST /posts/addBulk/:userId

- Adds multiple posts for a specific user to the database.
- Expects an array of post objects in the request body.
- Returns a success message upon successful addition.

#### GET /posts/downloadExcel/:userId

- Initiates the download of an Excel file containing all the posts for a specific user.
- Generates the Excel file from the database records.


