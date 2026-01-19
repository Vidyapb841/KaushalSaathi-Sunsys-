const https = require('https');

console.log('=== Kaushal Saathi SEO Diagnostic ===\n');

// Check Google verification
console.log('1. CHECKING GOOGLE VERIFICATION...');
checkGoogleVerification();

// Check other SEO elements
console.log('\n2. CHECKING OTHER SEO FILES...');
checkFile('robots.txt');
checkFile('sitemap.xml');

function checkGoogleVerification() {
  const url = 'https://kaushal-saathi-sunsys.vercel.app';
  
  https.get(url, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      // Look for Google verification tag
      const googleRegex = /<meta[^>]*google-site-verification[^>]*content="([^"]*)"[^>]*>/i;
      const match = data.match(googleRegex);
      
      if (match) {
        const foundCode = match[1];
        console.log(`   ✓ Found Google verification code: ${foundCode}`);
        
        const expectedCode = 'O7vSJ_pXJMgEUe6C14dLRnjNRtWcvyWmzLHeG2_DIUU';
        if (foundCode === expectedCode) {
          console.log('   ✓ CORRECT CODE! Google should verify.');
        } else {
          console.log(`   ✗ WRONG CODE! Expected: ${expectedCode}`);
          console.log('   ✗ You have old/cached code deployed.');
        }
      } else {
        console.log('   ✗ NO Google verification tag found!');
      }
      
      // Check for Bing verification
      const bingRegex = /<meta[^>]*msvalidate\.01[^>]*content="([^"]*)"[^>]*>/i;
      const bingMatch = data.match(bingRegex);
      if (bingMatch) {
        console.log(`   ✓ Found Bing verification: ${bingMatch[1]}`);
      }
    });
  }).on('error', (err) => {
    console.log('   ✗ Error accessing site:', err.message);
  });
}

function checkFile(filename) {
  const url = `https://kaushal-saathi-sunsys.vercel.app/${filename}`;
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log(`   ✓ ${filename} exists (Status: ${res.statusCode})`);
    } else {
      console.log(`   ✗ ${filename} not found (Status: ${res.statusCode})`);
    }
  }).on('error', () => {
    console.log(`   ✗ ${filename} not accessible`);
  });
}