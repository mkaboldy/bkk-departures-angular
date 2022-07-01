import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/classes/app-settings';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  appSettings: AppSettings = new AppSettings();

  constructor(private appSettingsService: AppSettingsServiceService) {}

  ngOnInit(): void {
    this.appSettingsService.getSettings().subscribe({
      next: (settings) => (this.appSettings = settings),
      error: () => null,
      complete: () => {},
    });
  }

  toggleShowMetros(event: MatSlideToggleChange): void {
    this.appSettings.showMetros = event.checked;
    this.appSettingsService.saveSettings(this.appSettings);
  }

  updateMaxLines(event: Event): void {
    this.appSettings.maxLines = parseInt(
      (event.target as HTMLInputElement).value,
      10
    );
    this.appSettingsService.saveSettings(this.appSettings);
  }
}
