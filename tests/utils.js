export const selectCssOutput = (styleSheet) => (
  styleSheet.componentStyleSheet.tags[0].innerHTML
);
