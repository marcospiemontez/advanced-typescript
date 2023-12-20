export function domInjector(selector: string) {
  return function(target: any, propertyKey: string) {
    let elemento: HTMLElement | null = null;
    
    const getter = function() {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(selector);
      }

      return elemento;
    }

    Object.defineProperty(target, propertyKey, { get: getter })
  }
}