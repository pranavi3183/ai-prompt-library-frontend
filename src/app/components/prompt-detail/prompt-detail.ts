import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PromptService } from '../../services/prompt.service';
import { Prompt } from '../../models/prompt.model';

@Component({
  selector: 'app-prompt-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './prompt-detail.html',
  styleUrls: ['./prompt-detail.scss']
})
export class PromptDetailComponent implements OnInit {
  prompt: Prompt | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private promptService: PromptService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.promptService.getPrompt(id).subscribe({
      next: (data) => { this.prompt = data; this.loading = false; },
      error: () => { this.error = 'Prompt not found.'; this.loading = false; }
    });
  }

  complexityClass(n: number): string {
    if (n <= 3) return 'easy';
    if (n <= 6) return 'medium';
    return 'hard';
  }

  goBack() { this.router.navigate(['/prompts']); }
}