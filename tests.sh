#!/bin/bash

SUCCESS=true

cd ./client && for dir in apps/*
do
  cd "$dir"
  echo $dir
  yarn test --passWithNoTests || SUCCESS=false
  cd ../..
done

$SUCCESS
