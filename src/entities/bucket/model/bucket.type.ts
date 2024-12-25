export interface IBucket {
  id: string;
  bucket_name: string;
  file_count: number;
  size: number;
  created_at?: string;
  updated_at?: string;
  owner_name: string;
  owner_id: string;
}
