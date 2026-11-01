const fs = require('fs');
const { execSync } = require('child_process');

const ps = `
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile('d:\\BXH MDTQ\\images\\dh\\member-1.jpg')
$rect = New-Object System.Drawing.Rectangle(25, 45, 230, 230)
$avatar = $img.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$img.Dispose()
$avatar.Save('d:\\BXH MDTQ\\images\\avatar-preview.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$avatar.Dispose()
Write-Output 'Done'
`;
fs.writeFileSync('d:/BXH MDTQ/crop-avatar.ps1', ps);
execSync('powershell -ExecutionPolicy Bypass -File "d:\\BXH MDTQ\\crop-avatar.ps1"');
console.log('Saved avatar-preview.jpg');
