export async function anonymizer(prompt: string) {
    // const response = await fetch("http://127.0.0.1:5000/anonymize", {
    const response = await fetch("https://pii-anonymizer.azurewebsites.net/anonymize", {
      method: 'POST',
      mode: 'cors',
      headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
                    
      body: JSON.stringify({text: prompt}),
    });

    const result = await response.json();
    return result;
}

