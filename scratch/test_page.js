import http from 'node:http';

http.get('http://localhost:4321/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Total length:', data.length);
    const sections = [...data.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
    console.log('IDs found:', sections);
  });
});
