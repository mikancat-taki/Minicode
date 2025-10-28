# VSCode風 IDE (フルパッケージ)

このリポジトリは、以下を含む「VSCode風 IDE」テンプレートです：

- Electron デスクトップ版（ローカル実行用）
- Web 版（Vite + React + Monaco） - Render等にデプロイ可能
- Rust 拡張（WASM）サンプル
- Inno Setup スクリプト（日本語）

## 使い方（ローカル）
1. ルートで `npm install`
2. `npm run dev` を実行（開発モード：WebサーバとElectronを同時起動）

## Web（Render）用
1. `npm run build:web`
2. 出力された `web/dist` をデプロイしてください。Render の Build Command は `npm run build:web`、Start Command は `npm run start:web` を推奨します。

## Rust (WASM)
- `cd rust-extension && wasm-pack build --target web --out-dir ../web/public/wasm`

## 注意
- 依存は軽量に留めるため、Monaco 本体は依存に残しています。初回 `npm install` 時にダウンロードされます。
- Electronの本格的なパッケージング（署名やインストーラ自動生成）は別途 electron-builder や nsis/inno の連携が必要です。
