# React hot or cold solution

[GitHub](https://github.com/Thinkful-Ed/react-hot-cold)




TRAVIS ERROR LOG BELOW:

The command "npm test" exited with 0.
cache.2
store build cache
0.01s
7.76schanges detected, packing new archive
.
uploading archive
before_deploy.1
5.45s$ npm install netlify-cli -g
npm WARN deprecated github@0.2.4: 'github' has been renamed to '@octokit/rest' (https://git.io/vNB11)
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated natives@1.1.0: This module relies on Node.js's internals and will break at some point. Do not use it, and update to graceful-fs@4.x.
/home/travis/.nvm/versions/node/v10.0.0/bin/netlify -> /home/travis/.nvm/versions/node/v10.0.0/lib/node_modules/netlify-cli/bin/cli.js
+ netlify-cli@1.2.2
added 147 packages in 4.93s
before_deploy.2
8.41s$ npm run build
> trello@0.1.0 build /home/travis/build/tgray6/trelloTesting
> react-scripts build
Creating an optimized production build...
Compiled successfully.
File sizes after gzip:
  38.31 KB  build/static/js/main.8ce6764f.js
  432 B     build/static/css/main.9d6a58ac.css
The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:
  "homepage" : "http://myname.github.io/myapp",
The build folder is ready to be deployed.
You may serve it with a static server:
  npm install -g serve
  serve -s build
Find out more about deployment here:
  http://bit.ly/2vY88Kr
dpl_0
2.38s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.9.6
1 gem installed
dpl.1
Installing deploy dependencies
Successfully installed dpl-script-1.9.6
1 gem installed
!!! Script support is experimental !!!
dpl.2
Preparing deploy
dpl.3
Deploying application
node[6087]: ../src/node_contextify.cc:631:static void node::contextify::ContextifyScript::New(const v8::FunctionCallbackInfo<v8::Value>&): Assertion `args[1]->IsString()' failed.
 1: node::Abort() [node]
 2: 0x87b6c5 [node]
 3: node::contextify::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&) [node]
 4: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [node]
 5: 0xad5b9f [node]
 6: v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*) [node]
 7: 0x1a7e8410427d
Script failed with status
