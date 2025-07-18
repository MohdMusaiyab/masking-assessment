from fastapi import APIRouter, UploadFile, File
from fastapi.responses import StreamingResponse
import numpy as np
import cv2
import io

from .ocr import extract_text_and_boxes
from .pii import is_pii
from .masking import mask_image_regions

router = APIRouter()

@router.post("/mask")
async def mask_pii(file: UploadFile = File(...)):
    image_bytes = await file.read()
    np_arr = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    results = extract_text_and_boxes(image)

    pii_regions = [r for r in results if is_pii(r[1])]

    masked = mask_image_regions(image, pii_regions)

    _, buffer = cv2.imencode(".jpg", masked)
    return StreamingResponse(io.BytesIO(buffer.tobytes()), media_type="image/jpeg")
