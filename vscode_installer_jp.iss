; Inno Setup スクリプト（日本語メッセージ）
[Setup]
AppName=VSCode風エディタ
AppVersion=1.0.0
DefaultDirName={autopf}\VSCode風エディタ
DefaultGroupName=VSCode風エディタ
UninstallDisplayIcon={app}\VSCode風エディタ.exe
OutputBaseFilename=VSCode_Installer_JP
Compression=lzma
SolidCompression=yes
WizardStyle=modern
SetupLogging=yes

[Languages]
Name: "japanese"; MessagesFile: "compiler:Languages\Japanese.isl"

[Files]
Source: "dist/electron/renderer\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "dist/electron\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\VSCode風エディタ"; Filename: "{app}\VSCode風エディタ.exe"
Name: "{commondesktop}\VSCode風エディタ"; Filename: "{app}\VSCode風エディタ.exe"

[Run]
Filename: "{app}\VSCode風エディタ.exe"; Description: "インストール後にアプリを起動する"; Flags: nowait postinstall skipifsilent
