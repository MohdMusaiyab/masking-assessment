# PII Masking App

A full-stack application that detects and masks Personally Identifiable Information (PII) from uploaded images using OCR and image processing.

## 📁 Project Structure + Setup + Tech Stack + Notes

```bash
# Clone the Repository
git clone git@github.com:MohdMusaiyab/masking-assessment.git
cd masking-assessment
```
# Project Structure
```
masking-assessment/
├── client/        # React frontend (Vite + TailwindCSS + TypeScript)
│   ├── src/
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── Header.tsx
│   │       ├── ImageUploader.tsx
│   │       ├── ImagePreview.tsx
│   │       ├── MaskedImageDisplay.tsx
│   │       └── LoadingSpinner.tsx
│   ├── index.html
│   ├── main.tsx
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── server/        # FastAPI backend (EasyOCR + OpenCV)
│   ├── app/
│   │   ├── main.py
│   │   ├── api.py
│   │   ├── ocr.py
│   │   ├── pii.py
│   │   └── masking.py
│   ├── requirements.txt
│   └── .env (optional)
│
└── README.md
```
# Frontend Setup
```
cd client
npm install
npm run dev
# Runs at: http://localhost:5173
```
# Backend Setup
```
cd ../server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
# Runs at: http://localhost:8000
```
# Tech Stack
Frontend:
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- React Dropzone

Backend:
- FastAPI
- EasyOCR
- OpenCV
- Pillow
- Regex
- 
# Notes
- Node version: Use v20.19.0 (Vite breaks on Node v21)
- EasyOCR downloads model weights (~1–2 GB on first run)
- Regex patterns detect: Aadhaar, Phone, DOB, Email, Name, Address
```
