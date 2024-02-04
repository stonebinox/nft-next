const jwt =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0ZmYxYzMxYy1hMzZiLTQ4NjMtYTEwNi04OTA0ZDM0OTA1YWYiLCJlbWFpbCI6ImFub29wLnNhbnRoYW5hbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDY4Y2I2OWU0M2I3NWFhOTFjODAiLCJzY29wZWRLZXlTZWNyZXQiOiI4ZDJmYzdhNzNkYmVlYWFmYWJmYzA5ODBiYzAzMzQ0MmJmMjEyOGI0NjdjNTE2M2Y5MDIyMjRiNmQzNzk2NTg1IiwiaWF0IjoxNzA2OTY4OTU4fQ.1RPRCxSfad4UoAcRdYBF1VotqmVND8LhGm74K-MRX5I";

const baseUrl = "https://api.pinata.cloud";

export const uploadImage = (data) =>
  fetch(`${baseUrl}/pinning/pinFileToIPFS`, {
    method: "POST",
    body: data,
    headers: {
      // ideally we'd need this in an env file
      Authorization: jwt,
    },
  });

export const uploadMetadata = (data) =>
  fetch(`${baseUrl}/pinning/pinJSONToIPFS`, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  });
