# USIU First-Year Companion - Docker Configuration
# Uses Nginx Alpine for lightweight static hosting

FROM nginx:alpine

# Copy static files to Nginx serving directory
COPY public /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Nginx runs automatically when container starts
# No CMD needed - inherited from base image
