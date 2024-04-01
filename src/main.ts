// Імпортуємо функцію bootstrapApplication з Angular для ініціалізації додатку
import { bootstrapApplication } from '@angular/platform-browser';

// Імпортуємо конфігурацію додатку з файлу app.config
import { appConfig } from './app/app.config';

// Імпортуємо головний компонент додатку
import { AppComponent } from './app/app.component';

// Запускаємо додаток, передаючи йому головний компонент та конфігурацію,
// а також обробляємо помилки, якщо вони виникнуть під час запуску
bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
