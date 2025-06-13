# Understanding the Problem: Why Use the `useContext` Hook?

## Overview

This project demonstrates a common issue in React called **prop drilling** and shows how to solve it using the `useContext` hook for better state management.

---

## The Problem: Prop Drilling

Previously, the `count` state was managed in the top-level `App` component. To display and update this value in deeply nested components, you had to pass `count` and `onButtonClick` as props through every intermediate component.

**Example (Before):**
- `App.jsx` holds the state and passes `count` and `onButtonClick` to `Button`.
- `Button/index.jsx` receives these props and passes `count` to `Text/index.jsx`.

This approach led to:
- **Prop Drilling:** Passing data through components that do not need it, just to reach a deeply nested child.
- **Tight Coupling:** Components become tightly coupled to the structure of their parents.
- **Difficult Maintenance:** As the app grows, adding or refactoring components becomes harder.

---

## Solution: Using `useContext`

Now, the project uses the `useContext` hook to share state and functions across the component tree without manually passing props at every level.

### How It Works Now

- A `CountContext` is created to hold the `count` state and its updater.
- The `CountProvider` wraps the app, making `count` and `setCount` available to any component.
- Components like `Button` and `Text` use the `useCount` hook to access and update the shared state directly.

**Example (After):**
```jsx
// App.jsx
import { CountProvider } from "./context/countContext";
<CountProvider>
  <Button />
</CountProvider>

// Button/index.jsx
import { useCount } from "../../context/countContext";
const { count, setCount } = useCount();
<button onClick={() => setCount(count + 1)}>Click to increment</button>
<Text />

// Text/index.jsx
import { useCount } from "../../context/countContext";
const { count } = useCount();
<p>The count is: {count}</p>
```

### Benefits

- **No Prop Drilling:** No need to pass `count` and `onButtonClick` through every component.
- **Reusable Components:** Components are decoupled from their parents and easier to reuse.
- **Centralized State:** Shared state and logic are managed in one place.

---

## Summary

By using the `useContext` hook, this project eliminates prop drilling and makes state management simpler and more maintainable as your React app grows.