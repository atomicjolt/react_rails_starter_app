#!/bin/bash

SUCCESS=true

cd ./client && for dir in apps/*
do
  cd "$dir"
  node inspect jest --runInBand --config=config/jest_config.json || SUCCESS=false
  cd ../..
done

$SUCCESS
