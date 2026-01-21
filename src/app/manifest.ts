import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MillionVPN - Secure Your Digital Life',
    short_name: 'MillionVPN',
    description: 'Fast, secure, and affordable VPN service. Protect your privacy with military-grade encryption, 10 Gbps speeds, and servers in 100+ countries.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#6D4AFF',
    orientation: 'portrait-primary',
    categories: ['security', 'utilities', 'productivity'],
    icons: [],
  }
}
