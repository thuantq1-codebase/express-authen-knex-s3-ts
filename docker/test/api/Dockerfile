FROM amazonlinux:2 as localbuilder

RUN yum update -y \
  && curl -sL https://rpm.nodesource.com/setup_12.x | bash \
  && yum install -y nodejs

COPY package.json /tmp/package.json
WORKDIR /tmp
RUN npm install \
  && mkdir -p /usr/src/app/node_modules \
  && cp -a /tmp/node_modules/. /usr/src/app/node_modules

WORKDIR /usr/src/app
CMD [ "bash", "docker/test/run.sh" ]
