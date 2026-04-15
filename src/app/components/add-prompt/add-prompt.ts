import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PromptService } from '../../services/prompt.service';

@Component({
  selector: 'app-add-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-prompt.html',
  styleUrls: ['./add-prompt.scss']
})
export class AddPromptComponent {
  form: FormGroup;
  submitting = false;
  error = '';
  tagInput = '';

  constructor(private fb: FormBuilder, private promptService: PromptService, private router: Router) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      complexity: [5, [Validators.required, Validators.min(1), Validators.max(10)]],
      tags: [[]]
    });
  }

  get tags(): string[] { return this.form.get('tags')?.value || []; }

  addTag() {
    const tag = this.tagInput.trim().toLowerCase();
    if (tag && !this.tags.includes(tag)) {
      this.form.patchValue({ tags: [...this.tags, tag] });
    }
    this.tagInput = '';
  }

  removeTag(tag: string) {
    this.form.patchValue({ tags: this.tags.filter(t => t !== tag) });
  }

  onTagKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') { event.preventDefault(); this.addTag(); }
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting = true;
    this.error = '';
    this.promptService.createPrompt(this.form.value).subscribe({
      next: (p) => this.router.navigate(['/prompts', p.id]),
      error: (err) => {
        this.error = err.error?.errors ? JSON.stringify(err.error.errors) : 'Failed to create prompt.';
        this.submitting = false;
      }
    });
  }
}