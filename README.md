# React Mars Weather App

## Note

- Inside `App` component, data is loaded from local json file instead of fetching API (commented out) for better developing experience. (takes less time to hot-reload dev server every time you make change and save)

## What I Learned

### Fallback for async value

When you pass down async value (eg. fetched from API and waiting to be resolved) to a child component,  
it will throw TypeError because:

- fetch runs & completes after the initial render
- in which the child component will (probably) access properties of `undefined` prop.

Prevent this error by setting a fallback value before passing async value down.

```js
const selectedItem = fetchedItems[id] || {}; // [][null] returns 'undefined'
```

Or you can initialize local state as empty object(`{} | []`) instead of `null`

### Avoid infinite fetching

- If you don't prove dependency list to the `useEffect`, updating state with fetched data will re-trigger effect resulting in infinite loop. API limit will be reached in short amount of time.

- Make sure to add dep list before you save the file (if you're running live dev server)!

### UI Response: Use CSS

- If you can use CSS for adding new style / animation based on user input, it will be faster and less error-prone (instead of updating React state with event handlers and using styled-components and props).
- Use CSS pseudo-class selectors (eg. `:checked`) to get the UI state to generate feedback(visual cues) to users.

```scss
input {
    // inclusive display: none;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;

    /*
    1. select all checked input element
    2. select any following sibling with .unit__toggle class
    3. select its ::after pseudo element
    */
    &:checked ~ .unit__toggle::after {
      margin-left: 3px; /* Only applied when "cel" is checked */
    }

```

### React App with External Data: Workflow

1. User Stories + API

- App requirements - what should it do?
- API endpoint, query params, API key,

2. Components

- Breakdown requirements into a tree of components

3. Data flow

- Where do I fetch data ? mostly in App component?
- Which components need what data in what format?
- Any components sharing same data in same format?
  - Then it might make sense to format / process data somewhere higher in the tree and distribute them.
- Can this component just have local state?
- Is this component pure presentational? (just pass me props)

4. Styled-component

- For small-size project, you might benefit more with just sass especially when writing css/sass because any change you save into file will immediately be reflected in the browser without hot-reloading. (no re-fetching data and mounting all components)
- These days, you can do pretty much anything in styled-components that you can do with css (including css variable and functions)
- If you are designing for yourself or doing design-intensive projects, it might be a good idea to start with sass and later convert them into styled-components if you need to.
- If the project is not design-oriented or very small, you will benefit more with styled-component because you don't have to think about class names and BEM.
- If you're adding/removing lot of classes based on props, use styled-components

5. MVP with global styling

- What style rules can I share across components?
  - titles
  - body paragraphs
  - buttons & more...
- Finish the most basic features ASAP
- Then build from there. Add more detailed styles, animations, responsiveness...

6. Optimization comes the very last.

- Make it work first.
- Then make it do that faster (without error).
