import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, 'uploads/'); 
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    const fileName = Date.now() + path.extname(file.originalname); 
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const app = express();


app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
