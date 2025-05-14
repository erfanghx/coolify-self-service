const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const COOLIFY_API_URL = process.env.COOLIFY_API_URL;
const COOLIFY_API_TOKEN = process.env.COOLIFY_API_TOKEN;

app.post('/deploy', async (req, res) => {
  const { projectName, repoUrl, subdomain } = req.body;

  if (!projectName || !repoUrl || !subdomain) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // مثال ساده: فقط لاگ می‌زنیم
    console.log(`Deploying project: ${projectName}`);
    console.log(`Repo: ${repoUrl}`);
    console.log(`Subdomain: ${subdomain}`);

    // TODO: اتصال واقعی به Coolify API

    return res.json({ success: true, message: 'Deployment request received' });
  } catch (error) {
    console.error('Deployment error:', error.message);
    return res.status(500).json({ error: 'Deployment failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
