"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetLoader = void 0;
const pixijs_1 = require("pixijs");
class AssetLoader {
    static loadBackground(path, renderer, color) {
        return __awaiter(this, void 0, void 0, function* () {
            if (color) {
                renderer.renderer.backgroundColor = color;
            }
            else {
                const backgroundContainer = new pixijs_1.Container();
                backgroundContainer.x = 0;
                backgroundContainer.y = 0;
                backgroundContainer.width = renderer.screen.width;
                backgroundContainer.height = renderer.screen.height;
                renderer.stage.addChild(backgroundContainer);
                const texture = yield pixijs_1.Assets.load(path);
                const bg = new pixijs_1.Sprite(texture);
                backgroundContainer.addChild(bg);
            }
        });
    }
    static getTextures(paths) {
        return __awaiter(this, void 0, void 0, function* () {
            const textures = [];
            for (let path of paths) {
                const texture = yield pixijs_1.Assets.load(path);
                textures.push(texture);
            }
            return textures;
        });
    }
    static loadFont(path) {
        return __awaiter(this, void 0, void 0, function* () {
            pixijs_1.Assets.addBundle('fonts', { src: path });
            const bundle = yield pixijs_1.Assets.loadBundle('fonts');
            document.fonts.add(bundle.src);
        });
    }
}
exports.AssetLoader = AssetLoader;
