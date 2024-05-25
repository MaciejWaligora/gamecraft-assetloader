import { Application, Texture } from "pixijs";
export declare class AssetLoader {
    static loadBackground(path: string, renderer: Application, color?: number): Promise<void>;
    static getTextures(paths: string[]): Promise<Texture<import("pixijs").Resource>[]>;
    static loadFont(path: string): Promise<void>;
}
