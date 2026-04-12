# Use an Alpine-based Node.js image
FROM node:24-alpine

# create mkdir app 
WORKDIR /app 

# copy package json and lock to app 
COPY package*.json ./

# install dependencies
RUN npm install
# copy the rest of the application code to the container
COPY . .
# Expose the port the app runs on
EXPOSE 3000
# Start the application
CMD ["npm", "start"]
