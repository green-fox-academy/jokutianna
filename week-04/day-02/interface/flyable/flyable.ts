'use strict';
export interface Flyable {
  public land(): void;
  public fly(): void;
  public takeOff(): void;
}