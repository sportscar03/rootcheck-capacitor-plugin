export interface RootCheckPluginPlugin {
  isJailbrokenOrRooted(): Promise<JailbreakRootResult>;
  isSimulator(): Promise<JailbreakRootResult>;
  isDebuggedMode(): Promise<JailbreakRootResult>;
  exitApp(): void;
}

export interface JailbreakRootResult {
  result: boolean;
}
