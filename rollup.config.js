import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

const pkg = require('./package.json');

const extensions = ['.ts', '.tsx'];
const resolve = (...args) => path.resolve(...args); // 适应不同环境，封装path.resolve，少写一点代码

const config = [
  {
    // 编译typescript, 生成 js 文件
    input: resolve('./src/index.ts'),
    output: {
      file: resolve('./', pkg.main), // 读取 package.json 中的main作为入口。
      format: 'umd',
      name: 'ultralightCopy' // umd 包要求提供，不存在模块系统的情况下，使用这个名字暴露到全局变量中， global.ultralightCopy
    },
    plugins: [
      nodeResolve({
        customResolveOptions: {
          moduleDirectories: ['node_modules']
        }
      }),
      commonjs(),
      typescript(),
      babel({
        exclude: 'node_modules/**',
        extensions
      })
    ],
    external: ['ant-design-vue', 'vue']
  },
  {
    // 生成 .d.ts 类型声明文件
    input: resolve('./src/index.ts'),
    output: {
      file: resolve('./', pkg.types),
      format: 'es'
    },
    plugins: [dts({
      exclude: ['node_modules/**']
    })]
  }
];

export default config;
