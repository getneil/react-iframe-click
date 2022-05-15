"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Iframe(props) {
    const iframeRef = (0, react_1.useRef)(null);
    const iframeCallbackRef = (0, react_1.useCallback)((node) => {
        iframeRef.current = node;
    }, []);
    (0, react_1.useEffect)(() => {
        const onBlur = () => {
            if (document.activeElement &&
                document.activeElement.nodeName.toLowerCase() === 'iframe' &&
                iframeRef.current &&
                iframeRef.current === document.activeElement) {
                // infer a click event
                props.onInferredClick(iframeRef.current);
            }
        };
        window.addEventListener('blur', onBlur);
        return () => {
            window.removeEventListener('blur', onBlur);
        };
    }, []);
    return react_1.default.createElement("iframe", { ...props, ref: iframeCallbackRef });
}
exports.default = Iframe;
//# sourceMappingURL=index.js.map