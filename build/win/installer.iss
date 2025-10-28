[Setup]
AppName=My VSCode-ish
AppVersion=1.0.0
DefaultDirName={autopf}\My VSCode-ish
DefaultGroupName=My VSCode-ish
UninstallDisplayIcon={app}\My VSCode-ish.exe
OutputBaseFilename=My_VSCode_Installer
Compression=lzma
SolidCompression=yes
WizardStyle=modern
SetupLogging=yes

[Languages]
Name: "japanese"; MessagesFile: "compiler:Languages\Japanese.isl"

[Files]
Source: "dist\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\My VSCode-ish"; Filename: "{app}\My VSCode-ish.exe"
Name: "{commondesktop}\My VSCode-ish"; Filename: "{app}\My VSCode-ish.exe"

[Run]
Filename: "{app}\My VSCode-ish.exe"; Description: "{cm:LaunchProgram,My VSCode-ish}"; Flags: nowait postinstall skipifsilent
