// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {

  //input
  const firstNumber = document.getElementById("first-number").innerHTML
  const lastNumber = document.getElementById("second-number").innerHTML
  let answerNumber = originalNumber - subtractedNumber
  let counter = 0
  let remainder = 0

  //process
  while (firstNumber - lastNumber) {
    if (answerNumber < firstNumber) {
        counter += 1
        remainder = firstNumber - lastNumber
    }
  }
}