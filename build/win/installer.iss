[Setup]
AppName=My VSCode-ish
AppVersion=0.1.0
DefaultDirName={pf}\MyVSCodeIsh
DefaultGroupName=My VSCode-ish
OutputBaseFilename=MyVSCodeIshInstaller
Compression=lzma
SolidCompression=yes

[Files]
Source: "dist/win-unpacked\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\My VSCode-ish"; Filename: "{app}\my-vscode-ish.exe"
