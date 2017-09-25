// ==UserScript==
// @name          autoLogin
// @namespace     http://your.homepage/
// @version       0.1
// @description   Auto login
// @author        @ozgrozer
// @match         http://your.homepage/
// @grant         none
// ==/UserScript==

var username = 'root'
var password = 'root'

var usernameInputId = 'username'
var passwordInputId = 'password'
var submitButtonId = 'submit'

var usernameSelector = document.getElementById(usernameInputId)
var passwordSelector = document.getElementById(passwordInputId)
var submitButtonSelector = document.getElementById(submitButtonId)

usernameSelector.value = username
passwordSelector.value = password
submitButtonSelector.click()
