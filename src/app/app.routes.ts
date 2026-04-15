import { Routes } from '@angular/router';
import { AddPromptComponent } from './components/add-prompt/add-prompt';
import { PromptDetailComponent } from './components/prompt-detail/prompt-detail';
import { PromptListComponent } from './components/prompt-list/prompt-list';

export const routes: Routes = [
    { path: '', redirectTo: '/prompts', pathMatch: 'full' },
    { path: 'prompts', component: PromptListComponent },
    { path: 'prompts/new', component: AddPromptComponent },
    { path: 'prompts/:id', component: PromptDetailComponent },
];
