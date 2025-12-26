import { Router } from 'express';
import multer from 'multer';
import { uploadReviewImage } from '../controllers/uploadController';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
});

router.post('/review-image', upload.single('image'), uploadReviewImage);

export default router;
