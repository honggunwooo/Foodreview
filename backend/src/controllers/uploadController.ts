import { Request, Response } from 'express';
import crypto from 'crypto';

const BUCKET = process.env.AWS_S3_BUCKET!;

export const uploadReviewImage = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: '파일이 없습니다' });
        }

        const key = `reviews/${crypto.randomUUID()}-${req.file.originalname}`;

        await s3.send(
            new PutObjectCommand({
                Bucket: BUCKET,
                Key: key,
                Body: req.file.buffer,
                ContentType: req.file.mimetype,
            })
        );

        const imageUrl = `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

        res.status(200).json({ imageUrl });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'S3 업로드 실패' });
    }
};