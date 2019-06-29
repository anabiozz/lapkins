FROM node:8.0-alpine as node
WORKDIR /usr/src/lapkin
COPY . .
WORKDIR /usr/src/lapkin/frontend
RUN npm set progress=false
RUN npm install --silent
RUN npm run build

FROM golang:1.11-alpine as go
WORKDIR /go/src/github.com/anabiozz/lapkin-project/lapkin/backend
COPY --from=node /usr/src/lapkin/backend .
RUN addgroup -S lapkin && adduser -S lapkin -G lapkin
RUN apk add --update --no-cache git
RUN go get -u github.com/golang/dep/cmd/dep
RUN dep ensure -vendor-only
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o lapkin .

FROM scratch
LABEL maintainer="alexeybezrukov2@gmail.com"
WORKDIR /home/lapkin
COPY --from=go /etc/passwd /etc/passwd
COPY --from=go /go/src/github.com/anabiozz/lapkin-project/lapkin/backend/lapkin .
COPY --from=go /go/src/github.com/anabiozz/lapkin-project/lapkin/backend/static ./static
USER lapkin
EXPOSE 8080
ENTRYPOINT [ "./lapkin" ]
