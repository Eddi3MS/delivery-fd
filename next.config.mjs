/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/utils/cloudinaryLoader.ts',
  },
}

export default nextConfig

