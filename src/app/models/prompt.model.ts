export interface Tag { id: number; name: string; }

export interface Prompt {
  id: number;
  title: string;
  content: string;
  complexity: number;
  tags: Tag[];
  view_count: number;
  created_at: string;
}

export interface CreatePromptDto {
  title: string;
  content: string;
  complexity: number;
  tags: string[];
}