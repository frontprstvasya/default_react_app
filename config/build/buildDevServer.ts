import type { Configuration as DevSeverConfiguration } from 'webpack-dev-server';
import { buildOptions } from './types/types';


export function buildDevServer(options: buildOptions): DevSeverConfiguration{
   return {
        port: options.port ?? 3000,
        open: true,
        // если раздавать статику через nginx То надо делать проксирование на Index.html
        historyApiFallback: true,
        hot: true,
      }
}