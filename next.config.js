/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.shields.io", "i.pravatar.cc", "images.unsplash.com"],
  },
  transpilePackages: [
    "three", 
    "@react-three/fiber", 
    "@react-three/drei", 
    "its-fine", 
    "react-reconciler"
  ],
};

export default nextConfig;
