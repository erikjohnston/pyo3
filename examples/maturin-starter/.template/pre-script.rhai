variable::set("PYO3_VERSION", "0.20.2");
file::rename(".template/Cargo.toml", "Cargo.toml");
file::rename(".template/pyproject.toml", "pyproject.toml");
file::delete(".template");
