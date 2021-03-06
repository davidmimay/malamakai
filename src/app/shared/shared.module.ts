import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from "@angular/youtube-player";

// Angular Material
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ClipboardModule } from '@angular/cdk/clipboard'
import {MatChipsModule} from '@angular/material/chips';

// Shared Components
import { ShellComponent } from './shell/shell.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { FooterComponent } from './footer/footer.component';



const components = [
  ShellComponent, DeleteButtonComponent, FooterComponent
];

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatTabsModule,
  MatAutocompleteModule,
  DragDropModule,
  MatProgressSpinnerModule,
  HttpClientModule,
  YouTubePlayerModule,
  MatTooltipModule,
  MatExpansionModule,
  MatButtonToggleModule,
  ClipboardModule,
  MatChipsModule
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ],
})
export class SharedModule {}