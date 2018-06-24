#!/bin/bash

SUCCESS=true

cd ./client && for dir in apps/*
do
  cd "$dir"
  echo $dir
  node inspect jest --runInBand --config=config/jest_config.json --passWithNoTests || SUCCESS=false
  cd ../..
done

$SUCCESS
