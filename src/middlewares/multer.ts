import multer from 'multer';

// Configuración: guardar en memoria (no en disco)
const storage = multer.memoryStorage();

// Solo archivos .md
const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype === 'text/markdown' || file.originalname.endsWith('.md')) {
        cb(null, true);
    } else {
        cb(new Error('Solo archivos .md permitidos'), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB máximo
})

export default upload