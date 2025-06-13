# Understanding the Problem: Why Use the `useContext` Hook?

## Overview

This project demonstrates a common issue in React called **prop drilling** and motivates the use of the `useContext` hook for better state management.

## The Problem: Prop Drilling

In the current setup, the `count` state is managed in the top-level `App` component. To display and update this value in deeply nested components, you have to pass `count` and `onButtonClick` as props through every intermediate component.

**Example:**
- `App.jsx` holds the state and passes `count` and `onButtonClick` to `Button`.
- `Button/index.jsx` receives these props and passes `count` to `Text/index.jsx`.

This approach leads to:
- **Prop Drilling:** Passing data through components that do not need it, just to reach a deeply nested child.
- **Tight Coupling:** Components become tightly coupled to the structure of their parents.
- **Difficult Maintenance:** As the app grows, adding or refactoring components becomes harder.

## Why Use `useContext`?

The `useContext` hook allows you to share state and functions across your component tree without manually passing props at every level.

**Benefits:**
- Eliminates unnecessary prop drilling.
- Makes components more reusable and easier to maintain.
- Centralizes shared state and logic.

## Next Steps

To solve the prop drilling problem:
1. Create a context for the `count` state and updater.
2. Use the `useContext` hook in any component that needs access to `count` or `setCount`.

---

**Current Example Without Context:**

```jsx
// App.jsx
const [count, setCount] = useState(0);
<Button count={count} onButtonClick={() => setCount(count + 1)} />

// Button/index.jsx
const Button = ({ count, onButtonClick }) => (
  <button onClick={onButtonClick}>Click to increment</button>
  <Text count={count} />
);

// Text/index.jsx
const Text = ({ count }) => <p>The count is: {count}</p>;
```

**With Context, you can avoid passing `count` and `onButtonClick` through every component.**

---

