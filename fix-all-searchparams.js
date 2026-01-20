const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function findFilesWithUseSearchParams() {
    const results = [];
    
    function search(dir) {
        try {
            const items = fs.readdirSync(dir);
            
            for (const item of items) {
                const fullPath = path.join(dir, item);
                
                try {
                    const stat = fs.statSync(fullPath);
                    
                    if (stat.isDirectory()) {
                        search(fullPath);
                    } else if (/\.(tsx|jsx|ts|js)$/.test(item)) {
                        const content = fs.readFileSync(fullPath, 'utf8');
                        if (content.includes('useSearchParams')) {
                            results.push(fullPath);
                        }
                    }
                } catch (err) {
                    console.log(`  Skipping ${fullPath}: ${err.message}`);
                }
            }
        } catch (err) {
            console.log(`Error reading directory ${dir}: ${err.message}`);
        }
    }
    
    search(path.join(rootDir, 'app'));
    return results;
}

console.log('🔍 Finding ALL files with useSearchParams()...\n');
const files = findFilesWithUseSearchParams();

if (files.length === 0) {
    console.log('✅ No files found with useSearchParams()');
    process.exit(0);
}

console.log(`📁 Found ${files.length} files:\n`);
files.forEach((file, index) => {
    console.log(`  ${index + 1}. ${path.relative(rootDir, file)}`);
});

console.log('\n🔧 Fixing files...\n');

let fixedCount = 0;
files.forEach(file => {
    try {
        console.log(`Fixing: ${path.relative(rootDir, file)}`);
        
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Remove any existing dynamic exports (with various quote styles)
        content = content.replace(/export\s+const\s+dynamic\s*=\s*['"]force-dynamic['"]\s*;\s*\n?/gi, '');
        content = content.replace(/export\s+const\s+dynamic\s*=\s*['"]force-dynamic['"]\s*\n?/gi, '');
        
        // Check if file starts with use client (with or without quotes)
        const hasUseClient = /^['"]use client['"][\s;]*\r?\n?/i.test(content);
        
        if (hasUseClient) {
            // Add dynamic after use client
            content = content.replace(/^(['"]use client['"][\s;]*\r?\n?)/i, '$1export const dynamic = \'force-dynamic\';\n\n');
        } else {
            // Add both use client and dynamic
            content = '"use client";\nexport const dynamic = \'force-dynamic\';\n\n' + content;
        }
        
        fs.writeFileSync(file, content, 'utf8');
        fixedCount++;
        console.log('  ✅ Fixed\n');
    } catch (err) {
        console.log(`  ❌ Error fixing file: ${err.message}\n`);
    }
});

console.log(`\n🎉 Successfully fixed ${fixedCount} out of ${files.length} files`);
console.log('\n📦 Now run: npm run build');