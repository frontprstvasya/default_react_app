import webpack, {Configuration, DefinePlugin} from "webpack";
import  HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from "path";

export function buildPlugins({mode, paths, analyzer, platform}: buildOptions): Configuration['plugins']{

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __MODE__: JSON.stringify(mode),
        }),

        

    ];

    if(isDev){
        plugins.push(new webpack.ProgressPlugin()),
        /**Выносит проверку типов в отдельный процесс, не нагружая сборку */
        plugins.push(new ForkTsCheckerWebpackPlugin()),
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if(isProd){
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
          }));
        
    }

    if(analyzer){
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}