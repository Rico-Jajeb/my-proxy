import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://codex-of-sunraku.42web.io/api/tech-skills', {
      headers: {
        'User-Agent': 'Mozilla/5.0', // Pretend to be a browser
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch data from Laravel API' });
  }
}
