use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn format_rust_code(code: &str) -> String {
    // 簡単な整形：インデント調整など
    code.replace("{", "{\n    ").replace("}", "\n}")
}
