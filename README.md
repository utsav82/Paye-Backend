# Paye

Paye is a simple and intuitive expense-tracking application designed to help users manage shared expenses in various scenarios such as living with roommates or going on trips with family and friends.

## Features

- **User Management:**
  - Create user accounts with unique usernames and email addresses.
  - Securely store user passwords using password hashing.

- **Group Management:**
  - Create groups for different expense scenarios (e.g., Roommates, Trip with Family).
  - Easily add and remove users from groups.

- **Expense Tracking:**
  - Record expenses with details such as amount, description, category, and date.
  - Support for splitting expenses among group members.

- **Real-Time Updates:**
  - Get real-time updates on expenses and balances.
  - Receive push notifications for new expenses and settlements.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/utsav82/Paye-Backend/
   cd Paye-Backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Database:**
   - Set up your MongoDB connection string in the `.env` file.
   - MONGO_URL=""
   - SECRET=""

4. **Run the Application:**
   ```bash
   npm start
   ```

5. **API Endpoints:**
   - User-related endpoints: `/users`
   - Group-related endpoints: `/groups`
   - Expense-related endpoints: `/expenses`
   - User-Group relationship endpoints: `/usergroup`
   - Expense-Share relationship endpoints: `/expenseshare`

## API Documentation

For detailed API documentation and usage examples, refer to the [API Documentation](docs/API.md).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## To-Do List

- [ ] Implement email verification for new user accounts.
- [ ] Enhance schema.
- [ ] Improve error handling and validation.

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

---
