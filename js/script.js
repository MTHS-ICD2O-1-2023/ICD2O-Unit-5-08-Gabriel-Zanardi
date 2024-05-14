// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // Input
  const firstNumber = parseInt(document.getElementById("first-number").value)
  const lastNumber = parseInt(document.getElementById("second-number").value)
  let counter = 0
  let remainder = firstNumber // Initialize remainder with firstNumber
  let operationLines = "" // Variable to store the operation lines

  // Process
  while (remainder >= lastNumber) {
    // Perform subtraction
    remainder -= lastNumber
    counter += 1

    // Concatenate the operation line
    operationLines += `${firstNumber} - ${lastNumber} = ${remainder}<br>`

    if (remainder < lastNumber) {
      break
    }
  }

  // Output
  const quotient = counter;
  const operationLines = operationLines
  document.getElementById("final-answer").innerHTML = "Therefore" + firstNumber + "/" + lastNumber + "=" + quotient + "R" + remainder
}
