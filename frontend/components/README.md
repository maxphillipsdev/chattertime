# Folder Structure

# Main Guidelines

1. KISS Principle (Keep it simple, stupid.)
2. Keep it readable (Ex: Extract many classnames into a Tailwind @apply)
3. Use state and side effects inside components as a last resort (best to save it for page level)

Also don't make components when you don't have to. We don't need a wrapper for button, if we are only changing the styling for example. Just use a class.

# Rationale

For this project, components are organized according to the feature they are used for.
The folders for each component contain the component itself, any styling and tests and an index file to export the component from the directory to prevent import polluting. For an example on why the latter is useful read Brad Frost's blogpost here.

[Link](https://bradfrost.com/blog/post/this-or-that-component-names-index-js-or-component-js/)

## Example folder structure

components/
├─ Button/
│ ├─ index.ts
│ ├─ Button.tsx
│ ├─ Button.stories.tsx
│ ├─ Button.scss
