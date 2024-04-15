import { ModuleOptions } from "webpack";
import { buildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: buildOptions): ModuleOptions['rules']{

    const isDev = options.mode === 'development';

    const cssLoaderWithModules = {
      // test: /\.css$/i,
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
        },
        
      },
    }

    const assetLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }

    const svgLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        { 
          loader: '@svgr/webpack', 
          options: { 
            icon: true,
            svgoConfig:{
              plugins:[
                {
                  name: 'convertColors',
                  params:{
                    currentColor: true,
                  }
                }
              ]
            }
          } 
        }
      ],
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          cssLoaderWithModules,
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }

    // const tsLoader = {
    //   //Если не использовать Typescript, нужно использовать babel-loader
    //     test: /\.tsx?$/,
    //     exclude: /node_modules/,
    //     use:[
    //       {
    //         loader: 'ts-loader',
    //         options:{
    //           transpileOnly: isDev,
    //           getCustomTransformers: () => ({
    //             before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
    //           }),
    //         }
    //       }
    //     ]
    // }

    const babelLoader =  buildBabelLoader(options);

    return[
       scssLoader, 
      //  tsLoader,
      babelLoader,
       assetLoader,
       svgLoader
      ]
}

