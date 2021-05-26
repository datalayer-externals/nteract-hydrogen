import { TextEditor, CompositeDisposable, Point, Grammar } from "atom";
import React from "react";
import type { Message } from "./hydrogen";
import type { KernelspecMetadata } from "@nteract/types";
export declare const INSPECTOR_URI = "atom://hydrogen/inspector";
export declare const WATCHES_URI = "atom://hydrogen/watch-sidebar";
export declare const OUTPUT_AREA_URI = "atom://hydrogen/output-area";
export declare const KERNEL_MONITOR_URI = "atom://hydrogen/kernel-monitor";
export declare const NO_EXECTIME_STRING = "Not available";
export declare function reactFactory(reactElement: React.ReactElement<React.ComponentProps<any>, any>, domElement: HTMLElement, additionalTeardown?: ((...args: Array<any>) => any) | null | undefined, disposer?: CompositeDisposable): void;
export declare function focus(item: unknown | null | undefined): void;
export declare function openOrShowDock(URI: string): Promise<void | null | undefined>;
export declare function grammarToLanguage(grammar: Grammar | null | undefined): string;
export declare function msgSpecToNotebookFormat(message: Message): Record<string, any> & {
    output_type: any;
};
export declare function msgSpecV4toV5(message: Message): Message;
export declare function isMultilanguageGrammar(grammar: Grammar): boolean;
export declare const isUnsavedFilePath: (filePath: string) => boolean;
export declare function kernelSpecProvidesGrammar(kernelSpec: KernelspecMetadata, grammar: Grammar | null | undefined): boolean;
export declare function getEmbeddedScope(editor: TextEditor, position: Point): string | null | undefined;
export declare function getEditorDirectory(editor: TextEditor | null | undefined): string;
export declare function log(...message: Array<any>): void;
export declare function hotReloadPackage(): void;
export declare function rowRangeForCodeFoldAtBufferRow(editor: TextEditor, row: number): any;
export declare const EmptyMessage: () => JSX.Element;
export declare function executionTime(message: Message): string;
export declare function js_idx_to_char_idx(js_idx: number, text: string | null): number;
export declare function char_idx_to_js_idx(char_idx: number, text: string | null): number;
export declare function setPreviouslyFocusedElement(obj: {
    previouslyFocusedElement: HTMLElement | null | undefined;
}): void;
export declare type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare type DeepWriteable<T> = {
    -readonly [P in keyof T]: DeepWriteable<T[P]>;
};
