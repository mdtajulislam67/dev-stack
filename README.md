# Dev Stack

Build your ideal development stack by exploring technologies and selecting the tools that fit your next project.

## About the Project

**Dev Stack** is a responsive React application that helps developers browse a curated list of frontend, backend, database, language, styling, and DevOps technologies. Add technologies to your personal stack, review your selections, and remove items whenever your needs change.

## Technologies Used

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Icons**
- **React Toastify**

## Features

1. **Browse technologies** — explore technology cards with descriptions, categories, difficulty levels, badges, and ratings.
2. **Build your own stack** — add technologies to a personal list, prevent duplicate selections, and see the selected count.
3. **Manage selections easily** — remove an individual technology or clear the entire stack, with toast notifications for actions.



## Questions Answer:

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write UI-like markup inside JavaScript/TypeScript. React uses it to make component UI easier to read and compose.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child. State is data managed by a component that can change over time and trigger a re-render.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates component state. This project uses it for the fetched technologies, selected stack, loading state, and mobile navigation state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. I used it to fetch `public/technologies.json` when the app first loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React recognize each item when a list changes, so it can update the right elements.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering shows different UI depending on a condition. In the sidebar, the app displays **“Your stack is empty.”** when there are no selected technologies; otherwise, it displays the selected items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data and functions through props. The child calls a callback prop when it needs the parent to update state. In this project, `TechCard` receives `stack` and `handleAddToStack`, while `Sidebar` receives removal callbacks.