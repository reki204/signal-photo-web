'use client';

import { useEffect, useRef } from 'react';

type Props = {
  base64Data: string;
};

const CanvasImage = ({ base64Data }: Props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const imageDataURL = base64Data.startsWith('data:')
      ? base64Data
      : `data:image/jpeg;base64,${base64Data}`;

    // Base64からBlobへ変換する
    const base64ToBlob = (imageDataURL: string): Blob => {
      const parts = imageDataURL.split(',');
      const byteString = atob(parts[1]); // base64Data
      const mimeString = parts[0].split(':')[1].split(';')[0]; // image/jpeg
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    };

    // BlobからImageBitmapを作成してcanvasに描画する
    const drawImageOnCanvas = async (canvas: any, blob: ImageBitmapSource) => {
      const imgBitmap = await createImageBitmap(blob);
      canvas.width = imgBitmap.width;
      canvas.height = imgBitmap.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgBitmap, 0, 0);
    };

    const blob = base64ToBlob(imageDataURL);
    if (canvasRef.current) {
      drawImageOnCanvas(canvasRef.current, blob);
    }
  }, [base64Data]);

  return <canvas ref={canvasRef} className="w-full h-auto" />;
};

export default CanvasImage;
