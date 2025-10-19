const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API endpoint to get video data
app.get('/api/videos', (req, res) => {
  const videos = [
    {
      id: 1,
      title: 'Prime Minister Timo\'s Morning Briefing',
      url: 'https://videos.pexels.com/video-files/2099579/2099579-hd_1280_720_25fps.mp4',
      description: 'A very serious cat, probably thinking about important matters of state.'
    },
    {
      id: 2,
      title: 'The PM on a Diplomatic Stroll',
      url: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4',
      description: 'Inspecting the troops and ensuring national security.'
    },
    {
      id: 3,
      title: 'A Moment of Contemplation',
      url: 'https://videos.pexels.com/video-files/289586/289586-hd_1280_720_30fps.mp4',
      description: 'The weight of the world is on his furry shoulders.'
    }
  ];
  res.json(videos);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
