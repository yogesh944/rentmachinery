// Weekly video configuration
const weeks = {
    week1: ["video1-week1", "video2-week1", "video3-week1", "video4-week1", "video5-week1", "video6-week1"],
    week2: ["video1-week2", "video2-week2", "video3-week2", "video4-week2", "video5-week2", "video6-week2"],
    // Add additional weeks as needed
  };
  
  // Update video progress
  function updateVideoProgress(video, videoProgress) {
    const progressPercent = (video.currentTime / video.duration) * 100;
    videoProgress.style.width = `${progressPercent}%`;
    return progressPercent;
  }
  
  // Update weekly progress based on all videos for that week
  function updateWeeklyProgress(weekId, videoIds) {
    const totalVideos = videoIds.length;
    let totalProgress = 0;
  
    videoIds.forEach(videoId => {
      const video = document.getElementById(videoId);
      totalProgress += (video.currentTime / video.duration) * 100 || 0;
    });
  
    const weeklyProgressPercent = totalProgress / totalVideos;
    const weekProgressBar = document.getElementById(`${weekId}-progress`);
    const weekPercentDisplay = document.getElementById(`${weekId}-percent`);
  
    weekProgressBar.style.width = `${weeklyProgressPercent}%`;
    weekPercentDisplay.textContent = `${Math.floor(weeklyProgressPercent)}%`;
  }
  
  // Real-time updates for each week
  Object.keys(weeks).forEach(weekId => {
    const videoIds = weeks[weekId];
  
    videoIds.forEach(videoId => {
      const video = document.getElementById(videoId);
  
      video.addEventListener("timeupdate", () => {
        if (video.duration > 0) {
          updateWeeklyProgress(weekId, videoIds);
        }
      });
    });
  });
  