import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/UI/header/header";
import { Footer } from "./shared/UI/footer/footer";

const counterBaseYear = 2018;
const counterBaseValue = 0;

function getCurrentCounter(): number {
  const elapsedYears = new Date().getFullYear() - counterBaseYear;
  return counterBaseValue + elapsedYears
}

export const counter = signal(getCurrentCounter());

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  readonly counter = counter;

  computeCounter(): void {
    counter.set(getCurrentCounter());
  }
}
