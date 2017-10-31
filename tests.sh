#!/bin/bash

SUCCESS=true

cd ./client && for dir in apps/*
do
  cd "$dir"
  yarn test || SUCCESS=false
  cd ../..
done

$SUCCESS
