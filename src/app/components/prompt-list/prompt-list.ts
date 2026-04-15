import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PromptService } from '../../services/prompt.service';
import { Prompt, Tag } from '../../models/prompt.model';

@Component({
  selector: 'app-prompt-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './prompt-list.html',
  styleUrls: ['./prompt-list.scss']
})
export class PromptListComponent implements OnInit {
  prompts: Prompt[] = [];
  tags: Tag[] = [];
  selectedTag: string = '';
  loading = true;
  error = '';

  constructor(private promptService: PromptService) {}

  ngOnInit(): void {
    this.loadTags();
    this.loadPrompts();
  }

  loadTags() {
    this.promptService.getTags().subscribe({ next: (tags) => (this.tags = tags) });
  }

  loadPrompts(tag?: string) {
    this.loading = true;
    this.promptService.getPrompts(tag).subscribe({
      next: (data) => { this.prompts = data; this.loading = false; },
      error: () => { this.error = 'Failed to load prompts.'; this.loading = false; }
    });
  }

  filterByTag(tag: string) {
    this.selectedTag = tag;
    this.loadPrompts(tag || undefined);
  }

  complexityLabel(n: number): string {
    if (n <= 3) return 'Easy';
    if (n <= 6) return 'Medium';
    return 'Hard';
  }

  complexityClass(n: number): string {
    if (n <= 3) return 'easy';
    if (n <= 6) return 'medium';
    return 'hard';
  }
}