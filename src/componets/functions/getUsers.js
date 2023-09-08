export async function  getUsers (email) {
    const baseUrl = `http://localhost:8000/users?email=${encodeURIComponent(email)}`;

    try {
        const response = await fetch(baseUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data.name)
          return data;
        } else {
          console.error("Error fetching user data:", response.status, response.statusText);
          return null;
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        return null;
      }
}
