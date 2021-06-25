import PfeIcon from "https://unpkg.com/@patternfly/pfe-icon@1.9.3/dist/pfe-icon.min.js";

PfeIcon.addIconSet(
  "fas",
  "/icons/font-awesome/solid",
  (iconName, setName, path) => {
    const name = iconName.replace("fas-", "");
    return `${path}/${name}.svg`;
  }
);