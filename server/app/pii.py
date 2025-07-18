import re

PII_PATTERNS = {
    "aadhaar": r"\b\d{4}\s\d{4}\s\d{4}\b",
    "phone": r"\b[6-9]\d{9}\b",
    "dob": r"\b\d{2}[-/]\d{2}[-/]\d{4}\b",
    "email": r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",
    "name": r"\b[A-Z][a-z]+\s[A-Z][a-z]+\b",  
    "address": r"(?i)(address|street|road|nagar|vihar|sector)[^\n]*"
}

def is_pii(text: str) -> bool:
    for pattern in PII_PATTERNS.values():
        if re.search(pattern, text):
            return True
    return False
