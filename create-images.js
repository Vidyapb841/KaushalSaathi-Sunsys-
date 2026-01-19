const fs = require('fs');
const { createCanvas } = require('canvas');

// Create OG Image
// const createOGImage = () => {
//   const canvas = createCanvas(1200, 630);
//   const ctx = canvas.getContext('2d');
  
//   // Background
//   ctx.fillStyle = '#2563eb';
//   ctx.fillRect(0, 0, 1200, 630);
  
//   // Text
//   ctx.fillStyle = '#ffffff';
//   ctx.font = 'bold 60px Arial';
//   ctx.textAlign = 'center';
//   ctx.fillText('Kaushal Saathi', 600, 200);
  
//   ctx.font = '40px Arial';
//   ctx.fillText('Skill Development Platform', 600, 300);
//   ctx.fillText('Empowering India\'s Workforce', 600, 400);
  
//   const buffer = canvas.toBuffer('image/jpeg');
//   fs.writeFileSync('public/images/og-image.jpg', buffer);
// };

// Create Twitter Image
const createTwitterImage = () => {
  const canvas = createCanvas(1200, 600);
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#1e40af';
  ctx.fillRect(0, 0, 1200, 600);
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 50px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Kaushal Saathi', 600, 200);
  
  ctx.font = '30px Arial';
  ctx.fillText('Follow us for skill development updates', 600, 300);
  ctx.fillText('@kaushalsaathi', 600, 400);
  
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync('public/images/twitter-image.jpg', buffer);
};

// Create default image
const createDefaultImage = () => {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  
  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#3b82f6');
  gradient.addColorStop(1, '#1e40af');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 64px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Learn • Grow • Succeed', 600, 300);
  
  ctx.font = '36px Arial';
  ctx.fillText('with Kaushal Saathi', 600, 400);
  
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync('public/images/seo-default.jpg', buffer);
};

// Run all functions
// createOGImage();
createTwitterImage();
createDefaultImage();

console.log('SEO images created successfully!');