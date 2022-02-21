export default ({ to, from, next }) => {
  // Your custom if statement
  const tokenObject = localStorage.getItem("auth-token");
  if (!tokenObject) {
    next("/login");
    return false;
  }
  next();
};
