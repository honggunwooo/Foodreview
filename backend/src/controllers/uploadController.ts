import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// uploads 폴더에 저장
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: '파일 없음' });
    }

    res.json({
        imageUrl: `/uploads/${req.file.filename}`,
    });
});

export default router;