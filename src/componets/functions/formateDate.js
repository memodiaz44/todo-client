export const formatDate = (date) => {
    // Ensure 'date' is a valid Date object
    if (!(date instanceof Date)) {
      return "Invalid Date";
    }
  
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };