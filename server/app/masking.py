import cv2
import numpy as np
from typing import List, Tuple

def mask_image_regions(image: np.ndarray, regions: List[Tuple]) -> np.ndarray:
    for (bbox, _, _) in regions:
        top_left = tuple(map(int, bbox[0]))
        bottom_right = tuple(map(int, bbox[2]))
        cv2.rectangle(image, top_left, bottom_right, (0, 0, 0), -1)
    return image
