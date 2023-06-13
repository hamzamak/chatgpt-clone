const BASE_URL = 'https://chatgpt-xv64.onrender.comd'

export const sendPrompt = async (prompt : string) => {
    const options = {
      method: 'POST', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify({ prompt }), 
    };
  
    try {
      const response = await fetch(BASE_URL, options);
      const data = await response.json(); // Parse the response data as JSON
  
      console.log(data.bot); // Handle the response data
      return data.bot; 
    } catch (error) {
      console.log(error); // Handle any errors
       return "   🛑 Something went wrong !"
    }
  };
  