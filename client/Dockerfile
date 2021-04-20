FROM mhart/alpine-node:12 as base

# Create app directory and use it as the working directory
RUN mkdir -p /srv/app/perfanalytics-client
WORKDIR /srv/app/perfanalytics-client

COPY package.json /srv/app/perfanalytics-client
COPY package-lock.json /srv/app/perfanalytics-client

FROM base as test
RUN npm ci
COPY . /srv/app/perfanalytics-client
CMD ["npm", "test"]


FROM base as prod
RUN npm ci --prod
COPY . /srv/app/perfanalytics-client
CMD ["npm", "start"]