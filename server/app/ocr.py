import easyocr
import numpy as np
import cv2

reader = easyocr.Reader(["en"], gpu=False)

def extract_text_and_boxes(image: np.ndarray):
    results = reader.readtext(image)
    return results  
