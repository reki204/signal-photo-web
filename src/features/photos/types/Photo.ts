export interface Photo {
  id: string;
  password: string;
  created_at: string;
  user_id: string;
  encrypt_password: string;
  salt: string;
  deleted_at: string | null;
}
