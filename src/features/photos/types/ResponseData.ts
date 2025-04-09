import { DecryptedImage } from './DecryptedImage';

export type ResponseData = {
  /**
   * HTTPステータスコード
   */
  status: string;

  /**
   * レスポンスメッセージ
   */
  message: string;

  /**
   * Base64エンコードされた画像データ
   */
  data: DecryptedImage[];
};
