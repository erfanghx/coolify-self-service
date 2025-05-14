import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [projectName, setProjectName] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://104.152.187.166:5000/deploy', {
        projectName,
        repoUrl,
        subdomain,
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage('خطا در ارسال اطلاعات');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Self-Service Deploy</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name: </label>
          <input value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
        </div>
        <div>
          <label>GitHub Repo URL: </label>
          <input value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} required />
        </div>
        <div>
          <label>Subdomain: </label>
          <input value={subdomain} onChange={(e) => setSubdomain(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Deploy</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
