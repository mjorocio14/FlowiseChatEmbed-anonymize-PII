export async function anonymizer(prompt: string) {
    const response = await fetch(
        "http://127.0.0.1:5000/anonymize",
        {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            method: "POST",
            body: JSON.stringify({text: prompt})
        }
    );
    const result = await response.json();
    return result;
}