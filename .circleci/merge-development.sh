set -e

GITHUB_REPO_URL="https://${GITHUB_TOKEN}@github.com/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}.git"
TMP_DEV_BRANCH="${CIRCLE_BRANCH}-build-${CIRCLE_BUILD_NUM}"
TARGET_BRANCH="development"
CLIENT_BASE_URL="http://localhost:3040/"
PORT=3040


#Register repo
git remote -v
git remote rm origin
git remote add origin ${GITHUB_REPO_URL}
git remote -v

git checkout -B ${TARGET_BRANCH}
git reset --hard HEAD
git fetch origin ${TARGET_BRANCH}
git merge origin/${TARGET_BRANCH}

echo "Setup temporary branch: ${TMP_DEV_BRANCH}"
git checkout -B ${TMP_DEV_BRANCH}
git merge ${CIRCLE_BRANCH}

# Initialise project
yarn
yarn build

# Initialise DB
# yarn db:migrate
# yarn db:seed

#test new changes
yarn test:ci




# save new changes to target branch
git commit -am "Merge new build changes (Build ${CIRCLE_BUILD_NUM})"
git checkout ${TARGET_BRANCH}
git merge ${TMP_DEV_BRANCH}
git push origin ${TARGET_BRANCH}


# delete tmp branch
git branch -d ${TMP_DEV_BRANCH}
