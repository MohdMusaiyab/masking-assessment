import re

PII_PATTERNS = {
    
    "aadhaar": r"\b\d{4}[\s\-]?\d{4}[\s\-]?\d{4}\b",

    
    "phone": r"\b(?:\+91[-\s]?|0)?[6-9]\d{9}\b",

    
    "dob": r"\b\d{2}[-/.]\d{2}[-/.]\d{4}\b",

    
    "email": r"\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b",

    
    "name": r"\b([A-Z][a-z]{1,15})(\s[A-Z][a-z]{1,15}){1,2}\b",

    
    "address": r"\b(?:address|street|st\.|road|rd\.|block|nagar|sector|colony|lane|house|flat|vihar|phase|plot|building)\b[^\n,.;]*"
}

def is_pii(text: str) -> bool:
    for pattern in PII_PATTERNS.values():
        if re.search(pattern, text):
            return True
    return False
