export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
