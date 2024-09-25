/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/utils/cloudinaryLoader.ts',
  },
}

export default nextConfig

