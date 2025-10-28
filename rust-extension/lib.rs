use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn format_rust_code(code: &str) -> String {
    code.replace("{", "{\n    ").replace("}", "\n}")
}
