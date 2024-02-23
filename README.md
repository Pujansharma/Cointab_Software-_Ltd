# Cointab Software Private Limited - Software Developer Assignment


Welcome to the Cointab Software Private Limited Software Developer Assignment. In this assignment, we have successfully developed a simple 2-page website using Node.js and a SQL database. Below is an overview of what we have accomplished based on the given business requirements.

Business Requirements
Page 1: Home Page
Description
Upon opening the website, users are greeted with a prominent heading stating "Cointab SE-ASSIGNMENT." Additionally, there is a button named "All Users" displayed on the webpage.

Functionality
Clicking the "All Users" button fetches data from the specified API ('https://jsonplaceholder.typicode.com/users').
Essential user information is displayed, including:
Name
Email
Phone
Website
City
Company
Alongside the displayed user information, two buttons, "Open" and "Add," are provided. Initially, only the “Add” button is visible.
Clicking the "Add" button stores all the user information retrieved from the API in the database.
If the database contains the user's entry, the "Open" button is shown, and the “Add” button is hidden.
Clicking the "Open" button opens a new Post page.
Page 2: Post Page
Description
The Post Page fetches data from the API ('https://jsonplaceholder.typicode.com/posts?userId=${userId}') for the specific userId stored in the database.

Functionality
Essential user information is displayed, including:
Name (corresponding to the specific userId)
Title
Body
Company (associated with the particular userId)
Two buttons, "Bulk Add" and "Download In Excel," are placed at the top of the page. Initially, only the "Bulk Add" button is visible.
Clicking the "Bulk Add" button stores all the posts present on that page into the database.
If the database contains post entries for the specific userId, the "Bulk Add" button is hidden, and the "Download in Excel" button is shown.
Clicking the "Download in Excel" button initiates the download of an Excel file containing all the post information for that particular user.
Technologies Used
Node.js
SQL database (MySQL)
Express.js
JavaScript (Frontend and Backend)
HTML/CSS
AWS RDS
This project showcases the seamless integration of various technologies to fulfill the specified business requirements.

