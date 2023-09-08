async function getRecordCountInTable(personalAccessToken, baseId, tableName) {
  try {
    // Set up the Airtable API endpoint URL
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    // Set up the request headers with personal access token
    const headers = {
      Authorization: `Bearer ${personalAccessToken}`,
    };

    // Make the GET request to retrieve records
    const response = await fetch(apiUrl, { headers });

    // Check if the response is successful (status code 200)
    if (response.ok) {
      const data = await response.json();
      const spacesCount = 60 - data.records.length;
      
      // Create an HTML string with the spaces left cout
      const htmlString = `Only ${spacesCount} spaces left.
      <br>  
      They’ll go even faster!`;
      
      return htmlString;
    } else {
      console.error(`Error fetching data from Airtable. Status: ${response.status}`);
      // Create an HTML string with stock information
      const htmlString = `Limited spaces left.
      <br>  
      They’ll go even faster!`;
      
      return htmlString;

    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

  // Return null if the space count cannot be retrieved
  return null;
}
  
  // Example usage:
  const personalAccessToken = 'patnpzDZ3buSqD5p1.a92832c3655faac0a31804cd9796bd9865de247dc69e2c2ad810d20f7245f701';
  const baseId = 'appPcj3d02wM1BLTG';
  const tableName = 'tblPfeWQYkoPtMnto';
  


  getRecordCountInTable(personalAccessToken, baseId, tableName)
  .then((result) => {
    if (result !== null) {
      // Append the HTML string to a container element in your HTML
      const container = document.getElementById('vipSpaces');
      container.innerHTML = result;
    } else {
      console.log('Unable to retrieve the record count.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  