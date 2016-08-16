/**
 * Canvas helpers
 */
export interface CanvasSettings {
    w: number;
    h: number;
    scale: number;
    pixelate?: boolean;
}
export class Canvas {
    public ctx = null;

    constructor(private canvas: HTMLCanvasElement, private settings: CanvasSettings) {
        // set width & height
        canvas.width = settings.w;
        canvas.height = settings.h;

        // set up context
        this.ctx = canvas.getContext('2d');
        if (settings && settings.scale) {
            this.ctx.scale(settings.scale, settings.scale);
        }
        if (settings && settings.pixelate) {
            this.ctx.imageSmoothingEnabled = false;
        }
    }
}
