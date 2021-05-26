import { TextEditor, CompositeDisposable, Grammar } from "atom";
import MarkerStore from "./markers";
import Kernel from "../kernel";
export declare type KernelMap = Map<string, Kernel>;
export declare type KernelMapping = Map<string, Kernel | KernelMap>;
export declare class Store {
    subscriptions: CompositeDisposable;
    markersMapping: Map<number, MarkerStore>;
    runningKernels: Array<Kernel>;
    kernelMapping: KernelMapping;
    startingKernels: Map<string, boolean>;
    editor: TextEditor;
    grammar: Grammar | null | undefined;
    configMapping: Map<string, unknown | null | undefined>;
    globalMode: boolean;
    get kernel(): Kernel | null | undefined;
    get filePath(): string | null | undefined;
    get filePaths(): Array<string>;
    get notebook(): import("@nteract/commutable/lib/v4").NotebookV4;
    get markers(): MarkerStore | null | undefined;
    newMarkerStore(editorId: number): MarkerStore;
    startKernel(kernelDisplayName: string): void;
    addFileDisposer(editor: TextEditor, filePath: string): void;
    newKernel(kernel: Kernel, filePath: string, editor: TextEditor, grammar: Grammar): void;
    deleteKernel(kernel: Kernel): void;
    getFilesForKernel(kernel: Kernel): Array<string>;
    dispose(): void;
    updateEditor(editor: TextEditor | null | undefined): void;
    getEmbeddedGrammar(editor: TextEditor): Grammar | null | undefined;
    setGrammar(editor: TextEditor | null | undefined): void;
    setConfigValue(keyPath: string, newValue: unknown | null | undefined): void;
    forceEditorUpdate(): void;
}
declare const store: Store;
export default store;
export interface StoreLike {
    kernel?: Kernel | null | undefined;
    markers?: MarkerStore | null | undefined;
}
