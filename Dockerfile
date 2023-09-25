FROM ubuntu:20.04

RUN apt update -y && apt upgrade
RUN apt install build-essential perl -y
#RUN apk update && apk upgrade && apk add --no-cache perl bash perl-utils curl
RUN echo | cpan
RUN cpan install CGI
RUN cpan install HTML::Template
COPY ./JSDoc /JSDoc
RUN mv /JSDoc/jsdoc_parse/JSDoc.pm /JSDoc/jsdoc/JSDoc.pm
