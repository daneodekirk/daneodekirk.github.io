// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  interface Window { goatcounter: Record<string, () => void> } 
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
