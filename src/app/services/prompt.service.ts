import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Prompt, CreatePromptDto, Tag } from '../models/prompt.model';

@Injectable({ providedIn: 'root' })
export class PromptService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getPrompts(tag?: string): Observable<Prompt[]> {
    let params = new HttpParams();
    if (tag) params = params.set('tag', tag);
    return this.http.get<Prompt[]>(`${this.apiUrl}/prompts/`, { params });
  }

  getPrompt(id: number): Observable<Prompt> {
    return this.http.get<Prompt>(`${this.apiUrl}/prompts/${id}/`);
  }

  createPrompt(data: CreatePromptDto): Observable<Prompt> {
    return this.http.post<Prompt>(`${this.apiUrl}/prompts/`, data);
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiUrl}/tags/`);
  }
}