
#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=832afe30f2fc7cd878a9738ed5580238e389a595\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/etidbury/tpl-next-fastify/tree/edd