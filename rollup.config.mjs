import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/logger.ts',
  output: [
    {
      file: 'dist/logger.umd.js',
      format: 'umd',
      name: 'Logger',
      sourcemap: true,
    },
    {
      file: 'dist/logger.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/logger.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
