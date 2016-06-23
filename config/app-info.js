/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var urlUtils = require('../utilities/url'),
    env = require('cfenv').getAppEnv(),
    LOCAL_ENV_PORT = 3000;

var URL = env.isLocal ? env.url.replace(/:[0-9]+/, ':' + LOCAL_ENV_PORT) : env.url;

var DOMAIN = urlUtils.domain(URL);

module.exports = {
  app_name    : env.name,
  environment : process.env.NODE_ENV,
  port        : env.isLocal ? LOCAL_ENV_PORT : env.port,
  url         : URL,
  domain      : DOMAIN,
  secure      : process.env.VCAP_APPLICATION ? true : false
};
