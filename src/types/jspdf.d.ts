// Type definitions for jsPDF
declare module "jspdf" {
  export class jsPDF {
    constructor(options?: {
      orientation?: "portrait" | "landscape";
      unit?: "pt" | "mm" | "cm" | "in";
      format?: string | [number, number];
    });

    addImage(
      imageData: string | HTMLImageElement | HTMLCanvasElement,
      format: string,
      x: number,
      y: number,
      width: number,
      height: number,
      alias?: string,
      compression?: string,
      rotation?: number
    ): jsPDF;

    save(filename?: string): jsPDF;
  }
}
