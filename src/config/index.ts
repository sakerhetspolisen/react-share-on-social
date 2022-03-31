export * from "./socials";

const windowOptions = {
  scrollbars: false,
  resizable: false,
  status: false,
  location: false,
  toolbar: false,
  menubar: false,
  left: window.screen.width / 2 - 300,
  top: window.screen.height / 2 - 250,
  height: 500,
  width: 600,
};
const b = (o) => (o ? "yes" : "no");
export const windowFeatures = `popup=yes, noopener, scrollbars=${b(
  windowOptions.scrollbars
)},resizable=${b(windowOptions.resizable)},status=${b(windowOptions.status)},location=${b(
  windowOptions.location
)},toolbar=${b(windowOptions.toolbar)},menubar=${b(windowOptions.menubar)}, width=${
  windowOptions.width
},height=${windowOptions.height},left=${windowOptions.left},top=${windowOptions.top}`;
