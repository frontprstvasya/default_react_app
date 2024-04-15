export interface buildPaths{
    entry: string,
    html: string,
    output: string,
    src: string,
    public: string,
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';

export interface buildOptions{
    port: number,
    paths: buildPaths,
    mode: BuildMode,
    analyzer?: boolean,
    platform: BuildPlatform,
}