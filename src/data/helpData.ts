import { Book, Settings, Shield, MessageCircle } from 'lucide-react';

export const categories = [
    {
        id: 'getting-started',
        name: 'Getting Started',
        icon: Book,
        desc: 'Installation guides and basic setup',
        slug: 'getting-started'
    },
    {
        id: 'account-billing',
        name: 'Account & Billing',
        icon: Settings,
        desc: 'Manage your subscription and payments',
        slug: 'account-billing'
    },
    {
        id: 'troubleshooting',
        name: 'Troubleshooting',
        icon: Shield,
        desc: 'Fix connection issues and error messages',
        slug: 'troubleshooting'
    },
    {
        id: 'general',
        name: 'General Questions',
        icon: MessageCircle,
        desc: 'Common questions about VPNs',
        slug: 'general-questions'
    },
];

export const articles = [
    {
        id: '1',
        title: 'How to install MillionVPN on Windows',
        slug: 'how-to-install-millionvpn-on-windows',
        category: 'getting-started',
        lastUpdated: '2 days ago',
        readTime: '5 min read',
        content: `
# Installing MillionVPN on Windows

Follow these simple steps to get MillionVPN up and running on your Windows device.

## Prerequisites
- Windows 10 or Windows 11 (64-bit recommended)
- An active MillionVPN subscription
- Administrator privileges on your PC

## Step-by-Step Guide

### 1. Download the Installer
Visit our [Downloads page](/download) and click on the specific **Windows** download button. This will download the latest version of the MillionVPN installer (e.g., \`MillionVPN-Setup.exe\`).

### 2. Run the Installer
Locate the downloaded file in your browser's download history or your **Downloads** folder. Double-click \`MillionVPN-Setup.exe\` to launch the installation wizard.
> **Note**: If prompted by User Account Control (UAC), click **Yes** to allow the installer to make changes to your device.

### 3. Follow On-Screen Instructions
The setup wizard will guide you through the process:
1.  Accept the License Agreement.
2.  Choose the installation location (default is usually fine).
3.  Click **Install**.

### 4. Launch & Log In
Once the installation is complete, MillionVPN will launch automatically.
- Enter your email and password.
- Click **Log In**.

### 5. Connect
Click the large **Quick Connect** button to instantly connect to the fastest available server. You are now protected!
        `
    },
    {
        id: '2',
        title: 'Setting up WireGuard protocol',
        slug: 'setting-up-wireguard-protocol',
        category: 'getting-started',
        lastUpdated: '1 week ago',
        readTime: '3 min read',
        content: `
# Setting up WireGuard® Protocol

WireGuard is a modern, high-performance VPN protocol that offers faster speeds and better security than older protocols like OpenVPN. MillionVPN uses WireGuard by default, but here is how to verify or manually select it.

## Why use WireGuard?
- **Speed**: Significantly faster than traditional VPN protocols.
- **Security**: Uses state-of-the-art cryptography.
- **Efficiency**: Better battery life for mobile devices.

## How to Configure

1.  Open the MillionVPN app.
2.  Go to **Settings** (gear icon).
3.  Select the **Connection** tab.
4.  Under **VPN Protocol**, select **WireGuard**.
5.  Reconnect to the VPN for changes to take effect.

Your connection is now optimized for maximum speed and security!
        `
    },
    {
        id: '3',
        title: 'Billing cycle and refund policy',
        slug: 'billing-cycle-and-refund-policy',
        category: 'account-billing',
        lastUpdated: '3 days ago',
        readTime: '4 min read',
        content: `
# Billing Cycle & Refund Policy

We believe in transparency. Here is everything you need to know about how we handle billing and refunds.

## Billing Cycle
MillionVPN offers monthly, yearly, and 2-year subscription plans.
- **Automatic Renewal**: By default, all subscriptions are set to auto-renew to ensure your protection is never interrupted.
- **Renewal Date**: You can check your next billing date in your [Account Dashboard](/account).

## 30-Day Money-Back Guarantee
We want you to be 100% satisfied. That's why we offer a risk-free **30-day money-back guarantee** on all plans.

### How to request a refund
If you are not satisfied within the first 30 days:
1.  Contact our 24/7 Support Team via live chat or email (support@millionvpn.com).
2.  Provide your order ID or account email.
3.  We will process your refund immediately. No questions asked.
        `
    },
    {
        id: '4',
        title: 'How to watch Netflix with MillionVPN',
        slug: 'how-to-watch-netflix-with-millionvpn',
        category: 'general-questions',
        lastUpdated: '2 weeks ago',
        readTime: '6 min read',
        content: `
# How to watch Netflix with MillionVPN

Access your favorite content securely from anywhere in the world. MillionVPN is optimized for streaming.

## Streaming-Optimized Servers
We have dedicated servers optimized for streaming platforms like Netflix, Hulu, BBC iPlayer, and Disney+.

### Instructions
1.  **Open MillionVPN**.
2.  **Search for a location**: If you want to watch US Netflix, search for "United States".
3.  **Choose a Streaming Server**: Look for servers marked with a "Play" icon or specifically named "US Streaming".
4.  **Connect**.
5.  **Open Netflix**: Refresh your browser or restart the Netflix app.

## Troubleshooting
If you still see a proxy error:
- Clear your browser cookies and cache.
- Try a different browser (e.g., Firefox instead of Chrome).
- Contact support for the latest optimization status.
        `
    },
    {
        id: '5',
        title: 'Troubleshooting slow connection speeds',
        slug: 'troubleshooting-slow-connection-speeds',
        category: 'troubleshooting',
        lastUpdated: '5 days ago',
        readTime: '5 min read',
        content: `
# Troubleshooting Slow Connection Speeds

While VPNs naturally decrease speed slightly due to encryption, significant slowdowns can usually be fixed.

## Common Fixes

### 1. Switch Servers
The most common cause is a congested server.
- Disconnect and choose a different server location.
- Generally, closer servers provide better speeds.

### 2. Change Protocols
Try switching to **WireGuard** if you haven't already. It is generally the fastest protocol available.
- Go to Settings > Connection > Protocol > WireGuard.

### 3. Check Your Base Speed
Disconnect the VPN and run a speed test. If your internet is slow without the VPN, the VPN cannot make it faster.

### 4. Restart Your Router
Sometimes a simple router restart clears up local network congestion.
        `
    },
    {
        id: '6',
        title: 'Configuring Kill Switch settings',
        slug: 'configuring-kill-switch-settings',
        category: 'getting-started',
        lastUpdated: '1 month ago',
        readTime: '2 min read',
        content: `
# Configuring Kill Switch Settings

A **Kill Switch** is a vital security feature that prevents your IP address from being exposed if your VPN connection drops unexpectedly.

## How it works
If the VPN connection fails, the Kill Switch instantly blocks all internet traffic until the secure connection is re-established.

## Enabling the Kill Switch
1.  Open **Settings**.
2.  Navigate to **Security** or **General**.
3.  Toggle **Internet Kill Switch** to **ON**.

## Modes
- **System-wide**: Blocks internet for the entire computer.
- **App-specific**: (Available on Windows) Only blocks internet for specific apps you select.

We recommend keeping the System-wide Kill Switch enabled at all times for maximum privacy.
        `
    }
];
