FROM mhart/alpine-node:12 as base

RUN mkdir -p /srv/app/perfanalytics-server
WORKDIR /srv/app/perfanalytics-server

COPY package.json /srv/app/perfanalytics-server

FROM base as test
RUN npm install
#RUN npm test
COPY . /srv/app/perfanalytics-server
CMD ["npm", "test"]


FROM base as prod
RUN npm install
#RUN npm test
COPY . /srv/app/perfanalytics-server
CMD ["npm", "start"]