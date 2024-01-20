export function createReactElement(link, name) {
  return {
    type: "a",
    props: {
      href: link,
      children: name,
    },
  };
}

export function generateHTML(reactElement) {
  const { type, props } = reactElement;
  const attributes = Object.keys(props)
    .filter((key) => key !== "children")
    .map((key) => `${key}="${props[key]}"`)
    .join(" ");

  return `<${type} ${attributes}>${props.children}</${type}>`;
}

export function customRender(reactElement, selector) {
  const html = generateHTML(reactElement);
  const root = document.querySelector(selector);
  if (root) {
    root.innerHTML = html;
  } else {
    console.error(`No element found with selector: ${selector}`);
  }
}
