#!/bin/bash
exist_volta=$(which volta)
exist_pnpm=$(which pnpm)
volta_instal_cmd="$ curl https://get.volta.sh | bash"
pnpm_instal_cmd="$ volta install pnpm"

if [[ -z "$exist_volta" ]]; then
  echo -e "⚠️  You haven't installed volta.\nI reccomend it to manage node/npm.\nYou can install it like below.\n ${volta_instal_cmd}"
  exit 1
else
  echo "✅ volta is installed!"
fi


if [[ -z "$exist_pnpm" ]]; then
  echo -e "You need to install pnpm. You can install pnpm via volta like below.\n ${pnpm_instal_cmd}"
  exit 1
else
  echo "✅ pnpm is installed!"
fi
