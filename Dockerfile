FROM alpine as alpine
RUN addgroup -S lapkin && adduser -S lapkin -G lapkin

FROM scratch
LABEL maintainer="alexeybezrukov2@gmail.com"
WORKDIR /home/lapkin
COPY --from=alpine /etc/passwd /etc/passwd
COPY backend/lapkin .
COPY backend/static ./static
USER lapkin
EXPOSE 8080
ENTRYPOINT [ "./lapkin" ]
