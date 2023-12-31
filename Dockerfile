# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:lts as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf

#copy files

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/healing2-peace /usr/share/nginx/html
# CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

# Expose port 80
EXPOSE 80 443