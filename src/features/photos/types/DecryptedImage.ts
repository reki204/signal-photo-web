import { Photo } from './Photo';

export type DecryptedImage = {
  /**
   * 画像
   */
  photo: Photo;
  /**
   * Base64エンコードされた画像データ
   */
  image_data: string;
};
