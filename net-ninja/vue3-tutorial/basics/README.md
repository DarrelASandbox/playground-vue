# Vue Widgets

- **Vue Component**: Sign Up Form

# Vue Websites

- Vue is used to create a whole website with multiple pages & components
- These websites are normally called Single Page Applications (SPA)
- All routing is done in the browser & not on the server

# New Features

## Composition API

- Improves on reusability, organization & readability
- It does this by giving us a new setup() function

## Multiple Root Elements

- Can have many root elements side-by-side in a component

```vue
<template>
  <div>
    <p>Hello, World!</p>
  </div>
  <div>
    <p>Hello, again!</p>
  </div>
</template>
```

## Teleport Component

- Render content from one component in a different place in the DOM
- Useful for things like modals

## Suspense Component

- Used to handle asynchronous components easily
- Can provide fall-back content (e.g. a spinner) until data is loaded

## More Changes

- TypeScript Support
- Multiple v-models for custom components
- Improved reactivity
- Performance gains
