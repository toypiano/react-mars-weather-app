# Adding Responsive Design

_PreviousWeather component is not included._

## Memo

### Spacing in Grid

- Use padding to add space between grid-items.
- It's easier to control elements and reason about it.

### Adding media queries in styled-components

- It's actually easier to add media queries to individual component.
  - Styles in different break-points are placed in one place
  - Easier to compare and edit.
  - Less mistakes (repeating, omitting,...)

### Media query placement matters!

- When adding media query nested inside with SASS, the position of media query affects the results.
- If you are changing general rules such as `position: absolute;` and `top | right | bottom |left`, you should place it before all other rules.
- If you are changing more specific rules like `font-size` place it after all others

### Styled-components bug

- Custom property won't set properly inside media query if original rule is set nested in different level (or more than 2 levels);
