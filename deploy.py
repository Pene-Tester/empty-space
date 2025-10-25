#!/usr/bin/env python3
"""
Empty Space Café - Deployment Script
Run this to deploy your Flask app with different configurations
"""

import os
import sys
import subprocess
import socket

def get_local_ip():
    """Get the local IP address"""
    try:
        # Connect to a remote server to get local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

def deploy_local():
    """Deploy for local network access"""
    print("Deploying for Local Network Access...")
    print(f"Your app will be accessible at:")
    print(f"   • Your Computer: http://127.0.0.1:5000")
    print(f"   • Other Devices: http://{get_local_ip()}:5000")
    print("\nStarting Flask app...")
    
    # Set environment variables
    os.environ['FLASK_APP'] = 'app.py'
    os.environ['FLASK_ENV'] = 'development'
    
    # Run the app
    subprocess.run([sys.executable, 'app.py'])

def deploy_production():
    """Deploy for production (external access)"""
    print("Deploying for Production...")
    print("Available options:")
    print("1. Railway.app (Recommended)")
    print("2. Render.com")
    print("3. PythonAnywhere")
    print("4. Heroku (requires GitHub)")
    print("\nChoose your preferred platform and follow their deployment guide.")

def main():
    print("Empty Space Cafe - Deployment Options")
    print("=" * 50)
    print("1. Local Network (Access from phone/tablet)")
    print("2. Production Deployment (Internet access)")
    print("3. Exit")
    
    choice = input("\nEnter your choice (1-3): ").strip()
    
    if choice == "1":
        deploy_local()
    elif choice == "2":
        deploy_production()
    elif choice == "3":
        print("Goodbye!")
        sys.exit(0)
    else:
        print("Invalid choice. Please try again.")
        main()

if __name__ == "__main__":
    main()
