# Stage 1: Build the application
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY . .
RUN go mod init my-app && go mod tidy
RUN go build -o main .

# Stage 2: Create a minimal final image
FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]
