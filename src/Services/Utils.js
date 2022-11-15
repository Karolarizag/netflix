export const parseDate = (item) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = new Date(item);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const movieDate = `${months[month]} ${day}, ${year}`
  return { movieDate }
}

export const API_KEY ='8a539ea6062f5408ae85f3881bfed90e'
export const API_IMG ='https://image.tmdb.org/t/p/w500/'