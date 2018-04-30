# React hot or cold solution

[GitHub](https://github.com/Thinkful-Ed/react-hot-cold)




TRAVIS ERROR LOG BELOW:

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
failed to deploy
