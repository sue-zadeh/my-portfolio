// // Navigation bar component
// // Task:
// // Create a component called InputBox.
// // It should take the following props:

// // label (string): the label of the input

// // value (string): the current value of the input

// // onChange (function): a callback that is called when the input changes

// // Render an <input> element with the given value, and call onChange when the input's value changes.

// // Also, render a <label> above the input showing the label prop.

// // Ensure the component passes the provided tests.

// import React {state}from "react"

//  const onChange = async(e) => {
//    setMessage(e.target.value)
   
//  }

// export default function InputBox({ label, value, onChange }) {
//   return (
//     <div>
//       <label htmlFor="name" data-testid="">{label}</label>
//       <input type='text' id='name' value={value} onChange={onChange} required />
//     </div>
//   )
// }


// // Implement Navbar Component

// // Create a Navbar component that:

// // Accepts a title prop (string) and displays it inside an <h1> tag.

// // Renders a nav element that wraps the content.

// // Displays a list of navigation links using an unordered list (<ul>).

// // Each navigation link should be a <li> item containing an <a> tag.

// // The component should:

// // Take a links prop — an array of objects with the shape { text: string, href: string }.

// // Render each link’s text and href properly in the <a> tags.

// export default function Navbar(){

// const[tab, setTab] = useState("Home");
// return (
//   <>
// <a onClick={() => setTab("Home")}>Home</a>
// <a onClick={() => setTab("News")}>News</a>
// <a onClick={() => setTab("Contact")}>Contact</a>from video. 
// <a onClick={()=> setTab("About")}>About</a>
//   </>
// )
// }
// // The component has the following functionalities:

// // There are 4 tabs: Home, News, Contact, About.

// // The default selected tab is the 'Home' tab.

// // Clicking on a tab renders the relevant content:

// // Home tab → 'HOME PAGE'

// // News tab → 'NEWS PAGE'

// // Contact tab → 'CONTACT PAGE'

// // About tab → 'ABOUT PAGE'

// // Default tab content = 'HOME PAGE'

// // Do not change these:

// // data-testid="navigation-tabs" on the parent of the <a> tags

// // data-testid="tab-content" on the content section

// import React, { useState } from "react";
// import "./index.css";

// export default function NavBar() {
//   const [tab, setTab] = useState("Home");

//   return (
//     <div className="layout-column justify-content-center align-items-center">
//       <div
//         className="layout-row justify-content-around align-items-center mt-20 links"
//         data-testid="navigation-tabs"
//       >
//         <a onClick={() => setTab("Home")}>Home</a>
//         <a onClick={() => setTab("News")}>News</a>
//         <a onClick={() => setTab("Contact")}>Contact</a>
//         <a onClick={() => setTab("About")}>About</a>
//       </div>

//       <div className="card w-20 ma-0">
//         <section className="card-text" data-testid="tab-content">
//           <span>{tab.toUpperCase()} PAGE</span>
//         </section>
//       </div>
//     </div>
//   );
// }






// // 2. React: Kanban Board
// // Kanban is a popular workflow used in task management, project management, issue tracking, and other similar purposes. The workflow is usually visualized using a Kanban Board.

// // Create a Kanban Board component with tasks, where each task consists of a name only, as shown below:

// // 🟩 Image of a Kanban Board UI shown (Backlog, To Do, Ongoing, Done)

// // The component must have the following functionalities:
// // The component board contains 4 stages of tasks in the sequence:
// // ‘Backlog’, ‘To Do’, ‘Ongoing’, and ‘Done’.

// // An array of tasks is passed as a prop to the component.

// // In every individual stage, the tasks are rendered as a list <ul>, where each task is a single list item <li> that displays the name of the task.

// // Each task list item has 2 icon buttons on the right:

// // Back button:
// // This moves the task to the previous stage in the sequence, if any.
// // This button is disabled if the task is in the first stage.

// // Forward button:
// // This moves the task to the next stage in the sequence, if any.
// // This button is disabled if the task is in the last stage.

// // Each task has 2 properties:
// // name: The name of the task. This is the unique identification for every task. [STRING]

// // stage: The stage of the task. [NUMBER]
// // (0 represents the ‘Backlog’ stage,
// // 1 represents the ‘To Do’ stage,
// // 2 represents the ‘Ongoing’ stage,
// // 3 represents the ‘Done’ stage)

// // The following data-testid attributes are required in the component for the tests to pass:
// // The <ul> for the Backlog stage should have the data-testid attribute:
// // stage-0

// // The <ul> for the To Do stage should have the data-testid attribute:
// // stage-1

// // The <ul> for the Ongoing stage should have the data-testid attribute:
// // stage-2

// // The <ul> for the Done stage should have the data-testid attribute:
// // stage-3

// // Every <li> task should follow these guidelines:
// // The <span> containing the name should have the attribute:
// // data-testid="TASK_NAME-name",
// // where TASK_NAME is the name of the task joined by hyphens.

// // For example, task "task 0" → task-0-name

// // task "abc" → abc-name

// // The back button should have:
// // data-testid="TASK_NAME-back"

// // For example: task-0-back, abc-back

// // The forward button should have:
// // data-testid="TASK_NAME-forward"

// // For example: task-0-forward, abc-forward

// // Please note that components have the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

// // Software Instructions
// // React Version: 16.13.1

// // Node Version: ^12.18.3

// // Default Port: 8000

// // Git Instructions
// // Use the following commands to work with this project:

// // Run
// // sql
// // Copy
// // Edit
// // npm start
// // Test
// // bash
// // Copy
// // Edit
// // npm test
// // Install
// // nginx
// // Copy
// // Edit
// // npm install


// import React from 'react'

// class KanbanBoard extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tasks: [
//         { name: 'Task 1 0', stage: 0 },
//         { name: 'Task 2 1', stage: 1 },
//         { name: 'Task 3 2', stage: 2 },
//         // more tasks...
//       ]
//     }

//     this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done']
//   }

//   moveToForward = (task) => {
//     const copyState = [...this.state.tasks]
//     const [_, index] = task.name.split(' ')
//     for (const s in copyState) {
//       if (Number(s) === Number(index)) {
//         task.stage += 1
//         copyState[index] = task
//         this.setState({ tasks: copyState })
//       }
//     }
//   }

//   moveToBack = (task) => {
//     const copyState = [...this.state.tasks]
//     const [_, index] = task.name.split(' ')
//     for (const s in copyState) {
//       if (Number(s) === Number(index)) {
//         task.stage -= 1
//         copyState[index] = task
//         this.setState({ tasks: copyState })
//       }
//     }
//   }

//   render() {
//     const { tasks } = this.state
//     let stagesTasks = []

//     for (let i = 0; i < this.stagesNames.length; ++i) {
//       stagesTasks.push([])
//     }

//     for (let task of tasks) {
//       const stageId = task.stage
//       stagesTasks[stageId].push(task)
//     }

//     return (
//       <div className="mt-20 layout-column justify-content-center align-items-center">
//         <div className="mt-50 layout-row">
//           {stagesTasks.map((tasks, i) => {
//             return (
//               <div className="card outlined ml-20 mt-0" key={`${i}`}>
//                 <div className="card-text">
//                   <h4>{this.stagesNames[i]}</h4>
//                   <ul className="styled mt-50" data-testid={`stage-${i}`}>
//                     {tasks.map((task, index) => {
//                       return (
//                         <li className="slide-up-fade-in" key={`${i}${index}`}>
//                           <div className="li-content layout-row justify-content-between align-items-center">
//                             <span data-testid={`${task.name.split(' ').join('-')}-name`}>
//                               {task.name}
//                             </span>
//                             <div className="icons">
//                               <button
//                                 className="icon-only x-small mx-2"
//                                 onClick={() => this.moveToBack(task)}
//                                 disabled={task.stage === 0}
//                                 data-testid={`${task.name.split(' ').join('-')}-back`}
//                               >
//                                 <i className="material-icons">arrow_back</i>
//                               </button>
//                               <button
//                                 className="icon-only x-small mx-2"
//                                 onClick={() => this.moveToForward(task)}
//                                 disabled={task.stage === this.stagesNames.length - 1}
//                                 data-testid={`${task.name.split(' ').join('-')}-forward`}
//                               >
//                                 <i className="material-icons">arrow_forward</i>
//                               </button>
//                             </div>
//                           </div>
//                         </li>
//                       )
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }
// }

// // export default KanbanBoard

// // ✅ Task Text From the First Image:
// // The app has one component named Articles. The list of articles to be displayed is already provided in the app.

// // The app must have the following functionalities:

// // The list of articles is passed to the App component as a prop in the form of an array of objects.

// // Each article has the following three properties:

// // title: The title of the article [STRING]

// // upvotes: The number of upvotes for an article [NUMBER]

// // date: The publish date for the article in the format YYYY-MM-DD [STRING]

// // By default, the articles should be displayed in the table ordered by the number of upvotes in descending order.

// // Clicking on the "Most Upvoted" button should reorder and display the articles by the number of upvotes in descending order.

// // Clicking on the "Most Recent" button should reorder and display the articles by date in descending order.

// // ✅ You can assume that each article has a unique publish date and number of upvotes.

// // 🧩 Your task is to complete the implementation of:

// // src/App.js

// // src/components/Articles.js

// // The following data-testid attributes are required in the component for the tests to pass:

// // The button to reorder and display the most upvoted articles must have: data-testid="most-upvoted-link"

// // The button to reorder and display the most recent articles must have: data-testid="most-recent-link"

// // Each article must be rendered inside a <tr> element with: data-testid="article"

// // Title cell must have: data-testid="article-title"

// // Upvotes cell must have: data-testid="article-upvotes"

// // Date cell must have: data-testid="article-date"

// import React, { useEffect, useState } from "react";
// import e from "express"

// function Articles({ articles }) {
//   return (
//     <div className="card w-50 mx-auto">
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Upvotes</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {articles &&
//             articles.map((i, index) => {
//               return (
//                 <tr key={index} data-testid="article">
//                   <td data-testid="article-title">{i.title}</td>
//                   <td data-testid="article-upvotes">{i.upvotes}</td>
//                   <td data-testid="article-date">{i.date}</td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // export default Articles;

// //====================================
// // =================================

// // 🧩 Task 1 – React Component (Frontend)
// // Build a “Task Manager” UI component.

// // Requirements:
// // Create a TaskManager.tsx (or .jsx) React component.

// // It should show a list of tasks, each with:

// // A title

// // A checkbox for completion

// // A delete button

// // You must also include an input to add new tasks.

// // Behavior:
// // When the checkbox is clicked, mark the task as completed (toggle).

// // When the delete button is clicked, remove the task.

// // When typing in the input and pressing “Add”, the task should appear in the list.

// import React, { useState } from 'react'

// export default function TaskManager() {
//   const [tasks, setTasks] = useState([])  // ✅ removed <Tasks> since it's plain JS
//   const [newTask, setNewTask] = useState('')

//   // ✅ Handle form submission to add a new task
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const trimTask = newTask.trim()

//     if (!trimTask) return

//     // ✅ Create a new task object
//     const taskTitle = {
//       id: Date.now(),            // ✅ capital D in Date
//       title: trimTask,
//       completed: false
//     }

//     setTasks([...tasks, taskTitle])       // ✅ push the object, not just the string
//     setNewTask('')
//   }

//   // ✅ Delete a task by ID
//   const handleDelete = (taskId) => {
//     const taskUpdate = tasks.filter((task) => task.id !== taskId)
//     setTasks(taskUpdate)
//   }

//   // ✅ Toggle complete status
//   const toggleComplete = (taskId) => {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === taskId) {
//         return { ...task, completed: !task.completed }
//       }
//       return task
//     })
//     setTasks(updatedTasks)
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Task Manager</h1>

//         <ul>
//           {tasks.map((task) => (
//             <li className='text-dark fs-4' key={task.id}>
//               <input
//                 id='input'
//                 type='checkbox'
//                 checked={task.completed}
//                 onChange={() => toggleComplete(task.id)}
//               />

//               {/* ✅ Strikethrough if completed */}
//               <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//                 {task.title}
//               </span>

//               <button
//                 className='btn btn-danger fs-4'
//                 id='button'
//                 type='button'
//                 onClick={() => handleDelete(task.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>

//         <label htmlFor='newTask'>Enter your task: </label>
//         <input
//           id='input'
//           type='text'
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />

//         <button
//           className='btn btn-danger fs-4'
//           id='button'
//           type='submit'
//           disabled={!newTask.trim()} // ✅ disables Add if input is empty
//         >
//           Add
//         </button>
//       </form>
//     </div>
//   )
// }

// // 🧩 Task 2 – API (Backend)
// // Build a simple REST API using Node.js + Express.

// // Requirements:
// // Set up an Express server with the following routes:

// // GET /tasks → returns a list of tasks

// // POST /tasks → adds a task (with title)

// // PUT /tasks/:id → updates task's completed field

// // DELETE /tasks/:id → deletes a task

// // Use an array (not database) for task storage like:

// // js
// // Copy
// // Edit
// // const tasks = [
// //   { id: 1, title: "Sample Task", completed: false }
// // ];


// // 🧩 Task 3 – SQL Query
// // You have a users table:

// // sql
// // Copy
// // Edit
// // CREATE TABLE users (
// //   id INT PRIMARY KEY,
// //   name VARCHAR(100),
// //   email VARCHAR(100),
// //   is_active BOOLEAN,
// //   created_at TIMESTAMP
// // );
// // Write SQL queries for:
// // Get all active users who registered this month.

// // Count how many users registered in each month.

// // Get the latest 5 registered users.

// // Deactivate all users registered before 2023.




// // 🧩 Bonus Task – Fullstack Integration (Optional)
// // Use axios in your React code to fetch tasks from your backend.

// // Allow adding, deleting, and updating tasks via API calls.





// // ✅ Full Stack Developer Mock Exam – 5 Tasks
// // Task 1 – Frontend (React)
// // Create a ProfileCard component

// // Props:

// // name (string)

// // email (string)

// // onEdit (function)

// // Render a card showing name and email.

// // Include an "Edit" button that calls onEdit.

// // Task 2 – Backend (Node.js + Express)
// // Create an API route to add a new user

// // Endpoint: POST /api/users

// // Accepts name and email in JSON

// // Returns status 201 and the new user object with a random ID

// // Task 3 – Database (MySQL)
// // Create a table and insert a user

// // Create a table users with fields:

// // id (INT, PRIMARY KEY, AUTO_INCREMENT)

// // name (VARCHAR)

// // email (VARCHAR, UNIQUE)

// // Insert a sample user

// // Task 4 – Full Stack Integration
// // On form submit, save user to backend and show confirmation

// // Create a React form with name/email input

// // On submit, send POST to backend (use fetch)

// // On success, show "User created" message

// // Task 5 – Bonus: Add/Edit Toggle
// // Add a toggle to switch between Add and Edit mode

// // If in Edit mode, populate form with existing data

// // On save, send a PUT /api/users/:id request

// {}