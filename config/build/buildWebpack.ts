import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildOptions } from "./types/types";

export function buildWebpack(options: buildOptions): webpack.Configuration{

  const {mode, paths} = options;

  const isDev = mode === 'development';

    return{
        mode: mode ?? 'development',
        entry:  paths.entry,
        module: {
            rules: buildLoaders(options),
          },
          resolve: buildResolvers(options),
        output:{
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDev && buildDevServer(options),
    }

    
}