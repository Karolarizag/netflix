export const parseDate = (item) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = new Date(item);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const movieDate = `${months[month]} ${day}, ${year}`
  return { movieDate }
}